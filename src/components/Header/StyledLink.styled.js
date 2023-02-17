import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 36px;
  padding-top: 18px;
  padding-bottom: 18px;
  

  &.active {
    color: orange;
  }
`;