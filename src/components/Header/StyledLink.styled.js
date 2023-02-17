import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;

  &.active {
    color: orange;
  }
`;