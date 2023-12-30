import React from 'react'
import Link from 'next/link'
 import {FaMessage,
} from "react-icons/fa6";
export default function RequestQuoteBTN() {
  return (
     <Link
            href="/servesithub/getAquote"
            className="btn-primary bg-yellow-500 w-44 h-full text-blue-600 text-center flex justify-center items-center"
          >
            <FaMessage className="mr-2 text-3xl text-white" /> Get A Quote
          </Link>
  )
}
