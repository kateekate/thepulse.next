import styled from "styled-components";
import { FooterHeader } from "../shared/Text";

const Container = styled.div`
  height: auto;
  padding: 20px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #000000;

  @media only screen and (max-width: 450px) {
    padding: 0 0 100px 0;
  }
`;

const Footer = styled.footer`
  padding: 40px 0 65px 0;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #000000;
  color: white;
  font-size: 0.625rem;
`;

export const FooterContainer = () => {
  return (
    <Container>
      <FooterHeader>Don&apos;t worry, we just blow your mind</FooterHeader>
      <Footer>
        <a href="https://www.instagram.com/">Instagram</a>
      </Footer>
    </Container>
  );
};
