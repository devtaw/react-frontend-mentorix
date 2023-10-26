import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const MentorixButton = styled(Button)`
  height: 45px;
  padding: 0 45px;
  display: inline-block;
  background-color: ${(props) => props.theme["secondary-800"]};
  border-color: ${(props) => props.theme["secondary-800"]} !important;
  line-height: 45px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-out 0s;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme["secondary-900"]} !important;
    border-color: ${(props) => props.theme["secondary-900"]} !important;
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