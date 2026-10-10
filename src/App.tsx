import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { trackPage } from './analytics'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollTop } from './components/ScrollTop'
import { Home } from './pages/Home'
import { ModelDetail } from './pages/ModelDetail'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    trackPage(`${pathname}${hash}`)
  }, [pathname, hash])

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models/:slug" element={<ModelDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  )
}
