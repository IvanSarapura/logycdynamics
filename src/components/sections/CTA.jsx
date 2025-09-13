import Button from "../ui/Button";

const CTA = () => {
  return (
    <section
      id="let's-talk"
      className="section section--dark"
      role="region"
      aria-labelledby="cta-title"
    >
      <div className="container">
        <div className="u-max-width-xl">
          <h2
            id="cta-title"
            className="section__heading u-text-white u-font-normal"
          >
            Elevate your software quality with our expert QA solutions
          </h2>
          <Button
            variant="primary"
            ariaLabel="Start testing - Begin your QA journey with LogicDynamics"
          >
            Start testing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
