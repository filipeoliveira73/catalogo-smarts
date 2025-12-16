import { ButtonContainer, LinkContainer } from "./styles";

interface ButtonLinkProps {
  href?: string;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  target?: string;
  rel?: string;
  text?: string;
}

export const ButtonLink = ({
  rel,
  target,
  href,
  color,
  background,
  width,
  height,
  text,
}: ButtonLinkProps) => {
  return (
    // <ButtonContainer data-id="button">
      <LinkContainer
        height={height}
        width={width}
        background={background}
        color={color}
        href={href}
        target={target}
        rel={rel}
      >
        {text}
      </LinkContainer>
    // </ButtonContainer>
  );
};
