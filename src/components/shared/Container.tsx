import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;

  background-color: black;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8vw;
  gap: 8vw;

  @media only screen and (max-width: 450px) {
    padding-top: 5vw;
  }
`;
