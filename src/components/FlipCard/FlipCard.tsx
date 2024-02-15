import { useState } from "react";
import { useSpring, animated as a } from "@react-spring/web";
import styled from "styled-components";

interface FlipCardProps {
  text: string;
  frontImage: string;
}

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const PulsingContainer = styled(Container)`
  &:hover {
    animation: pulse 0.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Card = styled(a.div)`
  position: absolute;
  width: 250px;
  height: 150px;
  cursor: pointer;
  will-change: transform, opacity;
  background-size: cover;
`;

const Front = styled(Card)<{ img: string }>`
  background-image: url(${(props) => props.img});

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Back = styled(Card)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffffab;
  font-weight: 600;
  text-align: center;
  background-color: black;
  border-radius: 10px;

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FlipCard = ({ text, frontImage }: FlipCardProps) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <PulsingContainer onClick={() => set((state) => !state)}>
      <Back style={{ opacity: opacity.to((o) => 1 - o), transform }}>
        {text}
      </Back>
      <Front
        img={frontImage}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </PulsingContainer>
  );
};
