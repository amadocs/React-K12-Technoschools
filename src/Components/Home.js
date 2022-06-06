import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const heroTextStyle = {
    color: '#d9232d',
    fontWeight: '700',
  };

  return (
    <>
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <ol
            className="carousel-indicators"
            id="hero-carousel-indicators"
          ></ol>

          <div className="carousel-inner" role="listbox">
            {/* <!-- Slide 1 --> */}
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(assets/img/slide/slide-1.jpg)` }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Welcome to <span>K12 Techno Services</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    <h3>
                      Partner With Us For Creating A{' '}
                      <span style={heroTextStyle}>World Class School</span>
                    </h3>
                  </p>
                  <Link
                    to="#"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- Slide 2 --> */}
            {/*<div
              className="carousel-item"
              style={{ backgroundImage: 'url(assets/img/slide/slide-2.jpg)' }}
            >
               <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Lorem Ipsum Dolor
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Dummy Text
                  </p>
                  <Link
                    to="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <!-- Slide 3 --> */}
            {/* <div
              className="carousel-item"
              style={{ backgroundImage: 'url(assets/img/slide/slide-3.jpg)' }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Sequi ea ut et est quaerat
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                    ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                    dolorem mollitia ut. Similique ea voluptatem. Esse
                    doloremque accusamus repellendus deleniti vel. Minus et
                    tempore modi architecto.
                  </p>
                  <Link
                    to="#about"
                    className="btn-get-started animate__animated animate__fadeInUp scrollto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div> */}
          </div>

          <Link
            className="carousel-control-prev"
            to="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </Link>

          <Link
            className="carousel-control-next"
            to="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= Our Expertise Section ======= --> */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Our Expertise</h2>
              <p>End to End School Management</p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/infra-blue.png"
                      className="img-fluid"
                      alt="Infrastructure Setup"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Infrastructure Setup</h4>
                    <ul>
                      <li>Assistance in Building Design</li>
                      <li>Assistance in finalizng BOQ for construction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/marketing-blue.png"
                      className="img-fluid"
                      alt="Marketing/Sales"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Marketing/Sales</h4>
                    <ul>
                      <li>
                        Assistance in setup of marketing office and demo room
                      </li>
                      <li>Training of marketing staff</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/curriculum-blue.png"
                      className="img-fluid"
                      alt="Curriculum Implementation"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Curriculum Implementation</h4>
                    <ul>
                      <li>Supply of Books and Learning Kits</li>
                      <li>
                        Assistance in preparation of yearly plan, timetable,
                        teacher workload etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/adm-blue.png"
                      className="img-fluid"
                      alt="Administrative Support"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Administrative Support</h4>
                    <ul>
                      <li>Fee Structure Finalization</li>
                      <li>
                        Non-Academics Support-Transport, Security, Vendor
                        Management, PTA formation etc.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/tech-blue.png"
                      className="img-fluid"
                      alt="Technology Integration"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Technology Integration</h4>
                    <ul>
                      <li>
                        ERP implementation for managing Academic and
                        Non-academic aspects of school
                      </li>
                      <li>
                        Access of Curriculum, Lesson Plans, Teaching Resources,
                        Assessments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4">
                <div className="member d-flex align-items-start">
                  <div className="pic">
                    <img
                      src="assets/images/affili-blue.png"
                      className="img-fluid"
                      alt="Affiliation and Permission Support"
                    />
                  </div>
                  <div className="member-info">
                    <h4>Affiliation and Permission Support</h4>
                    <ul>
                      <li>Assistance in documentation for state permission</li>
                      <li>Assistance in RTE and NOC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Our Expertise Section --> */}

        {/* <!-- ======= Our Credentials Section ======= --> */}
        <section id="team" className="credential section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Our Credentials</h2>
              <p>
                Our core strength lies in delivering an exceptional academic and
                non-academic solution to schools
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/karnataka.png"
                        className="img-fluid"
                        alt="KARNATAKA"
                      />
                      <h4 className="credential">KARNATAKA</h4>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/telagana.png"
                        className="img-fluid"
                        alt="TELANGANA"
                      />
                      <h4 className="credential">TELANGANA</h4>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/maharastra.png"
                        className="img-fluid"
                        alt="MAHARASHTRA"
                      />
                      <h4 className="credential">MAHARASHTRA</h4>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/west-bengal.png"
                        className="img-fluid"
                        alt="WEST BENGAL"
                      />
                      <h4 className="credential">WEST BENGAL</h4>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/tamilnadu.png"
                        className="img-fluid"
                        alt="TAMILNADU"
                      />
                      <h4 className="credential">TAMILNADU</h4>
                    </center>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="member d-flex align-items-start">
                  <div>
                    <center>
                      <img
                        src="assets/images/hariyana.png"
                        className="img-fluid"
                        alt="HARYANA"
                      />
                      <h4 className="credential">HARYANA</h4>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="credential-bottom">
              <h4>
                <center>
                  50+ Schools, 40,000+ Students, 6+ States & 5000+ Teachers
                </center>
              </h4>
            </div>
            <center>
              <Link
                to="/about"
                className="btn-more-about-us animate__animated animate__fadeInUp scrollto"
              >
                MORE ABOUT US
              </Link>
            </center>
          </div>
        </section>
        {/* <!-- End Our Credentials Section --> */}
      </main>
    </>
  );
}
