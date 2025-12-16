import styled from "styled-components";

interface TextComponentProps {
  text?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  type?: string;
}

export const Content = styled.div``;

export const H1 = styled.h1<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const H2 = styled.h2<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const H3 = styled.h3<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const H4 = styled.h4<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const P = styled.p<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;

export const Span = styled.span<TextComponentProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "10px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Open Sans")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  color: ${({ color }) => (color ? color : "#000")};
`;
