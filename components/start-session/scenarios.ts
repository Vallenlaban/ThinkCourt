export type GuidedScenario = {
  category: string;
  claim: string;
  context: string;
  description: string;
  id: "ai-coursework" | "remote-work" | "social-media";
  title: string;
};

export const guidedScenarios: GuidedScenario[] = [
  {
    category: "Education",
    claim: "Should universities allow AI in coursework?",
    context:
      "I want to examine how universities can balance the benefits of AI assistance with meaningful learning.",
    description:
      "Examine the trade-off between productive assistance and independent understanding.",
    id: "ai-coursework",
    title: "Should universities allow AI in coursework?",
  },
  {
    category: "Work",
    claim:
      "Remote work improves long-term productivity when teams have clear expectations and deliberate ways to collaborate.",
    context: "I want to test whether flexibility and productivity reliably move together.",
    description: "Explore whether flexibility, collaboration, and productivity really align.",
    id: "remote-work",
    title: "Is remote work better for long-term productivity?",
  },
  {
    category: "Technology",
    claim:
      "Social media platforms should limit algorithmic recommendations for younger users to reduce avoidable harm.",
    context:
      "I want to examine the balance between user choice, platform responsibility, and safety.",
    description: "Weigh user autonomy against platform responsibility and safety.",
    id: "social-media",
    title: "Should social media limit algorithmic recommendations?",
  },
];
