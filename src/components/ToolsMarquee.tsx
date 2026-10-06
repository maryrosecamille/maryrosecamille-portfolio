import { useMemo } from 'react'

type Tool = { name: string; iconPath: string; color?: string }

export const tools: Tool[] = [
  { name: 'Google Workspace', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Gemini', iconPath: '/icons/googleworkspace.svg' },
  { name: 'ChatGPT', iconPath: '/icons/openai.svg', color: '#000000' },
  { name: 'Gmail', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Google Calendar', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Google Drive', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Google Docs', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Google Sheets', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Google Forms', iconPath: '/icons/googleworkspace.svg' },
  { name: 'Apps Script', iconPath: '/icons/googleworkspace.svg' },
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
