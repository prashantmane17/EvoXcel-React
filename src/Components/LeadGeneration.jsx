import React from 'react'
import '../css/leadgen.css'
import img1 from '../assets/lead1.png'
const LeadGeneration = () => {
  return (
    <>
       <section className=" lg:h-screen w-[100%] md:flex pt-[10vh] lg:pt-[23vh] px-[5vw] md:px-[15vw]">
        <div>
          <h1 className="md:text-[4vw] pt-6  font-bold mb-5">
            Lead Generation
          </h1>
          <h2 className="md:text-[1.5vw] font-[300] text-black">
            EvoXcel’s lead generation services are designed to help you attract
            and engage the right prospects for your business. Our data-driven
            approach ensures that your sales team is always working with
            high-quality leads that are more likely to .
          </h2>
        </div>
        <div className="flex items-center lg:items-start justify-center">
          <img className=" w-1/2 lg:w-[100%]" src={img1} alt="" />

          <a href="https://storyset.com/people" className="hidden">
            People illustrations by Storyset
          </a>
        </div>
      </section>

      <section className="w-full h-full">
        <div
          className="flex justify-center items-center"
          style={{ backgroundColor: "#94e3bd" }}
        >
          <div className="text-black container flex flex-col items-center justify-center">
            <div className="w-full  grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-black">
                <div className="text-center p-2 bg-[#94e3bd] text-white w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div>
                <h2 className="text-[1.6rem] lg:text-[2.3rem] py-4 font-bold">
                  Market Research and Audience Targeting
                </h2>
                <p className="text-black text-[1.3rem] md:text-[1.5rem] py-2">
                  Understanding your target market is essential for effective
                  lead generation. We conduct thorough market research to
                  identify key demographics, behaviors, and trends within your
                  industry. This allows us to craft targeted campaigns that
                  resonate with the right audience.
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">
                        Detailed Market Analysis:
                      </span>
                      Assessing market size, competition, and potential.
                    </li>
                    <li>
                      <span className="font-bold"> Audience Segmentation:</span>
                      Identifying key segments based on demographics,
                      psychographics, and behaviors.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="p-12 relative">
                <span className="absolute bg-[#94e3bd] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span>
                <div
                  className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden min-h-[20rem] w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lcdn.sumsmanagement.com/accommodation-website/assets/images/stock-0.jpeg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="text-white container flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 relative">
                <span className="absolute bg-[#fff] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span>
                <div
                  className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden min-h-[20rem] w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lcdn.sumsmanagement.com/accommodation-website/assets/images/stock-1.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-12 text-white">
                <div className="text-center p-2 bg-white text-[#94e3bd] w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div>
                <h2 className="text-[1.6rem] lg:text-[2.3rem] py-4 font-bold">
                  Multi-Channel Lead Capture
                </h2>
                <p className="text-black text-[1.3rem] md:text-[1.5rem]py-2">
                  We employ a multi-channel approach to capture leads from
                  various sources, ensuring a broad and effective reach. Our
                  strategies include:
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">
                        Social Media Marketing:{" "}
                      </span>
                      Leveraging platforms like Facebook, LinkedIn, and
                      Instagram to attract and engage potential leads.
                    </li>
                    <li>
                      <span className="font-bold">Content Marketing: </span>
                      Creating valuable content that draws in prospects and
                      positions you as an industry leader.
                    </li>
                    <li>
                      <span className="font-bold">Email Marketing: </span>
                      Crafting compelling email campaigns that drive engagement
                      and conversions
                    </li>
                    <li>
                      <span className="font-bold">SEO and PPC: </span>
                      Optimizing your online presence and utilizing paid
                      advertising to capture high-intent leads.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center"
          style={{ backgroundColor: "#94e3bd" }}
        >
          <div className="text-black container flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-black">
                <div className="text-center p-2 bg-[#94e3bd] text-white w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div>
                <h2 className="text-[1.6rem] lg:text-[2.3rem] py-4 font-bold">
                  Lead Qualification and Scoring
                </h2>
                <p className="text-black text-[1.3rem] md:text-[1.5rem] py-2">
                  Not all leads are ready to convert immediately. We use
                  advanced lead scoring techniques to evaluate and prioritize
                  leads based on their readiness to purchase and their fit for
                  your business.
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">Lead Scoring Models: </span>
                      Implementing criteria-based scoring to rank leads.
                    </li>
                    <li>
                      <span className="font-bold">Behavioral Tracking: </span>{" "}
                      Monitoring lead interactions to gauge interest and intent.
                    </li>
                  </ul>
                </p>
              </div>
              <div className="p-12 relative">
                <span className="absolute bg-[#94e3bd] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span>
                <div
                  className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden min-h-[20rem] w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lcdn.sumsmanagement.com/accommodation-website/assets/images/stock-2.jpeg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="text-white container flex flex-col items-center justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 relative">
                <span className="absolute bg-[#fff] rounded-tl-[50px] rounded-br-[50px] lg:h-[10rem] lg:w-[25rem] h-[5rem] w-[15rem] bottom-0 right-0"></span>
                <div
                  className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden min-h-[20rem] w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://lcdn.sumsmanagement.com/accommodation-website/assets/images/stock-3.jpeg')",
                  }}
                ></div>
              </div>
              <div className="p-12 text-white">
                <div className="text-center p-2 bg-white text-[#94e3bd] w-32 rounded-tl-[10px] rounded-br-[10px] overflow-hidden">
                  OUR VALUES
                </div>
                <h2 className="text-[1.6rem] lg:text-[2.3rem] py-4 font-bold">
                  Lead Nurturing and Engagement
                </h2>
                <p className="text-black text-[1.3rem] md:text-[1.5rem] py-2">
                  Building relationships with prospects is crucial for
                  converting leads into customers. Our lead nurturing strategies
                  ensure continuous engagement through personalized
                  communication and targeted content.
                </p>
                <p className="text-black text-[1.1rem] py-2 px-4">
                  <ul className="list-disc">
                    <li>
                      <span className="font-bold">
                        Personalized Email Campaigns:
                      </span>
                      Sending tailored messages that address the specific needs
                      and interests of each lead.
                    </li>
                    <li>
                      <span className="font-bold">Retargeting Campaigns: </span>
                      Using retargeting ads to keep your brand top-of-mind for
                      prospects who have shown interest.
                    </li>
                    <li>
                      <span className="font-bold">
                        Personalized Email Campaigns:
                      </span>
                      Sending tailored messages that address the specific needs
                      and interests of each lead.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#003C71] lg:h-screen">
        <h1 className="text-[10vw] md:text-[3vw] text-white font-bold text-center py-10">
          Our Process
        </h1>
        <ul className="process">
          <li className="process__item">
            <span className="process__number text-[15vw] md:text-[5vw]">1</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-8">
              High-Quality Leads
            </span>
            <span className="process__subtitle">
              Our targeted approach ensures that you receive leads that are more
              likely to convert into paying customers.
            </span>
          </li>

          <li className="process__item">
            <span className=" process__number text-[15vw] md:text-[5vw]">
              2
            </span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-8 ">
              Increased Sales Efficiency
            </span>
            <span className="process__subtitle">
              By focusing on qualified leads, your sales team can operate more
              efficiently and close deals faster.
            </span>
          </li>

          <li className="process__item">
            <span className="process__number text-[15vw] md:text-[5vw]">3</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-8">
              Cost-Effective Solutions
            </span>
            <span className="process__subtitle">
              Our lead generation strategies are designed to maximize ROI and
              minimize cost per lead.
            </span>
          </li>

          <li className="process__item">
            <span className="process__number text-[15vw] md:text-[5vw]">4</span>
            <span className="process__title text-[1.7rem] h-[6rem] block font-bold tracking-wider text-white uppercase mt-8 ">
              Scalability
            </span>
            <span className="process__subtitle">
              Whether you’re a startup or a large enterprise, our solutions can
              scale to meet your evolving needs
            </span>
          </li>
        </ul>
      </section>
    </>
  )
}

export default LeadGeneration