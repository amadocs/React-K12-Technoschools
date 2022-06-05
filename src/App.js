import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import PortfolioDetails from './Components/PortfolioDetails';
import { Helmet } from 'react-helmet';
import Footer from './Components/Footer';
import PrivacyPolicy from './Components/PrivacyPolicy';
function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About breadcrumb="About" />} />
          <Route
            exact
            path="/services"
            element={<Services breadcrumb="Services" />}
          />
          <Route
            exact
            path="/portfolio"
            element={<Portfolio breadcrumb="Portfolio" />}
          />
          <Route
            exact
            path="/portfolio-details"
            element={<PortfolioDetails />}
          />
          <Route
            exact
            path="/privacy-policy"
            element={<PrivacyPolicy breadcrumb="Privacy Policy" />}
          />
        </Routes>
        <Footer />
      </Router>
      <Helmet>
        {/* <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          type="text/javascript"
        /> */}
        <script src="assets/js/main.js" />
      </Helmet>
    </>
  );
}

export default App;
