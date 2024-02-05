import React from "react";
import logo from "@/assets/logo/BW-logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-content">
      <ul className="footer-inner-content">
         <li>Ready to book? <Link href={""}>Contact us! </Link></li>
        <li>contact us</li>
        <li>some other info</li>
        <li>
          {" "}
          <Image src={logo} alt="logo" width={100} height={175} className="" />
        </li> 
      </ul>
    
    </footer>
  );
}
