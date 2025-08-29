import Logo from "../assets/logo.png";  
import Logo2 from "../assets/search.png";   
import Logo3 from "../assets/user.png";   
import Logo4 from "../assets/cart.png";   
import Plant1 from "../assets/img1.png"; 
import Plant2 from "../assets/img2.png"; 
import Plant3 from "../assets/img3.png"; 

export default function Hero() {
  return (
    <div className="hero">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>Shop</li>
          <li>Products</li>
          <li>Fertilizer</li>
          <li>Guide</li>
        </ul>
        <img src={Logo} alt="logo" className="logo" />
        <div className="nav-icons">
          <i className="search">
            <img src={Logo2} alt="search" />
          </i>

          <i className="user">
            <img src={Logo3} alt="user" />
          </i>
          <i className="shopping-cart">
            <img src={Logo4} alt="cart" />
          </i>
        </div>
      </nav>

      {/* Main Section */}
      <div className="hero-content">
        <div className="hero-text">
          <h2>Happiness blooms from within</h2>
          <p>
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop now</button>
            <a href="#" className="btn-link">
              Explore plants →
            </a>
          </div>
        </div>

<div className="hero-images">
  <div className="small-card">
    <button className="card-btn">New</button> 
    <span className="tag">New</span>
    <img src={Plant3} alt="plant" />
  </div>
  <div className="small-card">
    <button className="card-btn">Popular</button>
    <span className="tag">Popular</span>
    <img src={Plant2} alt="plant" />
  </div>
  <div className="large-card">
    <button className="card-btn">Featured</button>
    <span className="tag">Featured</span>
    <img src={Plant1} alt="plant" />
    <div className="large-text">
      <h3>Anthurium Flower</h3>
      <p>
        The flower of human being. It has meaningful of fact that the
        plant always grow whatever season and weather.
      </p>
      <button className="btn-secondary">READ MORE</button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
