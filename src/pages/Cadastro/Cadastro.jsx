import React from "react";
import { useState } from "react";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import FormCadastro from "./FormCadastro/FormCadastro";


export function CadastroModal({isOpen, onClose}) {
  const [cadastroIsOpen, setCadastroIsOpen] = useState(false)
  // children,
  // isOpen,
  // buttonSaveName = "Salvar",
  // title,
  // onClose = () => null,

  // function handleCloseModal () {
  //   setModalIsOpen(false)
  // }

  return(
    <MentorixModal isOpen={isOpen} title='Cadastro' buttonSaveName="Cadastrar" onClose={onClose}>
      <FormCadastro />
    </MentorixModal>
  );

  
}
