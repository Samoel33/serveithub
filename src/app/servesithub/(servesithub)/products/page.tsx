import {Metadata} from "next"
import RequestQuoteBTN from '@/Components/RequestQuoteBTN';
import Link from 'next/link'
import React from 'react'
export const metadata: Metadata = {
  title:"Products that we offer",
  description: 'Serves It Hub product list page',
}
function About() {
  return (
    <section className="w-full bg-gray-100 p-5">
      <div className=" flex justify-center items-center mb-5">
        <h3 className="font-bold text-blue-700 m-2 lg:text-4xl text-2xl max-w-md-s text-center w-2/4 xs:w-full capitalize ">
          Products you can trust, Delivered anywhere and on Time
        </h3>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 lg:ml-20 lg:mr-20 content-center ">
        <Link href="/servesithub/products/cables" className="w-full">
          <div className="bg-white h-80 shadow-md shadow-yellow-100 ronded-lg flex flex-col relative p-1">
            <div className="w-full h-full">
              <img
                src="/cables.jpg"
                className="w-full h-full object-cover bg-no-repeat rounded"
                alt="Cable and Wires"
              />
            </div>
            <div className="w-4/5 rounded bg-blue-700 opacity-80  h-2/5 absolute z-2 bottom-0 left-0 p-4">
              <p className="w-full  text-white text-2xl">Cables and Wires</p>
              <span className="text-gray-300  text-base max-w-md-s">
                We sell types of cables, Suitable for your system and as per
                your specification
              </span>
            </div>
            <p className="text-2xl font-bold text-end mt-5 ml-5 z-3 text-yellow-400 animate-up-down">
            
            </p>
          </div>
        </Link>
        <Link href="/servesithub/products/switchgear" className="w-full">
          <div className="bg-white h-80 shadow-md shadow-yellow-100 ronded-lg flex flex-col relative p-1">
            <div className="w-full h-full">
              <img
                src="/switchgear_access.jpg"
                className="w-full h-full object-cover bg-no-repeat rounded"
                alt="Cable and Wires"
              />
            </div>
            <div className="w-full rounded bg-blue-700 opacity-80  h-2/5 absolute z-2 bottom-0 left-0 p-4 hover:w-full">
              <p className="w-full  text-white text-2xl">
                Switchgear Accessory
              </p>
              <span className="text-gray-300  text-base max-w-md-s">
                Request a quote on any Switchgear Accessories, Browse through
                our product lists.
              </span>
            </div>
            <p className="text-2xl font-bold text-end mt-5 ml-5 z-3 text-yellow-400 animate-up-down">
              See More
            </p>
          </div>
        </Link>
        <Link href="/servesithub/products/lighting" className="w-full">
          <div className="bg-white h-80 shadow-md shadow-yellow-100 ronded-lg flex flex-col relative p-1">
            <div className="w-full h-4/5">
              <img
                src="/lighting.jpg"
                className="w-full h-full object-cover bg-no-repeat rounded"
                alt="Cable and Wires"
              />
            </div>
            <div className="w-4/5 rounded bg-blue-700 opacity-80  h-2/5 absolute z-2 bottom-0 left-0 p-4">
              <p className="w-full  text-white text-2xl">Lightings</p>
              <span className="text-gray-300  text-base max-w-md-s">
                Get and do your lighting right.We offer variety of lighting
                accessories and equipment. Get your quote
              </span>
            </div>
            <p className="text-2xl font-bold text-end  mt-8 ml-5 z-3 text-yellow-400 animate-up-down">
              See More
            </p>
          </div>
        </Link>
      </div>
      <p className="text-center text-sm font-bold mt-10 leading-normal  mr-2 mb-2 ">
        Know your Spec and what you are looking for? Just write us a mail, will give you a quote
      </p>
        <span className='text-center flex justify-center items-center h-10 '>
         <RequestQuoteBTN/>
          </span>
    </section>
  );
}

export default About
