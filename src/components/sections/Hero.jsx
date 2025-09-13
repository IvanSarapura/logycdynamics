import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="section section-bg">
      <div className="section container">
        <h1 className="hero-title" style={{ maxWidth: "48rem" }}>
          Elevating Software Quality Through{" "}
          <span className="underline-word">Testing</span>{" "}
          <span className="underline-word">Solutions</span>
        </h1>
        <p
          className="section-description"
          style={{ marginBottom: "2rem", maxWidth: "48rem" }}
        >
          We deliver exceptional quality assurance results by combining
          technical expertise with strategic thinking. Our services are
          meticulously tailored to meet the unique needs of each company,
          ensuring optimal solutions across web, mobile, and gaming platforms.
        </p>
        <Button variant="outline">Contact us</Button>
      </div>
    </section>
  );
};

export default Hero;
