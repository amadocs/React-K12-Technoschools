import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy(props) {
  return (
    <div>
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Privacy Policy</h2>
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

        {/* <!-- ======= Privacy Policy Section ======= --> */}
        <section id="about" className="about">
          <div className="container">
            <div className="row content">
              <div className="col-lg-12 pt-4 pt-lg-0">
                <p>
                  As a general rule, this website does not collect Personal
                  Information about you when you visit the site. You can
                  generally visit the site without revealing Personal
                  Information, unless you choose to provide such information.
                </p>
                <h3>Site Visit data</h3>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> This website
                    records your visit and logs the following information for
                    statistical purposes -your server’s address; the name of the
                    top-level domain from which you access the Internet (for
                    example, .com, .in, etc.); the type of browser you use; the
                    date and time you access the site; the pages you have
                    accessed and the documents downloaded and the previous
                    Internet address from which you linked directly to the site.
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i> We will not
                    identify users or their browsing activities, except when a
                    law enforcement agency may exercise a warrant to inspect the
                    service provider’s logs.
                  </li>
                </ul>
                <h3>Cookies</h3>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> A cookie is a piece
                    of software code that an internet web site sends to your
                    browser when you access information at that site. This site
                    does not use cookies.
                  </li>
                </ul>
                <h3>Email Management</h3>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>Your email address
                    will only be recorded if you choose to send a message. It
                    will only be used for the purpose for which you have
                    provided it and will not be added to a mailing list. Your
                    email address will not be used for any other purpose, and
                    will not be disclosed, without your consent.
                  </li>
                </ul>
                <h3>Collection of Personal Information</h3>
                <ul>
                  <li>
                    <i className="ri-check-double-line"></i> If you are asked
                    for any other Personal Information you will be informed how
                    it will be used if you choose to give it. If at any time you
                    believe the principles referred to in this privacy statement
                    have not been followed, or have any other comments on these
                    principles, please notify the webmaster through the contact
                    us page.
                  </li>
                </ul>
                <p className="fst-italic">
                  Note: The use of the term “Personal Information” in this
                  privacy statement refers to any information from which your
                  identity is apparent or can be reasonably ascertained.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Privacy Policy Section --> */}
      </main>
    </div>
  );
}
