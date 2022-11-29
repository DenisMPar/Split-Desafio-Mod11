import styled from "styled-components";
import { SubTitleMobile } from "../../ui/texts";
import { Card } from "../card/Card";
import styles from "./products.module.css";
import chickabou from "../../public/chickabou.png";
import indian from "../../public/indian.png";
import saddle from "../../public/saddle.png";

const SubtitleResponsive = styled(SubTitleMobile)`
  @media screen and (min-width: 1024px) {
    font-size: 64px;
  }
`;

export function ProductsSection() {
  return (
    <section id="products" className={styles.container}>
      <SubtitleResponsive>Productos</SubtitleResponsive>
      <div className={styles.products__container}>
        <Card
          title="Chickabou - Whiting"
          alt="Chickabou - Whiting Pack x10"
          amount="Pack x10"
          img={chickabou}
        />
        <Card
          title="Saddle grizzly - Ering"
          alt="Saddle grizzly - Ering Pack x10 "
          amount="Pack x10"
          img={indian}
        />
        <Card
          title="Indian Hen Saddle - Wapsi"
          alt="Indian Hen Saddle - Wapsi Pack x10 "
          amount="Pack x10"
          img={saddle}
        />
      </div>
    </section>
  );
}
