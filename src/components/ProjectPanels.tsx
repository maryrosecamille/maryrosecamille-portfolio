import { useEffect, useState, type ReactNode } from 'react'
import { lazy, Suspense } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const BASE = import.meta.env.BASE_URL

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

/**
 * What the Projects dialogs show. Each panel is the work itself, on screen
 * the moment the dialog opens - no section chrome to read past and no second
 * dialog to click into.
 */

/** Only the strip of macOS windows, drifting on the backdrop. No window. */
export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--strip">
      <WorkflowSamples />
    </div>
  )
}

/** A plain mac window with a scrolling body, for the sections that are
 *  pages rather than frames. */
function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{label}</span>
        </span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

/** Only the barrel, spinning on the backdrop. Its own page preview still
 *  stacks above (z 9000). */
export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
        <FunnelBarrel funnels={websiteFunnel} onOpen={openFull} />
      </Suspense>
      {modal}
    </div>
  )
}

/** The systems as a logo-first grid, in a scrolling window. */
export function AIWindow() {
  return (
    <SectionWindow label="Google Workspace + AI Toolkit">
      <AIStackGrid />
    </SectionWindow>
  )
}
export function AppsWindow() {
  return (
    <SectionWindow label="Your apps">
      <AppsSection />
    </SectionWindow>
  )
}

/** The plan document, full height, straight away. */
export function PlanPanel() {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar
        host="maryrose-camille-va"
        path="/executive-operations-playbook"
      />
      <LiveFrame src={`${BASE}placeholders/sample-plan.html`} title="Sample document" />
    </div>
  )
}

/** `src` is a local page framed in the panel; `path` is what the fake
 *  address bar shows. Point these at your own pages. */
export const TicketingPanel = () => (
  <SectionWindow label="Executive Command Center · Portfolio Demonstration">
    <article style={{ padding: 'clamp(20px, 4vw, 48px)', maxWidth: 980, margin: '0 auto' }}>
      <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .6 }}>Portfolio Demonstration · Fictional executive data</p>
      <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.05 }}>Executive Command Center</h2>
      <p style={{ margin: '0 0 30px', maxWidth: 760, fontSize: 16, lineHeight: 1.65, opacity: .78 }}>A Google Sheets–style operating system designed to give a busy executive one clear view of priorities, meetings, follow-ups, and deadlines. The workbook demonstrates how I would organize recurring executive information and make next actions easier to see.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 12, marginBottom: 30 }}>
        {[
          ['5', 'Workspace views'],
          ['4', 'Core trackers'],
          ['1', 'Executive dashboard'],
          ['100%', 'Fictional demo data'],
        ].map(([value, label]) => (
          <div key={label} style={{ padding: 18, border: '1px solid color-mix(in srgb, currentColor 14%, transparent)', borderRadius: 16 }}>
            <strong style={{ display: 'block', fontSize: 26 }}>{value}</strong>
            <span style={{ fontSize: 12, opacity: .62 }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
        {[
          ['Dashboard', 'At-a-glance KPIs and status visibility for executive priorities and follow-through.'],
          ['Priorities', 'Tracks priority, owner, due date, status, and the next action required.'],
          ['Meetings', 'Organizes meeting schedules, purpose, preparation notes, and resulting actions.'],
          ['Follow-Ups', 'Keeps commitments visible so important replies and check-ins do not disappear in the inbox.'],
          ['Deadlines', 'Centralizes time-sensitive deliverables with ownership and status tracking.'],
          ['Controls', 'Uses formulas, dropdowns, conditional formatting, and structured fields to reduce manual ambiguity.'],
        ].map(([title, body]) => (
          <section key={title} style={{ padding: 20, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>{title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, opacity: .72 }}>{body}</p>
          </section>
        ))}
      </div>

      <div style={{ marginTop: 28, padding: 20, borderLeft: '3px solid currentColor', background: 'color-mix(in srgb, currentColor 4%, transparent)' }}>
        <strong>What this demonstrates</strong>
        <p style={{ margin: '8px 0 0', lineHeight: 1.6, opacity: .74 }}>Executive organization · Google Sheets workflow design · priority management · meeting coordination · follow-up discipline · deadline tracking · dashboard thinking</p>
      </div>
    </article>
  </SectionWindow>
)
export const FrameworkPanel = () => (
  <SectionWindow label="AI Executive Meeting → Action Workflow · Portfolio Demonstration">
    <article className="aicase">
      <p className="aicase__eyebrow">Portfolio Demonstration · Fictional data</p>
      <h2>AI Executive Meeting → Action Workflow</h2>
      <p className="aicase__lede">A sample human-in-the-loop workflow showing how I would turn meeting notes into an executive-ready summary, a structured action tracker, and a Gmail follow-up draft using Google Workspace, Gemini, and AI-assisted prompting.</p>

      <div className="aicase__flow" aria-label="Workflow stages">
        {[
          ['01','Capture','Google Meet / notes'],
          ['02','Synthesize','Gemini'],
          ['03','Organize','Google Sheets'],
          ['04','Draft','Gmail'],
          ['05','Review','Human approval'],
        ].map(([n,title,tool]) => (
          <div className="aicase__step" key={n}>
            <span>{n}</span><strong>{title}</strong><small>{tool}</small>
          </div>
        ))}
      </div>

      <div className="aicase__grid">
        <section className="aicase__card">
          <span className="aicase__label">Input · fictional meeting notes</span>
          <h3>Weekly Operations Meeting</h3>
          <p>Acme onboarding is waiting on signed access forms. Camille will follow up today. The Meridian proposal should be ready Thursday afternoon for founder review. September revenue figures are needed before Friday’s leadership review. Move the vendor check-in to next Tuesday.</p>
        </section>
        <section className="aicase__card aicase__card--prompt">
          <span className="aicase__label">AI instruction</span>
          <h3>Structured executive synthesis</h3>
          <p>Summarize for an executive. Separate decisions from actions. Capture owners and deadlines only when stated. Flag missing information rather than inventing it. Prepare a concise follow-up email for human review.</p>
        </section>
      </div>

      <section className="aicase__summary">
        <span className="aicase__label">Gemini-assisted output · example</span>
        <h3>Executive summary</h3>
        <p>Acme onboarding remains blocked by unsigned access forms. The Meridian proposal is the immediate deliverable for Thursday afternoon review. September revenue figures are required before Friday’s leadership review, and the vendor check-in moves to next Tuesday.</p>
      </section>

      <section className="aicase__tracker">
        <div className="aicase__tracker-head">
          <div><span className="aicase__label">Google Sheets · example</span><h3>Action tracker</h3></div>
          <span className="aicase__demo">Fictional data</span>
        </div>
        <div className="aicase__table" role="table" aria-label="Example action tracker">
          <div className="aicase__tr aicase__th" role="row"><span>Action</span><span>Owner</span><span>Due</span><span>Status</span></div>
          {[
            ['Follow up on Acme access forms','Camille','Today','Open'],
            ['Prepare Meridian proposal','Proposal owner','Thu PM','In progress'],
            ['Add September revenue figures','Finance owner','Before Fri','Open'],
            ['Reschedule vendor check-in','Camille','Next Tue','Ready'],
          ].map(row => <div className="aicase__tr" role="row" key={row[0]}>{row.map(cell => <span role="cell" key={cell}>{cell}</span>)}</div>)}
        </div>
      </section>

      <section className="aicase__email">
        <span className="aicase__label">Gmail · AI-assisted draft</span>
        <div className="aicase__email-head"><strong>Subject: Weekly Operations — Decisions & Next Actions</strong><span>Draft · review required</span></div>
        <p>Hi team, here’s a quick recap of today’s operations meeting. Acme onboarding is pending the signed access forms, the Meridian proposal is targeted for Thursday afternoon review, and September revenue figures are needed before Friday’s leadership meeting. The vendor check-in will be moved to next Tuesday. I’ll track the agreed actions and follow up on outstanding items. Thanks!</p>
      </section>

      <aside className="aicase__guardrail">
        <strong>Human-in-the-loop guardrail</strong>
        <p>AI assists with synthesis, structure, and drafting. A person reviews names, commitments, deadlines, sensitive information, and the final email before anything is sent or treated as authoritative.</p>
      </aside>

      <div className="aicase__proof">
        <strong>What this demonstrates</strong>
        <p>Meeting support · Gemini / ChatGPT prompting · executive summarization · Google Sheets organization · action-item tracking · Gmail drafting · human review · workflow thinking</p>
      </div>
    </article>
  </SectionWindow>
)
export const WorkflowPanel = () => (
  <SectionWindow label="Executive Inbox & Follow-Up System · Portfolio Demonstration">
    <article style={{ padding: 'clamp(20px, 4vw, 48px)', maxWidth: 980, margin: '0 auto' }}>
      <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .6 }}>Portfolio Demonstration · Fictional inbox data</p>
      <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.05 }}>Executive Inbox & Follow-Up System</h2>
      <p style={{ margin: '0 0 28px', maxWidth: 790, fontSize: 16, lineHeight: 1.65, opacity: .78 }}>A Gmail-centered workflow designed to reduce inbox noise without removing executive control. Messages are triaged by urgency and ownership, decisions are surfaced, routine responses are prepared, and open loops are tracked until they are closed.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(125px,1fr))', gap: 10, marginBottom: 30 }}>
        {['Capture','Triage','Decide','Respond','Track'].map((step, i) => (
          <div key={step} style={{ padding: 15, border: '1px solid color-mix(in srgb, currentColor 14%, transparent)', borderRadius: 14 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 700, opacity: .5 }}>0{i + 1}</span>
            <strong style={{ display: 'block', marginTop: 5, fontSize: 14 }}>{step}</strong>
          </div>
        ))}
      </div>

      <section style={{ marginBottom: 16, padding: 22, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
        <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', opacity: .55 }}>Fictional scenario</p>
        <h3 style={{ margin: '0 0 10px', fontSize: 19 }}>Founder inbox · Monday morning</h3>
        <p style={{ margin: 0, lineHeight: 1.6, opacity: .74 }}>The inbox contains a client escalation, a proposal approval request, a vendor scheduling email, an invoice reminder, and several informational updates. The goal is not simply inbox zero—it is making sure the founder sees the decisions that require judgment while routine work keeps moving.</p>
      </section>

      <div style={{ overflowX: 'auto', marginBottom: 16 }}>
        <div style={{ minWidth: 720, display: 'grid', gap: 8 }}>
          {[
            ['Client escalation: launch delay','Urgent','Executive decision','Flag + brief founder','Today'],
            ['Meridian proposal approval','High','Executive approval','Summarize + surface','Today'],
            ['Vendor asks to reschedule','Normal','VA can handle','Draft + reschedule','Today'],
            ['Invoice reminder','Normal','VA / finance','Verify + route','Tomorrow'],
            ['Industry newsletter','FYI','No action','Archive / reference','—'],
          ].map(([subject, priority, owner, action, follow]) => (
            <div key={subject} style={{ display: 'grid', gridTemplateColumns: '2fr .7fr 1.1fr 1.3fr .7fr', gap: 10, padding: '13px 15px', border: '1px solid color-mix(in srgb, currentColor 11%, transparent)', borderRadius: 12, fontSize: 13, alignItems: 'center' }}>
              <strong>{subject}</strong><span>{priority}</span><span>{owner}</span><span>{action}</span><span>{follow}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 14 }}>
        <section style={{ padding: 20, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 17 }}>Executive decision queue</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, opacity: .74 }}><strong>1. Client escalation</strong> — approve recovery option before response.<br /><strong>2. Meridian proposal</strong> — approve final commercial terms.<br /><br />Everything else can move forward without consuming executive decision time.</p>
        </section>
        <section style={{ padding: 20, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 17 }}>Follow-up tracker</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, opacity: .74 }}><strong>Waiting on client:</strong> signed access forms<br /><strong>Waiting on founder:</strong> proposal approval<br /><strong>Waiting on vendor:</strong> new meeting confirmation<br /><strong>Next review:</strong> end-of-day open-loop check</p>
        </section>
      </div>

      <section style={{ marginTop: 14, padding: 22, border: '1px solid color-mix(in srgb, currentColor 12%, transparent)', borderRadius: 18 }}>
        <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', opacity: .55 }}>AI-assisted drafting example</p>
        <h3 style={{ margin: '0 0 10px', fontSize: 17 }}>Vendor reschedule reply</h3>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, opacity: .74 }}><strong>Draft:</strong> Hi Jordan, thanks for the update. Tuesday works on our side. I’ve moved the check-in and will send the updated calendar invitation shortly. Please let me know if anything changes before then. Best, Camille</p>
        <p style={{ margin: '12px 0 0', fontSize: 12, lineHeight: 1.6, opacity: .58 }}>Routine drafts can be accelerated with Gemini or ChatGPT, but sensitive client responses, commitments, pricing, and executive decisions remain subject to human review and approval.</p>
      </section>

      <section style={{ marginTop: 14, padding: 22, borderLeft: '3px solid currentColor', background: 'color-mix(in srgb, currentColor 4%, transparent)' }}>
        <strong>Daily operating rhythm</strong>
        <p style={{ margin: '8px 0 0', lineHeight: 1.65, opacity: .74 }}>Morning triage → surface urgent decisions → process routine actions → update waiting/follow-up tracker → midday check → end-of-day open-loop review. The objective is a controlled inbox where important commitments stay visible even after the original email leaves the top of the queue.</p>
      </section>

      <div style={{ marginTop: 26 }}>
        <strong>What this demonstrates</strong>
        <p style={{ margin: '8px 0 0', lineHeight: 1.6, opacity: .72 }}>Inbox triage · Gmail workflow thinking · executive judgment boundaries · prioritization · response drafting · follow-up management · AI-assisted communication · confidentiality-aware human review</p>
      </div>
    </article>
  </SectionWindow>
)

function FrameBar({ host, path }: { host: string; path: string }) {
  return (
    <div className="ppanel__bar">
      <span className="ppanel__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="ppanel__url">
        <span className="ppanel__url-host">{host}</span>
        <span className="ppanel__url-path">{path}</span>
      </span>
    </div>
  )
}

/** Matches `pmodal-panel` (420ms). Same-site frames share the portfolio's
 *  main thread, so loading one mid-animation stalled the open by 100ms+. */
const FRAME_DELAY_MS = 440

function LiveFrame({ src, title }: { src: string; title: string }) {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), FRAME_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <div className="ppanel__stage">
      {!ready && <div className="ppanel__skeleton" aria-hidden="true" />}
      {mounted && <iframe
        className="ppanel__iframe"
        src={src}
        title={title}
        loading="eager"
        onLoad={() => setReady(true)}
        data-ready={ready ? 'true' : 'false'}
      />}
    </div>
  )
}
