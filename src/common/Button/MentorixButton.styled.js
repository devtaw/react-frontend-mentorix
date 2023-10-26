import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const MentorixButton = styled(Button)`
  height: 45px;
  padding: 0 45px;
  display: inline-block;
  background-color: #b39ddb;
  line-height: 45px;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease-out 0s;
  text-transform: uppercase;
`;

//Exemplo de uso:
{
  /* <MentorixButton href="#">Link</MentorixButton>
<MentorixButton type="submit">Button</MentorixButton>
<MentorixButton as="input" type="button" value="Input" />
<MentorixButton as="input" type="submit" value="Submit" />
<MentorixButton as="input" type="reset" value="Reset" /> */
}
