import React from "react";
import Image from "next/image";

const InstarLogo = () => {
  return (
    <div>
      <div className="logo">
        <Image src="/images/InstarLogo.svg" alt="Logo" width={70} height={70} />
        <span className="logo-text">Instar</span>
      </div>
    </div>
  );
};

export default InstarLogo;
