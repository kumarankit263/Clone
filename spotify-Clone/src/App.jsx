import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Callback from './components/Callback'

const App = () => (
  <Router>
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
)

export default App
