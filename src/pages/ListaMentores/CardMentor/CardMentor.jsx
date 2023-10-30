import Card from "react-bootstrap/Card";
import { CardContainer, TagList, TextBio, ContainerAvatar, LinkedinArea } from "./CardMentor.styled";
import { TextBody, TextH3, TextH5 } from "../../../common/typography";
import { MentorixButton } from "../../../common/Button/MentorixButton.styled";
import { LinkedinLogo } from "@phosphor-icons/react";
import { useTheme } from "styled-components";

const mapaDeEspecialidades = {
  desenvolvimento: "Desenvolvimento",
  criptomoedas: "Criptomoedas",
  blockchain: "Blockchain",
  financas: "Finanças",
  investimentos: "Investimentos",
  estrategia: "Estratégia",
  criatividade: "Criatividade",
  comunicacao: "Comunicação",
  produtividade: "Produtividade",
};

//componente cardmentor recebe propriedade chamada onclick que representa função que será chamda quando usuário clicar no botão para agendar
export function CardMentor({ nome, biografia, profissao, especialidades, urlFoto, linkedin, onClick = () => null }) {
  const theme = useTheme();
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
          {especialidades.map((especialidade) => (
            <TextH5 key={especialidade}>{mapaDeEspecialidades[especialidade]}</TextH5>
          ))}
        </TagList>
        <div className="d-flex flex-column justify-content-between align-items-start">
          <TextH3 bold="true" className="m-0">
            {nome}
          </TextH3>
          <div className="d-flex gap-2 align-items-start">
            <TextBody className="m-0" style={{ fontSize: "1.125rem", lineHeight: "1.6" }}>
              {profissao}
            </TextBody>
            {linkedin && (
              <a href={linkedin} target="_blank">
                <LinkedinLogo size={20} weight="fill" color={theme["primary-900"]} />
              </a>
            )}
          </div>
        </div>
        <TextBio variant="body-sm" color="grey-600" className="mt-2">
          {biografia}
        </TextBio>
      </Card.Body>
      <Card.Body className="d-flex justify-content-end align-items-center">
        {/* onClick chama a função handleClickButton quando o botão é clicado*/}
        <MentorixButton onClick={handleClickButton}>Solicitar</MentorixButton>
      </Card.Body>
    </CardContainer>
  );
}
