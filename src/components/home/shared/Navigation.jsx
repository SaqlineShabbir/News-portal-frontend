import { useContext, useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

import addbanner from '../../../../src/assets/adbanner.jpg'
export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const {loggedIn}=useContext(AuthContext)

  return (
    <nav
      id="home"
      className="w-full shadow lg:px-[200px] dark:bg-white text-black py-5 border-b-[1px]"
    >
      {/* <div className="justify-between  lg:px-[250px] px-4 lg:mr-20 lg:max-w-7xl md:items-center md:flex md:px-8 "> */}
        <div>

          <div className="flex items-center  md:block ">
           {/* // */}
            <div className="md:hidden">
              <button
                className="p-2  rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

           <div className='lg:flex mx-auto lg:mx-0'>
           <div  className="">
            <p className="flex flex-col justify-center">
              {/* <img className="w-8" src={img} alt="" /> */}
              <p className="text-4xl font-bold">Trio <span className='text-blue-500'>News  </span>24</p>
              <p className='text-sm italic mx-auto'>The art of publishing</p>
            </p>
            </div>

            <div  style={{backgroundImage: `url(${addbanner})` }}  className="lg:flex justify-between  px-10 text-gray-900  h-[90px] w-[800px] ml-20  hidden lg:block  bg-blend-darken  bg-no-repeat bg-cover ">
               {/* <img className='h-20 w-[600px] ' src={addbanner} alt="" /> */}
               <div className='py-3'>
                <p>Best selling BLOGS and MAGAZINE <br />Theme of all  time  </p>
                <p className='italic text-sm'>Experience The change</p>
               </div>
               <div   className='flex items-center'>
               <button className='border py-1  px-2'>Buy Now</button>
               </div>
            </div>
           </div>
          </div>

        </div>



        <div  className='lg:pt-5 pl-5 lg:pl-0'>
          {/* nav links */}
          <div
            className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center  space-y-8 md:flex md:space-x-6 md:space-y-0 font-bold">
              <li className="hover:border-b-2 hover:border-blue-700 lg:px-1 cursor-pointe">
                <NavLink smooth to="/">
                  <p>HOME</p>
                </NavLink>
              </li>

              <li className=" hover:border-b-2 hover:border-blue-700 lg:px-1 cursor-pointe">
                <NavLink smooth to="/about-us">
                  <p>ABOUT US</p>
                </NavLink>
              </li>

              <li className=" hover:border-b-2 hover:border-blue-700 lg:px-1 cursor-pointe">
                <NavLink smooth to="/menu">
                  <p>DASHBOARD</p>
                </NavLink>
              </li>
             { !loggedIn&&<li className="hover:border-b-2 hover:border-blue-700 lg:px-1 cursor-pointe">
                <Link smooth to="/signup">
                  <p>SIGNUP</p>
                </Link>
              </li>}
             
               {!loggedIn&& <li className=" hover:text-black-600  cursor-pointer lg:px-1 hover:border-b-2 hover:border-blue-700  ">
                  <NavLink smooth to="/login">
                    <p>LOGIN</p>
                  </NavLink>
                </li>}
             
              <li className="hover:border-b-2 hover:border-blue-700 lg:px-1 cursor-pointer">
                <NavLink smooth to="/jobs">
                  <p>JOBS</p>
                </NavLink>
              </li>

            
                {loggedIn&&<li
                  
                  className=" hover:text-black-600 cursor-pointer"
                >
                  <NavLink smooth to="/logout">
                    <p>Logout</p>
                  </NavLink>
                </li>}
              

             
            </ul>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}
