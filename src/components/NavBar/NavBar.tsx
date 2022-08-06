import styled, { keyframes } from "styled-components";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { useState } from "react";

import { Button } from "..";

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
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

  .menu-button {
    display: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }

  .nav-buttons.close {
    animation: ${fadeOutToLeft} 0.4s ease-in-out;
  }

  @media (max-width: 600px) {
    .menu-button {
      display: block;
    }
  }
`;

const ButtonsContainer = styled.div<{ mobileOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: 600px) {
    display: ${(props) => (props.mobileOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1rem;
    justify-content: flex-start;
    animation: ${fadeInFromLeft} 0.4s ease-in-out;
    width: 100%;
    height: 100vh;
    background-color: ${(props) =>
      props.mobileOpen ? "rgba(31 40 51 /0.7)" : "transparent"};
    position: fixed;
    top: 4.5rem;
    right: 0;
  }
`;

function NavButtons({
  mobileOpen,
  toggleMobileMenu,
}: {
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
}) {
  return (
    <ButtonsContainer
      className="nav-buttons"
      mobileOpen={mobileOpen}
      onClick={toggleMobileMenu}
    >
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
    </ButtonsContainer>
  );
}

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (!mobileOpen) {
      setMobileOpen(true);
    } else {
      const navButtons = document.querySelector(".nav-buttons") as HTMLElement;
      navButtons.classList.add("close");
      setTimeout(() => {
        setMobileOpen(false);
        navButtons.classList.remove("close");
      }, 400);
    }
  };

  return (
    <StyledNav>
      <NavButtons toggleMobileMenu={toggleMobileMenu} mobileOpen={mobileOpen} />
      <div className="menu-button" onClick={toggleMobileMenu}>
        {mobileOpen ? <MdMenuOpen size={32} /> : <MdMenu size={32} />}
      </div>
    </StyledNav>
  );
}
