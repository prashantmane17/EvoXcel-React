import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  let navbarClasses = ['h-[10vh]', 'fixed', 'z-50', 'flex', 'justify-between', 'w-[100%]', 'px-[5vw]', 'items-center', 'transition-colors', 'duration-300'];
  if (scrolled || location.pathname !== '/') {
    navbarClasses.push('bg-white', 'text-black');
  } else {
    navbarClasses.push('text-white');
  }
  return /*#__PURE__*/React.createElement("nav", {
    className: navbarClasses.join(' ')
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "md:text-[2vw] relative z-20 font-bold cursor-pointer"
  }, "EvoXcel")), /*#__PURE__*/React.createElement("ul", {
    className: "md:flex hidden md:w-[40%] justify-between text-[1.1vw] font-[500]"
  }, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer servicedropdown navBar relative z-20"
  }, "SERVICES ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-caret-down ml-1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-black dropdown bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]"
  }, /*#__PURE__*/React.createElement("ul", {
    className: ""
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/web-development"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw]  py-[1vh] hover:bg-gray-400"
  }, "Web Development")), /*#__PURE__*/React.createElement(Link, {
    to: ""
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw] py-[1vh] hover:bg-gray-400"
  }, "Software Development")), /*#__PURE__*/React.createElement(Link, {
    to: ""
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw] py-[1vh] hover:bg-gray-400"
  }, "Application Development")), /*#__PURE__*/React.createElement(Link, {
    to: "/lead-generation"
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw] py-[1vh] hover:bg-gray-400"
  }, "Lead Generation")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer productdropdown navBar relative z-20"
  }, "PRODUCTS ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-caret-down ml-1"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-black dropdown1 bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]"
  }, /*#__PURE__*/React.createElement("ul", {
    className: ""
  }, /*#__PURE__*/React.createElement(Link, {
    to: ""
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw] py-[1vh] hover:bg-gray-400"
  }, "Linkedin Automation")), /*#__PURE__*/React.createElement(Link, {
    to: ""
  }, /*#__PURE__*/React.createElement("li", {
    className: "px-[1vw] py-[1vh] hover:bg-gray-400"
  }, "Email Automation"))))), /*#__PURE__*/React.createElement(Link, {
    to: '/pricing'
  }, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer navBar text-color relative z-20"
  }, "PRICING")), /*#__PURE__*/React.createElement(Link, {
    to: '/about-us'
  }, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer navBar text-color relative z-20"
  }, "ABOUT US")), /*#__PURE__*/React.createElement(Link, {
    to: '/contact-us'
  }, /*#__PURE__*/React.createElement("li", {
    className: "cursor-pointer navBar text-color relative z-20"
  }, "CONTACT US"))));
};
export default Nav;