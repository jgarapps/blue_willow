import logo from "@/assets/logoipsum-287.svg";
import Image from "next/image";
function Header() {
  return (
    <header className="header-content">
      <Image src={logo} width={50} height={50} alt="logo" className="" />
      <ul className="header-inner-content">
        <li>link</li>
        <li>link</li>
        <li>link</li>
      </ul>
    </header>
  );
}

export default Header;
