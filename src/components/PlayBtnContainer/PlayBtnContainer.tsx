import styled, { keyframes } from "styled-components";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import backgroundImg from "../../../public/images/playContainerImg/background.jpeg";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-color: black;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 90vw;
  height: 100%;
  background-image: url(${backgroundImg.src});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
`;

const Line = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 8px;
  background-color: #9078e9cc;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const counterRotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Button = styled.button`
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #000000;
`;

const ButtonWrapper = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-image: url(${backgroundImg.src});
  position: relative;
  z-index: 5;
  transition: transform 0.5s ease;

  &:hover {
    animation: ${rotateAnimation} 2s linear infinite;
  }

  &:hover > button {
    animation: ${counterRotateAnimation} 2s linear infinite;
  }
`;

export const PlayBtnContainer = () => {
  return (
    <Container>
      <InnerContainer>
        <ButtonWrapper>
          <Button type="button">
            <IconButton
              aria-label="Play"
              icon={<TriangleUpIcon transform="rotate(90deg)" />}
              onClick={() => console.log("Play")}
              boxSize="20px"
            />
          </Button>
        </ButtonWrapper>
      </InnerContainer>
      <Line />
    </Container>
  );
};
