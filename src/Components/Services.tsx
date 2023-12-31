import React from 'react'
import {MdElectricalServices} from "react-icons/md"
import Link  from 'next/link';
import RequestQuoteBTN from '@/Components/RequestQuoteBTN';

export default function ServicesComponent() {
  return (
   <section
      id="services"
      className="bg-gradient-to-tl to-gray-100  from-blue-700 to-20%  lg:ml-10 lg:mr-10 shadow-2xl"
    >
      <div className=" w-full h-full">
        <div className="flex items-center justify-center gap-2 my-4 z-2 ">
          <MdElectricalServices className="text-yellow-400 text-4xl " />
          <h1 className="text-blue-700 text-4xl font-bold lg:text-6xl  ">
            Serves It Hub Main Services
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 z-2">
          <div className="bg-gray-100 rounded shadow-md  p-3">
            <h3 className="text-2xl text-blue-700 mb-3 font-bold">
              Elcectircal Contracting Services
            </h3>
            <ol className="list-disc p-2">
              <li className="text-sm ">Metering Installations </li>
              <li className="text-sm">Substation Construction </li>
              <li className="text-sm">
                Factory Testing and Site Acceptance Testing
              </li>
              <li className="text-sm">
                Substation Mv & LV Switchgear Installations
              </li>
              <li className="text-sm">
                MV & LV Switchgear Maintenance & Testing
              </li>
              <li className="text-sm">
                MV & LV Power Systems Commissioning & Testing
              </li>
              <li className="text-sm">
                Retrofits Design and Commissioning (Circuit Breakers, Protection
                Schemes)
              </li>
              <li className="text-sm">
                Refurbishments of Switchgears and electrical equipment (Circuit
                Breakers, Vacuum Contactors)
              </li>
              <li className="text-sm">Substation erection</li>
              <li className="text-sm">
                Generator Panel Installation and Electrical Motor installation
              </li>
              <li className="text-sm">
            
                Fiber Optic Cable Installation and Splicing
              </li>
              <li className="text-sm">Power Cables joining and termination.</li>
              <li className="text-sm">
                Renewable energy Plant Installation and commissioning
              </li>
            </ol>
          </div>
          <div className="bg-white rounded shadow-md shadow-yellow-400  p-3">
            <h3 className="text-2xl text-blue-700 mb-3 font-bold">
              Power System Services
            </h3>
            <ol className="list-disc p-2">
              <li className="text-sm ">
                Power Systems Study (Settings Calculations and Grading).
              </li>
              <li className="text-sm">
                Protection IEDS Engineering Configurations.
              </li>
              <li className="text-sm">
                Substation Primary and Secondary Plant Commissioning.
              </li>
              <li className="text-sm">Power System Fault Investigations.</li>
              <li className="text-sm">
                Metering Instruments Maintenance and Commissioning.
              </li>
              <li className="text-sm">Superisory Control Systems.</li>
            </ol>
          </div>
          <div className="bg-gray-100 rounded shadow-md  p-3">
            <h3 className="text-2xl text-blue-700 mb-3 font-bold">
              Construction
            </h3>
            <ol className="list-disc p-2">
              <li className="text-sm ">Bus Bar Installation</li>
              <li className="text-sm">MV Switchgear Installation</li>
              <li className="text-sm">LV MCC Installation</li>
              <li className="text-sm">LV Distribution Boards Wiring.</li>
              <li className="text-sm">Motor Starter Wiring</li>
              <li className="text-sm">Plant Lighting</li>
              <li className="text-sm">Building wiring</li>
              <li className="text-sm">MV Cable Installation and Termination</li>
              <li className="text-sm">LV Cable Installation and Termination</li>
              <li className="text-sm">Cable Racking</li>
              <li className="text-sm">Motor Start and Stop Hand Stations</li>
            </ol>
          </div>
          <div className="bg-white rounded shadow-md shadow-yellow-400  p-3">
            <h3 className="text-2xl text-blue-700 mb-3 font-bold">
              Maintenacne
            </h3>
            <ol className="list-disc p-2">
              <li className="text-sm ">Trnasformer Maintenance</li>
              <li className="text-sm">Generator Maintenance</li>
              <li className="text-sm">
                Medium Voltage Switchgear Servicing and Testing
              </li>
              <li className="text-sm">
                LV Switchgear Maintenacne and Testing.
              </li>
              <li className="text-sm">
                DC Systems Maintenance (UPS and Battery Banks)
              </li>
            </ol>
          </div>
          <div className="bg-gray-100 rounded shadow-md  p-3">
            <h3 className="text-2xl text-blue-700 mb-3 font-bold">
              MV, LV, AND HV Switchgear Supply
            </h3>
            <ol className="list-disc p-2">
              <li className="text-sm ">
                Panels, Circuit Breakers, Current Transformers and Bus Bars
              </li>
              <li className="text-sm">
                Protection Relays, Metering Instruments and Battery Tripping
                Unit
              </li>
              <li className="text-sm">Cable and Electrical Accessories.</li>
            </ol>
          </div>
        </div>
      </div>
      <p className="text-center text-sm font-bold mt-10 leading-normal  mr-2 mb-2 ">
        Know your Spec and what you are looking for? Just write us a mail, will give you a quote
      </p>
      <span className="text-center flex justify-center items-center h-10">
       <RequestQuoteBTN/>
      </span>
    </section>
  )
}
