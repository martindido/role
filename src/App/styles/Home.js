import styled, { keyframes } from "styled-components";
import { Link as StyledLink } from "../styles";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
`;

export const Link = styled(StyledLink)`
    z-index: 1;
`;
