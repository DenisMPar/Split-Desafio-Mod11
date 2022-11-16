import { AboutUsSection } from "../components/aboutUsSection";
import { ContactSection } from "../components/contactSection";
import { HomeSection } from "../components/homeSection";
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
      <HomeSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
