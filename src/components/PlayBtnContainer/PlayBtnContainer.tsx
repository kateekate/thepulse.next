import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { TriangleUpIcon } from "@chakra-ui/icons";

import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { SVideoContent } from "../shared/ModalWindow";
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

  @media only screen and (max-width: 450px) {
    margin: 0;
  }
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

  @media only screen and (max-width: 450px) {
    height: 70%;
  }
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

const CustomIconButton = styled.button`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const PlayBtnContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <Container>
      <InnerContainer>
        {isOpen ? (
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={true}
            isCentered={true}
          >
            <ModalOverlay />
            <SVideoContent>
              <ModalCloseButton color="#ec5b20" />
              <ModalBody padding="8px" width="85vw">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/oZAot9EZFM0?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </ModalBody>
            </SVideoContent>
          </Modal>
        ) : (
          <ButtonWrapper>
            <CustomIconButton type="button" onClick={onOpen}>
              <TriangleUpIcon
                transform="rotate(90deg)"
                boxSize="20px"
                color={"white"}
              />
            </CustomIconButton>
          </ButtonWrapper>
        )}
      </InnerContainer>
      <Line />
    </Container>
  );
};
