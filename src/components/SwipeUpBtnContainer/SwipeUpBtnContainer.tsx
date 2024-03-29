import { ArrowRightIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SButton = styled.button`
  position: fixed;
  bottom: 65px;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(150px, 270px, 100%);
  height: 56px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 10;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 78%);
  &::after {
    content: "";
    position: absolute;
    inset: 0;
  }
`;

const UpwardsArrow = styled(ArrowRightIcon)`
  position: fixed;
  width: 100%;
  height: 46px;
  transform: rotate(270deg) translateX(-45%);
  color: #ffffff91;
  animation: swipe-up-animation 1.5s ease-in-out infinite;

  @keyframes swipe-up-animation {
    0%,
    100% {
      bottom: 338px;
    }
    50% {
      bottom: 330px;
    }
  }
`;

export const SwipeUpBtnContainer = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsHidden(position > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <UpwardsArrow style={{ display: isHidden ? "none" : "block" }} />
      <SButton
        style={{
          display: isHidden ? "none" : "block",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Swipe Up
      </SButton>
    </>
  );
};
