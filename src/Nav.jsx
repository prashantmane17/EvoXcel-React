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

    return (
        <nav className={navbarClasses.join(' ')}>
            <Link to='/'><h1 className='md:text-[2vw] relative z-20 font-bold cursor-pointer'>EvoXcel</h1></Link>
            <ul className='md:flex hidden md:w-[40%] justify-between text-[1.1vw] font-[500]'>
                <li className='cursor-pointer servicedropdown navBar relative z-20'>SERVICES <i className="fa-solid fa-caret-down ml-1"></i></li>
                <div className='text-black dropdown bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]'>
                    <ul className=''>
                        <Link to='/web-development'><li className='px-[1vw]  py-[1vh] hover:bg-gray-400'>Web Development</li></Link>
                        <Link to=''><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Software Development</li></Link>
                        <Link to=''><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Application Development</li></Link>
                        <Link to='/lead-generation'><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Lead Generation</li></Link>
                    </ul>
                </div>
                <div>
                    <li className='cursor-pointer productdropdown navBar relative z-20'>PRODUCTS <i className="fa-solid fa-caret-down ml-1"></i></li>
                    <div className='text-black dropdown1 bg-white absolute top-[7vh] z-10 font-[500] text-[1vw]'>
                        <ul className=''>
                            <Link to=''><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Linkedin Automation</li></Link>
                            <Link to=''><li className='px-[1vw] py-[1vh] hover:bg-gray-400'>Email Automation</li></Link>
                        </ul>
                    </div>
                </div>
                <Link to={'/pricing'}><li className='cursor-pointer navBar text-color relative z-20'>PRICING</li></Link>
                <Link to={'/about-us'}><li className='cursor-pointer navBar text-color relative z-20'>ABOUT US</li></Link>
                <Link to={'/contact-us'}><li className='cursor-pointer navBar text-color relative z-20'>CONTACT US</li></Link>
            </ul>
        </nav>
    );
};

export default Nav;
