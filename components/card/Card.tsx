import Image from "next/image";
import styled from "styled-components";
import styles from "./card.module.css";

import { BodyDesk } from "../../ui/texts";

const Body24Px = styled(BodyDesk)`
  font-size: 24px;
`;
const Body18Px = styled(BodyDesk)`
  font-size: 18px;
`;

type CardProps = { img: any; title: string; amount: string; alt: string };

export const Card = ({ img, title, amount, alt }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image src={img} className={styles.img} alt={alt} />
      </div>
      <div className={styles.text__container}>
        <Body24Px>{title}</Body24Px>
        <Body18Px>{amount}</Body18Px>
      </div>
    </div>
  );
};
