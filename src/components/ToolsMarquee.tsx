import { useMemo } from 'react'

const BASE = import.meta.env.BASE_URL

type Tool = { name: string; iconPath: string; color?: string }

export const tools: Tool[] = [
  { name: 'Google Workspace', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Gemini', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'ChatGPT', iconPath: `${BASE}icons/openai.svg`, color: '#000000' },
  { name: 'Gmail', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Google Calendar', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Google Drive', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Google Docs', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Google Sheets', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Google Forms', iconPath: `${BASE}icons/googleworkspace.svg` },
  { name: 'Apps Script', iconPath: `${BASE}icons/googleworkspace.svg` },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])
  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          const useMask = tool.iconPath.endsWith('.svg') && !!tool.color
          return <div key={`${tool.name}-${i}`} className="tools-marquee__item">
            <span className="tools-marquee__tile">
              {useMask ? <span className="tools-marquee__icon" style={{ ['--icon-url' as string]: `url('${tool.iconPath}')`, ['--brand-color' as string]: tool.color ?? 'var(--navy)' }} /> : <img className="tools-marquee__img" src={tool.iconPath} alt="" aria-hidden="true" loading="lazy" decoding="async" width={20} height={20} />}
            </span>
            <span className="tools-marquee__label">{tool.name}</span>
          </div>
        })}
      </div>
      <ul className="sr-only">{tools.map((t) => <li key={t.name}>{t.name}</li>)}</ul>
    </section>
  )
}
