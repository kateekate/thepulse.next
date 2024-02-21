import { useEffect, useState } from "react";
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
import { BodyContainer, MainContainer } from "@/components/shared/Container";
import VideoBackground from "@/components/VideoBackground/VideoBackground";
import { DescriptionContainer } from "@/components/DescriptionContainer/DescriptionContainer";
import { CarouselContainer } from "@/components/CarouselContainer/CarouselContainer";
import { ImageContainer } from "@/components/shared/ImageContainer";
import { FlipCardsContainer } from "@/components/FlipCardsContainer/FlipCardsContainer";
import { ServiceContainer } from "@/components/ServiceContainer/ServiceContainer";
import { PlayBtnContainer } from "@/components/PlayBtnContainer/PlayBtnContainer";
import { FeedbackContainer } from "@/components/FeedbackContainer/FeedbackContainer";
import { FooterContainer } from "@/components/FooterContainer/FooterContainer";
import { SwipeUpBtnContainer } from "@/components/SwipeUpBtnContainer/SwipeUpBtnContainer";
import poster1 from "../../public/images/poster1.png";
import poster2 from "../../public/images/poster2.png";

const LandingComponent = () => {
  const [parallaxSpeed, setParallaxSpeed] = useState(-6);
  const [videoSrc, setVideoSrc] = useState("/video/video1080.mp4");
  const [showSwipeUpBtn, setShowSwipeUpBtn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowSwipeUpBtn(window.innerWidth < 450);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateParallaxSpeedAndVideo = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 450) {
        setParallaxSpeed(0);
        setVideoSrc("/video/video360.mp4");
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
        <VideoBackground src={videoSrc} />
        <Header>Pulse</Header>
        <Header2>Innovate. Illuminate. Inspire.</Header2>
        <Header3>From Concept to Creation</Header3>
        <MainContainer>
          <CarouselContainer />
          {showSwipeUpBtn && <SwipeUpBtnContainer />}
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
