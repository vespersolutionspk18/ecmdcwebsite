"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaAngleRight } from 'react-icons/fa6';
const Header = () => {
  const router = useRouter();
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between relative">
      <Image src="/assets/ecmdclogo.png" width={150} height={1} alt="Logo" onClick={() => handleNavigate('/')}/>
      <div></div>
      
      {/* Navigation Menu */}
      <div className="flex flex-row space-x-4  mr-20">
        <div
          onClick={() => handleNavigate('/')}
          className="px-4 py-2 text-gray-800  cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => setIsSectorsOpen(!isSectorsOpen)}
          className="relative px-4 py-2 text-gray-800  cursor-pointer"
        >
          Sectors
          {/* Sectors Submenu */}
          {isSectorsOpen && (
            <div className="absolute flex flex-row gap-2 left-0 top-full mt-2 p-2 bg-white border-[1px] rounded-2xl border-gray-200 ">
              <div className="flex flex-col gap-2"><div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Agriculture
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Construction
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Education
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Environment
              </div>
              </div>
              <div className="flex flex-col gap-2"><div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Energy
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Hydropower
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Management Consulting
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Roads & Bridges
              </div>
              </div>
              <div className="flex flex-col gap-2"><div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Oil & Gas
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
               Public Health Engineering
              </div>
              <div
                onClick={() => handleNavigate('/#sectors')}
                className="block px-4 py-2 text-gray-800  cursor-pointer"
              >
                Solid Waste Management
              </div>
              
              </div>
              
            </div>
          )}
        </div>
        <div
          onClick={() => handleNavigate('/about')}
          className="px-4 py-2 text-gray-800  cursor-pointer"
        >
          About
        </div>
        
        <div
          onClick={() => handleNavigate('/contact')}
          className="px-4 py-2 text-gray-800  cursor-pointer"
        >
          Contact
        </div>
      </div>

      {/* Case Studies Button */}
      <Button 
        className="px-5 py-6 text-lg font-light hover:bg-blue-600" 
        onClick={() => handleNavigate('/#projects')}
      >
        Case Studies <FaAngleRight className="mr-2 ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default Header;
