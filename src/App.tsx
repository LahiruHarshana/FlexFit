import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Story from './Components/Story/Story'
import Services from './Components/Services/Services'
import Gallery from './Components/Gallery/Gallery'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Story />
      <Services />
      <Gallery />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
