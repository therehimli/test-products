import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App
