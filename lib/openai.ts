const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";

export const geminiModel = process.env.GEMINI_MODEL?.trim() ?? "gemini-1.5-pro";
const geminiApiKey = process.env.GEMINI_API_KEY?.trim();

function geminiUrl(model: string) {
  return `${GEMINI_BASE_URL}/models/${encodeURIComponent(model)}:generateContent`;
}

function extractTextFromGeminiResponse(response: unknown): string | null {
  if (!response || typeof response !== "object") {
    return null;
  }

  const responseAny = response as Record<string, unknown>;
  const candidates = Array.isArray(responseAny.candidates) ? responseAny.candidates : [];

  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") {
      continue;
    }

    const content = (candidate as Record<string, unknown>).content;

    if (typeof content === "string") {
      return content;
    }

    if (Array.isArray(content)) {
      const parts = content.flatMap((item) => {
        if (!item || typeof item !== "object") {
          return [] as string[];
        }
        const itemAny = item as Record<string, unknown>;
        if (typeof itemAny.text === "string") {
          return [itemAny.text];
        }
        if (Array.isArray(itemAny.parts)) {
          return itemAny.parts.flatMap((part) =>
            part && typeof (part as Record<string, unknown>).text === "string"
              ? [(part as Record<string, unknown>).text]
              : [],
          );
        }
        return [] as string[];
      });

      if (parts.length > 0) {
        return parts.join("");
      }
    }

    if (typeof content === "object" && content !== null) {
      const contentAny = content as Record<string, unknown>;
      if (typeof contentAny.text === "string") {
        return contentAny.text;
      }
      if (Array.isArray(contentAny.parts)) {
        const texts = contentAny.parts.flatMap((part) =>
          part && typeof (part as Record<string, unknown>).text === "string"
            ? [(part as Record<string, unknown>).text]
            : [],
        );
        if (texts.length > 0) {
          return texts.join("");
        }
      }
    }
  }

  return null;
}

export async function callGemini(prompt: string, modelName = geminiModel) {
  if (!geminiApiKey) {
    return null;
  }

  const response = await fetch(geminiUrl(modelName), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": geminiApiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        topP: 0.95,
        maxOutputTokens: 2000,
      },
    }),
  });

  const text = await response.text();
  let json: unknown;

  try {
    json = JSON.parse(text);
  } catch (error) {
    throw new Error(`Gemini responded with invalid JSON: ${text.slice(0, 400)}`);
  }

  if (!response.ok) {
    const message =
      json && typeof json === "object" && "error" in json
        ? JSON.stringify((json as Record<string, unknown>).error)
        : response.statusText;
    throw new Error(`Gemini request failed (${response.status}): ${message}`);
  }

  const output = extractTextFromGeminiResponse(json);

  if (!output) {
    throw new Error(
      `Gemini returned no text response. Full payload: ${JSON.stringify(json).slice(0, 1000)}`,
    );
  }

  return output;
}
