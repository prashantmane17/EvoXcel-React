import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Pricing from './Components/Pricing';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import WebDevelopment from './Components/WebDevelopment';
import ApplicationDevelopment from './Components/ApplicationDevelopment';
import SoftwareDevelopment from './Components/SoftwareDevelopment';
import EmailAutomation from './Components/EmailAutomation';
import LinkedinAutomation from './Components/LinkedinAutomation';
import LeadGeneration from './Components/LeadGeneration';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
const App = () => {
  return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(ScrollToTop, null), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Home, null),
    path: "/"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Pricing, null),
    path: "/pricing"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Aboutus, null),
    path: "/about-us"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(Contactus, null),
    path: "/contact-us"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(WebDevelopment, null),
    path: "/web-development"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(ApplicationDevelopment, null),
    path: "/application-development"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(SoftwareDevelopment, null),
    path: "/software-development"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(EmailAutomation, null),
    path: "/email-automation"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(LinkedinAutomation, null),
    path: "/linkedin-automation"
  }), /*#__PURE__*/React.createElement(Route, {
    element: /*#__PURE__*/React.createElement(LeadGeneration, null),
    path: "/lead-generation"
  })), /*#__PURE__*/React.createElement(Footer, null));
};
export default App;