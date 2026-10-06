import { Link } from 'react-router-dom'
import { SealCheck, CaretRight, Stack, Robot } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

const BASE = import.meta.env.BASE_URL

/**
 * Home on a phone, the parts the rail and the bento used to carry:
 *
 *   HomeProfile  avatar, name, verified mark, handle and the QuickMenu
 *                (theme + accessibility) - the rail's identity block, laid flat
 *   HomeStats    three proof facts (profile.stats), each named by a glyph so
 *                it reads at a glance
 *   HomeExplore  one shelf card per rail view in a snap row, then the first
 *                testimonial as a video stage
 */

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Executive operations, made visible', desc: 'Three practical demonstrations covering executive organization, meetings, inboxes, and AI-assisted workflows.', img: profile.avatarSrc },
  { n: '02', label: 'Services', to: '/services', title: 'Support that keeps work moving', desc: 'Executive support, Google Workspace, AI-assisted workflows, operations, and CRM support.', Icon: Stack },
  { n: '03', label: 'AI Workflow', to: '/projects', title: 'Meeting-to-Action', desc: 'See how meeting notes become summaries, decisions, action items, and follow-up drafts.', Icon: Robot, accent: true },
  { n: '04', label: 'Experience', to: '/testimonials', title: 'Operations, support & credentials', desc: 'Professional experience backed by Google Workspace, Gemini, and leadership training.', img: `${BASE}placeholders/testimonial-1.jpg` },
  { n: '05', label: 'About', to: '/about', title: `Hi, I'm ${profile.firstName}.`, desc: 'Operations, technical support, Google Workspace, and AI brought into executive support.', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              {'img' in t ? (
                <span className="htile__media"><img className="htile__img" src={t.img} alt="" loading="lazy" /></span>
              ) : (
                <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* A header that links carries its chevron on the title itself. */}
      <div className="hsec">
        <h2 className="hsec__title">
          <Link to="/experience" className="hsec__link">
            Experience & credentials
            <CaretRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </h2>
      </div>
      <Link to="/experience" className="hproof" aria-label="View professional experience and credentials.">
        <span className="hproof__copy">
          <span className="hproof__title">Application support, customer operations, sales, technical support, and Google Workspace training.</span>
          <span className="hproof__meta">Professional background & credentials</span>
        </span>
      </Link>
    </>
  )
}
