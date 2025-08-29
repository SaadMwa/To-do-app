import './App.css'
import Navbar from './compnents/navbar'
import './compnents/navbar.css'
import './compnents/Feature.css'
import Feature from './compnents/feature'
import Search from './compnents/Search'
import './compnents/Search.css'
import Arrival from './compnents/Arrival'
import './compnents/Arrival.css'
import  Plants from './compnents/Plants'
import './compnents/Plants.css'
import './compnents/Last.css'
import Last from './compnents/Last'





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
