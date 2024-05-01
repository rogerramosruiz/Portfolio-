import React from 'react'
import Header from './views/Header'
import About from './views/About'
import Projects from './views/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <div className='bg-gradient-to-b from-[#011] to-slate-100 text-white'>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
