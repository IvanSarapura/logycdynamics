import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          © 2025 logicdynamics | All rights reserved
        </div>
        <div className="footer-links">
          <a
            href="https://linkedin.com"
            className="footer-text"
            style={{ transition: "opacity 0.2s" }}
          >
            LinkedIn
          </a>
          <div className="footer-divider"></div>
          <a
            href="#top"
            className="footer-text"
            style={{ transition: "opacity 0.3s" }}
          >
            Go back to the start ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
