import Image from "next/image";
import React from "react";

const PartnerCard = ({ imgSrc, name }) => {
  return (
    <div className="mx-auto my-auto p-2">
      <Image className="object-cover" src={imgSrc} alt={name} width={200} height={200} />
    </div>
  );
};

export default PartnerCard;
