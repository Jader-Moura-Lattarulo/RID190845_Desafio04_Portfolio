import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { AboutMe } from './components/About/AboutMe'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Projects/>
      <AboutMe/>
    </>
  )
}

export default App