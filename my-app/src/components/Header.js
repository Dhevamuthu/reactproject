import {Link} from "react-router-dom";

const Header=()=> { return (
    <nav className="Header">
    <img 
    className="LOGO"
    src="https://img.freepik.com/premium-vector/fashion-logo-creative-women-beauty-life-salon-illustration-vector_669794-218.jpg"
    alt="Costume"> 
    </img>
    <h1>SAREES CORNER</h1>
    <ul>
      <li><Link to="/">HOME</Link></li>
      <li>< Link to="/About">ABOUT</Link></li>
      <li>< Link to="/contact">CONTACT</Link></li>
    </ul>
    </nav>
  );
  };

  export default Header;
  