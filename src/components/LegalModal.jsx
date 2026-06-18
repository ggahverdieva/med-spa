const docs = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      ['Your privacy matters', 'SRQ Med Spa ("we", "us") respects your privacy. This policy explains what information we collect through this website and how we use it. By using the site or submitting a consultation request, you agree to this policy.'],
      ['Information we collect', 'When you request a consultation or join our newsletter, we collect details you provide such as your name, phone number, email, and treatment interests. We also collect basic, non-identifying analytics (pages viewed, device type) to improve the site.'],
      ['How we use it', 'We use your information only to contact you about your consultation, schedule appointments, respond to questions, and — if you opt in — send occasional offers and news. We never sell your personal information.'],
      ['Protected health information', 'Any health-related details you share are kept confidential and handled in line with applicable medical privacy laws. We do not collect health information through this website beyond your stated treatment interests.'],
      ['Data sharing', 'We share information only with trusted service providers (e.g., scheduling, email) who help us operate, and only as needed. We may disclose information if required by law.'],
      ['Your choices', 'You may opt out of marketing emails at any time using the unsubscribe link, or by contacting us. To request access to or deletion of your data, email info@srqmedspa.com.'],
      ['Contact', 'Questions about this policy? Email info@srqmedspa.com or call 941·779·3004.'],
    ],
  },
  terms: {
    title: 'Terms of Service',
    body: [
      ['Acceptance', 'By accessing this website you agree to these Terms. If you do not agree, please do not use the site.'],
      ['Not medical advice', 'All content is for general informational purposes only and is not medical advice. Results vary by individual. A consultation with a licensed provider is required before any treatment.'],
      ['Appointments & consultations', 'Consultation requests submitted through this site are requests only and are not confirmed until our team contacts you. Treatment eligibility is determined during your in-person consultation.'],
      ['Intellectual property', 'All text, images, logos, and design on this site are owned by SRQ Med Spa and may not be copied or reused without written permission.'],
      ['Limitation of liability', 'The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, SRQ Med Spa is not liable for any damages arising from use of the site.'],
      ['Changes', 'We may update these Terms at any time. Continued use of the site means you accept the current version.'],
      ['Contact', 'Questions? Email info@srqmedspa.com or call 941·779·3004.'],
    ],
  },
  disclaimer: {
    title: 'Medical Disclaimer',
    body: [
      ['General information only', 'The treatments, results, and information described on this website are provided for general educational purposes and do not constitute medical advice, diagnosis, or treatment.'],
      ['Individual results vary', 'Before-and-after imagery and testimonials are illustrative. Outcomes depend on your individual health, skin, and goals, and cannot be guaranteed.'],
      ['Consult a professional', 'Always consult a qualified, licensed medical provider before beginning any aesthetic, wellness, or weight-management treatment, especially if you are pregnant, nursing, or have a medical condition.'],
      ['Imagery', 'Some imagery on this site is illustrative and may include digitally created or enhanced photographs for demonstration purposes.'],
      ['Contact', 'For questions about treatments and suitability, please book a complimentary consultation: 941·779·3004.'],
    ],
  },
}

const tabs = [['privacy', 'Privacy'], ['terms', 'Terms'], ['disclaimer', 'Disclaimer']]

export default function LegalModal({ doc, onClose, onSwitch }) {
  if (!doc) return null
  const data = docs[doc]
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal legal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-x" onClick={onClose} aria-label="Close">×</button>
        <div className="legal-head">
          <div className="eyebrow"><span className="bar" />Good to know</div>
          <h3>{data.title}</h3>
          <div className="legal-tabs">
            {tabs.map(([k, l]) => (
              <button key={k} className={`legal-tab ${doc === k ? 'on' : ''}`} onClick={() => onSwitch(k)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="legal-body">
          {data.body.map(([h, p]) => (
            <div className="legal-sec" key={h}>
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
          <div className="legal-foot">Last updated June 2026 · SRQ Med Spa · 1473 Main Street, Sarasota, FL 34236</div>
        </div>
      </div>
    </div>
  )
}
