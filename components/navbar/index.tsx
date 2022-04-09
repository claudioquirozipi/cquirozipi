import Link from "next/link";
import { NavbarProps } from "./interface";
import style from "./nav.module.css";

const Navbar = (props: NavbarProps) => {
  return (
    <nav className={style.navContainer}>
      <Link href="/">Home</Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/technologies">
        <a>Technologies</a>
      </Link>
      <Link href="/certificates">
        <a>Certificates</a>
      </Link>
    </nav>
  );
};

export default Navbar;
