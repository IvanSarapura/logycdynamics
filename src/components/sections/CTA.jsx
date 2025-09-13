import Button from "../ui/Button";
import "./CTA.css";

const CTA = () => {
  return (
    <section id="let's-talk" className="section dark-section">
      <div className="container">
        <div style={{ maxWidth: "36rem" }}>
          <h2
            className="section-heading"
            style={{ color: "white", fontWeight: "normal" }}
          >
            Elevate your software quality with our expert QA solutions
          </h2>
          <Button variant="primary">Start testing</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
