"use client";

import { Button } from '@/components/ui/button'
import { get } from 'http';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa6";
const AboutSection = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
  
    const getInTouchClick = () => {
      router.push('/contact');
    };
    const aboutClick = () => {
      router.push('/about');
    };

  return (
    <div className="px-10 flex flex-col items-center justify-center">
        <div className="my-10 gap-5 flex flex-col">
            <h3 className="text-[40px] tracking-tight leading-snug font-medium text-slate-800 px-64 text-center">Comprehensive Consulting Solutions Tailored to Your Needs</h3>
            <p className="px-64 text-center font-light text-slate-800">ECMDC has established itself as a leading independent global consulting group, serving both public and private stakeholders across a comprehensive business ecosystem. </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 px-10 xl:px-24 mt-10">
            
            <div className="xl:w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">We offer expert support at every phase of your project.</h3>
                <p className="tracking-tight font-light text-justify">Our team is reinforced by competent controllers, procurement specialists, personnel management staff, as well as state-of-the-art ICT Solutions, which permit our experts to successfully plan, manage and implement projects in more than 35 countries.</p>
                <div><p className="tracking-tight font-light text-justify">Our core team consists of:</p>
                <div className="flex flex-row gap-10"><ul className="font-light "><li> - Civil Engineers</li><li> - Structural Engineers</li><li> - Architects</li><li> - Public Health Engineers</li><li> - Environmental Engineers</li><li> - Material Engineers</li><li> - Wastewater Experts</li><li> - Geologists</li><li> - Hydraulic Engineers</li><li> - Agricultural Engineers</li></ul><ul className="font-light "><li> - Hydrologists</li><li> - Architects</li><li> - Roads/Highways Experts</li><li> - Resident Engineers</li><li> - Management/Reform Experts</li><li> - HR Experts</li><li> -  IT/GIS Experts</li><li> - Surveyors</li><li> - Site Engineers</li><li> - Lab Technicians</li><li> - Healthcare Professionals</li></ul></div></div>
                
            <div><Button  className="px-5 py-6 text-lg font-light bg-black  hover:bg-blue-600" onClick={getInTouchClick}>Get in Touch<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button></div>
            
            </div>
            <div className="xl:w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">Your trusted partner for Sustainable Growth</h3>
                <p className="tracking-tight font-light text-justify">With a proven track record of delivering success on hundreds of mandates, we leverage our international reach and the diverse backgrounds of our team members. This unique combination of strategic, economic, industrial, and technical expertise allows us to craft bespoke solutions that address the specific needs of each client. </p>
                <p className="tracking-tight font-light text-justify">Furthermore, we skillfully integrate industry-specific knowledge with proven consulting methodologies to deliver exceptional value and maximize the impact of our services.</p>
                
            <div><Button variant="outline" className="px-5 py-6 text-lg font-light  hover:bg-gray-200" onClick={aboutClick}>Learn More<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button></div>
           
            </div>
        </div>
    </div>
  )
}

export default AboutSection