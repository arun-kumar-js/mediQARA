import React from 'react'

function WhyChoose() {
  const points = [
    '17+ Years of QA & RA Experience',
    'Proven Audit Success',
    'Global Regulatory Knowledge',
    'Tailored Consultancy',
    'Hands-on with ISO 13485, ISO 14971'
  ]

  return (
    <section id="why-choose" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose MediQARA Tech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {points.map((p, i) => (
            <div key={i} className="bg-blue-100 p-4 rounded">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
