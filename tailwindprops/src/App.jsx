/* eslint-disable no-unused-vars */
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-900  text-black mb-4'>Tailwind Test</h1>
      <Card usernam="Navisha" text="this is her profile"/>
      <Card usernam="Nitish" btnText="click me" text="this is his profile"/>
    </>
  )
}

export default App
