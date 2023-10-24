import React from "react";
import { ContentContainer } from "../../common/ContentContainer.styled";
import { ContentSection, SpanTitle, TextDescription, Title } from "./ListaMentores.styled";

export function ListaMentores() {
  return (
    <ContentContainer>
      <ContentSection>
        <SpanTitle>Expert Team</SpanTitle>
        <Title>Encontre o melhor online mentor para você</Title>
        <TextDescription>Você não precisa lutar sozinho, você conta com nossa assistência e ajuda.</TextDescription>
      </ContentSection>
    </ContentContainer>
  );
}
