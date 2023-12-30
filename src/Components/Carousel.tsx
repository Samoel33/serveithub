import React from 'react'
import { FaUser } from "react-icons/fa";
const  team = [
    {id: 1,name:" Advice Malatji", occupation:"Electrical Engineering Technician"},
    {id: 2,name:"  Ntsako Ndlovu ", occupation:"Mechanical Engineering Technician "},
    {id: 3,name:" Dzunisani Mkhonto ", occupation:"Field Service Technician"},
    {id: 4,name:"  Sibusiso Shabangu ", occupation:"Electrical Engineering Technician"},
    {id: 5,name:" Jeffery Dhombheni ", occupation:"Electrician "},
    {id: 6,name:"  Sibusiso Ngobeni ", occupation:"Electrician "},
    {id: 7,name:" Rofhiwa mphephu  ", occupation:"Admin & Safety Officer "},
    {id:8 ,name:" Phasha Kingsley ", occupation:"Site Supervisor "},
   
]
let i=0;
const next = ()=>{
i === team.length-1 ? i=0 : i++
}
const prev=()=>{
i===0 ? i===team.length -1: i-- 
}

export default function CarouselTeam() {
  return (
   <><h3 className='lg:text-6xl text-4xl text-blue-700 text-center font-bold mb-5'>SERVES IT HUB (PTY) LTD TEAM</h3>
   <div className=' grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1'>
    {team.map((user) =>(
    <div className=' bg-gray-100 flex relative flex-col justify-center items-center shadow-lg gap-2 p-2 rounded-lg' key={user.id}>
        <span className='text-center flex justify-center items-center text-4xl text-blue-700 h-16 absolute top-0 bg-yellow-500 z-2 rounded-full w-16 '><FaUser /></span>
        <div className='w-full p-5 bg-blue-200 mt-8'>
        <span>Name:<p className='text-2xl'>{user.name}</p></span>
        <span >Occupation:<p className='text-2xl text-blue-700 opacity-50'>{user.occupation}</p> </span>

        </div>
    </div>
    ))
    }
      </div></>
  )
}
