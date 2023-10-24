import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { TextH1 } from "../../common/typography";
import Modal from "../../Components/Modal";
import { useState } from "react";


export function Cadastro() {
  const [abreModal, setAbreModal] = useState(false)


  return (
    <ContentContainer>
      <div>
      <TextH1 color="secondary-700" variant="title-xsm">Cadastro</TextH1>
      <div>
        <button onClick={() => setAbreModal(true)}>Abre Modal</button>
      </div>
        <Modal isOpen={abreModal}/>
      </div>
    </ContentContainer>
  );
}
