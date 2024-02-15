import styled, { keyframes } from "styled-components";

const dash = keyframes`
  0%, 100% {
    border: 2px dashed black;
    border-radius: 25px;
  }
`;

const Button = styled.button`
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

export const FeedbackBtn = () => {
  return <Button>Check the pulse</Button>;
};
