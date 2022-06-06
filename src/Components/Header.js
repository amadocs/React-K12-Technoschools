import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  //   this.setState({ clicked: !this.state.clicked });
  // }

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          {/* <h1 className="logo me-auto">
            <Link to="/">Sailor</Link>
          </h1> */}

          <Link to="/" className="logo me-auto">
            <img
              src="assets/images/k12-logo.png"
              alt=""
              className="img-fluid"
            />
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* {/* <li className="dropdown">
                <Link to="#">
                  <span>About</span> <i className="bi bi-chevron-down"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/testimonials">Testimonials</Link>
                  </li>

                  <li className="dropdown">
                    <Link to="#">
                      <span>Deep Drop Down</span>{' '}
                      <i className="bi bi-chevron-right"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Deep Drop Down 1</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 2</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 3</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 4</Link>
                      </li>
                      <li>
                        <Link to="#">Deep Drop Down 5</Link>
                      </li>
                    </ul>
                  </li>
                </ul> 
              </li> */}
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/" className="getstarted">
                  Get Started
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
