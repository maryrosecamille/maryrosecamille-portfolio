import { Link } from 'react-router-dom'
import { ArrowUpRight, Briefcase, Gear, Robot, SealCheck } from '@/components/slab'
import { profile } from '@/data/profile'
import { HomeProfile } from './HomeMobile'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useIsPhone } from '@/hooks/useMediaQuery'

const CAPABILITIES = [
  { Icon: Briefcase, title: 'Executive Support', text: 'Inbox, calendar, meetings, and follow-ups' },
  { Icon: Gear, title: 'Operations & Systems', text: 'Processes, SOPs, tracking, and documentation' },
  { Icon: SealCheck, title: 'Google Workspace', text: 'Gmail, Calendar, Drive, Docs, Sheets, and more' },
  { Icon: Robot, title: 'AI Automation', text: 'Turn repetitive work into assisted automations' },
]

export default function Home() {
  useScrollReveal()
  const phone = useIsPhone()
  const { hero } = profile

  return (
    <section className="editorial-home" aria-labelledby="home-title">
      {phone && <HomeProfile />}

      <section className="eh-hero">
        <div className="eh-hero__image" aria-hidden="true">
          <img src={hero.portraitSrc} alt="" />
        </div>
        <div className="eh-hero__shade" />
        <div className="eh-hero__meta">
          <span>Maryrose Camille Acyatan</span>
          <span>Executive VA · Google Workspace · AI Automation</span>
        </div>
        <div className="eh-hero__copy">
          <p className="eh-kicker">Executive operations · thoughtfully organized</p>
          <h1 id="home-title">Executive operations,<br />made visible.</h1>
          <h2>AI-Powered Executive VA</h2>
          <p className="eh-subline">Google Workspace & Workflow Automation · Executive Operations</p>
          <p className="eh-intro">I help CEOs, founders, and busy professionals stay organized, streamline operations, and get more done through structured systems, Google Workspace, and practical AI support.</p>
          <div className="eh-actions">
            <Link to="/projects">View my work <ArrowUpRight size={14} weight="bold" /></Link>
            <a href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={14} weight="bold" /></a>
          </div>
        </div>
      </section>

      <section className="eh-capabilities" aria-label="Core capabilities">
        {CAPABILITIES.map(({ Icon, title, text }) => (
          <Link to={title === 'AI Automation' ? '/ai-workflows' : title === 'Google Workspace' ? '/experience' : '/services'} className="eh-capability" key={title}>
            <Icon size={25} weight="duotone" />
            <span><strong>{title}</strong><small>{text}</small></span>
          </Link>
        ))}
      </section>

      <section className="eh-about">
        <div className="eh-about__visual">
          <img src={hero.portraitSrc} alt={hero.portraitAlt} />
        </div>
        <div className="eh-about__copy">
          <span className="eh-section-no">01</span>
          <p className="eh-kicker">About me</p>
          <h2>Organized support<br />for bigger goals.</h2>
          <p>{hero.body}</p>
          <div className="eh-proof">
            <span><strong>5+</strong><small>Years in BPO Sales<br />& Support</small></span>
            <span><strong>Google</strong><small>Workspace + Gemini<br />Training</small></span>
            <span><strong>AI</strong><small>Workflow<br />Knowledge</small></span>
          </div>
          <Link className="eh-textlink" to="/about">More about me <ArrowUpRight size={13} weight="bold" /></Link>
        </div>
      </section>

      <section className="eh-automation">
        <div className="eh-section-head">
          <div><p className="eh-kicker">Featured project</p><h2>Executive Meeting Automation</h2><p>From meeting notes to organized follow-ups — with human review.</p></div>
          <Link to="/projects">View full automation <ArrowUpRight size={13} weight="bold" /></Link>
        </div>
        <div className="eh-auto-canvas">
          <div className="eh-node"><small>Trigger</small><strong>Meeting Notes</strong><em>New notes added</em></div>
          <i>→</i>
          <div className="eh-node"><small>AI Agent</small><strong>Gemini</strong><em>Extract decisions + actions</em></div>
          <i>→</i>
          <div className="eh-node"><small>Router</small><strong>Route Output</strong><em>Identify action type</em></div>
          <i>→</i>
          <div className="eh-auto-actions"><div className="eh-node"><small>Action</small><strong>Google Sheets</strong><em>Create task rows</em></div><div className="eh-node"><small>Action</small><strong>Gmail</strong><em>Create draft</em></div></div>
          <i>→</i>
          <div className="eh-node"><small>Approval</small><strong>Human Review</strong><em>Verify before send</em></div>
        </div>
      </section>

      <section className="eh-projects">
        <div className="eh-projects__title"><p className="eh-kicker">Featured work</p><h2>Selected<br />Projects</h2><Link className="eh-textlink" to="/projects">View all projects <ArrowUpRight size={13} weight="bold" /></Link></div>
        {[
          ['01','Executive Command Center','Google Workspace · Operations'],
          ['02','AI Meeting-to-Action Automation','Gemini · Sheets · Gmail'],
          ['03','Executive Inbox & Follow-Up','Gmail · Prioritization · Follow-through'],
        ].map(([n,title,meta]) => <Link to="/projects" className="eh-project" key={n}><span>{n}</span><div className="eh-project__art"><span>{title}</span></div><strong>{title}</strong><small>{meta}</small></Link>)}
      </section>

      <section className="eh-close">
        <p className="eh-kicker">Work together</p>
        <h2>More clarity. Better follow-through.<br />Less operational noise.</h2>
        <a href={`mailto:${profile.email}`}>Email Maryrose Camille <ArrowUpRight size={15} weight="bold" /></a>
        <Link to="/contact">Or connect on LinkedIn</Link>
      </section>
    </section>
  )
}
