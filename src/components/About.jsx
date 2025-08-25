import React from 'react'

function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to MediQARA Tech</h2>
        <p className="max-w-3xl mx-auto mb-6">
          MediQARA Tech is a professional consulting firm specializing in Medical Device Quality Assurance and Regulatory Affairs, committed to helping manufacturers, distributors, and healthcare organizations meet national and international standards including ISO 13485, ISO 14971, CDSCO, MDR, and FDA 21 CFR 820.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold">Mission</h3>
            <p>Empower companies with robust quality systems and regulatory compliance strategies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Vision</h3>
            <p>Be recognized as the most trusted QA & RA consultancy in the medical device industry.</p>
          </div>
        </div>
        <div className="mt-6">
          <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
            “After 17+ years in Medical Devices & Pharmaceuticals, I founded MediQARA Tech with one goal—to make compliance simpler, audits smoother, and quality culture stronger for companies of all sizes.”
          </blockquote>
          <p className="mt-2 font-semibold">— Selvaraj Kumar, Founder and QA & RA Consultant</p>
        </div>
      </div>
    </section>
  )
}

export default About
