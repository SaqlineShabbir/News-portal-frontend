import React from 'react';
import img from '../../../../src/assets/demo.jpg'
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerbanner from '../../../../src/assets/foo.jpeg'
const Footer = () => {
    return (
        <div style={{backgroundImage: `url(${footerbanner})`,backgroundBlendMode:'darken' }} className='bg-no-repeat bg-cover bg-blend-darken'>
            <>
                <div className='Footer-main text-black pt-[76px]  lg:px-[200px] px-5 [max-h-90vh]'>
                    <div>
                        <div className='grid  lg:grid-cols-3  lg:space-x-8'>

                            <div>
                                <div>
                                    <p className='text-xl py-5 italic font-bold '>EDITOR PICKS</p>
                                    <div className='flex  font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace and Steps</p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-5' >

                                    <div className='flex font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace and Steps</p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=''>

                                    <div className='flex font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace and Steps</p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //popular */}
                            <div>
                                <div>
                                    <p className='text-xl py-5 font-bold  italic'>POPULAR POSTS
                                    </p>
                                    <div className='flex font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace</p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-5'>

                                    <div className='flex font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace </p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                                <div >

                                    <div className='flex font-bold text-sm'>
                                        <img className='h-20' src={img} alt="" />
                                        <div className='px-5'>
                                            <p>Modern Monochrome Home with Calm and Cosy Terrace </p>
                                            <p className='text-sm pt-2'>August 7, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* POPULAR CATEGORY */}
                            <div>
                                <div>
                                    <p className='text-xl py-5 font-bold italic'>POPULAR CATEGORY
                                    </p>

                                </div>


                                <div className='space-y-5  font-bold text-sm'>
                                    <div className='flex justify-between'>
                                        <p>Racing</p>
                                        <p>20</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Travel</p>
                                        <p>20</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Interiors</p>
                                        <p>20</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Architecture</p>
                                        <p>20</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Make it Modern</p>
                                        <p>20</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Decorating</p>
                                        <p>20</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='py-10'>
                        <hr />
                    </div>

                    <div className='grid lg:grid-cols-3 lg:space-x-10'>
                    <div  className="mx-auto">
            <p className="flex flex-col justify-center">
              {/* <img className="w-8" src={img} alt="" /> */}
              <p className="text-4xl font-bold">Trio <span className='text-blue-500'>News  </span>24</p>
              <p className='text-sm italic mx-auto'>The art of publishing</p>
            </p>
            </div>
                        <div>
                            <p className="text-xl font-bold italic">ABOUT US</p>
                            <p className='font-bold text-sm'>Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.s</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold  italic">FOLLOW US</p>
                            <div className="flex py-5 space-x-5"><FaFacebookSquare size={30} />
                                <FaLinkedin size={30} />
                                <FaInstagramSquare size={30} />
                            </div>
                        </div>
                    </div>


                </div>
                <div className='bg-black flex justify-between text-gray-300 lg:px-[200px] px-5 py-5 mt-10'>
                    <div>
                        <p>  &copy; Newspaper MERN  by TrioDev</p>
                    </div>
                    <div className='flex space-x-3 text-sm'>
                        <p>Disclaimer</p>
                        <p>Privacy</p>
                        <p>Advertisement</p>
                        <p>Contact us</p>
                    </div>

                </div>
            </>
        </div>
    );
};

export default Footer;