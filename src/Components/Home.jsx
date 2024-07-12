import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <section className="h-[100vh] w-[100%] img" id="particles-js">
        <article className="w-[100%] h-[100%] text-center">
          <h1 className="text-white md:text-[4vw] text-[7vw] font-bold px-2 md:px-0 md:w-[50%] m-auto pt-[25vh] mb-[7vh]">
            Supercharge Your Lead Generation with <span className="text-green-300">EvoXcel</span> </h1>
          <h2 className="text-white md:w-[40%] font-sans m-auto md:text-[20px] mb-[3vh]">Leverage Our Cutting-Edge
            LinkedIn and
            Email Automation Tools to Skyrocket Your Business Growth</h2>
          {/* <button
            className="relative px-8 py-2 text-white rounded-full bg-transparent isolation-auto z-10 border-2 border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-green-400 before:text-black before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700">
            Get Started Today
          </button> */}
          <Link to='pricing'><button className='py-4 px-16 md:text-[1.1vw] rounded-3xl getstarted'><span className="text">Get Started</span><span>Today!</span></button></Link>
        </article>
        <div className="cube-loader absolute bottom-[15vh] right-[10vw]">
          <div className="cube-top"></div>
          <div className="cube-wrapper">
            <span style={{ '--i': 0 }} className="cube-span"></span>
            <span style={{ '--i': 1 }} className="cube-span"></span>
            <span style={{ '--i': 2 }} className="cube-span"></span>
            <span style={{ '--i': 3 }} className="cube-span"></span>
          </div>
        </div>
      </section>
      <section className='md:h-[90vh] w-[100%] pt-[5vh]  bg-slate-50 '>
        <article className='m-auto w-[75%] md:h-[80vh]  md:flex border border-gray-300 justify-between'>
          <figure className='md:w-[50%]  overflow-hidden'>
            <img className='w-[100%] object-cover' src="https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            {/* <img className='w-[100%] object-cover' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
          </figure>
          <div className='md:w-[50%] justify-center px-[5vw]' >
            <h1 className='text-center pt-[7vh] text-[#122848] md:text-[2.3vw] font-[700]'>Welcome to EvoXcel</h1>
            <p className='md:text-[1.2vw] md:leading-8 text-[3vw] fontstyleintroduction pt-[2vh]'>"Your premier partner in accelerating business growth through innovative lead generation solutions. Our suite of tools
              and services is designed to streamline your outreach and maximize your conversions, enabling you to focus on what you
              do best – running your business. Whether you're looking to expand your professional network, optimize your email
              campaigns, or attract high-quality prospects, EvoXcel has the expertise and technology to help you achieve your
              goals."</p>
            <Link to='/about-us'><button
              class="group float-right mt-[4vh] flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
              <div
                class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
              >
                <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path
                    d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                  ></path>
                </svg>
              </div>
              <div
                class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                About us
              </div>
            </button></Link>

          </div>
        </article>
      </section>
      <section className='bg-[#003C71] pt-[5vh] px-[6vw]'>
        <article className='w-[100%] flex'>
          <div className='md:w-[55%]'>
            {/* <h2 className='text-white text-[2vw]'>~</h2> */}
            <h1 className=' text-[1.3vw] font-[500] text-[#fff]'>WHAT WE PROVIDE</h1>
            <h1 className=' text-[3.1vw] font-bold text-[#fff]'>Our Services</h1>
            <article className='flex justify-between text-white mt-[10vh] w-[100%]'>
              <div className='w-[45%] cursor-pointer'>
                <i className="fa-solid fa-laptop text-[2vw] p-3 bg-[#ffffff42] rounded-full"></i>
                <h1 className='text-[1.5vw] font-[550] mt-4'>Web Development</h1>
                <p className='text-[1vw] pt-[1.4vh] text-slate-300'>we specialize in custom web development, creating visually stunning and highly functional websites that drive business...</p>
                <button className='mt-3 text-slate-300'>Know More <i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className='w-[45%] cursor-pointer'>
                <i className="fa-solid fa-code text-[2vw] p-3 bg-[#ffffff42] rounded-full"></i>
                <h1 className='text-[1.5vw] font-[550] mt-4'>Software Development</h1>
                <p className='text-[1vw] pt-[1.4vh] text-slate-300'>Our expert team combines cutting-edge technology with industry best practices to deliver scalable, secure, and innov...</p>
                <button className='mt-3 text-slate-300'>Know More <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </article>
            <article className='flex justify-between text-white py-[12vh] w-[100%]'>
              <div className='w-[45%] cursor-pointer'>
                <i className="fa-solid fa-computer text-[2vw] p-3 bg-[#ffffff42] rounded-full"></i>
                <h1 className='text-[1.5vw] font-[550] mt-4'>Application Development</h1>
                <p className='text-[1vw] pt-[1.4vh] text-slate-300'>Whether you need a robust mobile app, a scalable web application, or a custom software solution, our skilled...</p>
                <button className='mt-3 text-slate-300'>Know More <i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className='w-[45%] cursor-pointer'>
                <i className="fa-solid fa-filter-circle-dollar text-[2vw] p-3 bg-[#ffffff42] rounded-full"></i>
                <h1 className='text-[1.5vw] font-[550] mt-4'>Lead Generation</h1>
                <p className='text-[1vw] pt-[1.4vh] text-slate-300'>Harness the power of targeted lead generation to attract and engage high-quality prospects. Our comprehensive...</p>
                <button className='mt-3 text-slate-300'>Know More <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </article>
          </div>
          <figure className='md:w-[45%] flex justify-end'>
            {/* <img className='rounded-l-full w-[100%] mt-[15vh]' src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <img className='rounded-full w-[100%] mt-[15vh] mb-5 object-cover' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </figure>
        </article>
      </section>
    </div>
  )
}

export default Home