import React from "react";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import { useState } from "react";
import Form from "../Cadastro/FormCadastro/FormCadastro";


export function LoginModal({isOpen, onClose}) {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  // function handleCloseModal () {
  //   setModalIsOpen(false)
  // }
  return (
    <MentorixModal isOpen={isOpen} title='Login' buttonSaveName="Entrar" onClose={onClose}> 
      <Form />
    </MentorixModal>
    
  );
}

