import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import buttonImage from "../public/images/CREATE-hero/buttonImage.png";

const Button = () => {
  return (
    <div >
    <button>
    <Link href="/generate" >
      
        <div className="h-32 w-32 mx-auto">
          <div className="relative text-center text-2xl mx-auto">
            <p>Press</p>
          </div>
          <Image src={buttonImage} />
          <div className="relative bottom-10 text-black text-3xl mx-auto ">
            <p>Start</p>
          </div>
          <div className="relative bottom-8 text-xs whitespace-nowrap right-28 text-justify">
            <p>GRAB A COPY OF YOUR CHARACTER SHEET AND MAKE ART</p>
          </div>
        </div>
      
    </Link>
    </button>
    </div>
  );
};

export default Button;
