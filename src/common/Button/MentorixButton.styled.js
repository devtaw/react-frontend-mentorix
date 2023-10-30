import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const MentorixButton = styled(Button)`
  height: 50px;
  padding: 0 45px;
  display: inline-block;
  background-color: ${(props) => props.theme["terciary-a100"]};
  border-color: ${(props) => props.theme["terciary-400"]} !important;
  line-height: 50px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme["background-dark"]} !important;
  transition: all 0.3s ease-out 0s;
  /* text-transform: uppercase; */

  &:hover {
    background-color: ${(props) => props.theme["terciary-400"]} !important;
    border-color: ${(props) => props.theme["terciary-400"]} !important;
  }
`;

//Exemplo de uso:
{
  /* <MentorixButton href="#">Link</MentorixButton>
<MentorixButton type="submit">Button</MentorixButton>
<MentorixButton as="input" type="button" value="Input" />
<MentorixButton as="input" type="submit" value="Submit" />
<MentorixButton as="input" type="reset" value="Reset" /> */
}
