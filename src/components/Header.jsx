import React from 'react'
import { CheckCircle } from 'lucide-react'

function Header() {
  return (
    <header className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">MediQARA Tech</h1>
        <p className="mt-2 text-lg">Your Trusted Partner in Medical Device Quality & Regulatory Excellence</p>
        <p className="mt-4 max-w-2xl mx-auto">
          At MediQARA Tech, we help medical device and healthcare companies achieve seamless Quality Assurance (QA) and Regulatory Affairs (RA) compliance. 
          With over 17 years of hands-on experience, we deliver solutions that keep your business audit-ready, globally compliant, and quality-driven.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            'ISO 13485 & MDR Compliance Support',
            'Regulatory Documentation & Submissions',
            'Internal & Supplier Audits',
            'Risk Management & CAPA Implementation'
          ].map((text, i) => (
            <div key={i} className="flex items-center justify-center space-x-2">
              <CheckCircle className="text-green-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
