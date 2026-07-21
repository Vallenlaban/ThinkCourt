export type Language = "en" | "id";

export const strings: Record<Language, Record<string, string>> = {
  en: {
    navHowItWorks: "How it works",
    navSeeExample: "See an example",
    heroPill: "Guided reasoning practice",
    heroTitlePrefix: "Train critical thinking.",
    heroTitleAccent: "Strengthen stronger reasoning.",
    heroSubtitle:
      "ThinkCourt helps you examine claims, test evidence, and challenge your own ideas before reaching a conclusion.",
    heroPrimaryCta: "Start a session",
    heroSecondaryCta: "See an example",
    heroFooter: "No answers to copy. Just better thinking.",
    practiceSectionTitle: "The practice",
    practiceHeadline: "Don't just reach a conclusion. Earn it.",
    practiceSubtitle:
      "ThinkCourt reveals the reasoning behind your beliefs—then helps you strengthen it.",
    beforeLabel: "Before",
    beforeTitle: "“AI should be allowed because it makes students productive.”",
    missingLabel: "What’s missing",
    missingCopy: "The claim is clear, but the assumptions beneath it have not been tested.",
    afterLabel: "After examination",
    afterTitle:
      "“AI may support coursework when assignments still require students to demonstrate independent understanding.”",
    assumptionLabel: "Assumption examined",
    assumptionCopy: "Productivity and learning are not automatically the same outcome.",
    hiddenAssumption:
      "Hidden assumption: productivity alone is not sufficient proof of deeper learning.",
    howHelpsTitle: "How ThinkCourt helps",
    howHelpsHeadline: "A gym for your mind—not an answer machine.",
    principle1Title: "Examine assumptions",
    principle1Description: "Start with the thought you already have. The work stays yours.",
    principle2Title: "Test the support",
    principle2Description:
      "Learn to distinguish examples from evidence that truly supports a conclusion.",
    principle3Title: "Reflect and refine",
    principle3Description:
      "Meet a fair challenge, then choose whether to defend, qualify, or revise your view.",
    exampleSectionTitle: "See the method in motion",
    exampleHeadline: "A short session. A visible shift in thinking.",
    exampleSubtitle: "Bring a claim. Leave with a stronger argument.",
    exampleCta: "Start a session",
    exampleMetaTitle: "Example: AI in coursework",
    exampleMetaSubtitle: "A five-minute reasoning practice",
    stage1Title: "Foundation",
    stage1Description: "Clarify the claim beneath the opinion.",
    stage2Title: "Evidence",
    stage2Description: "Test whether the support reaches the conclusion.",
    stage3Title: "Challenge",
    stage3Description: "Consider the strongest reasonable objection.",
    stage4Title: "Reflection",
    stage4Description: "Name what changed and what you need to know next.",
    exampleResultLabel: "The result",
    exampleResultCopy: "A stronger position—and a clearer next question to explore.",
    footerDescription:
      "Train critical thinking through guided reasoning, evidence evaluation, and reflection.",
    footerStartSession: "Start a session",
  },
  id: {
    navHowItWorks: "Bagaimana cara kerja",
    navSeeExample: "Lihat contoh",
    heroPill: "Latihan penalaran terpimpin",
    heroTitlePrefix: "Latih berpikir kritis.",
    heroTitleAccent: "Perkuat kemampuan bernalar yang lebih solid.",
    heroSubtitle:
      "ThinkCourt membantu Anda menguji klaim, menilai bukti, dan menantang ide sebelum menarik kesimpulan.",
    heroPrimaryCta: "Mulai sesi",
    heroSecondaryCta: "Lihat contoh",
    heroFooter: "Bukan jawaban untuk ditiru. Hanya cara berpikir yang lebih baik.",
    practiceSectionTitle: "Latihan",
    practiceHeadline: "Jangan hanya menarik kesimpulan. Raih dengan yakin.",
    practiceSubtitle:
      "ThinkCourt menyingkap alasan di balik keyakinan Anda—lalu membantu menguatkannya.",
    beforeLabel: "Sebelum",
    beforeTitle: "“AI boleh digunakan karena membuat mahasiswa lebih produktif.”",
    missingLabel: "Yang hilang",
    missingCopy: "Klaim jelas, tetapi asumsi di baliknya belum diuji.",
    afterLabel: "Setelah pemeriksaan",
    afterTitle:
      "“AI bisa mendukung tugas ketika mahasiswa masih harus menunjukkan pemahaman mandiri.”",
    assumptionLabel: "Asumsi yang diuji",
    assumptionCopy: "Produktivitas dan pembelajaran tidak otomatis berarti hasil yang sama.",
    hiddenAssumption:
      "Asumsi tersembunyi: produktivitas saja belum cukup jadi bukti pembelajaran mendalam.",
    howHelpsTitle: "Bagaimana ThinkCourt membantu",
    howHelpsHeadline: "Sebuah gym untuk pikiran Anda—bukan mesin jawaban.",
    principle1Title: "Periksa asumsi",
    principle1Description: "Mulai dari pikiran yang sudah Anda miliki. Kerjanya tetap milik Anda.",
    principle2Title: "Uji dukungan",
    principle2Description:
      "Pelajari cara membedakan contoh dari bukti yang benar-benar mendukung kesimpulan.",
    principle3Title: "Refleksi dan perbaikan",
    principle3Description:
      "Terima tantangan yang adil, lalu pilih apakah akan mempertahankan, mengubah, atau mempersempit pandangan Anda.",
    exampleSectionTitle: "Lihat metodenya beraksi",
    exampleHeadline: "Sesi singkat. Perubahan berpikir yang nyata.",
    exampleSubtitle: "Bawa klaim. Pulang dengan argumen yang lebih kuat.",
    exampleCta: "Mulai sesi",
    exampleMetaTitle: "Contoh: AI dalam tugas kuliah",
    exampleMetaSubtitle: "Latihan penalaran lima menit",
    stage1Title: "Dasar",
    stage1Description: "Perjelas klaim di balik opini.",
    stage2Title: "Bukti",
    stage2Description: "Uji apakah dukungan mencapai kesimpulan.",
    stage3Title: "Tantangan",
    stage3Description: "Pertimbangkan keberatan wajar yang paling kuat.",
    stage4Title: "Refleksi",
    stage4Description: "Sebutkan apa yang berubah dan apa yang perlu Anda ketahui selanjutnya.",
    exampleResultLabel: "Hasilnya",
    exampleResultCopy: "Posisi lebih kuat—dan pertanyaan berikutnya jadi lebih jelas.",
    footerDescription:
      "Latih berpikir kritis lewat penalaran terpimpin, evaluasi bukti, dan refleksi.",
    footerStartSession: "Mulai sesi",
  },
};

export function getStrings(language: Language) {
  return strings[language];
}
