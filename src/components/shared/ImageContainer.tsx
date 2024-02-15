import styled from "styled-components";

interface ImageContainerProps {
  src: string;
  alt: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  gap: 0;

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 80vw;
  height: auto;
`;

export const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <Container>
      <Image src={src} alt={alt} />
    </Container>
  );
};
