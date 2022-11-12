import style from "./text.module.css";

type TextProps = {
  children: string;
};

export const TitleWeb = ({ children }: TextProps) => {
  return <h1 className={style.webTitle}>{children}</h1>;
};
export const SubTitleWeb = ({ children }: TextProps) => {
  return <h2 className={style.webSubtitle}>{children}</h2>;
};
export const BodyWeb = ({ children }: TextProps) => {
  return <p className={style.webBody}>{children}</p>;
};
export const TextLabel = ({ children }: TextProps) => {
  return <p className={style.label}>{children}</p>;
};
export const TextButton = ({ children }: TextProps) => {
  return <p className={style.button}>{children}</p>;
};

export const TitleMobile = ({ children }: TextProps) => {
  return <h1 className={style.mobileTitle}>{children}</h1>;
};
export const SubTitleMobile = ({ children }: TextProps) => {
  return <h2 className={style.mobileSubtitle}>{children}</h2>;
};
export const BodyMobile = ({ children }: TextProps) => {
  return <p className={style.mobileBody}>{children}</p>;
};
