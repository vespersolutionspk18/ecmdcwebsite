import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className="h-[58px] flex items-center justify-between bg-gray-100 p-6">
        <Image
        src="/assets/ecmdclogo.png"
        alt="Picture of the author"
        width={144}
        height={144}
        />
        <div className="flex flex-row gap-3">
            <p>Home</p>
            <p>How it Works</p>
            <p>Locations</p>
            <p>Contact</p>
        </div>
        <div className="flex items-center h-[48px] justify-between p-3 rounded-xl bg-blue-600 text-white ">
        Apply Now
        </div>

    </div>
  )
}

export default page