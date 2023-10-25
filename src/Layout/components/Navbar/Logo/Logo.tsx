import logoSrc from "../../../../assets/logo.svg";

const LOGO_ALT_TEXT = "natur.ally";

export const Logo = () => {
  return (
    <div>
      <img src={logoSrc} alt={LOGO_ALT_TEXT} />
    </div>
  );
};
