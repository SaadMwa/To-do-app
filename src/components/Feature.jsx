import img1 from "../assets/image 8.png";
import img2 from "../assets/image 9.png";
import img3 from "../assets/image 10.png";
import img4 from "../assets/image 11.png";
import img5 from "../assets/image 11.png";

export default function Feature() {
  return (
    <section className="feature-section">
      <div className="feature-header">
        <h2>Featured</h2>
        <a href="/">view all</a>
      </div>

      <div className="feature-cards">
        <div className="card">
          <img src={img1} alt="plant" />
          <h4>Pepperomia Ginny</h4>
          <p>$20</p>
          <div className="colors">
            <p>Port Colors</p>
            <span className="color green"></span>
            <span className="color terracotta"></span>
            <span className="color white"></span>
          </div>
                 <div>
          <button className="buy-btn">Buy Now</button>
        </div>
        </div>

        <div className="card">
          <img src={img2} alt="plant" />
          <h4>Bird Nest Fern</h4>
          <p>$25</p>
          <div className="colors">
             <p>Port Colors</p>
            <span className="color black"></span>
            <span className="color white"></span>
          </div>
              <div>
          <button className="buy-btn">Buy Now</button>
        </div>
        </div>

        <div className="card sale">
          <img src={img3} alt="plant" />
          <span className="tag">Sale</span>
          <h4>Large Majesty Palm</h4>
          <p>$30</p>
          <div className="colors">
             <p>Port Colors</p>
            <span className="color terracotta"></span>
            <span className="color green"></span>
            <span className="color grey"></span>
          </div>
              <div>
          <button className="buy-btn">Buy Now</button>
        </div>
        </div>

        <div className="card">
          <img src={img4} alt="plant" />
          <h4>Eco Friendly Plant</h4>
          <p>$28</p>
          <div className="colors">
             <p>Port Colors</p>
            <span className="color white"></span>
            <span className="color black"></span>
          </div>
              <div>
          <button className="buy-btn">Buy Now</button>
        </div>
        </div>

        <div className="card">
          <img src={img5} alt="plant" />
          <h4>Duranta</h4>
          <p>$32</p>
          <div className="colors">
             <p>Port Colors</p>
            <span className="color green"></span>
            <span className="color terracotta"></span>
          </div>
              <div>
          <button className="buy-btn">Buy Now</button>
        </div>
        </div>
      </div>
    </section>
  );
};