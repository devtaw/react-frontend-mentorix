import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ButtonCTA, CardContainer, TagList, TextBio } from "./CardMentor.styled";
import img from "../../../assets/img/lista-mentores/card-mentor/mentora-1.png";
import { TextBody, TextH3, TextH5 } from "../../../common/typography";

//componente cardmentor recebe propriedade chamada onclick que representa função que será chamda quando usuário clicar no botão para agendar
export function CardMentor({ onClick = () => null }) {
  //função que será chamada quando user clicar no botão
  function handleClickButton() {
    //chamar função a partir das propriedades significa que estou chamando um evento a partir de uma propriedade onClick / dispara evento onClick para componente pai ListaMentores
    onClick();
  }
  return (
    <CardContainer>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {/* <Badge>Fínanças</Badge> */}
        <TagList>
          <TextH5>Fínanças</TextH5>
        </TagList>
        <TextH3 bold="true">Elis Regina</TextH3>
        <TextBio variant="body-sm" color="grey-600">
          Com vasta experiência no mercado financeiro, atuo como mentora em negócios, guiando profissionais rumo ao
          sucesso.
        </TextBio>
      </Card.Body>
      <Card.Body>
        {/* onClick chama a função handleClickButton quando o botão é clicado*/}
        <MentorixButton onClick={handleClickButton}>Agende</MentorixButton>
      </Card.Body>
    </CardContainer>
  );
}