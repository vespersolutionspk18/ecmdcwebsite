import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PraiseSection from '../PraiseSection'
import RecentProjects from '../RecentProjects'

const page = () => {
  return (
    <div>
        <Header />
        <div className="w-full bg-gray-950 flex flex-row h-[640px]">
        <div className="w-1/2 flex flex-col p-20 gap-5  justify-center">
        <h1 className="text-6xl text-gray-200 font-light">Who we are</h1>
        <p className="text-gray-300 text-justify">ECMDC (Pvt.) Limited (ecmdc) is a Pakistani Private Sector owned multidisciplinary ISO Certified Company, involved in providing engineering and management consultancy services domestically and internationally; established in 1996, and registered with the Pakistan Engineering Council.</p>
        <div className="flex flex-row gap-20 my-10">
            <div className="">
                <h2 className="font-light text-gray-200 text-6xl">&gt;250</h2>
                <p className="font-light text-gray-200">Projects Completed</p>
            </div>
            <div className="">
                <h2 className="font-light text-gray-200 text-6xl">42</h2>
                <p className="font-light text-gray-200">Employees</p>
            </div>
        </div>
        </div>
        <div className="w-1/2 h-full  bg-cover bg-center" style={{ backgroundImage: `url('/assets/heroimage.jpg')` }}></div>
        </div>
        <div className="mx-20 my-20 flex flex-col gap-10">
        <div className="flex flex-col gap-5">
        <h2 className="text-5xl text-slate-800">Background</h2>
        <p className="font-light text-justify text-slate-800">ECMDC is an emerging global, state-of-the-art service provider organization actively engaged in water resources and energy, agriculture, infrastructure, environment, oil and gas, mass transit, light rail, motorways, highways, institutional capacity building, financial management, rural and urban development, and management. With client satisfaction as our core business approach, we fulfill project or program needs from
        concept to completion and profitable operational management. ecmdc has successfully completed over 250 projects.<br></br><br></br>Our private and public sector clients rely on us for a broad range of multifaceted, specific, and integrated services: feasibility studies, front-end engineering design, detailed designs, project management, implementation, and facility management, along with related legal and financial services. We emphasize developing our capabilities to meet the needs of our clients by placing them at the center of our operations and taking an innovative approach. To enhance project delivery, we invest in systems to support our clients, commit to staff training, quality, and developing appropriate TI infrastructure. Our internal organization allows us to develop project teams precisely matching the needs of our clients and their assignments.</p>
        </div>
        <div className="flex flex-row gap-5 my-10">
        <div className="w-1/3 border-[1px] border-gray-200 rounded-2xl p-8 flex gap-3 flex-col">
        <h5 className=" text-3xl text-gray-800">Our Mission</h5>
        <p className="text-gray-800 font-light text-justify">At ECMDC, we are a premier consulting and services firm dedicated to propelling our clients towards enduring success. We leverage a team of exceptional professionals who possess unparalleled skills and access to cutting-edge data. This enables us to provide our clients with the insights and guidance they need to make informed, strategic decisions that drive sustainable growth.</p>
        </div>
        <div className="w-1/3 border-[1px] border-gray-200 rounded-2xl p-8 flex gap-3 flex-col">
        <h5 className=" text-3xl text-gray-800">Our Vision</h5>
        <p className="text-gray-800 font-light text-justify">We aspire to be the preeminent strategic partner for our clients, propelling them towards transformative and sustainable growth. We leverage a unique blend of in-depth industry expertise and cutting-edge methodologies to unlock the full potential of their organizations. Our vision is a future where businesses achieve operational excellence, driven by data-driven insights and a commitment to continuous innovation. </p>
        </div>
        <div className="w-1/3 border-[1px] border-gray-200 rounded-2xl p-8 flex gap-3 flex-col">
        <h5 className=" text-3xl text-gray-800">Our People</h5>
        <p className="text-gray-800 font-light text-justify">At ECMDC, we believe in the power of collaboration. Our core team of highly educated and experienced professionals brings a wealth of knowledge and expertise to every project. They are adept at handling consulting assignments of varying scopes and complexities. To complement this expertise, we have assembled a panel of industry specialists, ensuring we can provide in-depth knowledge specific to your unique needs.</p>
        </div>
        </div>
        </div>

        <RecentProjects />
        <PraiseSection />
        <Footer />
    </div>
  )
}

export default page