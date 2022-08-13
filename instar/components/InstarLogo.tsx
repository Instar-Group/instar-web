import React from "react";
import Image from "next/image";
import Link from "next/link";

const InstarLogo = () => {
  return (
    <div className="cursor-pointer mt-10">
      <Link href="/">
        <div className="logo">
          <Image src="/images/InstarLogo.svg" alt="Logo" width={70} height={70} />
          <span className="logo-text">Instar</span>
        </div>
      </Link>
    </div>
  );
};

export default InstarLogo;
