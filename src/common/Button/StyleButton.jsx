import styled from "styled-components";

export const StyleButton = styled.button`
  width: auto; /* Define a largura do elemento para se ajustar automaticamente ao conteúdo. */
  border-radius: 50px; /* Adiciona cantos arredondados ao elemento. */
  box-shadow: 5px 6px 4px 0px rgba(129, 11, 152, 1);
  padding: 12px 48px; /* Define o preenchimento interno do elemento, 12px no topo e na parte inferior, 48px nos lados esquerdo e direito. */
  align-items: center; /* Alinha os itens dentro do elemento verticalmente ao centro. (Geralmente usado em elementos flexíveis ou de grade.) */
  line-height: normal;
  transition: background 0.3s; /* Aplica uma transição suave de 0,3 segundos à propriedade "background" (cor de fundo) quando houver alterações. */
  background-color: ${(p) => p.theme["secondary-100"]};
  &:hover {
    background-color: ${(p) =>
      p.theme[
        "secondary-300"
      ]}; /* Quando o elemento é hover (passagem do mouse), a cor de fundo muda para o valor do tema "blue-gray-800". Isso é definido dinamicamente com base no tema usando a sintaxe do styled-components. */
  }
`;
