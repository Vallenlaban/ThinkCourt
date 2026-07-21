import type { CoachingTurn, ReasoningSnapshot } from "@/types/reasoning";

const turns: Record<string, CoachingTurn> = {
  foundation: {
    acknowledgement:
      "You have taken a clear position. Let’s look beneath the conclusion before we test it.",
    question: "What would need to be true for your claim to lead to the outcome you expect?",
    questionPurpose: "This helps reveal the assumption your conclusion depends on.",
    stageSummary:
      "The learner began by identifying the condition their claim needs in order to work.",
    thinkingStarters: [
      "What link are you assuming between the action and the outcome?",
      "Where might this claim not apply?",
      "What term in your claim needs a clearer meaning?",
    ],
  },
  evidence: {
    acknowledgement:
      "You identified a useful condition. Now let’s test whether the support for it reaches far enough.",
    question:
      "What evidence would best show that this condition is actually present—not just possible?",
    questionPurpose: "This separates a plausible explanation from evidence that can support it.",
    stageSummary:
      "The learner considered what evidence would connect the claim to its intended outcome.",
    thinkingStarters: [
      "Would a personal example be enough? Why or why not?",
      "What would you want to compare?",
      "What evidence could change your confidence?",
    ],
  },
  challenge: {
    acknowledgement:
      "You have clarified what would support your claim. Every strong idea deserves its strongest reasonable objection.",
    challenge: {
      argument:
        "A policy can improve one immediate outcome while weakening a longer-term value it is meant to protect. If the benefit replaces rather than supports the underlying skill, the original goal may be undermined.",
      assumption: "That improving the immediate outcome also protects the deeper objective.",
      title: "The strongest reasonable challenge",
    },
    question:
      "Which part of this challenge puts the most pressure on your claim, and how would you respond?",
    questionPurpose:
      "A fair counterargument helps you decide whether to defend, qualify, or revise your position.",
    stageSummary:
      "The learner engaged with a meaningful trade-off and considered how it changes their position.",
    thinkingStarters: [
      "Does this challenge identify a real exception?",
      "Would a condition make your claim more defensible?",
      "What evidence would help resolve this trade-off?",
    ],
  },
  reflection: {
    acknowledgement:
      "You have tested the claim from more than one angle. The final step is to name what changed in your own thinking.",
    question:
      "What is one assumption you now see differently, and what would you want to know before acting on this view?",
    questionPurpose: "Reflection turns a good exchange into a reusable thinking habit.",
    stageSummary:
      "The learner reflected on uncertainty and named an evidence step that could improve their judgment.",
    thinkingStarters: [
      "What became less certain?",
      "What part of your original claim still feels strong?",
      "What would you investigate next?",
    ],
  },
};

const teacherDemoTurns: Record<string, CoachingTurn> = {
  foundation: {
    acknowledgement:
      "Thank you for presenting a clear and ambitious claim.\n\nYour position suggests that artificial intelligence could eventually perform the role of teachers more effectively than humans.\n\nBefore evaluating whether this conclusion is convincing, let's examine one important assumption beneath it.\n\nYour argument appears to assume that the primary role of a teacher is to deliver knowledge efficiently. However, teaching often involves much more than explaining concepts. Teachers motivate students, adapt to emotional needs, encourage collaboration, and help develop judgment and character.\n\nIf those responsibilities are equally important, replacing teachers may involve challenges beyond technology itself.\n\nBefore moving forward, let's examine the assumption your conclusion depends on.",
    question:
      "Which responsibilities of a teacher do you believe AI could fully replace, and which might still require a human educator?",
    questionPurpose: "This helps surface the assumption that the claim depends on.",
    stageSummary:
      "The learner examined the assumption beneath the claim before testing its strength.",
    thinkingStarters: [
      "What does teaching accomplish that explanation alone does not?",
      "Which parts of the teacher's role feel most human?",
      "What would need to be true for the substitution to work?",
    ],
  },
  evidence: {
    acknowledgement:
      "Your explanation has made your position more precise, but it still relies mainly on expectation rather than supporting evidence.\n\nThroughout history, many promising technologies have appeared capable of transforming education. Some delivered remarkable improvements, while others produced unexpected limitations.\n\nIf AI truly has the potential to replace teachers, there should be convincing evidence that students can achieve equal or better outcomes without continuous human instruction.\n\nWhen evaluating this possibility, consider more than examination scores. Education also develops communication, creativity, collaboration, critical thinking, and lifelong learning.\n\nStrong arguments become persuasive when they are supported by reliable evidence rather than confident predictions.",
    question:
      "What real-world evidence, research, or successful examples would convince a skeptical educator that AI can replace teachers without reducing the quality of education?",
    questionPurpose:
      "This pushes the learner to support the claim with evidence rather than expectation.",
    stageSummary: "The learner tested whether the claim had evidence strong enough to support it.",
    thinkingStarters: [
      "What evidence would make this claim more convincing?",
      "What would a skeptical educator want to see?",
      "How would you compare AI-led learning with human-led learning?",
    ],
  },
  challenge: {
    acknowledgement:
      "Your reasoning has become stronger, so let's examine the strongest reasonable objection. A critic might argue that education is fundamentally a human relationship rather than an information-delivery service. Students often learn resilience, empathy, ethical judgment, and confidence through interactions with real teachers. Even if AI becomes more capable than humans, would removing teachers risk weakening those aspects of education? A persuasive argument should address this concern directly.",
    challenge: {
      argument:
        "Education is not only about information transfer; it is also about relationship, trust, and moral formation. If AI replaces teachers, those human dimensions may be weakened even when academic performance remains strong.",
      assumption:
        "That the educational value of the relationship can be replaced by technology without loss.",
      title: "The strongest reasonable challenge",
    },
    question:
      "If AI replaced teachers, how would students continue developing the social, emotional, and ethical skills that are traditionally learned through human interaction?",
    questionPurpose: "This helps the learner meet a serious counterargument directly.",
    stageSummary: "The learner engaged with a powerful objection and tested the claim against it.",
    thinkingStarters: [
      "What is lost when the human relationship disappears?",
      "How would students learn judgment and character?",
      "What conditions would make the objection less serious?",
    ],
  },
  reflection: {
    acknowledgement:
      "Compare your current position with the one you started with. You may still believe that AI should replace teachers, or you may now believe that AI should support teachers instead. Either conclusion is acceptable if it is supported by stronger reasoning than before. The purpose of ThinkCourt is not to tell you what to believe, but to help you build arguments that remain persuasive after careful examination from multiple perspectives.",
    question:
      "After examining your assumptions, evidence, and counterarguments, how has your position changed, if at all?",
    questionPurpose:
      "This turns the exchange into reflective judgment rather than simple advocacy.",
    stageSummary:
      "The learner reflected on how the claim changed after challenging and testing it.",
    thinkingStarters: [
      "What became less certain?",
      "What part of your original claim still feels strong?",
      "What would you want to investigate next?",
    ],
  },
};

const educationDemoTurns: Record<string, CoachingTurn> = {
  foundation: {
    acknowledgement:
      "Artificial intelligence is changing how students learn, research, and complete assignments. Some universities have begun integrating AI into coursework, while others remain cautious because education is about more than producing answers.\n\nBefore deciding whether AI should be allowed, let's first clarify what universities are actually trying to achieve.\n\nIf we misunderstand the purpose of education, we may also misunderstand the role AI should play within it.\n\nLet's begin with the foundation of your argument.",
    question:
      "What do you believe is the primary purpose of university coursework, and how should AI contribute to that purpose without replacing genuine learning?",
    questionPurpose:
      "This helps the learner clarify the educational principle that the argument depends on.",
    stageSummary:
      "The learner clarified the purpose of university coursework before evaluating AI's role in it.",
    thinkingStarters: [
      "What should coursework cultivate beyond efficiency?",
      "How do you define genuine learning?",
      "What is the difference between assistance and replacement?",
    ],
  },
  evidence: {
    acknowledgement:
      "Your reasoning establishes an educational goal, but a convincing argument requires more than good intentions.\n\nThroughout history, many educational innovations promised better learning, yet not all of them produced meaningful improvements.\n\nIf universities are expected to embrace AI, there should be reliable evidence showing that AI improves understanding rather than simply making assignments easier.\n\nLet's examine the evidence supporting your position.",
    question:
      "What evidence, research, or real-world examples would convince a skeptical professor that allowing AI in coursework improves learning instead of encouraging dependency?",
    questionPurpose:
      "This pushes the learner to support the claim with evidence and examples rather than convenience.",
    stageSummary: "The learner tested whether the proposed policy is supported by evidence.",
    thinkingStarters: [
      "What would count as strong evidence?",
      "What would a skeptical professor want to see?",
      "How would you compare AI-assisted learning with more traditional learning?",
    ],
  },
  challenge: {
    acknowledgement:
      "Your argument is becoming more persuasive, but every strong position should be tested against its strongest criticism.\n\nA professor who disagrees with your position might argue that once AI becomes deeply involved in assignments, universities can no longer determine whether submitted work genuinely reflects a student's understanding.\n\nIf assessment loses credibility, degrees themselves may lose value.\n\nA convincing argument should respond directly to this concern rather than avoiding it.",
    challenge: {
      argument:
        "If AI assistance becomes too widespread, universities may no longer be able to tell whether a student has genuinely learned the material or merely outsourced the work.",
      assumption: "That academic assessment can remain fair when AI use is widespread.",
      title: "The strongest reasonable challenge",
    },
    question:
      "How should universities preserve academic integrity while still allowing students to benefit from AI during their learning process?",
    questionPurpose:
      "This helps the learner engage directly with the fairness problem at the center of the debate.",
    stageSummary:
      "The learner confronted the strongest criticism of the policy and examined its limits.",
    thinkingStarters: [
      "What safeguards would preserve fairness?",
      "How could universities distinguish authentic understanding from assistance?",
      "What conditions would make the objection less serious?",
    ],
  },
  reflection: {
    acknowledgement:
      "Throughout this discussion, you examined educational goals, supporting evidence, and the strongest criticism of your own position.\n\nNotice that the question was never simply whether AI is good or bad.\n\nThe real challenge is balancing innovation with meaningful learning and academic integrity.\n\nStrong critical thinkers do not avoid difficult trade-offs—they acknowledge them before reaching a conclusion.",
    question:
      "After examining multiple perspectives, has your position changed? If so, what part of today's discussion influenced your thinking the most?",
    questionPurpose:
      "This turns the exchange into reflective judgment rather than simple advocacy.",
    stageSummary:
      "The learner reflected on how the claim changed after considering multiple perspectives.",
    thinkingStarters: [
      "What became less certain?",
      "What part of your original view still feels strong?",
      "What would you want to investigate next?",
    ],
  },
};

const workDemoTurns: Record<string, CoachingTurn> = {
  foundation: {
    acknowledgement:
      "Remote work has transformed how organizations operate around the world. Many employees value the flexibility it provides, while others argue that working together in the same physical space leads to stronger collaboration and better long-term performance.\n\nBefore deciding whether remote work truly improves productivity, we should first examine what productivity actually means.\n\nIs productivity simply about completing more tasks, or should it also include innovation, communication, learning, and sustainable performance over time?\n\nLet's begin by identifying the principle behind your position.",
    question:
      "What does long-term productivity mean to you, and why do you believe remote work supports—or limits—that goal?",
    questionPurpose:
      "This helps the learner clarify the principle behind the claim before testing it.",
    stageSummary:
      "The learner identified what long-term productivity means before evaluating the effect of remote work.",
    thinkingStarters: [
      "What should productivity include beyond speed or output?",
      "How do you define sustainable performance?",
      "What makes remote work supportive or harmful for that goal?",
    ],
  },
  evidence: {
    acknowledgement:
      "Your argument presents a reasonable expectation, but expectations alone are not enough to support a policy that affects entire organizations.\n\nDifferent companies have reported different outcomes after adopting remote work. Some observed higher productivity and employee satisfaction, while others experienced communication challenges and weaker collaboration.\n\nTo persuade someone who remains skeptical, your position should be supported by evidence rather than assumptions.\n\nLet's examine what evidence strengthens your conclusion.",
    question:
      "What research, workplace data, or real-world examples would convince a business leader that remote work improves long-term productivity rather than simply making employees feel more comfortable?",
    questionPurpose:
      "This pushes the learner to support the claim with evidence rather than assumption.",
    stageSummary: "The learner tested whether the claim had evidence strong enough to support it.",
    thinkingStarters: [
      "What evidence would make this claim more convincing?",
      "What would a business leader want to see?",
      "How would you compare remote and hybrid organizations?",
    ],
  },
  challenge: {
    acknowledgement:
      "Your argument has become more convincing, so let's examine its strongest counterargument.\n\nA manager who disagrees with your position might argue that productivity is not only measured by individual output. Innovation often emerges through spontaneous conversations, mentoring, and quick collaboration that are more difficult to replicate remotely.\n\nIf organizations lose those interactions, they may become less innovative over time, even if short-term productivity appears higher.\n\nA persuasive argument should respond directly to this concern instead of dismissing it.",
    challenge: {
      argument:
        "Innovation often emerges through spontaneous conversations, mentoring, and quick collaboration that are more difficult to replicate remotely.",
      assumption:
        "That organizational creativity and learning can be preserved without frequent in-person interaction.",
      title: "The strongest reasonable challenge",
    },
    question:
      "How should organizations preserve creativity, collaboration, and mentoring if most employees work remotely?",
    questionPurpose:
      "This helps the learner engage directly with the strongest objection to the claim.",
    stageSummary: "The learner confronted the main criticism of the claim and tested its limits.",
    thinkingStarters: [
      "What mechanisms preserve collaboration at a distance?",
      "How could organizations maintain mentoring and innovation?",
      "What conditions would make the objection less serious?",
    ],
  },
  reflection: {
    acknowledgement:
      "Throughout this discussion, you explored productivity from multiple perspectives rather than focusing only on convenience or efficiency.\n\nYou considered how flexibility, collaboration, organizational culture, and innovation all influence long-term success.\n\nNotice that the strongest arguments often recognize trade-offs instead of presenting simple answers.\n\nCritical thinking is not about defending a position at all costs—it is about refining it as new perspectives emerge.",
    question:
      "After examining the evidence and the strongest counterargument, has your view of remote work changed? If so, what influenced your thinking the most?",
    questionPurpose:
      "This turns the exchange into reflective judgment rather than simple advocacy.",
    stageSummary:
      "The learner reflected on how the claim changed after considering evidence and counterarguments.",
    thinkingStarters: [
      "What became less certain?",
      "What part of your original view still feels strong?",
      "What would you want to investigate next?",
    ],
  },
};

const technologyDemoTurns: Record<string, CoachingTurn> = {
  foundation: {
    acknowledgement:
      "Every day, billions of people rely on social media to discover news, entertainment, and new ideas. Most of what users see is not chosen randomly—it is selected by recommendation algorithms designed to predict what will keep people engaged.\n\nSupporters argue that these systems help users find content they genuinely enjoy, while critics warn that they can also amplify misinformation, encourage polarization, and prioritize attention over well-being.\n\nBefore deciding whether platforms should limit algorithmic recommendations, we should first clarify what responsibility a social media platform should have.\n\nIs its primary responsibility simply to give users what they want, or does it also have a duty to reduce potential harm?\n\nLet's begin by examining the principle behind your position.",
    question:
      "What responsibility do you believe social media platforms have toward their users, and how should that responsibility influence the way recommendation algorithms operate?",
    questionPurpose:
      "This helps the learner clarify the principle behind the claim before testing it.",
    stageSummary: "The learner identified the platform responsibility that the claim depends on.",
    thinkingStarters: [
      "What should a platform owe its users beyond relevance?",
      "How should user well-being inform algorithm design?",
      "What makes a recommendation system responsible or harmful?",
    ],
  },
  evidence: {
    acknowledgement:
      "Your position identifies an important balance between user choice and platform responsibility, but a convincing policy should be supported by evidence rather than intuition.\n\nAround the world, governments, researchers, and technology companies continue debating whether recommendation systems increase user satisfaction or unintentionally contribute to social harm.\n\nIf platforms are expected to limit their algorithms, there should be evidence showing that doing so improves outcomes without unnecessarily reducing the usefulness of personalized recommendations.\n\nLet's examine the evidence behind your position.",
    question:
      "What research, real-world examples, or measurable outcomes would convince someone that limiting algorithmic recommendations creates a healthier online environment without significantly harming the user experience?",
    questionPurpose:
      "This pushes the learner to support the claim with evidence rather than intuition.",
    stageSummary: "The learner tested whether the claim had evidence strong enough to support it.",
    thinkingStarters: [
      "What evidence would make this claim more convincing?",
      "What would a regulator or platform leader want to see?",
      "How would you compare a more limited feed with the current system?",
    ],
  },
  challenge: {
    acknowledgement:
      "Your reasoning has become more persuasive, so let's examine its strongest counterargument.\n\nA critic might argue that limiting recommendation algorithms gives technology companies greater control over what people are allowed to see.\n\nIf platforms decide which content is considered acceptable, they may unintentionally restrict legitimate opinions, reduce diversity of viewpoints, or influence public discussion in ways that users cannot easily observe.\n\nThis raises an important question about the balance between safety and individual freedom.\n\nA persuasive argument should address this concern directly rather than assuming one value always outweighs the other.",
    challenge: {
      argument:
        "Limiting recommendation algorithms gives technology companies greater control over what people are allowed to see, which may restrict legitimate opinions or reduce viewpoint diversity.",
      assumption:
        "That safety can be protected without reducing freedom of expression or individual choice.",
      title: "The strongest reasonable challenge",
    },
    question:
      "How should social media platforms protect users from harmful content while also respecting freedom of expression and individual choice?",
    questionPurpose:
      "This helps the learner engage directly with the strongest objection to the claim.",
    stageSummary: "The learner confronted the main criticism of the claim and tested its limits.",
    thinkingStarters: [
      "What kinds of limits are most defensible?",
      "How can oversight preserve both safety and freedom?",
      "What conditions would make the objection less serious?",
    ],
  },
  reflection: {
    acknowledgement:
      "Throughout this discussion, you explored more than a simple question of whether recommendation algorithms are good or bad.\n\nYou considered user autonomy, platform responsibility, evidence of social impact, and the difficult trade-offs between safety, transparency, and freedom of expression.\n\nThe strongest positions often recognize that responsible technology requires balancing competing values rather than maximizing only one of them.\n\nCritical thinking means remaining willing to refine your position when those trade-offs become clearer.",
    question:
      "After considering both the potential benefits and risks of algorithmic recommendations, has your position changed? If so, what influenced your thinking the most?",
    questionPurpose:
      "This turns the exchange into reflective judgment rather than simple advocacy.",
    stageSummary:
      "The learner reflected on how the claim changed after considering trade-offs and evidence.",
    thinkingStarters: [
      "What became less certain?",
      "What part of your original view still feels strong?",
      "What would you want to investigate next?",
    ],
  },
};

function normalizeClaim(claim: string): string {
  return claim
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isEducationClaim(claim: string): boolean {
  const normalized = normalizeClaim(claim);
  return (
    normalized.includes("universities") &&
    normalized.includes("ai") &&
    normalized.includes("coursework")
  );
}

function isTeacherClaim(claim: string): boolean {
  const normalized = normalizeClaim(claim);
  return (
    normalized.includes("ai") && normalized.includes("replace") && normalized.includes("teachers")
  );
}

function isWorkClaim(claim: string): boolean {
  const normalized = normalizeClaim(claim);
  return (
    normalized.includes("remote") &&
    normalized.includes("work") &&
    normalized.includes("productivity")
  );
}

function isTechnologyClaim(claim: string): boolean {
  const normalized = normalizeClaim(claim);
  return (
    normalized.includes("social") &&
    normalized.includes("media") &&
    normalized.includes("algorithmic") &&
    normalized.includes("recommendations")
  );
}

export function isDemoClaim(claim: string): boolean {
  return (
    isEducationClaim(claim) ||
    isTeacherClaim(claim) ||
    isWorkClaim(claim) ||
    isTechnologyClaim(claim)
  );
}

export function getFixtureCoachingTurn(stage: keyof typeof turns, claim?: string): CoachingTurn {
  if (claim) {
    if (isEducationClaim(claim)) {
      return educationDemoTurns[stage];
    }

    if (isTeacherClaim(claim)) {
      return teacherDemoTurns[stage];
    }

    if (isWorkClaim(claim)) {
      return workDemoTurns[stage];
    }

    if (isTechnologyClaim(claim)) {
      return technologyDemoTurns[stage];
    }
  }

  return turns[stage];
}

export function getFixtureSnapshot(claim: string): ReasoningSnapshot {
  if (isEducationClaim(claim)) {
    return {
      demonstratedStrength:
        "You moved beyond a simple position by examining educational purpose, evidence, and the strongest criticism of your view.",
      dimensions: [
        {
          label: "Practiced",
          name: "Claim clarity",
          rationale: "You clarified the educational purpose that the policy should serve.",
        },
        {
          label: "Practiced",
          name: "Assumption awareness",
          rationale: "You identified the deeper assumptions behind allowing AI in coursework.",
        },
        {
          label: "Developing",
          name: "Evidence quality",
          rationale:
            "You named the kind of evidence that would strengthen the claim, with room to be more concrete.",
        },
        {
          label: "Strongly demonstrated",
          name: "Alternative views",
          rationale:
            "You engaged seriously with the risk that AI use could weaken genuine understanding and academic integrity.",
        },
      ],
      nextPracticeGoal:
        "Support your final position with more empirical evidence, research, or specific examples.",
      refinedClaim:
        "Universities should allow AI in coursework, provided that assessment methods continue to verify genuine understanding and independent reasoning.",
      suggestedExercise:
        "Practice with another policy debate where innovation and integrity must be balanced.",
    };
  }

  if (isWorkClaim(claim)) {
    return {
      demonstratedStrength:
        "You examined remote work from multiple perspectives, balancing flexibility, collaboration, and long-term organizational performance.",
      dimensions: [
        {
          label: "Practiced",
          name: "Claim clarity",
          rationale:
            "You clarified what long-term productivity should include beyond simple output.",
        },
        {
          label: "Practiced",
          name: "Assumption awareness",
          rationale:
            "You identified the assumptions behind treating flexibility as a reliable productivity strategy.",
        },
        {
          label: "Developing",
          name: "Evidence quality",
          rationale:
            "You named the kinds of evidence that would strengthen the claim, with room to be more empirical.",
        },
        {
          label: "Strongly demonstrated",
          name: "Alternative views",
          rationale:
            "You engaged seriously with the risk that remote work may weaken mentorship, creativity, and collaboration.",
        },
      ],
      nextPracticeGoal:
        "Support your conclusion with more concrete workplace data, case studies, or organizational examples.",
      refinedClaim:
        "Remote work can improve long-term productivity when organizations combine flexibility with deliberate collaboration, communication, and accountability.",
      suggestedExercise:
        "Practice with another policy debate where a short-term advantage may come at the cost of long-term performance.",
    };
  }

  if (isTechnologyClaim(claim)) {
    return {
      demonstratedStrength:
        "You examined the trade-off between user autonomy and platform responsibility without collapsing into a simple yes-or-no answer.",
      dimensions: [
        {
          label: "Practiced",
          name: "Claim clarity",
          rationale:
            "You clarified the responsibility a platform should have toward users and their well-being.",
        },
        {
          label: "Practiced",
          name: "Assumption awareness",
          rationale:
            "You identified the assumptions behind treating personalization as either harmless or purely beneficial.",
        },
        {
          label: "Developing",
          name: "Evidence quality",
          rationale:
            "You named the kinds of evidence that would strengthen the claim, with room for more empirical support.",
        },
        {
          label: "Strongly demonstrated",
          name: "Alternative views",
          rationale:
            "You engaged seriously with the risk that algorithmic limits could restrict free expression or user choice.",
        },
      ],
      nextPracticeGoal:
        "Support your conclusion with more empirical evidence about how recommendation limits affect user well-being and information diversity.",
      refinedClaim:
        "Social media platforms should apply transparent and evidence-based limits to algorithmic recommendations when those limits protect users from clear harm without unnecessarily restricting choice.",
      suggestedExercise:
        "Practice with another technology policy debate where safety, autonomy, and freedom of expression must be weighed together.",
    };
  }

  return {
    demonstratedStrength:
      "You moved beyond an initial conclusion by identifying the condition it depends on and seriously engaging with a competing concern.",
    dimensions: [
      {
        label: "Practiced",
        name: "Claim clarity",
        rationale: "Your claim became more precise about the conditions under which it could hold.",
      },
      {
        label: "Practiced",
        name: "Assumption awareness",
        rationale: "You named a link that needed to be true before the conclusion could follow.",
      },
      {
        label: "Developing",
        name: "Evidence quality",
        rationale:
          "You identified the kind of evidence that would help, with room to test it further.",
      },
      {
        label: "Strongly demonstrated",
        name: "Alternative views",
        rationale: "You treated a serious counterargument as information, not an attack.",
      },
    ],
    nextPracticeGoal:
      "In your next session, name one concrete source or comparison that would test your most important assumption.",
    refinedClaim: `${claim.replace(/[.\s]+$/, "")}, provided the conditions supporting its deeper goal can be demonstrated.`,
    suggestedExercise:
      "Practice with a claim where the immediate benefit and the long-term outcome may diverge.",
  };
}
