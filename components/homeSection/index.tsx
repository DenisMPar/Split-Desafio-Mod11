import Image from "next/image";
import { BodyMobile, TitleMobile } from "../../ui/texts";
import {
  ContainerImgDesktop,
  ContainerImgMovil,
  Root,
  TextContainer,
} from "./styled";

export function HomeSection() {
  return (
    <Root id="home">
      <TextContainer>
        <TitleMobile>Split</TitleMobile>

        <BodyMobile>
          Conseguí materiales de atado de gran calidad al mejor precio del
          mercado.
        </BodyMobile>
      </TextContainer>

      <ContainerImgDesktop>
        <Image
          src={"/homeImg.png"}
          alt="flies box"
          width={622}
          height={378}
        ></Image>
      </ContainerImgDesktop>
      <ContainerImgMovil>
        <Image
          src={"/homeImg.png"}
          alt="flies box"
          width={320}
          height={195}
        ></Image>
      </ContainerImgMovil>
    </Root>
  );
}
