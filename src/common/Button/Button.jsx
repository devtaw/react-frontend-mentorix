import styled from "styled-components";
import { StyleButton } from "./StyleButton";

const Button = ({ texto, variant, width, onClick }) => {
  return (
    <>
      {variant == "primary" && (
        <PrimaryButton onClick={onClick} width={width}>
          {texto}
        </PrimaryButton>
      )}
      {variant == "secondary" && (
        <SecondaryButton onClick={onClick} width={width}>
          {texto}
        </SecondaryButton>
      )}
    </>
  );
};

export default Button;

const PrimaryButton = styled(StyleButton)`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-lg"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

const SecondaryButton = styled(StyleButton)`
  background: transparent;
  border: 5px solid ${(props) => props.theme.blue700};
  color: ${(props) => props.theme.blue700};
`;
