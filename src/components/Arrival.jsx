import Pic1 from '../assets/Rectangle15.png'
import Pic2 from '../assets/image15.png'
import Pic3 from '../assets/image16.png'
import Pic4 from '../assets/image17.png'


const Arrival = () => {
  return (
   <>
      <div className="container2">
         <div className="text">
            <h2><i>Colorfull New Arrivals
                </i>
            </h2>
           <a href="#">View All</a>
         </div>
         <div className="cards-container">
  <div className="card"><img src ={Pic1}alt=""/>
     <div className="text3">
        <h9>
            <i>
                Blue lilly</i><br />
                more information  →</h9></div></div>
  <div className="card"><img src={Pic2} alt="" /></div>
  <div className="card"><img src={Pic3} alt="" /></div>
  <div className="card"><img src={Pic4} alt="" /></div>
</div>
      </div>

   </>
  )
}

export default Arrival
