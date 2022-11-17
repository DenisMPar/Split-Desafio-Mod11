import { AboutUsSection } from "../components/aboutUsSection";
import { ContactSection } from "../components/contactSection";
import { HomeSection } from "../components/homeSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
