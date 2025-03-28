import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ContactForm } from './ContactForm'

const page = () => {
  return (
    <>
    <Header />
    <div className="flex md:flex-row">
        <div className="w-1/2 flex items-center justify-center"><ContactForm /></div>
        <div className="w-1/2 p-3">
        <div className="w-full h-full bg-gray-950 rounded-2xl flex flex-col p-20">
            <h3 className="text-5xl text-white font-light">Visit us or drop a call.</h3>
            <h5 className="text-2xl text-white mt-5 mb-1 font-thin">Head Office</h5>
            <p className="text-white font-thin">Office No. 36, The Pearl Continental, Mall Road, Lahore</p>
            <h5 className="text-2xl text-white mt-3 mb-1 font-thin">Islamabad Office</h5>
            <p className="text-white font-thin">Suite No. 202, One Constitution Avenue, Islamabad</p>
            <h5 className="text-2xl text-white mt-3 mb-1 font-thin">Karachi Office</h5>
            <p className="text-white font-thin">House No 67, Khayban-e-Badban, Phase V, Karachi</p>
            <h5 className="text-2xl text-white mt-3 mb-1 font-thin">Peshawar Office</h5>
            <p className="text-white font-thin">C2, 2nd Floor, New Park View Apartments, Peshawar</p>
            <h5 className="text-2xl text-white mt-3 mb-1 font-thin">Phone</h5>
            <p className="text-white font-thin">+92 300 5557859</p>
            <h5 className="text-2xl text-white mt-3 mb-1 font-thin">Email</h5>
            <p className="text-white font-thin">info@ecmdc.co</p>

        </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default page
