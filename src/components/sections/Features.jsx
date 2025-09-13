import { features } from "../../data/features";
import "./Features.css";

const Features = () => {
  return (
    <section id="careers" className="section">
      <div className="container">
        <h2 className="section-title">OUR DIFFERENCE</h2>
        <h3 className="section-heading">What makes us your ideal QA partner</h3>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <svg
                className="feature-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p className="section-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
