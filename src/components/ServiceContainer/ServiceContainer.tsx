import styled from "styled-components";
import { LText, MText, XXLText } from "../shared/Text";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const TextContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: justify;
  gap: 40px;
`;

export const ServiceContainer = () => {
  return (
    <Container>
      <LText>Our Services</LText>
      <TextContainer>
        <MText>
          We are gradually adding new functionality and we welcome your
          suggestions and feedback.
        </MText>
        <XXLText>Follow time</XXLText>
        <MText>
          We are gradually adding new functionality and we welcome your
          suggestions and feedback.
        </MText>
      </TextContainer>
      <LText>Our Services</LText>
    </Container>
  );
};
