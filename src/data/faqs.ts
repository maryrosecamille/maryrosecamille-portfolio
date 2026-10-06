export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What kind of support do you offer?',
    a: 'I focus on executive and administrative support, Google Workspace organization, AI-assisted workflows, client and business operations, and sales or CRM support. The exact scope can be shaped around the executive or team I support.',
  },
  {
    q: 'What tools do you work with?',
    a: 'My core toolkit includes Google Workspace, Gemini, ChatGPT, Salesforce, and common productivity workflows. I also have experience across customer operations, technical support, sales, documentation, and cross-team coordination.',
  },
  {
    q: 'Do you have Executive VA experience?',
    a: 'I am transitioning into Executive Virtual Assistance from application support, administrative support, customer operations, sales, and technical support. The Projects section contains portfolio demonstrations that show how I apply those transferable skills to executive workflows.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in the Philippines (GMT+8) and am building my portfolio for remote collaboration.',
  },
  {
    q: 'How can we discuss a role or project?',
    a: 'Send a short message describing the support you need, your working setup, and the priorities you want help with. You can also contact me directly by email or through LinkedIn.',
  },
]
