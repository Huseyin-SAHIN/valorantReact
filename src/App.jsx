
import Header from './components/Header'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import GlobalContext from './Context/GlobalContext'
import Footer from './components/Footer'
import NoPage from './components/NoPage'
import Home from './components/Home'
import './Style/main.css'
import Agents from './components/Agents'
import ExamineAgent from './components/ExamineAgent'
import Weapons from './components/Weapons'
import ExamineWeapons from './components/ExamineWeapons'
import Maps from './components/Maps'
import { useEffect } from 'react'
import PlayingCards from './components/PlayingCards'
import ExaminePlayingcard from './components/ExaminePlayingcard'
import Sprays from './components/Sprays'
import ExamineSpray from './components/ExamineSpray'
import Bundles from './components/Bundles'
import ExamineBundle from './components/ExamineBundle'

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);






  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:uuid" element={<ExamineAgent />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/weapons/:uuid" element={<ExamineWeapons />} />
        <Route path="/playingcards" element={<PlayingCards />} />
        <Route path="/playingcards/:uuid" element={<ExaminePlayingcard />} />
        <Route path="/sprays" element={<Sprays />} />
        <Route path="/sprays/:uuid" element={<ExamineSpray />} />
        <Route path="/bundles" element={<Bundles />} />
        <Route path="/bundles/:uuid" element={<ExamineBundle />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </GlobalContext>
  )
}

export default App
