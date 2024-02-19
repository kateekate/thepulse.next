import styled, { keyframes } from "styled-components";

const fillTextAnimation = keyframes`
  from {
    color: #6a6868bf;
  }
  to {
    color: #ffffffab;
  }
`;

const fillTextAnimation2 = keyframes`
  from {
    color: #6a6868bf;
  }
  to {
    color: #6a6870;;
  }
`;

export const Text = styled.h2`
  font-size: 1.3vw;
  text-transform: uppercase;

  @media only screen and (max-width: 450px) {
    font-size: 2.5vw;
    color: #616161;
  }
`;

export const MText = styled(Text)`
  font-size: 1rem;
`;

export const AnimationText = styled(MText)`
  font-size: 1rem;

  &:hover {
    animation: ${fillTextAnimation2} 0.3s forwards;
  }
`;

export const BlurText = styled(MText)`
  backdrop-filter: blur(15px);
  padding: 15px;
  text-align: justify;
`;

export const LText = styled(Text)`
  font-size: 1.5vw;
  color: #ffffffab;

  @media only screen and (max-width: 450px) {
    font-size: 2.5vw;
  }
`;

export const XlText = styled(Text)`
  font-size: 2.8vw;
  font-weight: 400;
  line-height: 1.2;
`;

export const XXLText = styled(Text)`
  font-size: 10vw;
  font-weight: 800;
  line-height: 1.25;
  text-align: center;

  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${fillTextAnimation} 0.5s forwards;
  }
`;

export const Header = styled.h1`
  width: 100%;
  position: absolute;
  text-align: center;
  top: 15vw;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #9078e9cc;
  font-size: 29vw;
  font-weight: 800;
  text-transform: uppercase;
`;

export const SubHeader = styled.p`
  padding: 0 40px;
  font-size: 5vw;
  font-weight: 600;
  line-height: 7vw;
  text-align: center;
  color: #6a6868bf;
  text-transform: uppercase;

  transition: color 0.3s ease;

  &:hover {
    animation: ${fillTextAnimation} 0.5s forwards;
  }

  @media only screen and (max-width: 450px) {
    color: #ffffffab;
  }
`;

const VioletTextAnimation = keyframes`
  from {
    color: #6a6868bf;
  }
  to {
    color: #9078e9cc;
    border: 1px solid #9078e9cc;
  }
`;

export const FooterHeader = styled.p`
  width: 55vw;
  padding: 0 40px;
  font-size: 6vw;
  font-weight: 800;
  line-height: 7vw;
  color: #6a6868bf;
  text-align: center;
  text-transform: uppercase;

  transition: color 0.3s ease;

  &:hover {
    animation: ${VioletTextAnimation} 0.5s forwards;
  }
`;
