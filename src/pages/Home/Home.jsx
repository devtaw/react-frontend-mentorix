import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import Footer from "../../common/Footer/Footer";
import { LoginModal } from "../Login/Login";
import { useState } from "react";

export function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false)

   function handleCloseModal () {
       setModalIsOpen(false)
     }

     function handleOpenModal () {
      setModalIsOpen(true)
     }
  return (
    <>
    <button onClick={handleOpenModal}>
      Abrir Modal (remover quando tiver o header)
    </button>
      <ContentContainer>
        <h1>Home</h1>
      </ContentContainer>
      <Footer />
      <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal}/>
    </>
  );
}
