// import logo from "@/assets/texasflag.jpg";
import Image from "next/image";
import Link from "next/link";
import { slugs } from "../../pages/api/dummydata";

function Header() {
  return (
    <nav>
      <div className="nav-content">
      {/* <Link href={"/"}>
        <Image src={logo} width={50} height={50} alt="logo" className="" />
      </Link> */}
     <ul className="nav-inner-content">
        {slugs.map((slug) => (
          <li>
            <Link href={`${slug.link}`}>{slug.link.replace("-", " ")}</Link>
          </li>
        ))}
      </ul></div>
    </nav>
  );
}

export default Header;
