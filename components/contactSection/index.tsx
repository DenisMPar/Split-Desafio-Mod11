import { Button } from "../../ui/button";
import Input from "../../ui/input";
import { BodyMobile, SubTitleMobile, TitleMobile } from "../../ui/texts";
import { Form, Root, TextContainer } from "./styled";

export function ContactSection() {
  return (
    <Root>
      <TextContainer>
        <SubTitleMobile>Registro</SubTitleMobile>
        <BodyMobile>
          regístrate y recibi un descuento especial de lanzamiento.
        </BodyMobile>
      </TextContainer>
      <Form>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <Input name="name" label="name:" />
          <Input name="email" label="email:" />
        </div>
        <Button>registrarme</Button>
      </Form>
    </Root>
  );
}
