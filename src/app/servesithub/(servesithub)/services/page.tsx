import {Metadata} from "next"
import ServicesComponent from '@/Components/Services';
import React from 'react'

export const metadata: Metadata = {
  title:"Services",
  description: 'Serves It Hub Services',
}
function Services() {
  return (
    <ServicesComponent/>
  );
}

export default Services