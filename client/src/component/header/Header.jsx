
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="logo">
        <span>impact bureau</span>
      </div>

      <nav className="menubar">
        <ul>
          <li><Link to="/ourmission"><span>about</span></Link></li>
          <li><Link to="/ourwork"><span>our work</span></Link></li>
          <li><Link to="/stories"><span>stories</span></Link></li>
          <li><Link to="/impact-tv"><span>Impact TV</span></Link></li>
          <li><Link to="/summit"><span>summit</span></Link></li>
          <li><Link to="/newsletter"><span>newsletter</span></Link></li>
          <li><Link to="/nominate"><span>nominate</span></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
