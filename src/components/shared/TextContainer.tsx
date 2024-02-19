import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  z-index: 5;

  @media only screen and (max-width: 450px) {
    gap: 40px;
  }
`;

export const TextContainerWithPadding = styled(TextContainer)`
  padding: 0 25vw;
  text-align: justify;
`;
