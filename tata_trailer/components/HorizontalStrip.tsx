import React from "react";

const HorizontalStrip = () => {
  return (
    <div>
      <div className="w-full h-20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        <ul className="text-gray-600 text-4xl font-mono flex items-center justify-center text-nowrap md:justify-start [&_li]:mx-8 [&_img]:max-w-none  animate-infinite-scroll">
          <li>
            <p className="tracking-wider">Freight Forwarding</p>
          </li>
          <li>
            <p className="tracking-wider">Cargo Insurance</p>
          </li>
          <li>
            <p className="tracking-wider">Office Moving</p>
          </li>
          <li>
            <p className="tracking-wider">International Shipping</p>
          </li>
          <li>
            <p className="tracking-wider">Ware House Management</p>
          </li>
          <li>
            <p className="tracking-wider">Logistic Moving</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HorizontalStrip;
