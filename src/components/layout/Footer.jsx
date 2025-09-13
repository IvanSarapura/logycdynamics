const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer__container">
        <div className="footer__text" role="text">
          © 2025 logicdynamics | All rights reserved
        </div>
        <div
          className="footer__links"
          role="navigation"
          aria-label="Footer navigation"
        >
          <a
            href="https://linkedin.com"
            className="footer__text footer__link"
            aria-label="Visit LogicDynamics LinkedIn page"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <div
            className="footer__divider"
            role="separator"
            aria-hidden="true"
          ></div>
          <a
            href="#top"
            className="footer__text footer__link"
            aria-label="Go back to the top of the page"
          >
            Go back to the start ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
