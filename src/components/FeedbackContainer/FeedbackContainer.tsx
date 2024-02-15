import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const dash = keyframes`
  0%, 100% {
    border: 2px dashed black;
    border-radius: 25px;
  }
`;

const StyledButton = styled.button`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(150px, 270px, 100%);
  height: 56px;
  background-color: #ec5b20;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 10;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }

  &:hover::after {
    animation: ${dash} 3s linear infinite;
  }
`;

const StyledModalContent = styled(ModalContent)`
  position: fixed;
  width: auto;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #ec5b20;
  z-index: 11;
`;

const StyledInput = styled(Input)`
  background: transparent;
  border: 2px dashed black;
  margin-bottom: 20px;
  border-radius: 25px;
  &::placeholder {
    color: black;
  }
`;

const StyledTextarea = styled(Textarea)`
  background: transparent;
  border: 2px dashed black;
  margin-bottom: 20px;
  border-radius: 25px;
  &::placeholder {
    color: black;
  }
`;

const SendButton = styled(Button)`
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 25px;
  height: 56px;
  border: 2px solid transparent;
  text-transform: uppercase;
  transition: border-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    text-decoration: underline;
  }
`;

export const FeedbackContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  return (
    <>
      <StyledButton onClick={onOpen}>Check the pulse</StyledButton>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        isCentered={true}
      >
        <ModalOverlay backdropBlur="0" />
        <StyledModalContent>
          <ModalHeader textTransform="uppercase" color="black" fontWeight="800">
            Feedback
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="20px">
            <form>
              <StyledInput placeholder="Name" />
              <StyledInput placeholder="Email" />
              <StyledInput placeholder="Company" />
              <StyledTextarea placeholder="Message" />
              <SendButton type="submit">Send</SendButton>
            </form>
          </ModalBody>
        </StyledModalContent>
      </Modal>
    </>
  );
};