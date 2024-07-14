import React from 'react';
import img1 from '@/assets/webdev.png';

const WebDevelopment = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "w-screen bg-black"
  }, /*#__PURE__*/React.createElement("main", {
    className: "w-full h-screen  grid md:grid-cols-12 container mx-auto px-8 gap-x-10 md:place-items-center pb-10 lg:pb-0 min-h-[42.5rem]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-6 text-white my-14 lg:my-0"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "capitalize text-[2.5rem] lg:text-[4.7  rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
  }, "Web Development"), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 mb-10 max-w-lg leading-relaxed text-gray-300"
  }, "We specialize in creating exceptional web experiences that not only engage your audience but also drive results for your business. With our expertise in web development, we can help you establish a strong online presence and stand out in today's competitive digital landscape.")), /*#__PURE__*/React.createElement("img", {
    src: img1,
    alt: "Santa Claus",
    className: "md:col-span-6 max-w-full"
  }))));
};
export default WebDevelopment;