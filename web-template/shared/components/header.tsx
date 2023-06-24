import logo from "@/assets/logoipsum-287.svg";
import Image from "next/image";
import Link from "next/link";
import { pages } from "../../pages/api/dummydata";

function Header() {
  return (
    <header className="header-content">
      <Link href={"/"}>
        <Image src={logo} width={150} height={50} alt="logo" className="" />
      </Link>
      <ul className="header-inner-content">
        {pages.map((page) => (
          <li>
            <Link href={`${page.link}`}>{page.link.replace("-", " ")}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
