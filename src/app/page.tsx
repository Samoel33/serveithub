
import Link from 'next/link';
import ServicesComponent from '@/Components/Services';
import AboutComponent from '@/Components/About';

export default function Home() {
  return (
    <main className="">
      <div className="w-full bg-gray-100  md:p-3 lg:p-8   grid  md:grid-cols-2 sm:grid-cols-1 gap-4 mt-2">
        <div className="flex flex-col pl-14 justify-center ">
          <h1 className="content lg:text-6xl sm:text-4xl xs:text-4xl text-blue-700 font-bold capitalize ">
            Service done right first time, Everytime.
          </h1>
          <p className="content text-sm text-gray-700 mt-4 leading-normal max-w-prose ">
            Serves It Hub (PTY) LTD has set its sight in becoming the best
            innovative, principled multi-disciplinary enigineering company that
            leaves a leadership mark in every project it works on, by providing
            our clients with unmatched perfomance, accountability and the
            highest level of setifaction in the industry.
          </p>
          <div className="w-full flex mt-6 ">
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal btn-primary bg-yellow-500 text-blue-700 mr-3 shadow-md"
            >
              <Link href="/servesithub/about" className="h-full w-full text-inherit">
              About Us
              </Link>
            </button>
            <button className="btn-primary bg-blue-700 text-yellow-500 mr-3 inline-block uppercase rounded bg-primary px-6 pb-2 pt-2.5 text-sm font-medium shadow-md">
             <Link href="/servesithub/getAquote" className="h-full w-full text-inherit">
              Get A Quote
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full rounded shadow-md  ">
          <img
            src="/mainImage.jpg"
            alt="Main Image"
            className="bg-blue-700 object-cover w-full rounded "
          />
        </div>
      </div>
     <ServicesComponent/>
     <AboutComponent/>
     
    </main>
  );
}
