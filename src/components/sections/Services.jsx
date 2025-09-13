import { services } from "../../data/services";

const Services = () => {
  return (
    <section id="what-we-do" className="section section-bg">
      <div className="container">
        <h2 className="section-title">WHAT WE DO</h2>
        <h3 className="section-heading">
          Complete testing solutions for modern applications.
        </h3>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-id">{service.id}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="section-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
