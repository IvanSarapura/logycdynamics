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

  const handleKeyDown = (event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        <button
          onClick={() => navigate("/")}
          onKeyDown={(e) => handleKeyDown(e, () => navigate("/"))}
          className="navbar__logo"
          aria-label="LogicDynamics home page"
        >
          logicdynamics
        </button>
        <div className="navbar__links" role="menubar">
          <button
            className="navbar__link"
            onClick={() => handleNavClick("About us")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("About us"))
            }
            aria-label="Navigate to About us section"
            role="menuitem"
            tabIndex={0}
          >
            <span>About us</span>
          </button>
          <button
            className="navbar__link"
            onClick={() => handleNavClick("What we do")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("What we do"))
            }
            aria-label="Navigate to What we do section"
            role="menuitem"
            tabIndex={0}
          >
            <span>What we do</span>
          </button>
          <button
            className="navbar__link"
            onClick={() => handleNavClick("Careers")}
            onKeyDown={(e) => handleKeyDown(e, () => handleNavClick("Careers"))}
            aria-label="Navigate to Careers section"
            role="menuitem"
            tabIndex={0}
          >
            <span>Careers</span>
          </button>
          <button
            className="navbar__link"
            onClick={() => handleNavClick("Let's talk")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("Let's talk"))
            }
            aria-label="Navigate to Let's talk section"
            role="menuitem"
            tabIndex={0}
          >
            <span>Let's talk</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
