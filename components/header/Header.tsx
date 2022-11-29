import { useState } from "react";
import styled from "styled-components";
import styles from "../header/header.module.css";
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
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__icon}>
        <a href="#home">
          <LogoI />
        </a>
      </div>
      <div onClick={handleClick} className={styles.container__menu_icon}>
        <MenuI />
      </div>
      {showNav && (
        <nav className={styles.container__nav_mobile}>
          <ul className={styles.container__ul_mobile}>
            <li className={styles.li_mobile}>
              <a href="#aboutUs" onClick={handleClick}>
                <LabelWth>Sobre Nosotros</LabelWth>
              </a>
            </li>
            <li className={styles.li_mobile}>
              <a href="#products" onClick={handleClick}>
                <LabelWth>Productos</LabelWth>
              </a>
            </li>
            <li className={styles.li_mobile}>
              <a href="#contact" onClick={handleClick}>
                <LabelWth>Registrate </LabelWth>
              </a>
            </li>
          </ul>
        </nav>
      )}
      <nav className={styles.container__nav_desk}>
        <ul className={styles.container__ul_desk}>
          <li className={styles.li_desk}>
            <a href="#aboutUs">
              <LabelWth>Sobre Nosotros</LabelWth>
            </a>
          </li>
          <li className={styles.li_desk}>
            <a href="#products" onClick={handleClick}>
              <LabelWth>Productos</LabelWth>
            </a>
          </li>
          <li className={styles.li_desk}>
            <a href="#contact">
              <LabelWth>Registrate</LabelWth>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
