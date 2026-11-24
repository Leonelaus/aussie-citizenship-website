export const features = [
  {
    slug: "practice-questions",
    title: "Practice questions",
    summary:
      "The free iPhone app includes 30 multiple-choice practice questions on topics people revise for the citizenship test.",
    paragraphs: [
      "Those questions are for personal study. They give you a way to check your understanding of history, government, and the values covered in publicly available citizenship material.",
      "They are not past papers, leaked questions, or an official question bank. A correct answer in the app is a study result only.",
    ],
    note: "The current free iPhone release contains these 30 questions.",
  },
  {
    slug: "mock-tests",
    title: "Mock exam",
    summary:
      "Sit 20-question mock exams so you can rehearse answering in one sitting.",
    paragraphs: [
      "Each mock exam in the free iPhone app is 20 practice questions, so you can practise pacing yourself.",
      "It is not a copy of the official citizenship test. A score in the app is not an official mark, and it does not predict the outcome of your test or your application.",
    ],
    note: "Test rules, including timing and the pass mark, are set by the Australian Government and can change. Confirm the current rules on the official website.",
  },
  {
    slug: "progress-tracking",
    title: "Progress tracking",
    summary:
      "See which questions you have already revised. Study progress and exam results stay on your iPhone.",
    paragraphs: [
      "The app stores study progress and mock-exam results only on the device. This website does not show or store them, and the study screens do not upload your answers.",
      "Reset study progress asks you to confirm, then clears scores, exam history, the last active date, the streak, and the daily challenge. It keeps your language and dark-mode setting.",
    ],
    note: "Deleting the app removes that local record. An Apple device backup is separate and is described in the draft Privacy Policy.",
  },
  {
    slug: "multilingual-support",
    title: "Multilingual support",
    summary:
      "Read supporting explanations in more than one language, alongside English.",
    paragraphs: [
      "Multilingual support is a study aid. It is meant to help you understand the material in a language that is clearer for you, while you continue to learn the English used in citizenship study.",
      "Your chosen interface language is stored on the iPhone with the rest of the local study record. This website does not publish a separate language list.",
    ],
    note: "Support in another language does not change how the official test is conducted. Check the Department of Home Affairs website for the current test rules.",
  },
] as const;

export const benefits = [
  {
    title: "Revise in short sessions",
    text: "Use a few minutes at a time on iPhone. The free app is for steady preparation, not a last-minute promise.",
  },
  {
    title: "Practise without pressure",
    text: "Answer 30 study questions, or sit 20-question mock exams, before the official test.",
  },
  {
    title: "Notice what to revisit",
    text: "Progress and exam results stay on the device, so you can return to questions that still need work.",
  },
  {
    title: "Keep the official resource first",
    text: "Use government material as the source of truth for facts, rules, and your application.",
  },
] as const;
