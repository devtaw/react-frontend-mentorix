import styled, { css } from "styled-components";

/**
 * O componente Title é um elemento h2 estilizado que define a propriedade font-family como "Open Sans",
 * uma fonte sem serifa, e o tamanho da fonte (font-size) com base na propriedade props.variant,
 * que é padrão para "title-sm" se não for especificada.
 * A propriedade font-weight é definida como 700 se a propriedade bold for verdadeira e 400 caso contrário.
 * A propriedade color é definida com base na propriedade props.color, que é padrão para "gray-900" se não for especificada.
 *
 * exemplo de uso:
 * <Title variant="title-lg" color="gray-700" bold>
 *   Título
 * </Title>
 */

export const Title = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-sm"]}
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

/**
 * O componente Text é um elemento p estilizado que define a propriedade font-family como "Montserrat", outra fonte sem serifa,
 * e o tamanho da fonte (font-size) com base na propriedade props.variant, que é padrão para "body-md" se não for especificada.
 * A propriedade font-weight é definida como "bold" se a propriedade bold for verdadeira e 400 caso contrário.
 * A propriedade line-height é definida como 1.3, e a propriedade color é definida com base na propriedade props.color,
 * que é padrão para "base-text" se não for especificada.
 *
 * exemplo de uso:
 * <Text variant="body-lg" color="gray-700">
 *  Texto
 * </Text>
 */

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-size: ${(props) => props.theme[props.variant || "body-md"]}
  line-height: 1.3;
  color: ${(props) => props.theme[props.color || "base-text"]};
`;
