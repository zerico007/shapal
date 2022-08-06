import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primary" | "secondary" | "nav";
  width?: string;
  height?: string;
  margin?: string;
  content: string | ReactNode;
}

const buttonCSS = {
  primary: css`
    background-color: var(--light-green);
    color: var(--bg-dark);
    border: none;

    :hover {
      background-color: var(--dark-green);
      transform: scale(1.1);
    }
  `,
  secondary: css`
    background-color: #fff;
    color: var(--dark-green);
    border: 2px solid var(--dark-green);

    :hover {
      background-color: var(--grey);
      transform: scale(1.1);
    }
  `,
  nav: css`
    background-color: transparent;
    color: #fff;
    border: 2px solid transparent;

    :hover {
      background-color: var(--dark-green);
      color: var(--bg-dark);
      transform: scale(1.1);
    }
  `,
};

const determineThemeCSS = (theme: ButtonProps["theme"]) => {
  return buttonCSS[theme];
};

const StyledButton = styled.button<Omit<ButtonProps, "content">>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: 0.25rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.2rem;
  transition: all 0.3s ease-in-out;

  ${(props) => determineThemeCSS(props.theme)};
`;

export default function Button({
  theme = "primary",
  width = "10rem",
  height = "2.5rem",
  margin = "0.5rem",
  content,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      margin={margin}
      theme={theme}
      width={width}
      height={height}
      {...rest}
    >
      {content}
    </StyledButton>
  );
}
