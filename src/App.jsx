import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'
function App () {
  return (
    <>
      <BrowserRouter>
        <Header />

        {/* Footer */}
      </BrowserRouter>
    </>
  )
}
export default App
