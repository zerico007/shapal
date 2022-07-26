import styled from "styled-components";
import { Button } from "..";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 2rem;
  background-color: transparent;
  width: 100%;
  height: 4.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
`;

export default function NavBar() {
  return (
    <StyledNav>
      {["Home", "Art Work", "Contact Me"].map((word: string) => (
        <Button
          key={word}
          theme="nav"
          width="auto"
          height="30px"
          content={word}
          type="button"
        />
      ))}
    </StyledNav>
  );
}
