import React from 'react'
import Header from './views/Header'
import About from './views/About'
import Projects from './views/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <div className='bg-gradient-to-br from-black to-gray-950'>
        <Header />
      </div>
      <div className='bg-gradient-to-b md:bg-gradient-to-br from-black from-10% to-40%  to-white text-white'>
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
