import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import SectionAbout from "./SectionAbout/SectionAbout";
import { SectionContact } from "./SectionContact/SectionContact";
import SectionWelcome from "./SectionWelcome/SectionWelcome";
import SectionCadastro from "./SectionCadastro/SectionCadastro";

export function Home() {
  return (
    <>
      <Header />

      <ContentContainer>
        <SectionWelcome />
        <SectionCadastro />
        <SectionAbout />
        <SectionContact />
      </ContentContainer>

      <Footer />
    </>
  );
}
