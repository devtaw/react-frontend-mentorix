import React from "react";
import { useState } from "react";
import { MentorixModal } from "../../common/MentorixModal/MentorixModal";
import FormCadastro from "./FormCadastro/FormCadastro";
import Header from "../../common/Header/Header";


export function Cadastro({isOpen, onClose}) {
  // const [cadastroIsOpen, setCadastroIsOpen] = useState(false)
  // children,
  // isOpen,
  // buttonSaveName = "Salvar",
  // title,
  // onClose = () => null,

  // function handleCloseModal () {
  //   setModalIsOpen(false)
  // }

  return(
    <div>
    <Header />
      <FormCadastro />
    </div>
  );

  
}
