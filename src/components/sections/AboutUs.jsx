import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="section">
      <div className="container">
        <h2 className="section-title">ABOUT US</h2>
        <h3 className="section-heading">
          We are a team of dedicated QA professionals with a passion for
          quality.
        </h3>
        <p
          className="section-description"
          style={{ marginBottom: "2rem", maxWidth: "42rem" }}
        >
          Our mission is to provide the highest quality testing solutions to our
          clients, ensuring that their software products are reliable, secure,
          and user-friendly. We are committed to delivering exceptional results
          through our expertise, innovation, and dedication to excellence.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
