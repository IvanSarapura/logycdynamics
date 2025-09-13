import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      className="section section--light-bg"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <h1 id="hero-title" className="hero__title u-max-width-3xl">
          Elevating Software Quality Through{" "}
          <span className="u-underline-word">Testing</span>{" "}
          <span className="u-underline-word">Solutions</span>
        </h1>
        <p
          className="section__description u-margin-bottom-8 u-max-width-3xl"
          aria-describedby="hero-description"
          id="hero-description"
        >
          We deliver exceptional quality assurance results by combining
          technical expertise with strategic thinking. Our services are
          meticulously tailored to meet the unique needs of each company,
          ensuring optimal solutions across web, mobile, and gaming platforms.
          Our team of experts is dedicated to delivering the highest quality
          results, ensuring that your software is reliable, secure, and
          user-friendly. We are committed to delivering exceptional results
          through our expertise, innovation, and dedication to excellence.
        </p>
        <Button
          variant="outline"
          ariaLabel="Contact us to start your QA testing project"
        >
          Contact us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
