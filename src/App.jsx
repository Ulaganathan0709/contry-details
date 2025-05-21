import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CountryList } from './pages/CountryList'
import { CountryDetails } from './pages/CountryDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element = {<CountryList />} />
      <Route path="/country/:name" element ={<CountryDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
