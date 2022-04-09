import Link from "next/link";
import { NavbarProps } from "./interface";

const Navbar = (props: NavbarProps) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/technologies">
        <a>Technologies</a>
      </Link>
      <Link href="/certificates">
        <a>Certificates</a>
      </Link>
    </div>
  );
};

export default Navbar;
