// import logo from "@/assets/texasflag.jpg";
import Image from "next/image";
import Link from "next/link";
import { slugs } from "../../pages/api/dummydata";
import logo from "../../assets/logo/BW-logo.jpg"
import Head from "next/head";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <><Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

    </Head>
    <nav className="desktop">
        <div className="nav-content">
          <Image src={logo} width={60} height={50} alt="logo" className="header_logo" />

          <ul className="nav-inner-content">
            <li>
              <Link href="/">Home</Link>
            </li>
            {slugs.map((slug) => (
              <li>
                <Link href={`/${slug.link}`}>{slug.link.replace("-", " ")}</Link>
              </li>
            ))}
            <li>
              <Link href={`/pricing`}>Pricing</Link>
            </li>
          </ul>
          <Link target="_blank" href="https://www.facebook.com/bluewillowimagery" className="fab fa-facebook"></Link>
          <Link href="#" className="fab fa-youtube"></Link>
          <Link href="#" className="fab fa-tiktok"></Link>
          <Link target="_blank" href="https://www.instagram.com/bluewillowimagery/?hl=en" className="fab fa-instagram"></Link>
        </div>
      </nav>
      <nav className="mobile">
        <div className="fa fa-bars" onClick={() => setIsOpen(!isOpen)}/> 
        <Image src={logo} width={60} height={50} alt="logo" className="header_logo" />
       { isOpen ? <div className="nav-content">
          

          <ul className=" nav-inner-content">
            <li>
              <Link href="/">Home</Link>
            </li>
            {slugs.map((slug) => (
              <li>
                <Link href={`/${slug.link}`}>{slug.link.replace("-", " ")}</Link>
              </li>
            ))}
            <li>
              <Link href={`/pricing`}>Pricing</Link>
            </li>
         
          {/* <div style={{'flex-direction: row'}}> */}
          <li><Link target="_blank" href="https://www.facebook.com/bluewillowimagery" className="fab fa-facebook"></Link>
          <Link href="#" className="fab fa-youtube"></Link>
          <Link target="_blank" href="https://www.tiktok.com/@bluewillowimagery?_t=8kGb0fLIuXi&_r=1" className="fab fa-tiktok"></Link>
          <Link target="_blank" href="https://www.instagram.com/bluewillowimagery/?hl=en" className="fab fa-instagram"></Link></li> </ul>
          {/* </div> */}
        </div> : null}
      </nav>
      </>
  );
}

export default Header;
