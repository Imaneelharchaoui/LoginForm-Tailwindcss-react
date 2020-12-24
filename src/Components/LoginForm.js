
import React from 'react';
import "tailwindcss/tailwind.css"
export default function ContactForm() {



    return(

    <form>
    <section >
        <div className="w-full  p-16 bg-blue-1000">
            <h1 className="text-white  text-center text-3xl">Login to Priviledger Partner Portal</h1>
        </div>

        <div className="max-w-xl m-auto mt-6 w-1/2">
            <div className="   overflow-hidden  shadow-md border-3 rounded-none border-blue-400">
                <section  className="pt-0 pr-0  border-r-0  mb-4 text-blue-800">
                    <input type="text" placeholder="username*" className="border-gray-500 border-r-0 border-l-0 border-t-0 border-b placeholder-blue-900 font-jose  font-semibold w-full p-3"/>
                </section>
                <section className="pt-0 pr-0  text-blue-800 mb-4">
                    <input type="text" placeholder="password*" className="border  placeholder-blue-900 border-gray-500  font-jose border-r-0 border-l-0 font-semibold  w-full p-3 "/>
                </section>
                <div className="px-4 mb-2 flex">
                    <div className="w-1/2">
                    </div>

                </div>

                 <button className="bg-blue-900 text-gray-100 p-2 w-full rounded-full tracking-wide
                                font-prompt focus:outline-none focus:shadow-outline hover:bg-blue-900 font-light
                                mt-0 mb-0">
                    LOG IN
                </button>
                <div  className=" mt-4" >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className=" font-jose  font-semibold text-blue-900  hover:text-blue-800 mb-4
                                        cursor-pointer text-right text-base bottom-0 left-0 h-30 w-30 ml-xxl">
                        Forgot Password
                    </a>
                </div>


            </div>

        </div>

        <section className="max-w-xl m-auto mt-6 w-1/2">


            <h2 className=" w-full -mx-0 border-solid border-b  leading-none mt-12 mb-5 border-black">

            <span  className=" bg-white font-jose  border-white font-semibold pt-0 px-2.5">
             Don't have a partner account?
            </span>
            </h2>
            <button className=" bg-gray-900 text-black-100 p-2 w-full rounded-full tracking-wide
                                font-prompt  focus:outline-none  hover:bg-gray-100 font-normal
                                 mt-0 mb-0">
                JOIN OUR PARTNER PROGRAM
            </button>

        </section>




    </section>
    </form>


    )
}
