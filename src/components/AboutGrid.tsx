import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, Buildings, CalendarCheck, Sparkle } from '@/components/slab'
import { profile } from '@/data/profile'

const CAPABILITIES = [
  { title: 'Executive Support', text: 'Inbox, calendar, meetings, documentation, and follow-through.', Icon: CalendarCheck },
  { title: 'Operations Mindset', text: 'Clear processes, organized information, and dependable coordination.', Icon: Buildings },
  { title: 'Google Workspace', text: 'Practical support across Gmail, Calendar, Drive, Docs, Sheets, and more.', Icon: Briefcase },
  { title: 'AI-Assisted Work', text: 'Gemini and ChatGPT used thoughtfully to support executive workflows.', Icon: Sparkle },
]

export default function AboutGrid() {
  return (
    <section className="about-editorial" aria-labelledby="about-title">
      <section className="ae-hero">
        <div className="ae-hero__copy">
          <p className="ae-kicker">01 · About me</p>
          <h1 id="about-title">Organized support<br />for bigger goals.</h1>
          <p>I’m Camille — a support professional bringing customer-facing operations, technical problem-solving, Google Workspace expertise, and practical AI workflow knowledge into executive support.</p>
        </div>
        <div className="ae-hero__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} />
        </div>
      </section>

      <section className="ae-story">
        <div className="ae-story__copy">
          <p className="ae-kicker">My story</p>
          <h2>From customer operations<br />to executive support.</h2>
          <p>I started my career in customer-facing operations, building experience across sales, technical support, administrative work, and structured problem-solving. Those roles taught me how to communicate clearly, stay organized under pressure, document accurately, and follow through.</p>
          <p>Today, I work as an <strong>Application Support Engineer at Accenture</strong>, supporting Google as part of the Quota Increase team. I’m bringing that operational and technical foundation into Executive Virtual Assistance, with Google Workspace and AI-assisted workflows as key strengths.</p>
          <p>My goal is simple: help executives, founders, consultants, and business owners spend less time managing operational noise and more time on the work that matters most.</p>
        </div>
        <div className="ae-story__proof">
          <div><strong>5+</strong><span>Years across customer operations, sales & support</span></div>
          <div><strong>Google</strong><span>Workspace + Gemini training & badges</span></div>
          <div><strong>AI</strong><span>Workflow foundations & practical application</span></div>
          <div><strong>Top Agent</strong><span>Performance recognition in sales & support</span></div>
        </div>
        <aside className="ae-values">
          <p className="ae-kicker">What drives me</p>
          {CAPABILITIES.map(({ title, text, Icon }) => (
            <div className="ae-value" key={title}><span><Icon size={20} weight="regular" /></span><div><strong>{title}</strong><p>{text}</p></div></div>
          ))}
          <blockquote>“Skills can be taught,<br />attitude is in-born.”</blockquote>
          <div className="ae-signature" aria-label="Camille">Camille</div>
        </aside>
      </section>

      <section className="ae-foundation">
        <div className="ae-foundation__visual"><img src={profile.hero.portraitSrc} alt="" aria-hidden="true" /></div>
        <div className="ae-foundation__copy">
          <p className="ae-kicker">Education & background</p>
          <h2>A strong foundation<br />for long-term impact.</h2>
          <div className="ae-timeline">
            <div><strong>BS Business Administration</strong><span>Major in Human Resource Management · 2026</span></div>
            <div><strong>Management Accounting</strong><span>Undergraduate studies · 2019–2021</span></div>
            <div><strong>Leadership & professional training</strong><span>Company and theater organization experience</span></div>
          </div>
          <Link to="/experience">View experience & credentials <ArrowUpRight size={13} weight="bold" /></Link>
        </div>
      </section>
    </section>
  )
}
