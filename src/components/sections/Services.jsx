import { services } from "../../data/services";

const Services = () => {
  return (
    <section
      id="what-we-do"
      className="section section--light-bg"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="container">
        <h2 id="services-title" className="section__title">
          WHAT WE DO
        </h2>
        <h3 className="section__heading">
          Complete testing solutions for modern applications.
        </h3>
        <div
          className="services__grid"
          role="list"
          aria-label="Our testing services"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service__card"
              role="listitem"
              aria-labelledby={`service-${service.id}-title`}
            >
              <div
                className="service__id"
                aria-label={`Service number ${service.id}`}
              >
                {service.id}
              </div>
              <h4 id={`service-${service.id}-title`} className="service__title">
                {service.title}
              </h4>
              <p
                className="section__description"
                aria-describedby={`service-${service.id}-description`}
                id={`service-${service.id}-description`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
