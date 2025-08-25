import React from 'react'

function Industries() {
  const industries = [
    'Medical Device Manufacturers',
    'Diagnostic & Laboratory Equipment Makers',
    'Pharmaceutical Packaging Companies',
    'Healthcare Product Distributors',
    'Start-ups entering the Medical Device Market'
  ]

  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <li key={i} className="bg-white p-4 rounded shadow">{ind}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Industries
