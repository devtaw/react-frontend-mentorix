import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { ContentSection, SpanTitle } from "./ListaMentores.styled";

export function ListaMentores() {
  return (
    <ContentContainer className="text-center">
      <ContentSection>
        <SpanTitle>Expert Team</SpanTitle>
        <h1>Lista de Mentores</h1>
      </ContentSection>
    </ContentContainer>
  );
}
