import { useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

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
      <LiveFrame src="/placeholders/sample-plan.html" title="Sample document" />
    </div>
  )
}

/** `src` is a local page framed in the panel; `path` is what the fake
 *  address bar shows. Point these at your own pages. */
type Build = { id: string; label: string; src: string; path: string; Icon: Icon }

const BUILDS: Build[] = [
  { id: 'ticketing', label: 'Executive Command Center — Portfolio Demonstration', src: '/placeholders/sample-plan.html?doc=1', path: '/demo/executive-command-center', Icon: Ticket },
  { id: 'framework', label: 'AI Meeting-to-Action Workflow — Portfolio Demonstration', src: '/placeholders/sample-plan.html?doc=2', path: '/demo/meeting-to-action', Icon: Robot },
  { id: 'workflow', label: 'Executive Inbox & Follow-Up System — Portfolio Demonstration', src: '/placeholders/sample-plan.html?doc=3', path: '/demo/inbox-follow-up', Icon: FlowArrow },
]

/** One build, framed, open on arrival. */
function BuildPanel({ build }: { build: Build }) {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar host="maryrose-camille-va" path={build.path} />
      <LiveFrame src={build.src} title={build.label} />
    </div>
  )
}
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
  <SectionWindow label="AI Meeting-to-Action Workflow · Portfolio Demonstration">
    <article style={{ padding: 'clamp(20px, 4vw, 48px)', maxWidth: 980, margin: '0 auto' }}>
      <p style={{ margin: '0 0 8px', fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .6 }}>Portfolio Demonstration · Fictional meeting data</p>
      <h2 style={{ margin: '0 0 14px', fontSize: 'clamp(28px, 4vw, 46px)', lineHeight: 1.05 }}>AI Meeting-to-Action Workflow</h2>
      <p style={{ margin: '0 0 28px', maxWidth: 780, fontSize: 16, lineHeight: 1.65, opacity: .78 }}>A practical executive-support workflow showing how meeting notes can be transformed with Gemini or ChatGPT into a concise executive summary, decision log, assigned action items, and a ready-to-review follow-up email.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: 10, marginBottom: 30 }}>
        {['Meeting notes','AI synthesis','Decisions','Action items','Follow-up'].map((step, i) => (
          <div key={step} style={{ padding: 15, border: '1px solid color-mix(in srgb, currentColor 14%, transparent)', borderRadius: 14 }}>
            <span style={{ display: 'block', fontSize: 11, fontWeight: 700, opacity: .5 }}>0{i + 1}</span>
            <strong style={{ display: 'block', marginTop: 5, fontSize: 14 }}>{step}</strong>
          </div>
        ))}
      </div>

      <section style={{ marginBottom: 18, padding: 22, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
        <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', opacity: .55 }}>Fictional scenario</p>
        <h3 style={{ margin: '0 0 10px', fontSize: 19 }}>Weekly Operations Meeting · Northstar Consulting</h3>
        <p style={{ margin: 0, lineHeight: 1.6, opacity: .74 }}>The founder and operations team review a client onboarding delay, an upcoming proposal deadline, and preparation for Friday’s leadership review. The executive needs the important information without rereading a full transcript.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14 }}>
        <section style={{ padding: 20, border: '1px solid color-mix(in srgb, currentColor 12%, transparent)', borderRadius: 18 }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 17 }}>Raw meeting notes</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, opacity: .7 }}>Acme onboarding is waiting on signed access forms. Camille to follow up with the client contact today. Founder wants the Meridian proposal ready by Thursday afternoon for review. Revenue dashboard needs the September figures before Friday’s leadership meeting. Move the vendor check-in to next Tuesday.</p>
        </section>
        <section style={{ padding: 20, border: '1px solid color-mix(in srgb, currentColor 12%, transparent)', borderRadius: 18 }}>
          <h3 style={{ margin: '0 0 10px', fontSize: 17 }}>AI processing instruction</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, opacity: .7 }}>Summarize the meeting for an executive. Separate confirmed decisions from action items. For every action, identify the owner and deadline only when explicitly stated. Flag missing information instead of inventing it. Draft a concise follow-up email for review.</p>
        </section>
      </div>

      <section style={{ marginTop: 14, padding: 22, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 18 }}>Executive summary</h3>
        <p style={{ margin: 0, lineHeight: 1.65, opacity: .75 }}>Acme onboarding remains blocked by unsigned access forms. The Meridian proposal is the immediate deliverable and should be ready Thursday afternoon for founder review. September revenue figures are needed before Friday’s leadership review. The vendor check-in will move to next Tuesday.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14, marginTop: 14 }}>
        <section style={{ padding: 20, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 17 }}>Decisions captured</h3>
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8, opacity: .74 }}>
            <li>Meridian proposal reviewed before submission.</li>
            <li>Vendor check-in moved to next Tuesday.</li>
            <li>September revenue figures included in Friday’s review.</li>
          </ul>
        </section>
        <section style={{ padding: 20, borderRadius: 18, background: 'color-mix(in srgb, currentColor 5%, transparent)' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: 17 }}>Action tracker</h3>
          <div style={{ fontSize: 14, lineHeight: 1.75, opacity: .74 }}>
            <strong>Camille</strong> — Follow up on Acme access forms · Today<br />
            <strong>Proposal owner</strong> — Prepare Meridian proposal · Thursday PM<br />
            <strong>Finance owner</strong> — Add September revenue figures · Before Friday<br />
            <strong>Camille</strong> — Reschedule vendor check-in · Next Tuesday
          </div>
        </section>
      </div>

      <section style={{ marginTop: 14, padding: 22, borderLeft: '3px solid currentColor', background: 'color-mix(in srgb, currentColor 4%, transparent)' }}>
        <h3 style={{ margin: '0 0 10px', fontSize: 17 }}>Follow-up email draft</h3>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, opacity: .74 }}><strong>Subject: Weekly Operations — Decisions & Next Actions</strong><br /><br />Hi team, here’s a quick recap of today’s operations meeting. Acme onboarding is pending the signed access forms, the Meridian proposal is targeted for Thursday afternoon review, and September revenue figures are needed before Friday’s leadership meeting. The vendor check-in will be moved to next Tuesday. I’ll track the agreed actions and follow up on outstanding items. Thanks!</p>
      </section>

      <div style={{ marginTop: 26 }}>
        <strong>What this demonstrates</strong>
        <p style={{ margin: '8px 0 0', lineHeight: 1.6, opacity: .72 }}>Meeting support · Gemini/ChatGPT prompting · executive summarization · decision logging · action-item tracking · follow-up drafting · human review before sending</p>
      </div>
    </article>
  </SectionWindow>
)
export const WorkflowPanel = () => <BuildPanel build={BUILDS[2]} />

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
