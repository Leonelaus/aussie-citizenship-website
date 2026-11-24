export const features = [
  {
    slug: "practice-questions",
    title: "Practice questions",
    summary:
      "Work through multiple-choice questions on the kinds of topics people revise for the citizenship test.",
    paragraphs: [
      "Practice questions are written for personal study. They give you a way to check your understanding of history, government, and the values covered in publicly available citizenship material.",
      "They are not past papers, leaked questions, or an official question bank. A correct answer in the app is a study result only.",
    ],
    note: "The site does not state how many questions the app contains. Counts can change, and an exact figure would need to be checked against the released app.",
  },
  {
    slug: "mock-tests",
    title: "Mock tests",
    summary:
      "Sit a timed set of practice questions so you can rehearse answering in one sitting.",
    paragraphs: [
      "A mock test is a revision exercise. It is designed to feel more like a sitting than a single question at a time, so you can practise pacing yourself.",
      "It is not a copy of the official citizenship test. A score in the app is not an official mark, and it does not predict the outcome of your test or your application.",
    ],
    note: "Test rules, including timing and the pass mark, are set by the Australian Government and can change. Confirm the current rules on the official website.",
  },
  {
    slug: "progress-tracking",
    title: "Progress tracking",
    summary:
      "See which areas you have already revised and which ones are worth another look.",
    paragraphs: [
      "Progress tracking is there to support your own study. It helps you return to topics you found difficult, rather than starting from the beginning each time.",
      "This website does not show or store your study progress. How the app keeps that information will be described in the app and in the final privacy policy before release.",
    ],
    note: "This draft site does not claim that progress is uploaded, backed up, or shared.",
  },
  {
    slug: "multilingual-support",
    title: "Multilingual support",
    summary:
      "Read supporting explanations in more than one language, alongside English.",
    paragraphs: [
      "Multilingual support is a study aid. It is meant to help you understand the material in a language that is clearer for you, while you continue to learn the English used in citizenship study.",
      "The languages included will be listed in the app when it is released. This website does not publish a language list, because that list should match the finished app.",
    ],
    note: "Support in another language does not change how the official test is conducted. Check the Department of Home Affairs website for the current test rules.",
  },
] as const;

export const benefits = [
  {
    title: "Revise in short sessions",
    text: "Use a few minutes at a time. The app is for steady preparation, not a last-minute promise.",
  },
  {
    title: "Practise without pressure",
    text: "Answer study questions in private before you sit the official test.",
  },
  {
    title: "Notice what to revisit",
    text: "Progress tracking is there so you can return to topics that still need work.",
  },
  {
    title: "Keep the official resource first",
    text: "Use government material as the source of truth for facts, rules, and your application.",
  },
] as const;
