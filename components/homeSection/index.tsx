import Image from "next/image";
import { BodyMobile, TitleMobile } from "../../ui/texts";
import { Root, TextContainer } from "./styled";

export function HomeSection() {
  return (
    <Root>
      <TextContainer>
        <TitleMobile>Split</TitleMobile>
      </TextContainer>
      <TextContainer>
        <BodyMobile>
          Conseguí materiales de atado de gran calidad al mejor precio del
          mercado.
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
          src={"/homeImg.png"}
          alt="flies box"
          width={320}
          height={195}
        ></Image>
      </div>
    </Root>
  );
}
