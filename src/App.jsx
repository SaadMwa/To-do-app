// App.jsx

import React from 'react'
import './App.css'

// Components + their CSS
import Navbar from './components/Navbar'
import './components/Navbar.css'

import Feature from './components/Feature'
import './components/Feature.css'

import Arrival from './components/Arrival'
import './components/Arrival.css'

import Plants from './components/Plants'
import './components/Plants.css'

import Search from './components/Search'
import './components/Search.css'

import Last from './components/Last'
import './components/Last.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feature />
      <Arrival />
      <Plants />
      <Search />
      <Last />
    </div>
  )
}

export default App
