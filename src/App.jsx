import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'

import Resources from './components/Resources'

import './i18n/i18n'
import Error404Page from './components/404'
import Error403Page from './components/403'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/resource"
          element={
            <PrivateRoute>
              <Resources />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error404Page />} />
        <Route path="/403" element={<Error403Page />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
