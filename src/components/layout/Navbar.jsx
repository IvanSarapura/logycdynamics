import { useLocation, useNavigate } from "react-router-dom";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { smoothScrollTo } from "../../utils/smoothScroll";

const Navbar = () => {
  const isScrolled = useScrollEffect();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (text) => {
    const targetId = text.toLowerCase().replace(/\s+/g, "-");

    // If we're on the home page, scroll to section
    if (location.pathname === "/") {
      smoothScrollTo(targetId);
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${targetId}`);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <button
          onClick={() => navigate("/")}
          className="navbar-logo title-font"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          logicdynamics
        </button>
        <div className="navbar-links">
          <button
            className="navbar-link"
            onClick={() => handleNavClick("About us")}
          >
            <span>About us</span>
          </button>
          <button
            className="navbar-link"
            onClick={() => handleNavClick("What we do")}
          >
            <span>What we do</span>
          </button>
          <button
            className="navbar-link"
            onClick={() => handleNavClick("Careers")}
          >
            <span>Careers</span>
          </button>
          <button
            className="navbar-link"
            onClick={() => handleNavClick("Let's talk")}
          >
            <span>Let&apos;s talk</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
