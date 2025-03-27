import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const ClientCarousel = () => {
  const logoSize = { height: 40 };
  const logoStyle = { margin: '0 25px' };

  const logos = [
    <Image src="/assets/adblogo.png" alt="" width={60} key="br" {...logoSize} />,
    <Image src="/assets/uniceflogo.png" alt="" width={130} key="br" {...logoSize} />,
    <Image src="/assets/ciscologo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/kfwlogo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/citilogo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/usaidlogo.png" alt="" width={130} key="br" {...logoSize} />,
    <Image src="/assets/undplogo.png" alt="" width={60} key="br" {...logoSize} />,
    <Image src="/assets/unlogo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/gtzlogo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/dfidlogo.png" alt="" width={70} key="br" {...logoSize} />,
    <Image src="/assets/wblogo.png" alt="" width={150} key="br" {...logoSize} />,
  ];

  return (
    <div className="py-20 my-10">

      <div className="relative z-10">
        {/* Left gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to right, white 30%, transparent 70%)' }}>
      </div>
      
      {/* Right gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-white to-transparent via-transparent z-20 pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(to left, white 30%, transparent 70%)' }}>
      </div>
    <div className="overflow-hidden ">
      <Marquee gradient={false} pauseOnHover={false} speed={50}>
        {logos.map((logo, index) => (
          <div key={index} style={logoStyle}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`repeat-${index}`} style={logoStyle}>
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`repeat2-${index}`} style={logoStyle}>
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
    </div>
    
    </div>
  );
};

export default ClientCarousel;