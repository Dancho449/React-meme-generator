import { useState } from 'react'
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"

function App() {
  
  return (
    <div className='all-container'>
      <Header />
      <Meme />
      <Footer />
    </div>
  )
}

export default App
