import styled from "styled-components";
import { BlurMText } from "../shared/Text";
import { FlipCard } from "../FlipCard/FlipCard";
import Animation1 from "../../../public/images/background.gif";
import img1 from "../../../public/images/frontImage/img1.png";
import img2 from "../../../public/images/frontImage/img2.png";
import img3 from "../../../public/images/frontImage/img3.png";
import img4 from "../../../public/images/frontImage/img4.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  padding: 20px;
  background-image: url(${Animation1.src});
  background-size: cover;
  background-position: center;
`;

const FlipCardColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FlipCardRow = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

export const FlipCardsContainer = () => {
  return (
    <Container>
      <FlipCardRow>
        <BlurMText>
          We believe in the power of storytelling and its ability to connect
          people. We are dedicated to creating experiences that resonate with
          your audience, leaving a lasting impression that goes beyond the
          event.
        </BlurMText>
      </FlipCardRow>
      <FlipCardColumn>
        <FlipCard text={"Give"} frontImage={img1.src} />
        <FlipCard text={"Us"} frontImage={img2.src} />
        <FlipCard text={"Your"} frontImage={img3.src} />
        <FlipCard text={"Inspire"} frontImage={img4.src} />
      </FlipCardColumn>
      <FlipCardRow>
        <BlurMText>
          We believe in the power of storytelling and its ability to connect
          people. We are dedicated to creating experiences that resonate with
          your audience, leaving a lasting impression that goes beyond the
          event.
        </BlurMText>
      </FlipCardRow>
    </Container>
  );
};
