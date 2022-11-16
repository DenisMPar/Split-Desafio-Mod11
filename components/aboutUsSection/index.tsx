import Image from "next/image";
import { BodyMobile, SubTitleMobile, TitleMobile } from "../../ui/texts";
import { Root, TextContainer } from "./styled";

export function AboutUsSection() {
  return (
    <Root>
      <TextContainer>
        <SubTitleMobile>¿Qué hacemos?</SubTitleMobile>
      </TextContainer>
      <TextContainer>
        <BodyMobile>
          Vendemos materiales de atado fraccionados para que puedas conseguir
          productos de la mejor calidad a un precio accecible.
        </BodyMobile>
      </TextContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/aboutImg.png"}
          alt="flies box"
          width={320}
          height={195}
        ></Image>
      </div>
    </Root>
  );
}
