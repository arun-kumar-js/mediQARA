import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-3xl mx-auto">
          <form className="bg-white p-6 rounded shadow space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded" />
            <textarea placeholder="Message/Requirement" rows="4" className="w-full border p-2 rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
          </form>
          <div className="mt-8 text-center">
            <p><strong>Phone:</strong> +91 8122590434</p>
            <p><strong>Email:</strong> info@mediqaratech.com</p>
            <p><strong>Address:</strong> 4/198 E, Pattumuthuiyyanarkovil Street, Arunachalapuram, Tenkasi – 627862, Tamilnadu</p>
            <p><strong>Business Hours:</strong> Mon – Sat: 9:00 AM – 6:00 PM IST</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
