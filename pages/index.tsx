import { Button } from "../ui/button";
import {
  SubTitleMobile,
  SubTitleWeb,
  TextButton,
  TitleMobile,
  TitleWeb,
} from "../ui/texts";

export default function Home() {
  return (
    <div>
      <TitleMobile>HOLA</TitleMobile>
      <TitleWeb>HOLA</TitleWeb>
      <SubTitleMobile>HOLA</SubTitleMobile>
      <SubTitleWeb>HOLA </SubTitleWeb>
      <Button>
        <TextButton>Soy el boton</TextButton>
      </Button>
    </div>
  );
}
