import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

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
