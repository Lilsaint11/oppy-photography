import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import About from './pages/about'
import Albums from './pages/albums'
import Contact from './pages/contact'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import SectionPages from './pages/sectionPages'


function App() {

  return (
    <div className='flex flex-col h-screen justify-between  gap-20'>
      <Router>
        <span className='flex flex-col gap-10 mx-10'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/albums' element={<Albums/>}/>
            <Route path='/section-pages/:section' element={<SectionPages/>}/>
          </Routes>
        </span>
        <Footer />
      </Router>
    </div>
  )
}

export default App
