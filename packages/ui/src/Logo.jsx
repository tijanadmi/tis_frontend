import styled from "styled-components";
import { useDarkMode } from "./context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const logoName = isDarkMode ? "tis_black4.png" : "tis_white4.png";
  const src = `${import.meta.env.BASE_URL}${logoName}`;

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
