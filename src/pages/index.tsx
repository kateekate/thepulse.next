import { useEffect, useState } from "react";
import styled from "styled-components";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import {
  Header,
  Header2,
  Header3,
  LText,
  MText,
  SubHeader,
  XlText,
} from "@/components/shared/Text";
import {
  TextContainer,
  TextContainerWithPadding,
} from "@/components/shared/TextContainer";
import { DescriptionContainer } from "@/components/DescriptionContainer/DescriptionContainer";
import { CarouselContainer } from "@/components/CarouselContainer/CarouselContainer";
import { ImageContainer } from "@/components/shared/ImageContainer";
import { FlipCardsContainer } from "@/components/FlipCardsContainer/FlipCardsContainer";
import { ServiceContainer } from "@/components/ServiceContainer/ServiceContainer";
import { PlayBtnContainer } from "@/components/PlayBtnContainer/PlayBtnContainer";
import { FeedbackContainer } from "@/components/FeedbackContainer/FeedbackContainer";
import { FooterContainer } from "@/components/FooterContainer/FooterContainer";
import poster1 from "../../public/images/poster1.png";
import poster2 from "../../public/images/poster2.png";

const BodyContainer = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  scroll-behavior: smooth;

  background-color: black;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8vw;
  gap: 8vw;

  @media only screen and (max-width: 450px) {
    padding-top: 5vw;
  }
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const LandingComponent = () => {
  const [parallaxSpeed, setParallaxSpeed] = useState(-6);
  const [videoSrc, setVideoSrc] = useState("/video/video1080.mp4");

  useEffect(() => {
    const updateParallaxSpeedAndVideo = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 450) {
        setParallaxSpeed(0);
        setVideoSrc("/video/video450.mp4");
      } else {
        setParallaxSpeed(-6);
        setVideoSrc("/video/video1080.mp4");
      }
    };

    updateParallaxSpeedAndVideo();

    window.addEventListener("resize", updateParallaxSpeedAndVideo);

    return () => {
      window.removeEventListener("resize", updateParallaxSpeedAndVideo);
    };
  }, []);
  return (
    <ParallaxProvider>
      <BodyContainer>
        <VideoBackground autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
        </VideoBackground>
        <Header>Pulse</Header>
        <Header2>From Concept to Creation</Header2>
        <Header3>Innovate. Illuminate. Inspire.</Header3>
        <MainContainer>
          <CarouselContainer />
          <FeedbackContainer />
          <ImageContainer src={poster1.src} alt="poster1" />
          <Parallax speed={parallaxSpeed}>
            <SubHeader>
              Think Big & Designing Today for Tomorrow&apos;s Stories
            </SubHeader>
          </Parallax>
          <Parallax speed={parallaxSpeed}>
            <TextContainerWithPadding>
              <XlText>
                Our team of creative minds and technical experts are passionate
                about delivering exceptional experiences that captivate and
                inspire.
              </XlText>
              <MText>
                We believe in the power of storytelling and its ability to
                connect people. We are dedicated to creating experiences that
                resonate with your audience, leaving a lasting impression that
                goes beyond the event.
              </MText>
            </TextContainerWithPadding>
          </Parallax>
          <FlipCardsContainer />
          <Parallax speed={parallaxSpeed}>
            <ServiceContainer />
          </Parallax>
          <ImageContainer src={poster2.src} alt="poster2" />
          <Parallax speed={parallaxSpeed}>
            <PlayBtnContainer />
          </Parallax>

          <Parallax speed={parallaxSpeed}>
            <FooterContainer />
          </Parallax>
        </MainContainer>
      </BodyContainer>
    </ParallaxProvider>
  );
};

export default LandingComponent;
