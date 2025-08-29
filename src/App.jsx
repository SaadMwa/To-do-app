import './App.css'
import Navbar from './components/navbar'
import './components/navbar.css'
import './components/Feature.css'
import Feature from './components/feature'
import Search from './components/Search'
import './components/Search.css'
import Arrival from './components/Arrival'
import './components/Arrival.css'
import  Plants from './components/Plants'
import './components/Plants.css'
import './components/Last.css'
import Last from './components/Last'





function App() {

  return (
    <>
      <div>
        <Navbar />
       <Feature />
       <Search />
       <Arrival />
       <Plants />
       <Last/>

       
       
      </div>
    </>
  )
}

export default App
