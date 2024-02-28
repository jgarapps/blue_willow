import React from "react";
import logo from "@/assets/logo/BW-logo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-content">
      <ul className="footer-inner-content">
         <li>Ready to book? <Link href={"/contact"}>Contact us! </Link></li>
          <Link target="_blank" href="https://www.facebook.com/bluewillowimagery" className="fab fa-facebook"></Link>
          <Link href="#" className="fab fa-youtube"></Link>
          <Link target="_blank" href="https://www.tiktok.com/@bluewillowimagery?_t=8kGb0fLIuXi&_r=1" className="fab fa-tiktok"></Link>
          <Link target="_blank" href="https://www.instagram.com/bluewillowimagery/?hl=en" className="fab fa-instagram"></Link>
        <li>
          {" "}
          <Image src={logo} alt="logo" width={100} height={75} className="" />
        </li> 
        
      </ul>
    
    </footer>
  );
}
