import React, { useEffect } from "react";
import "animate.css";
import "./Services.css"; // Custom CSS for hover/card effects

function Services() {
  useEffect(() => {
    // Init WOW.js
    if (window.WOW) {
      new window.WOW().init();
    }

    // Init OwlCarousel
    const $ = window.$;
    if ($ && $(".testimonial-carousel").owlCarousel) {
      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false,
      });
    }
  }, []);

  const services = [
    {
      icon: "fa-globe",
      title: "WorldWide Tours",
    },
    {
      icon: "fa-hotel",
      title: "Hotel Reservation",
    },
    {
      icon: "fa-user",
      title: "Travel Guides",
    },
    {
      icon: "fa-cog",
      title: "Event Management",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            {[...services, ...services].map((service, idx) => (
              <div
                key={idx}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`${0.1 + (idx % 4) * 0.2}s`}
              >
                <div className="service-item rounded pt-3 hover-card">
                  <div className="p-4">
                    <i className={`fa fa-3x ${service.icon} text-primary mb-4`} />
                    <h5>{service.title}</h5>
                    <p>
                      Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                      amet diam
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            {[1, 2, 3, 4].map((i) => (
              <div
                className="testimonial-item bg-white text-center border p-4"
                key={i}
              >
                <img
                  className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                  src={`assets/img/testimonial-${i}.jpg`}
                  style={{ width: 80, height: 80 }}
                  alt={`testimonial-${i}`}
                />
                <h5 className="mb-0">John Doe</h5>
                <p>New York, USA</p>
                <p className="mt-2 mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                  amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
