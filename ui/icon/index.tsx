import Logo from "../icon/logo.svg";
import Menu from "../icon/menu.svg";

type IconsProps = {
  className?: string;
};

export function LogoIcon({ className }: IconsProps) {
  return <Logo className={className} />;
}

export function MenuIcon({ className }: IconsProps) {
  return <Menu className={className} />;
}
