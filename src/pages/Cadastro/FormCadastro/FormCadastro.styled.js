import styled from "styled-components";
import { TextH1 } from "../../../common/typography";

export const Container = styled.div`
margin-top: 40px;
margin-bottom: 40px;
margin-left: 20%;
width: 45rem;
align-items: center;
background-color: #fff;
padding: 16px;
border-radius: 16px;
box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;

::placeholder {
    font-size: 14px
}
`

export const Button = styled.div`
margin-top: 32px;
width: 100%;
text-align: center;
`

export const EspecialidadesContainer = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #fff;
border: 1px solid #0288D1;
border-radius: 6px;
padding: 1rem
`

export const TextH1Styled = styled(TextH1)`
font-size: 52px;
text-align: center;
font-weight: bold;
margin: 2.5rem;
`

export const SpanBiografia = styled.div`
width: 100%;
margin-top: 4px;
margin-bottom: 16px;
font-size: 12px;
font-weight: bold;
`

export const StyledLabelCadastro = styled.label`
margin-bottom: 10px;
`