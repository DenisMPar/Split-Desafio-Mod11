import styled from "styled-components";
import styles from "../footer/footer.module.css";
import { LogoIcon } from "../../ui/icon";

const LogoI = styled(LogoIcon)`
  width: 145px;
  height: 60px;
  cursor: pointer;

  @media (min-width: 376px) {
    width: 213px;
    height: 88px;
  }
`;

export const Footer = () => {
  return (
    <div className={styles.container__icon}>
      <LogoI />
    </div>
  );
};
