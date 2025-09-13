import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <main className="notfound__main">
        <section className="section notfound__section section--light-bg">
          <div className="container">
            <div className="notfound__content">
              <div className="notfound__code">404</div>
              <h1 className="notfound__title">Page Not Found</h1>
              <p className="section__description notfound__description">
                The page you're looking for doesn't exist or has been moved.
                Let's get you back to testing excellence.
              </p>
              <div className="notfound__actions">
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
