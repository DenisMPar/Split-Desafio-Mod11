import { BodyMobile, SubTitleMobile } from "../../ui/texts";
import { ContactForm } from "../contactForm";
import { Form } from "../contactForm/syled";
import { Root, TextContainer } from "./styled";

export function ContactSection() {
  return (
    <Root id="contact">
      <TextContainer>
        <SubTitleMobile>Registro</SubTitleMobile>
        <BodyMobile>
          regístrate en la preventa y recibi un descuento especial de
          lanzamiento.
        </BodyMobile>
      </TextContainer>
      <ContactForm />
    </Root>
  );
}
