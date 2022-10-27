import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'

import Resources from './components/Resources'

import './i18n/i18n'
import Error404Page from './components/404'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resources />} />
        <Route path='*' element={<Error404Page />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
