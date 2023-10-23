import styled, { css } from "styled-components";

/**
 * Cada componente `TextH` é um elemento de título estilizado (`h1` a `h6`) que define
 * a `família de fontes` como "Open Sans", uma fonte sem serifa, e o `tamanho da fonte`
 * como um valor determinado pela propriedade `props.variant`, cujo padrão é um valor
 * diferente para cada componente se não for especificado.
 *
 * A propriedade `font-weight` é definida como 700 se a propriedade `bold` for verdadeira,
 * e 400 caso contrário.
 *
 * A propriedade `color` é definida com um valor determinado pela propriedade `props.color`,
 * cujo padrão é "gray-900" se não for especificado.
 *
 * exemplo de uso:
 * <TextH1 variant="title-xlg" color="gray-900" bold>
 * Texto
 * </TextH1>
 *
 * ou apenas (utilizando as configurações padrão para o h1)):
 * <TextH1> Texto </TextH1>
 */

export const TextH1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-xxlg"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const TextH2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-xlg"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const TextH3 = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-lg"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const TextH4 = styled.h4`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-md"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const TextH5 = styled.h5`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-sm"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

export const TextH6 = styled.h6`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme[props.variant || "title-xsm"]};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  color: ${(props) => props.theme[props.color || "gray-900"]};
`;

/**
 * O componente TextBody é um elemento p estilizado que define a propriedade font-family como "Montserrat", outra fonte sem serifa,
 * e o tamanho da fonte (font-size) com base na propriedade props.variant, que é padrão para "body-md" se não for especificada.
 * A propriedade font-weight é definida como "bold" se a propriedade bold for verdadeira e 400 caso contrário.
 * A propriedade line-height é definida como 1.3, e a propriedade color é definida com base na propriedade props.color,
 * que é padrão para "base-text" se não for especificada.
 *
 * exemplo de uso:
 * <TextBody variant="body-sm" color="gray-700">
 *  Texto
 * </TextBody>
 *
 * ou apenas:
 * <TextBody> Texto </TextBody>
 */

export const TextBody = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-size: ${(props) => props.theme[props.variant || "body-md"]}
  line-height: 1.3;
  color: ${(props) => props.theme[props.color || "base-text"]};
`;
