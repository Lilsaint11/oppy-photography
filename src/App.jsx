import { BrowserRouter as Router} from 'react-router-dom'
import AnimatedRoutes from './pages/animatedRoutes'

function App() {

  return (
    <div className='flex flex-col h-screen justify-between  gap-20'>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App
