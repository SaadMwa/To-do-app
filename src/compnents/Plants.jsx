
import Picture1 from '../assets/image18.png'
import Picture2 from '../assets/image19.png'
import Picture3 from '../assets/image20.png'

const Plants = () => {
  return (
    <>
          <div className="container3">
             <div className="text">
                <h2><i>Plants Stands
                    </i>
                </h2>
               <a href="#">View All</a>
             </div>
             <div className="cards-container2">
      <div className="card2"><img src={Picture1}alt=""/></div>
      <div className="card2"><img src={Picture2} alt="" /></div>
      <div className="card2"><img src={Picture3} alt="" /></div>
    </div>
    
          </div></>
  )
}

export default Plants
