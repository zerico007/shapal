import { TextareaHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  background?: string;
  showLabel?: boolean;
  label?: string;
  icon?: ReactNode;
}

const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props: TextAreaProps) => props.width};
  height: ${(props: TextAreaProps) => props.height};
  margin: ${(props: TextAreaProps) => props.margin};
  background-color: transparent;
  justify-content: center;
`;

const StyledTextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: ${(props) => (props.showLabel ? "50%" : "100%")};
  border: ${(props) => props.border};
  outline: none;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border-radius: 0.2rem;
  background-color: ${(props) => props.background};
  color: var(--bg-dark);
  font-size: 14px;
  outline-offset: 2px;
  outline: 2px solid var(--grey);

  :focus {
    outline: 2px solid var(--dark-green);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 32%;
  right: 5px;
`;

const StyledLabel = styled.label`
  display: flex;
  color: var(--bg-dark);
  font-size: 14px;
  margin-bottom: 0.5rem;

  :before {
    content: "${(props: TextAreaProps) => props.label}";
  }
`;

export default function TextArea({
  width = "100%",
  height = "100%",
  padding = "8px 12px",
  margin = "0",
  border = "none",
  background = "transparent",
  showLabel = false,
  label = "",
  icon,
  ...rest
}: TextAreaProps) {
  return (
    <TextAreaContainer
      width={width}
      height={height}
      background={background}
      margin={margin}
    >
      {showLabel && <StyledLabel htmlFor={rest.id} label={label} />}
      <StyledTextArea
        width={width}
        height={height}
        padding={padding}
        border={border}
        background={background}
        showLabel={showLabel}
        {...rest}
      />
      {icon && <IconContainer>{icon}</IconContainer>}
    </TextAreaContainer>
  );
}
