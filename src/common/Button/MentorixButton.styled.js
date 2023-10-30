import Button from "react-bootstrap/Button";
import styled, { css } from "styled-components";

export const MentorixButton = styled(Button)`
  height: 50px;
  padding: 0 45px;
  display: inline-block;
  line-height: 50px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme["background-dark"]} !important;
  transition: all 0.3s ease-out 0s;
  /* text-transform: uppercase; */

  ${(props) =>
    !props.variant || props.variant === "primary"
      ? css`
          background-color: ${(props) => props.theme["secondary-700"]};
          border-color: ${(props) => props.theme["secondary-700"]} !important;
          color: #fff !important;

          &:hover {
            background-color: ${(props) => props.theme["secondary-800"]} !important;
            border-color: ${(props) => props.theme["secondary-800"]} !important;
          }
        `
      : null}

  ${(props) =>
    props.variant === "cta" &&
    css`
      background-color: ${(props) => props.theme["terciary-700"]};
      border-color: ${(props) => props.theme["terciary-700"]} !important;

      &:hover {
        background-color: ${(props) => props.theme["terciary-800"]} !important;
        border-color: ${(props) => props.theme["terciary-800"]} !important;
      }
    `}
`;

//Exemplo de uso:
{
  /* <MentorixButton href="#">Link</MentorixButton>
<MentorixButton type="submit">Button</MentorixButton>
<MentorixButton as="input" type="button" value="Input" />
<MentorixButton as="input" type="submit" value="Submit" />
<MentorixButton as="input" type="reset" value="Reset" /> */
}
