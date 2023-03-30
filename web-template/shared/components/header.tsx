import logo from "@/assets/logoipsum-287.svg";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="header-content">
      <Link href={"/"}>
        <Image src={logo} width={150} height={50} alt="logo" className="" />
      </Link>
      <ul className="header-inner-content">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </header>
  );
}

export default Header;
