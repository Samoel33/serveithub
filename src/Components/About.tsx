'use client'
import React from 'react'
import Image from 'next/image'
import CarouselTeam from './Carousel'
import GetAquoteComponent  from "./GetAQuote"
import {usePathname,redirect} from "next/navigation";
export default function AboutComponent() {
  const pathname = usePathname();
  return (
    <>
   <section className="bg-gray-100  lg:ml-10 lg:mr-10 shadow-2xl ">
       <Image src="/LOGOV2.svg" width={400} height={200} alt="logo" className={pathname.includes('/about')? 'flex':'hidden'} />
      <h1 className="font-bold text-4xl text-blue-700 capitalize flex justify-center pr-20 lg:text-6xl mb-5 pt-5">
        About Us
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center w-full">
        <div className="flex flex-col gap-2 p-2">
          <h3 className="font-bold text-blue-700 text-2xl p-3 lg:text-4xl">
            Compnay Background
          </h3>
          <p className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
            SERVES IT HUB (PTY) LTD is a 100% black owned business with
            headquarters in Witbank, Mpumalanga, South Africa. .Serves It Hub
            (PTY) LTD was established in 2018 to service mining Industry, Oil
            and Gas industries and utilities with all their Power Systems.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h3 className="font-bold text-blue-700 text-2xl p-3  lg:text-4xl">
            Compnay Vission
          </h3>
          <p className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
            Serves It Hub (PTY) LTD has set its sight in becoming the best
            innovative, principled multi- disciplinary engineering company that
            leaves a leadership mark in every project it works on, by providing
            our clients with unmatched performance, accountability and the
            highest level of satisfaction in the industry.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h3 className="font-bold text-blue-700 text-2xl p-3 lg:text-4xl">
            Compnay Mission
          </h3>
          <p className="leading-normal max-w-prose p-3 lg:max-w-lg-s md:max-w-md-s">
            In aspiring to fulfil its vision, Serves It Hub (PTY) LTD strives to
            deliver high quality and appropriate services to its clients and the
            community from its different engineering fields. Our principals have
            built their careers understanding this truth and developed
            confidence and trusted, long-lasting relationships within the
            industry by conducting our business with integrity, honesty and hard
            work
          </p>
        </div>
      </div>
    </section>
       <section className='bg-gray-100  lg:ml-10 lg:mr-10 shadow-2xl flex flex-col justify-center items-center mb-5'>
        <CarouselTeam/>
      </section>
    <GetAquoteComponent/>
    </>
  )
  
}
