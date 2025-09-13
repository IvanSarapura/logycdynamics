import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="notfound-main">
        <section className="section notfound-section section-bg">
          <div className="container">
            <div className="notfound-content">
              <div className="notfound-code">404</div>
              <h1 className="notfound-title">Page Not Found</h1>
              <p className="section-description notfound-description">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back to testing excellence.
              </p>
              <div className="notfound-actions">
                <Link to="/">
                  <Button variant="outline">Go Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
