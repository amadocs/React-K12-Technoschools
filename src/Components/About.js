import React from 'react';
import { Link } from 'react-router-dom';
import Verticals from './Verticals';

export default function About(props) {
  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>About</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{props.breadcrumb}</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about ps-timeline-sec">
        <div className="container">
          <div className="row content">
            <div className="col-lg-6">
              <h2>K12 Techno Services Pvt. Ltd.</h2>
              <p>
                <center>
                  <Link
                    to="https://k12technoservices.com/"
                    className="btn-more-about-us animate__animated animate__fadeInUp scrollto"
                    target="_blank"
                  >
                    KNOW MORE ABOUT K12
                  </Link>
                </center>
              </p>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                K12 Techno Services Pvt. Ltd. is a leading education service
                provider in India, offering a dynamic suite of academic support,
                services and solutions to schools. The education sector has
                extensively evolved in the last decade. Hence, the academic
                needs of students and parents have also grown consequently. The
                upgraded teaching methodologies, blended with effective use of
                technology has been the main idea behind K12 i.e. to pave the
                way for a global approach towards education. K12 with its band
                of services, facilitate schools to leverage on its strength.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Investors Section ======= --> */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="section-title">
            <h2>&nbsp;</h2>
            <p>Our Proud Investors</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/images/investors/sequoia-logo.png"
                className="img-fluid"
                alt="sequoia"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/images/investors/navneet-logo.png"
                className="img-fluid"
                alt="navneet"
              />
            </div>

            <div className="col-lg-4 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/images/investors/sofina-logo.png"
                className="img-fluid"
                alt="sofina"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Investors Section --> */}

      {/* <!-- ======= Our Verticals Section ======= --> */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-title">
            <h2>Verticals</h2>
            <p>Check Our Verticals</p>
            <Verticals />
          </div>
        </div>
      </section>
      {/* <!-- ======= Ends Our Verticals Section ======= --> */}
    </main>
  );
}
