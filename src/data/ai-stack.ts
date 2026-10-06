import {
  Sparkle,
  Article,
  FilmSlate,
  UsersThree,
  Database,
  ChatCircleDots,
  FlowArrow,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

const BASE = import.meta.env.BASE_URL

export type StackStatus = 'Live' | 'Internal' | 'Beta'
export type StackLogo = { src: string; name: string }
export type StackNode = {
  id: string
  name: string
  what: string
  stack?: string
  status?: StackStatus
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const GOOGLE: StackLogo = { src: `${BASE}icons/googleworkspace.svg`, name: 'Google Workspace' }
const OPENAI: StackLogo = { src: `${BASE}icons/openai.svg`, name: 'ChatGPT' }

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Google Workspace and AI tools applied to executive support, communication, documentation, and follow-through.',
  stack: 'Executive Operations Toolkit',
  children: [
    {
      id: 'workspace',
      Icon: Database,
      name: 'Google Workspace',
      what: 'Core productivity tools for communication, scheduling, documents, collaboration, and structured operations.',
      children: [
        { id: 'gmail-calendar', Icon: ChatCircleDots, logos: [GOOGLE], name: 'Gmail + Calendar', what: 'Communication, scheduling, prioritization, and follow-up workflows.', stack: 'Google Workspace' },
        { id: 'docs-sheets', Icon: Article, logos: [GOOGLE], name: 'Docs + Sheets', what: 'Documentation, trackers, dashboards, SOPs, and structured information.', stack: 'Google Workspace' },
        { id: 'drive-forms', Icon: UsersThree, logos: [GOOGLE], name: 'Drive + Forms', what: 'File organization, information collection, and collaborative workflows.', stack: 'Google Workspace' },
      ],
    },
    {
      id: 'ai-workflows',
      Icon: Sparkle,
      name: 'AI-Assisted Workflows',
      what: 'AI used as an assistant for drafting, summarizing, organizing information, and reducing repetitive knowledge work.',
      children: [
        { id: 'gemini', Icon: FilmSlate, logos: [GOOGLE], name: 'Gemini for Workspace', what: 'AI assistance inside the Google Workspace ecosystem.', stack: 'Gemini · Google Workspace' },
        { id: 'chatgpt', Icon: ChatCircleDots, logos: [OPENAI], name: 'ChatGPT', what: 'Drafting, synthesis, ideation, and workflow support.', stack: 'ChatGPT' },
        { id: 'apps-script', Icon: FlowArrow, logos: [GOOGLE], name: 'Apps Script', what: 'Google Workspace scripting knowledge for workflow and automation use cases.', stack: 'Google Apps Script' },
      ],
    },
  ],
}
