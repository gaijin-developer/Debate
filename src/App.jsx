import { useState } from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import Navbar from './ui/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HomePage/>      
    </>
  )
}

export default App
