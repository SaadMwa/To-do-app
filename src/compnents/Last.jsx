import Services from '../assets/image21.png'
import Map from '../assets/map.png'


const footer = () => {
  return (
   <>
   <div className="service">
     <div className="card5">
       <img src={Services} alt="" />
         <div className="card5-Text">
          <h4>Free Shopping Services</h4>
          <p>*only for the same region</p>
         </div>
          <div className="contact">
                      <h4>
  <i className="fa-solid fa-phone"></i> +62 1189-2719-00
</h4>
<p>
  <i className="fa-solid fa-message"></i> @platify.com
</p>
          </div>
     </div>


     
      <div className="visit-container">
      <div className="visit-card">
        <h3>Visit us</h3>
        <p>Gekikara Street 16, Atalanta</p>
        <p>1327 Block M</p>
        <p>Mardial, Sigure</p>
        <p>T2G OT2</p>
        <p>
          <strong>Open day :</strong> 11am–5:30pm everyday
        </p>
        <button className="direction-btn">➤ Get Directions</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default footer
