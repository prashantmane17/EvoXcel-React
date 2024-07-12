import React from 'react'
import img1 from '../assets/webdev.png'
// import img1 from '../assets/weebdev1.png'

const WebDevelopment = () => {
  return (
    <>
      <section className='w-screen bg-black'>
        <main className="w-full h-screen  grid md:grid-cols-12 container mx-auto px-8 gap-x-10 md:place-items-center pb-10 lg:pb-0 min-h-[42.5rem]">

          <div className="md:col-span-6 text-white my-14 lg:my-0">
            <h1 className="capitalize text-[2.5rem] lg:text-[4.7  rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Web Development</h1>
            <p className="mt-4 mb-10 max-w-lg leading-relaxed text-gray-300">We specialize in creating exceptional web experiences that not only engage your audience but also drive results for your business. With our expertise in web development, we can help you establish a strong online presence and stand out in today's competitive digital landscape.</p>
            {/* <a href="#" className="inline-block capitalize font-semibold bg-gradient-to-r from-purple-500 to-pink-800 rounded-full px-7 py-2 hover:from-purple-500 hover:to-gray-800">learn more</a> */}
          </div>
          <img src={img1} alt="Santa Claus" className="md:col-span-6 max-w-full" />
        </main>
      </section>
    </>
  )
}

export default WebDevelopment