import Image from "next/image";
import { BodyMobile, SubTitleMobile, TitleMobile } from "../../ui/texts";
import {
  ContainerImgDesktop,
  ContainerImgMovil,
  Root,
  TextContainer,
} from "./styled";

export function AboutUsSection() {
  return (
    <Root>
      <TextContainer>
        <SubTitleMobile>¿Qué hacemos?</SubTitleMobile>
        <BodyMobile>
          Vendemos materiales de atado fraccionados para que puedas conseguir
          productos de la mejor calidad a un precio accesible.
        </BodyMobile>
      </TextContainer>
      <ContainerImgDesktop>
        <Image
          src={"/aboutImg.png"}
          alt="flies box"
          width={622}
          height={378}
        ></Image>
      </ContainerImgDesktop>
      <ContainerImgMovil>
        <Image
          src={"/aboutImg.png"}
          alt="flies box"
          width={320}
          height={195}
        ></Image>
      </ContainerImgMovil>
    </Root>
  );
}
