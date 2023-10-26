import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ButtonCTA, CardContainer, TagList, TextBio, ContainerAvatar } from "./CardMentor.styled";
import img from "../../../assets/img/lista-mentores/card-mentor/mentora-1.png";
import { TextBody, TextH3, TextH5 } from "../../../common/typography";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";

//componente cardmentor recebe propriedade chamada onclick que representa função que será chamda quando usuário clicar no botão para agendar
export function CardMentor({ nome, biografia, areasDeAtuacao, urlFoto, onClick = () => null }) {
  //função que será chamada quando user clicar no botão
  function handleClickButton() {
    //chamar função a partir das propriedades significa que estou chamando um evento a partir de uma propriedade onClick / dispara evento onClick para componente pai ListaMentores
    onClick();
  }
  return (
    <CardContainer>
      <ContainerAvatar>
        <Card.Img variant="top" src={urlFoto} />
      </ContainerAvatar>
      <Card.Body>
        {/* <Badge>Fínanças</Badge> */}
        <TagList>
          {areasDeAtuacao.map((area) => (
            <TextH5 key={area}>{area}</TextH5>
          ))}
        </TagList>
        <TextH3 bold="true">{nome}</TextH3>
        <TextBio variant="body-sm" color="grey-600">
          {biografia}
        </TextBio>
      </Card.Body>
      <Card.Body>
        {/* onClick chama a função handleClickButton quando o botão é clicado*/}
        <MentorixButton onClick={handleClickButton}>Agende</MentorixButton>
      </Card.Body>
    </CardContainer>
  );
}
