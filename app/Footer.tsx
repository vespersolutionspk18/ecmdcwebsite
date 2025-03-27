"use client";

import { Separator } from '@/components/ui/separator'


import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Footer = () => {
    const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const getInTouchClick = () => {
    router.push('/contact');
  };
  const aboutClick = () => {
    router.push('/about');
  };
  const sectorsClick = () => {
    router.push('/#sectors');
  };
  const projectsClick = () => {
    router.push('/#projects');
  };
  const homeClick = () => {
    router.push('/');
  };
  return (
    <div className="mx-10 flex flex-col gap-3 mt-40">
        <Separator />
        <div className="flex flex-col md:flex-row my-5">
            <div className="xl:w-1/2">
                <h5 className="text-2xl xl:text-3xl font-medium text-slate-800 mx-5 xl:mx-10">Empowering Excellence in Workforce Development & Strategic Consulting, Your Partner for Success</h5>
            </div>
            <div className="xl:w-1/2 text-sm xl:text-xl  mt-10 xl:mt-0 flex flex-row gap-0">
                <div className="w-1/3 flex flex-col gap-2 ">
                <p className="text-slate-800 ">Navigation</p>
                <p onClick={homeClick} className="text-slate-800 font-light">Home</p>
                <p onClick={aboutClick} className="text-slate-800 font-light">About</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Sectors</p>
                <p onClick={projectsClick} className="text-slate-800 font-light">Recent Projects</p>
                <p onClick={getInTouchClick} className="text-slate-800 font-light">Contact</p>
                </div>
                <div className="w-2/3 flex flex-row gap-0 ">
                <div className="w-1/2 flex flex-col gap-2">
                <p className="text-slate-800 ">Sectors</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Agriculture</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Construction</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Education</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Environment</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Energy</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Hydropower</p>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                <p className="text-slate-800 "><br></br></p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Management Consulting</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Roads & Bridges</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Oil & Gas</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Public Health</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Solid Waste Management</p>
                </div>
                </div>
                
                
            </div>
            
        </div>
        <Separator />
        <div className="flex md:flex-row items-center">
            <div className="w-2/3 px-10"><Image src="/assets/ecmdclogo.png" width={200} height={1} alt="" /></div>
            <div className="w-1/3 flex flex-row gap-5">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Settings</p>
            </div>
        </div>
        <Separator />
        <div className="mx-10 mb-3 flex flex-row items-center justify-between">
            <p className="text-sm font-light text-slate-800">©2024 ECMDC Private Limited. </p>
            <p className="text-sm font-light text-slate-800">All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer