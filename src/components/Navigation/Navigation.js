import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Play</StyledLink>
      <StyledLink to="/history">History</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  background: lightseagreen;
  text-decoration: none;
  color: black;
  padding: 15px;
  display: grid;
  place-items: center;
  border: 2px solid black;

  &.active {
    background-color: black;
    color: white;
  }
`;
