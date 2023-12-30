import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Switchgear() {
  return (
    <section className="w-full flex flex-col ">
      <p className="text-center text-sm font-bold mt-10 leading-normal  mr-2 mb-2 ">
        Know your Spec and what you are looking for? Just write us a mail with
        what you are looking, will give you a quote
      </p>
      <span className="text-center flex justify-center items-center">
        <Link
          href="/servesithub/getAquote"
          className="bg-blue-700 text-yellow-200 font-bold text-sm rounded p-2 m-2 "
        >
          Request A Quote
        </Link>
      </span>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4  p-5">
        <div className="bg-white shadow-lg  shadow-blue-200 ronded-lg flex flex-col p-1 relative">
          <div className="w-full flex justify-center items-center ">
            <Image
              src="/relays.jpg"
              className=" object-contain rounded"
              width={500}
              height={800}
              alt="Relays"
            />
          </div>
          <div className="w-4/5 rounded bg-blue-700 p-4 absolute bottom-0">
            <p className="w-full  text-white text-2xl">Relays</p>
          </div>
        </div>
        <div className="bg-white  shadow-lg shadow-blue-200 ronded-lg flex flex-col relative p-1">
          <div className="w-full ">
            <Image
              src="/mcbs.jpg"
              className="object-cover rounded"
              width={300}
              height={400}
              alt="Relays"
            />
          </div>
          <div className="w-4/5 rounded bg-blue-700 p-4 absolute bottom-0">
            <p className="w-full  text-white text-2xl">MCBS</p>
          </div>
        </div>
        <div className="bg-white  shadow-lg  shadow-blue-200  ronded-lg flex flex-col relative  p-1">
          <div className="w-full ">
            <Image
              src="/current_transformers.jpg"
              className=" object-cover  rounded"
              width={400}
              height={600}
              alt="Relays"
            />
          </div>
          <div className="w-4/5 rounded bg-blue-700 p-4 absolute bottom-0">
            <p className="w-full  text-white text-2xl">Current Transformers</p>
          </div>
        </div>
        <div className="bg-white  shadow-lg  shadow-blue-200 ronded-lg flex flex-col  p-1">
          <div className="w-full">
            <Image
              src="/vt.jpg"
              className=" object-cover  rounded"
              width={250}
              height={400}
              alt="Relays"
            />
          </div>
          <div className="w-4/5 rounded bg-blue-700 p-4">
            <p className="w-full  text-white text-2xl">Voltage Transformers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Switchgear
