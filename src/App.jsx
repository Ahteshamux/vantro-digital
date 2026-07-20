import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import HowWeWork from './pages/HowWeWork'
import PackagesPage from './pages/PackagesPage'
import Work from './pages/Work'
import CaseStudyPage from './pages/CaseStudyPage'
import About from './pages/About'
import Contact from './pages/Contact'
import IndexPage from './pages/IndexPage'
import SubPage from './pages/SubPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Clusters: hub page + one template-driven page per child */}
          <Route path="/services" element={<IndexPage kind="services" />} />
          <Route path="/services/:slug" element={<SubPage kind="services" />} />

          <Route path="/industries" element={<IndexPage kind="industries" />} />
          <Route path="/industries/:slug" element={<SubPage kind="industries" />} />

          {/* Tier deep-links land on the pricing page — the tiers live there
              together, and splitting them would weaken the comparison. */}
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:slug" element={<PackagesPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
