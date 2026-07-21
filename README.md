# ThinkCourt

ThinkCourt is a guided reasoning practice space that helps learners examine claims, evidence, assumptions, and alternatives before reaching a conclusion.

## MVP status

The complete guest MVP is implemented:

- Premium responsive landing page and guided-case entry path
- Claim framing with deterministic clarity cues
- Four-stage non-chat Reasoning Court
- Fixture-backed coaching for keyless demos
- GPT-5.6 Terra Responses API integration when configured
- Structured output validation and API rate guards
- Guest session persistence in browser local storage
- Final Reasoning Snapshot with claim evolution and qualitative feedback
- Accessible loading, empty, error, and reduced-motion states

## Local development

1. Copy `.env.example` to `.env.local`.
2. Add `GEMINI_API_KEY` to enable Gemini. Without it, the built-in fixture flow remains available.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Run checks with `npm run lint`, `npm run typecheck`, and `npm run build`.

## Deployment

Deploy the repository to Vercel. Add `GEMINI_API_KEY` and `GEMINI_MODEL=gemini-1.5-pro` to Vercel environment variables. The health endpoint is available at `/api/health`.
