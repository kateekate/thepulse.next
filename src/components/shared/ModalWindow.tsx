import styled from "styled-components";
import { ModalContent } from "@chakra-ui/react";

export const SModalContent = styled(ModalContent)`
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

export const SVideoContent = styled(SModalContent)`
  max-width: 100%;
  height: 85vh;
  border-radius: 0;
`;
