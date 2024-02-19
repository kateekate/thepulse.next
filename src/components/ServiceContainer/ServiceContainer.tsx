import styled from "styled-components";
import { AnimationText, LText, XXLText } from "../shared/Text";

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
        <AnimationText>
          We are gradually adding new functionality and we welcome your
          suggestions and feedback.
        </AnimationText>
        <XXLText>Follow time</XXLText>
        <AnimationText>
          We invite you to be an integral part of this journey by sharing your
          suggestions with us.
        </AnimationText>
      </TextContainer>
      <LText>Our Services</LText>
    </Container>
  );
};
