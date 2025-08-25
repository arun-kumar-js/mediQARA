import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center space-y-2">
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <p>GSTIN: 33BRNPS7024K1ZC | MSME/Udyam No.: UDYAM-TN-37-0044679</p>
        <p>© 2025 MediQARA Tech. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
