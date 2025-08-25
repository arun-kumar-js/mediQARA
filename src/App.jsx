import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyChoose from './components/WhyChoose'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Services />
        <Industries />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
