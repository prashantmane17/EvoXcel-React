import React from 'react'

const Footer = () => {
  return (
    <>
          <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className=" mx-auto px-[6vw]">
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-1/2 lg:w-[25%] pl-4 mb-8">
                <div
                  className="company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Don’t miss any updates of our new templates and extensions.!
                  </p>
                  <form
                    action="#"
                    className="f_subscribe_two mailchimp"
                    method="post"
                    novalidate="true"
                  >
                    <input
                      type="text"
                      name="EMAIL"
                      className="form-control ring-1 ring-gray-300 memail w-full p-2 mb-4"
                      placeholder="Email"
                    />
                    <button
                      className="btn btn_get btn_get_two bg-blue-500 text-white py-2 px-4 rounded"
                      type="submit"
                    >
                      Subscribe
                    </button>
                    <p className="mchimp-errmessage hidden"></p>
                    <p className="mchimp-sucmessage hidden"></p>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[20%] px-4 mb-8">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Services
                  </h3>
                  <ul className="list-none space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Lead Generation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Linked Automation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Email Automation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[20%] px-2 mb-8">
                <div
                  className="about-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Help
                  </h3>
                  <ul className="list-none space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Term &amp; conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Reporting
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Support Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-800">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div
                  className="social-widget pl-0 md:pl-8 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h3 className="f-title font-semibold text-lg text-gray-800 mb-4">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon flex space-x-4">
                    <a
                      href="#"
                      className="fab fa-facebook text-gray-600 hover:text-gray-800"
                    ></a>
                    <a
                      href="#"
                      className="fab fa-twitter text-gray-600 hover:text-gray-800"
                    ></a>
                    <a
                      href="#"
                      className="fab fa-linkedin text-gray-600 hover:text-gray-800"
                    ></a>
                    <a
                      href="#"
                      className="fab fa-pinterest text-gray-600 hover:text-gray-800"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="w-[100%] text-center mt-8">
            <p className="">© EvoXcel Inc.. 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer