import React from 'react';
import Vector2 from "../public/images/CREATE-hero/Vector2.png";
import Image from 'next/image';


const VectorImage = () => {
  return (
    <div>
<Image src={Vector2} alt="Vector" className="Vector-image" />
</div>
  );
}

export default VectorImage;
