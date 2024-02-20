import { useEffect, useRef, useState } from "react";
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

const SButton = styled.button`
  position: sticky;
  bottom: 0;

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

const SModalContent = styled(ModalContent)`
  position: fixed;
  width: auto;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #ec5b20;
  z-index: 11;

  @media only screen and (max-width: 450px) {
    width: 85vw;
  }
`;

const SInput = styled(Input)`
  background: transparent;
  border: 2px dashed black;
  margin-bottom: 20px;
  border-radius: 25px;

  &::placeholder {
    color: black;
  }

  &:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const STextarea = styled(Textarea)`
  background: transparent;
  border: 2px dashed black;
  margin-bottom: 20px;
  border-radius: 25px;

  &::placeholder {
    color: black;
  }

  &:focus {
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsSticky(position > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formRef = useRef<HTMLFormElement>(null); // HTMLFormElement для указания типа ref

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formProps = {
        name: formData.get("name"),
        email: formData.get("email"),
        companyName: formData.get("companyName"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formProps),
      });

      if (response.ok) {
        console.log("Message sent");
        onClose();
      } else {
        console.error("Failed to send email");
      }
    }
  };

  return (
    <>
      {!isOpen && (
        <SButton
          onClick={onOpen}
          style={{
            position: isSticky ? "fixed" : "absolute",
            bottom: isSticky ? "65px" : "0",
          }}
        >
          Check the pulse
        </SButton>
      )}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
        isCentered={true}
      >
        <ModalOverlay backdropBlur="0" />
        <SModalContent>
          <ModalHeader textTransform="uppercase" color="black" fontWeight="800">
            Feedback
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody paddingBottom="20px">
            <form onSubmit={handleSubmit} ref={formRef}>
              <SInput name="name" placeholder="Name" />
              <SInput name="email" placeholder="Email" />
              <SInput name="companyName" placeholder="Company" />
              <STextarea name="message" placeholder="Message" />
              <SendButton type="submit">Send</SendButton>
            </form>
          </ModalBody>
        </SModalContent>
      </Modal>
    </>
  );
};
