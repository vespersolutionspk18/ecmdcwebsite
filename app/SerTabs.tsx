'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { FaAngleRight } from "react-icons/fa6";
const tabs = [
    {
      id: 'tab1',
      label: 'Agriculture',
      image: '/assets/agriculture.jpg', // Background image path
      heading: 'Agriculture Sector',
      paragraph: '<p>In the Agriculture Sector, ECMDC offers specialized guidance and support to clients engaged in agricultural activities. Our wide range of services aims to enhance efficiency, sustainability, and productivity in the industry. We play a key role in tackling industry challenges, promoting innovation, and championing sustainable practices to ensure the long-term success of agricultural businesses. Backed by extensive and dynamic experience in agricultural projects, we are committed to driving positive change.<br></br></p><p><b>Our Services include:</b></p><ul><li>&#x2022; Farm Operations Management</li><li>&#x2022; Advanced Irrigation Systems</li><li>&#x2022; Sustainable Farming and Environmental Conservation</li><li>&#x2022; Agribusiness Development and Value Chain Optimization</li><li>&#x2022; Agricultural Equipment & Technological Solutions</li><li>&#x2022; Rural Community Development</li></ul>',
      buttonText: 'Learn More',
      buttonRoute: '/agriculture', // Route for the button
    },
    {
      id: 'tab2',
      label: 'Construction',
      image: '/assets/construction.jpg',
      heading: 'Construction Sector',
      paragraph: '<p>ECMDC provides expert guidance and support to clients involved in construction and infrastructure development. Our diverse range of services is designed to enhance project efficiency, sustainability, and overall quality in the industry. We play a critical role in addressing sector challenges, fostering innovation, and advocating for sustainable construction practices to ensure the long-term success of construction projects. With extensive experience in construction and infrastructure initiatives, we are dedicated to driving progress and delivering high-impact solutions.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Project Management and Planning</li><li>&#x2022; Sustainable Construction Practices</li><li>&#x2022; Infrastructure Development</li><li>&#x2022; Construction Technology and Innovation</li><li>&#x2022; Building Materials and Equipment Solutions</li><li>&#x2022; Urban and Rural Development</li></ul>',
      buttonText: 'Explore Services',
      buttonRoute: '/construction',
    },
    {
      id: 'tab3',
      label: 'Education',
      image: '/assets/education.jpg',
      heading: 'Education Sector',
      paragraph: '<p>For the Education Sector, ECMDC offers expert guidance and support to institutions engaged in educational development and innovation. Our comprehensive services aim to improve educational quality, access, and sustainability. We address key challenges within the sector, promote innovative teaching methods, and advocate for inclusive practices to ensure the long-term success of educational initiatives. With deep experience in educational projects, we are committed to empowering institutions and fostering positive change.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Educational Program Development</li><li>&#x2022; Curriculum Design and Innovation</li><li>&#x2022; Teacher Training and Capacity Building</li><li>&#x2022; Digital Learning Solutions</li><li>&#x2022; School Infrastructure Planning and Management</li><li>&#x2022; Inclusive Education Strategies</li></ul>',
      buttonText: 'Discover More',
      buttonRoute: '/education',
    },
    {
      id: 'tab4',
      label: 'Environment',
      image: '/assets/environment.jpg',
      heading: 'Environment Sector',
      paragraph: '<p>In the Environment Sector, ECMDC provides expert guidance and solutions to organizations involved in environmental protection and sustainability. Our services are tailored to enhance environmental management, promote sustainable practices, and mitigate the impacts of climate change. We play a vital role in addressing environmental challenges, driving innovation in eco-friendly technologies, and advocating for the long-term preservation of natural resources. With extensive experience in environmental projects, we are dedicated to supporting a greener future.<br></br></p><p><b>Our Service Include:</b></p><ul><li>&#x2022; Environmental Impact Assessments</li><li>&#x2022; Climate Change Mitigation Strategies</li><li>&#x2022; Sustainable Resource Management</li><li>&#x2022; Ecosystem Restoration and Conservation</li><li>&#x2022; Pollution Control and Waste Management</li><li>&#x2022; Renewable Energy Solutions</li></ul>',
      buttonText: 'Learn About Our Work',
      buttonRoute: '/environment',
    },
    {
      id: 'tab5',
      label: 'Energy',
      image: '/assets/energy.jpg',
      heading: 'Energy Sector',
      paragraph: '<p>ECMDC offers expert support and solutions to clients involved in the energy industry, helping to optimize energy production, distribution, and sustainability. Our range of services focuses on improving efficiency, advancing renewable energy initiatives, and promoting environmentally responsible energy practices. We address the industry&apos;s challenges by fostering innovation and advocating for sustainable energy solutions to ensure long-term success. With broad experience in energy projects, we are committed to driving positive change in the global energy landscape.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Renewable Energy Development</li><li>&#x2022; Energy Efficiency and Optimization</li><li>&#x2022; Power Infrastructure Design and Management</li><li>&#x2022; Sustainable Energy Solutions</li><li>&#x2022; Energy Policy and Regulatory Consulting</li><li>&#x2022; Environmental Impact Assessments for Energy Projects</li></ul>',
      buttonText: 'View Our Projects',
      buttonRoute: '/energy',
    },
    {
      id: 'tab6',
      label: 'Hydropower',
      image: '/assets/hydropower.jpg',
      heading: 'Hydropower Sector',
      paragraph: '<p>ECMDC provides specialized expertise to clients in the hydropower industry, offering comprehensive solutions for the development and management of hydropower projects. Our services focus on maximizing energy generation, ensuring sustainable water resource management, and promoting environmentally responsible practices. We help address the unique challenges of the hydropower sector by fostering innovation and supporting long-term project success. With significant experience in hydropower projects, we are dedicated to delivering impactful and sustainable energy solutions.<br></br></p><p><b>Our Service Include:</b></p><ul><li>&#x2022; Hydropower Project Planning and Development</li><li>&#x2022; Water Resource Management</li><li>&#x2022; Sustainable Energy Generation</li><li>&#x2022; Environmental Impact Assessments</li><li>&#x2022; Dam Design and Engineering</li><li>&#x2022; Operational Efficiency and Maintenance Solutions</li></ul>',
      buttonText: 'Explore Hydropower',
      buttonRoute: '/hydropower',
    },
    {
      id: 'tab7',
      label: 'Management Consulting',
      image: '/assets/management-consulting.jpg',
      heading: 'Management Consulting',
      paragraph: '<p>ECMDC delivers strategic guidance and support to organizations seeking to enhance their management practices and operational efficiency. Our services are designed to address complex business challenges, drive organizational growth, and implement effective management strategies. We focus on fostering innovation, improving performance, and ensuring sustainable success through tailored consulting solutions. With extensive experience in management consulting, we are dedicated to helping businesses achieve their strategic objectives and navigate industry changes effectively.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Strategic Business Planning</li><li>&#x2022; Operational Efficiency Improvement</li><li>&#x2022; Organizational Development</li><li>&#x2022; Change Management and Transformation</li><li>&#x2022; Risk Management and Mitigation</li><li>&#x2022; Market Analysis and Competitive Strategy</li></ul>',
      buttonText: 'Get In Touch',
      buttonRoute: '/management-consulting',
    },
    {
      id: 'tab8',
      label: 'Roads & Bridges',
      image: '/assets/roads-bridges.jpg',
      heading: 'Roads & Bridges Sector',
      paragraph: '<p>We offer expert solutions and support for the design, construction, and maintenance of roads and bridges. Our services are aimed at enhancing infrastructure quality, improving transportation efficiency, and ensuring the longevity and safety of road networks and bridge structures. We address the unique challenges of the sector by integrating innovative technologies and sustainable practices. With extensive experience in road and bridge projects, we are committed to delivering durable and impactful infrastructure solutions.<br></br></p><p><b>Our Services Include</b></p><ul><li>&#x2022; Roadway Design and Engineering</li><li>&#x2022; Bridge Design and Construction</li><li>&#x2022; Infrastructure Rehabilitation and Maintenance</li><li>&#x2022; Traffic Management and Safety Solutions</li><li>&#x2022; Geotechnical and Structural Assessments</li><li>&#x2022; Sustainable Construction Practices</li></ul>',
      buttonText: 'Learn More',
      buttonRoute: '/roads-bridges',
    },
    {
        id: 'tab9',
        label: 'Oil & Gas',
        image: '/assets/oilgas.jpg',
        heading: 'Oil & Gas',
        paragraph: '<p>ECMDC provides specialized expertise and support to clients in the oil and gas industry, focusing on optimizing exploration, production, and operational efficiency. Our comprehensive services are designed to address industry challenges, enhance safety, and promote sustainable practices. We leverage innovative technologies and strategies to ensure the effective management of oil and gas resources. With extensive experience in the sector, we are committed to delivering impactful solutions that drive growth and operational excellence.<br></br></p><p><b>Our Services Include:</b></p><ul><li>&#x2022; Exploration and Production Optimization</li><li>&#x2022; Resource Management and Recovery</li><li>&#x2022; Safety and Risk Management</li><li>&#x2022; Environmental Impact Assessments</li><li>&#x2022; Infrastructure Design and Development</li><li>&#x2022; Sustainable Practices and Compliance</li></ul>',
        buttonText: 'See Our Work',
        buttonRoute: '/public-health-engineering',
      },
    {
      id: 'tab10',
      label: 'Public Health Engineering',
      image: '/assets/publichealth.jpg',
      heading: 'Public Health Engineering',
      paragraph: '<p>ECMDC offers expert solutions and support in the field of public health engineering, focusing on the design and implementation of systems that promote public health and safety. Our services aim to enhance water and sanitation infrastructure, manage waste effectively, and improve overall public health outcomes. We address key challenges by integrating innovative technologies and sustainable practices into public health projects. With extensive experience in public health engineering, we are dedicated to delivering solutions that foster healthier communities and environments.<br></br></p><p><b>Our Services Include</b></p><ul><li>&#x2022; Water Supply and Distribution Systems</li><li>&#x2022; Wastewater Treatment and Management</li><li>&#x2022; Sanitation and Hygiene Infrastructure</li><li>&#x2022; Environmental Health Assessments</li><li>&#x2022; Public Health Risk Management</li><li>&#x2022; Sustainable Infrastructure Solutions</li></ul>',
      buttonText: 'See Our Work',
      buttonRoute: '/public-health-engineering',
    },
    {
      id: 'tab11',
      label: 'Solid Waste Management',
      image: '/assets/solidwaste.jpg',
      heading: 'Solid Waste Management',
      paragraph: '<p>ECMDC provides specialized expertise and solutions in solid waste management, focusing on the efficient handling, treatment, and disposal of waste materials. Our services are designed to improve waste management practices, enhance recycling efforts, and promote sustainable waste solutions. We tackle key challenges in the sector by implementing innovative technologies and strategies that ensure environmental protection and operational efficiency. With extensive experience in solid waste management, we are committed to supporting effective and sustainable waste management practices.<br></br></p><p><b>Our Services Include</b></p><ul><li>&#x2022; Waste Collection and Transportation</li><li>&#x2022; Recycling and Resource Recovery</li><li>&#x2022; Waste Treatment and Disposal</li><li>&#x2022; Landfill Management and Design</li><li>&#x2022; Waste Minimization Strategies</li><li>&#x2022; Environmental Impact Assessments</li></ul>',
      buttonText: 'Find Out More',
      buttonRoute: '/solid-waste-management',
    },
    // Add more tabs as needed
  ];
  
  const SerTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [isClient, setIsClient] = useState(false);
    const activeTabContent = tabs.find((tab) => tab.id === activeTab);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    const handleClick = (id: string) => {
      setActiveTab(id);
    };
  
    return (
      <div className="flex flex-col px-5 xl:px-20 my-20" id="sectors">
        <div className="flex flex-col gap-5 xl:w-[40%] my-10">
          <h3 className="text-5xl text-slate-800">Sectors We Serve</h3>
          <p className="font-light text-slate-800 text-justify">Leverage our comprehensive suite of services, from cutting-edge technology to construction, consulting and efficient engineering.</p>
        </div>
        <div className="flex flex-row">
          {/* Left Section: Vertical List of Buttons */}
          <div className="w-[30%] xl:w-[40%]">
            <ul className="list-none p-0 m-0 flex flex-col gap-3 xl:gap-5">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    className={`w-full p-1 xl:p-4 text-sm text-left flex items-center justify-between gap-2 ${
                      activeTab === tab.id
                        ? 'bg-black text-white border-0 rounded-lg'
                        : 'bg-white text-slate-800 border-[1px] border-gray-200 rounded-lg'
                    }`}
                    onClick={() => handleClick(tab.id)}
                  >
                    {tab.label}
                    <FaAngleRight
                      className={`h-4 w-4 ml-2 ${
                        activeTab === tab.id ? 'text-white' : 'text-black'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Section: Dynamic Content Based on Active Button */}
          <div className="w-[70%] pl-5 xl:pl-20">
            {activeTabContent && isClient && (
              <div className="flex flex-col gap-4">
                <div
                  className="h-80 bg-cover bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${activeTabContent.image})` }}
                ></div>
                <h2 className="text-3xl my-3">{activeTabContent.heading}</h2>
                <p dangerouslySetInnerHTML={{ __html: activeTabContent.paragraph }} className="text-slate-800 xl:text-xl text-md font-light text-justify"/>
                {/*}
                <a
                  href={activeTabContent.buttonRoute}
                  className="mt-3"
                >
                  <Button variant="outline" className="px-5 py-6 text-lg font-light">
                    Learn More <FaAngleRight className="mr-2 ml-2 h-4 w-4" />
                  </Button>
                </a> */}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default SerTabs;