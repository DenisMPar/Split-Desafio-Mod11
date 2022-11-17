import { useState } from "react";
import styled from "styled-components";
import styles from "../nav/nav.module.css";
import { LogoIcon, MenuIcon } from "../../ui/icon";
import { Label } from "../../ui/texts";

const LabelWth = styled(Label)`
  color: #fff;
`;

const LogoI = styled(LogoIcon)`
  width: 140px;
  height: 40px;
  cursor: pointer;
`;
const MenuI = styled(MenuIcon)`
  width: 30px;
  height: 30px;
  fill: var(--ligth-blue);
  cursor: pointer;
`;

export const Nav = () => {
  const [showNav, setShowNav] = useState(true);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__icon}>
        <LogoI />
      </div>
      <div onClick={handleClick} className={styles.container__menu_icon}>
        <MenuI />
      </div>
      {showNav && (
        <nav className={styles.container__nav_mobile}>
          <ul className={styles.container__ul_mobile}>
            <li className={styles.li_mobile}>
              <a href="#" onClick={handleClick}>
                <LabelWth>Sobre Nosotros</LabelWth>
              </a>
            </li>
            <li className={styles.li_mobile}>
              <a href="#" onClick={handleClick}>
                <LabelWth>Mi Perfil</LabelWth>
              </a>
            </li>
          </ul>
        </nav>
      )}
      <nav className={styles.container__nav_desk}>
        <ul className={styles.container__ul_desk}>
          <li className={styles.li_desk}>
            <a href="#">
              <LabelWth>Sobre Nosotros</LabelWth>
            </a>
          </li>
          <li className={styles.li_desk}>
            <a href="#">
              <LabelWth>Mi Perfil</LabelWth>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
