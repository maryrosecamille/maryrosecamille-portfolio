import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/** Privacy notice for this portfolio. */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 6, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This notice applies to the Maryrose Camille portfolio website and the contact options provided on it.</p>

          <h2>What is collected</h2>
          <p>If you contact me through the form, the site processes the name, email address, and message you provide. When no form backend is configured, the form opens your own email application instead of storing the message on this site.</p>

          <h2>How it is used</h2>
          <p>Contact information is used to respond to inquiries and discuss potential work or professional opportunities. I do not use this portfolio to sell contact information.</p>

          <h2>How long it is kept</h2>
          <p>If you send information by email, it may remain in the relevant email account as part of normal correspondence. You may contact me at the address below to request deletion of correspondence I control.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
