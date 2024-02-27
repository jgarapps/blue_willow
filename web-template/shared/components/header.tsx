// import logo from "@/assets/texasflag.jpg";
import Image from "next/image";
import Link from "next/link";
import { slugs } from "../../pages/api/dummydata";
import logo from "../../assets/logo/BW-logo.jpg"
import Head from "next/head";

function Header() {
  return (
    <><Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    </Head>
    <nav>
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
          <Link href="#" className="fa fa-facebook"></Link>
          <Link href="#" className="fa fa-youtube"></Link>
          <Link href="#" className="fa-brands fa-tiktok"></Link>
          <Link href="#" className="fa fa-instagram"></Link>
        </div>
      </nav></>
  );
}

export default Header;
