/**
 * Portfolio identity and primary contact information.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Maryrose Camille Acyatan',
  firstName: 'Camille',
  handle: '@maryrose-camille-va',
  role: 'AI-Powered Executive VA',
  avatarSrc: '/avatar.svg',
  verifiedLabel: 'Google Workspace & AI workflow trained',
  email: 'maryrosecamille.va@gmail.com',
  location: 'Philippines · GMT+8',
  stats: [
    { value: '5+ yrs', label: 'Customer Operations', Icon: Briefcase },
    { value: 'Google', label: 'Workspace & Gemini', Icon: SealCheck },
    { value: 'GMT+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: {
    line1: 'AI-Powered Executive VA',
    line2: 'Google Workspace & Workflow Automation | Executive Operations',
  },
  hero: {
    body: 'I combine executive support, customer-facing operations, technical support, Google Workspace expertise, and AI workflow knowledge to help CEOs, founders, startup executives, consultants, and small-business owners work more efficiently.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Maryrose Camille Acyatan',
  },
  socials: [
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/maryrose-camille-va/',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
