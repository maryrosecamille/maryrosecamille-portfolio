import AIStack from '@/components/AIStack'

/** Dedicated AI workflow page grounded in Camille's current Google Workspace,
 * Gemini, ChatGPT and Apps Script toolkit. */
export default function AIWorkflowsView() {
  return (
    <section className="pgrid aiworkflows" aria-labelledby="ai-workflows-title">
      <header className="pgrid__head">
        <div>
          <span className="pgrid__eyebrow">AI WORKFLOWS</span>
          <h1 className="pgrid__title" id="ai-workflows-title">Practical AI for executive work.</h1>
          <p className="pgrid__lede">
            Google Workspace, Gemini, ChatGPT, and Apps Script applied to communication,
            documentation, organization, and follow-through.
          </p>
        </div>
      </header>
      <div className="pgrid__glass aiworkflows__glass">
        <div className="aiworkflows__intro">
          <span>HOW I USE AI</span>
          <strong>Assist the workflow. Keep the work clear.</strong>
          <p>My focus is practical support: drafting and synthesis, meeting-to-action workflows, structured information, and reducing repetitive knowledge work.</p>
        </div>
        <AIStack />
      </div>
    </section>
  )
}
