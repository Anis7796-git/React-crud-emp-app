import { useState } from 'react'

import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Center from './components/center/Center';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Header/>
    <Center/>
    <Footer/>
    </>
  )
}

export default App
