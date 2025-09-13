const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="section"
      role="region"
      aria-labelledby="about-us-title"
    >
      <div className="container">
        <h2 id="about-us-title" className="section__title">
          ABOUT US
        </h2>
        <h3 className="section__heading">
          We are a team of dedicated QA professionals with a passion for
          quality.
        </h3>
        <p
          className="section__description u-margin-bottom-8 u-max-width-2xl"
          aria-describedby="about-us-description"
          id="about-us-description"
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
