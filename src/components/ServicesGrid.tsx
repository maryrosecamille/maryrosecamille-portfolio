import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'


type Stage = { index: string; label: string; body: string; Icon: Icon; chips: string[] }

const STAGES: Stage[] = [
  { index: '01', label: 'Understand', body: 'Clarify priorities, recurring tasks, communication needs, and the way you prefer to work.', Icon: MagnetStraight, chips: ['Priorities', 'Processes', 'Tools', 'Preferences'] },
  { index: '02', label: 'Organize', body: 'Build a clear operating rhythm using Google Workspace, structured follow-ups, and practical AI support.', Icon: Timer, chips: ['Workspace', 'Tracking', 'AI support'] },
  { index: '03', label: 'Support', body: 'Keep information, communication, and recurring work moving so you can focus on higher-value decisions.', Icon: Trophy, chips: ['Follow-through', 'Clarity', 'Efficiency'] },
]

const GWS = `${import.meta.env.BASE_URL}icons/googleworkspace.svg`
const OPENAI = `${import.meta.env.BASE_URL}icons/openai.svg`

type Service = { index: string; title: string; description: string; chip: string; logos: string[]; bullets: string[] }

const SERVICES: Service[] = [
  { index: '01', title: 'Executive Support', description: 'Reliable support for the administrative work that keeps your day organized.', chip: 'EXECUTIVE OPS', logos: [GWS], bullets: ['Calendar & meeting coordination', 'Inbox and follow-up support', 'Research, data entry & documentation'] },
  { index: '02', title: 'Google Workspace Management', description: 'Organized workflows across the Google tools your business already uses.', chip: 'GOOGLE WORKSPACE', logos: [GWS], bullets: ['Gmail, Calendar & Drive organization', 'Docs, Sheets, Slides & Forms', 'Meet, Chat & collaborative workflows'] },
  { index: '03', title: 'AI-Assisted Workflows', description: 'Practical use of Gemini and ChatGPT to reduce repetitive knowledge work.', chip: 'AI WORKFLOWS', logos: [GWS, OPENAI], bullets: ['Drafting & information synthesis', 'Meeting notes & action-item support', 'SOP and documentation assistance'] },
  { index: '04', title: 'Client & Business Operations', description: 'Customer-facing and back-office support shaped by years of operations experience.', chip: 'OPERATIONS', logos: [GWS], bullets: ['Client communication & follow-ups', 'Records, order and status tracking', 'Cross-team coordination'] },
  { index: '05', title: 'Sales & CRM Support', description: 'Structured support for leads, customer records, quotations, and sales follow-through.', chip: 'CRM SUPPORT', logos: [GWS], bullets: ['Salesforce-based support experience', 'Lead and customer record handling', 'Quotations, follow-ups & reporting'] },
]

function Marks({ logos }: { logos: string[] }) {
  return <span className="bento__logos" aria-hidden="true">{logos.map((src, i) => <span key={`${src}-${i}`} className="bento__logo"><img src={src} alt="" width={22} height={22} decoding="async" /></span>)}</span>
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">Support that keeps work moving.</h1>
        <p className="pgrid__lede">Executive support, Google Workspace, AI-assisted workflows, and business operations for busy founders and teams.</p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I Work</span>
            <h2 className="sgrid__method-title" id="method-title">Understand. Organize.<br /><span>Support.</span></h2>
            <p className="sgrid__method-sub">Simple systems, clear communication, and dependable follow-through—enhanced by the right technology.</p>
          </div>
          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                <span className="sgrid__stage-icon" aria-hidden="true"><StageIcon size={22} weight="duotone" /></span>
                <h3 className="sgrid__stage-label">{s.label}.</h3>
                <p className="sgrid__stage-body">{s.body}</p>
                <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>{s.chips.map((c) => <li key={c} className="sgrid__stage-chip">{c}</li>)}</ul>
              </li>
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Ways I can support your business.</h2>
            <p className="sgrid__offers-sub">Flexible support built around the work that takes time off your plate.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => <li key={s.title} className="bento__card sgrid__service">
              <span className="bento__head">
                <span className="sgrid__service-top"><Marks logos={s.logos} /><span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span></span>
                <span className="bento__title">{s.title}</span><span className="bento__desc">{s.description}</span>
              </span>
              <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
              <ul className="sgrid__bullets" role="list">{s.bullets.map((b) => <li key={b} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" aria-hidden="true" /><span>{b}</span></li>)}</ul>
            </li>)}
          </ul>
        </div>

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">A practical support rhythm</span>
              <h2 className="sgrid__flow-title">From request to follow-through.</h2>
              <p className="sgrid__flow-sub">A simple operating pattern for keeping executive requests visible, organized, and moving without adding unnecessary complexity.</p>
            </div>
          </header>
          <ol className="sgrid__rhythm" role="list">
            <li><span>01</span><strong>Capture</strong><p>Collect the request, context, deadline, and expected outcome.</p></li>
            <li><span>02</span><strong>Organize</strong><p>Place the work in the right Workspace, CRM, or tracking system.</p></li>
            <li><span>03</span><strong>Execute</strong><p>Complete the task using clear documentation and AI assistance where useful.</p></li>
            <li><span>04</span><strong>Follow through</strong><p>Update status, surface blockers, and close the loop with the right person.</p></li>
          </ol>
        </div>
      </div>
    </section>
  )
}
