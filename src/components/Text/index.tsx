"use client";

import { Content, H1, H2, H3, H4, P, Span } from "./style";

interface TextComponentProps {
  text?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  type?: string;
}

export const Text = (props: TextComponentProps) => {
  return (
    <Content>
        {props?.type === "h1" && <H1 {...props}>{props?.text}</H1>}
        {props?.type === "h2" && <H2 {...props}>{props?.text}</H2>}
        {props?.type === "h3" && <H3 {...props}>{props?.text}</H3>}
        {props?.type === "h4" && <H4 {...props}>{props?.text}</H4>}
        {props?.type === "p" && <P {...props}>{props?.text}</P>}
        {props?.type === "span" && <Span {...props}>{props?.text}</Span>}
    </Content>
  );
};
