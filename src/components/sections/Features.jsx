import { features } from "../../data/features";

const Features = () => {
  return (
    <section
      id="careers"
      className="section"
      role="region"
      aria-labelledby="features-title"
    >
      <div className="container">
        <h2 id="features-title" className="section__title">
          OUR DIFFERENCE
        </h2>
        <h3 className="section__heading">
          What makes us your ideal QA partner
        </h3>
        <div className="features__list" role="list">
          {features.map((feature, index) => (
            <div key={index} className="feature__item" role="listitem">
              <svg
                className="feature__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Feature indicator arrow icon"
                aria-describedby={`feature-${index}-description`}
              >
                <title>Arrow pointing right</title>
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <div className="feature__content">
                <h4 className="feature__title">{feature.title}</h4>
                <p
                  className="section__description"
                  id={`feature-${index}-description`}
                  aria-label={`Feature description: ${feature.description}`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
