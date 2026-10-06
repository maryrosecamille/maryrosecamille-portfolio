import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/** Basic terms for use of this portfolio website. */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 6, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This website is a professional portfolio provided for informational purposes. You may view and share links to its public pages for legitimate professional purposes.</p>

          <h2>Portfolio demonstrations</h2>\n          <p>Projects labeled as portfolio demonstrations use fictional scenarios or data to illustrate skills and workflow thinking. They are not presented as commissioned client work or verified client results.</p>

          <h2>Ownership</h2>
          <p>Portfolio copy and original demonstration content are presented as Maryrose Camille’s professional materials. Third-party names, logos, software, and trademarks remain the property of their respective owners. The underlying site template remains subject to its repository license.</p>

          <h2>Liability</h2>
          <p>Information on this portfolio is provided as a professional showcase and does not constitute legal, financial, or other professional advice. External services and links are governed by their own terms.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
