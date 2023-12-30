import type { Metadata } from 'next'
import React from 'react'
import AboutComponent from '@/Components/About';


export const metadata: Metadata = {
  title: 'About',
  description: 'About Serves It Hub, All you need to know',
}
function About() {
  return (
    <AboutComponent/>
  );
}

export default About
