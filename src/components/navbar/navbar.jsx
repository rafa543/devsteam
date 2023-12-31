import Input from "../forms/input/input";
import Logo from "../logo/logo";
import styles from "./navbar.module.css";
import { BsCart4 } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullwidth />
      </div>
      <BsCart4 size={40} />
    </nav>
  );
}
