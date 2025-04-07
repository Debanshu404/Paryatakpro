import React from 'react';

function About() {
  return (
    <div>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="position-relative h-100" style={{ minHeight: 400 }}>
                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
              <p className="mb-4">Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>
              <div className="row gy-2 gx-4 mb-4">
                {[
                  "First Class Flights",
                  "Handpicked Hotels",
                  "5 Star Accommodations",
                  "Latest Model Vehicles",
                  "150 Premium City Tours",
                  "24/7 Service"
                ].map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2" />{item}
                    </p>
                  </div>
                ))}
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            {[1, 2, 3, 4].map((num, index) => (
              <div key={index} className={`col-lg-3 col-md-6 wow fadeInUp`} data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="team-item">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={`assets/img/team-${num}.jpg`} alt="" />
                  </div>
                  <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                    {["facebook-f", "twitter", "instagram"].map((icon, i) => (
                      <a key={i} className="btn btn-square mx-1" href=""><i className={`fab fa-${icon}`} /></a>
                    ))}
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
