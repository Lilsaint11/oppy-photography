import {Routes,Route,useLocation } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'
import About from '../pages/about'
import Albums from '../pages/albums'
import Contact from '../pages/contact'
import Home from '../pages/home'
import Portfolio from '../pages/portfolio'
import SectionPages from '../pages/sectionPages'
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation()
    return ( 
        <AnimatePresence>
            <Header />
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/albums' element={<Albums/>}/>
                <Route path='/section-pages/:section' element={<SectionPages/>}/>
            </Routes>
            <Footer />
        </AnimatePresence>
     );
}
 
export default AnimatedRoutes;