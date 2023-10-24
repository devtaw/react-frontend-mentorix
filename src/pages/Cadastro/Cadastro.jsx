import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { TextH1 } from "../../common/typography";
import Modal from "../../Components/Modal";


export function Cadastro() {
  return (
    <ContentContainer>
      <div>
      <TextH1 color="secondary-700" variant="title-xsm">Cadastro</TextH1>
      <div>
        <button onClick={() => {}}>Abre Modal</button>
      </div>
        <Modal />
      </div>
    </ContentContainer>
  );
}
