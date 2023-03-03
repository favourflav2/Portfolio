import React from 'react'
import Logo from '../assets/logo.jpg'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFileAlt} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { Link,  animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Navbar() {

    const [nav, setNav] = React.useState(false)

    function handleClick(){
        setNav(item=> !item)
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}} className='rounded-lg'/>
      </div>

      {/* Menu */}
      {/* md is like using @media... anything over md/medium which is 678px will render flex and show the ul */}
      <ul className='hidden md:flex'>
        <li>
        <Link to="home"  smooth={true} duration={500} >
         Home
        </Link>
        </li>


        <li>
        <Link to="about"  smooth={true} duration={500} >
         About
        </Link>
        </li>


       
        <li>
          <Link to="skills"  smooth={true} duration={500} >
          Skills
        </Link>
        </li>


        <li>
          <Link to="work"  smooth={true} duration={500} >
          Work
        </Link>
        </li>


        <li>
          <Link to="contact"  smooth={true} duration={500} >
          Contact
        </Link>
        </li>


      </ul>
     
      

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav == true? <FaTimes />: <FaBars />}
      </div>

      {/* Mobile Menu */}
      <ul className={nav == false? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
       <li className='py-6 text-4xl'>
       <Link onClick={handleClick} to="home"  smooth={true} duration={500} >
         Home
        </Link>
       </li>

         <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
         About
        </Link>
         </li>

         <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="skills"  smooth={true} duration={500} >
          Skills
        </Link>
         </li>
         <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="work"  smooth={true} duration={500} >
          Work
        </Link>
         </li>
         <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
          Contact
        </Link>
         </li>
      </ul>

      {/* Socila icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li> */}
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    GitHub <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    E-Mail <HiOutlineMail size={30}/>
                </a>
            </li> */}
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    GitHub <FaGithub size={30}/>
                </a>
            </li> */}
            {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                <a className='flex justify-between items-center w-full text-gray-300' href="/">
                    E-Mail <HiOutlineMail size={30}/>
                </a>
            </li> */}
            <li>
            <a className='flex justify-between items-center w-full text-gray-300' href="/https://docs.google.com/document/d/1c0BEpd6f863Dco2C_0xFxsO3_JoAlcK91JBSN1nu-3A/edit?usp=sharing">
                    Resume <FaFileAlt size={30}/>
                </a>
            </li>
        </ul>
      </div>

    </div>
  )
}


