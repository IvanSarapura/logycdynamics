import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { smoothScrollTo } from "../../utils/smoothScroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (text) => {
    const targetId = text.toLowerCase().replace(/\s+/g, "-");

    // Close mobile menu when clicking a link
    setIsMobileMenuOpen(false);

    // If we're on the home page, scroll to section
    if (location.pathname === "/") {
      smoothScrollTo(targetId);
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${targetId}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

        {/* Mobile Menu Toggle Button - ONLY visible on mobile */}
        <button
          className={`navbar__mobile-toggle ${
            isMobileMenuOpen ? "navbar__mobile-toggle--active" : ""
          }`}
          onClick={toggleMobileMenu}
          onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>

        {/* Desktop Navigation - unchanged */}
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

        {/* Mobile Navigation Menu - ONLY for mobile */}
        <div
          id="mobile-menu"
          className={`navbar__mobile-menu ${
            isMobileMenuOpen ? "navbar__mobile-menu--open" : ""
          }`}
          role="menubar"
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            className="navbar__mobile-link"
            onClick={() => handleNavClick("About us")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("About us"))
            }
            aria-label="Navigate to About us section"
            role="menuitem"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <span>About us</span>
          </button>
          <button
            className="navbar__mobile-link"
            onClick={() => handleNavClick("What we do")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("What we do"))
            }
            aria-label="Navigate to What we do section"
            role="menuitem"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <span>What we do</span>
          </button>
          <button
            className="navbar__mobile-link"
            onClick={() => handleNavClick("Careers")}
            onKeyDown={(e) => handleKeyDown(e, () => handleNavClick("Careers"))}
            aria-label="Navigate to Careers section"
            role="menuitem"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <span>Careers</span>
          </button>
          <button
            className="navbar__mobile-link"
            onClick={() => handleNavClick("Let's talk")}
            onKeyDown={(e) =>
              handleKeyDown(e, () => handleNavClick("Let's talk"))
            }
            aria-label="Navigate to Let's talk section"
            role="menuitem"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            <span>Let's talk</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - ONLY for mobile */}
      {isMobileMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
