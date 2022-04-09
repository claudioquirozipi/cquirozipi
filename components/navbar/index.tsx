import Link from "next/link";
import { NavbarProps } from "./interface";
import style from "./nav.module.css";

const Navbar = (props: NavbarProps) => {
  return (
    <nav className={style.navContainer}>
      <Link href="/">
        <a className={style.link}>Home</a>
      </Link>
      <div className={style.subContainer}>
        <Link href="/projects">
          <a className={style.link}>Projects</a>
        </Link>
        <Link href="/technologies">
          <a className={style.link}>Technologies</a>
        </Link>
        <Link href="/certificates">
          <a className={style.link}>Certificates</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
