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
  justify-content: space-around;
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
          Dive into the digital age with bespoke strategies that resonate. From
          SEO to PPC, content marketing to social media, we craft campaigns that
          connect and convert.
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
          Stand out with stunning visuals that tell your brand&apos;s story. Our
          designers dream big, delivering graphics, websites, and branding that
          break the mold. Make your mark on the digital landscape.
        </BlurMText>
      </FlipCardRow>
    </Container>
  );
};
