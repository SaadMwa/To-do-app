import Searchi from '../assets/Search2.png'
import Group  from '../assets/group.png'




function Search() {
  return (
    <>
     <div className="container">
         <div className="div">
            <img src={Group} alt="icon" />
            <input type="text" 
            placeholder="Search Flowers"/>
            <div className="icon2">
 <img src={Searchi} alt="icon2" />
            </div>
      
         </div>
        </div> 
</>
  )
}

export default Search
