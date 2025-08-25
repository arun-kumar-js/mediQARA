import React from 'react'

function Services() {
  const qa = [
    'ISO 13485 QMS Implementation & Maintenance',
    'Internal Quality Audits',
    'Supplier Quality Audits',
    'CAPA Management',
    'Risk Management (ISO 14971)',
    'Complaint Handling & Investigation',
    'Document & Record Control'
  ]
  const ra = [
    'CE Marking Support',
    'MDR/IVDR Compliance',
    'FDA 21 CFR 820 Compliance',
    'Product Registration (India & Overseas)',
    'DMF/DHF Documentation',
    'Regulatory Gap Assessment'
  ]
  const training = [
    'ISO 13485 Training',
    'Internal Auditor Training',
    'CAPA & Risk Workshops',
    'Audit Preparedness Training'
  ]
  const advisory = [
    'Audit Readiness & Mock Audits',
    'Regulatory Strategy Planning',
    'Post-Market Surveillance (PMS) Support',
    'Change Management Support',
    'Quality Culture Development'
  ]

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {title: 'Quality Assurance (QA) Services', items: qa},
            {title: 'Regulatory Affairs (RA) Services', items: ra},
            {title: 'Training & Capacity Building', items: training},
            {title: 'Advisory & Support Services', items: advisory},
          ].map((block, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">{block.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-left">
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
