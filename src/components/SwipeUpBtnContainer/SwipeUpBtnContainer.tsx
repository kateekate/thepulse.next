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
  &::after {
    content: "";
    position: absolute;
    inset: 0;
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
    <SButton
      style={{
        display: isHidden ? "none" : "block",
      }}
    >
      Swipe Up
    </SButton>
  );
};
