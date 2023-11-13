import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import NewsBoard from './Component/NewsBoard'
import Footer from './Footer'
import Hero from './Hero'

const App = () => {
  const [category, setCategory] = useState("general")
  return (
    <div className='text-center'>
      <Navbar setCategory={setCategory} /> 
      <Hero />
      <NewsBoard category={category}/>
      <Footer />

    </div>
  )
}

export default App