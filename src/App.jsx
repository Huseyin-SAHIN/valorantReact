
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:uuid" element={<ExamineAgent />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/weapons/:uuid" element={<ExamineWeapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </GlobalContext>
  )
}

export default App
