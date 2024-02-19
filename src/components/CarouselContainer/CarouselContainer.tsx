import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg1 from "../../../public/images/carouselImg/1.png";
import CarouselImg2 from "../../../public/images/carouselImg/2.png";
import CarouselImg3 from "../../../public/images/carouselImg/3.png";
import CarouselImg4 from "../../../public/images/carouselImg/4.png";

const Container = styled.div`
  width: 100%;
  padding: 20px 40px;

  @media only screen and (max-width: 450px) {
    padding: 35px 20px 40px;
  }
`;

const SliderContainer = styled.div`
  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:after {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid black;
`;

export const CarouselContainer = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Container>
      <SliderContainer>
        <Slider {...settings}>
          <div>
            <CarouselImage src={CarouselImg1.src} alt="carouselImg1" />
          </div>
          <div>
            <CarouselImage src={CarouselImg2.src} alt="carouselImg2" />
          </div>
          <div>
            <CarouselImage src={CarouselImg3.src} alt="carouselImg3" />
          </div>
          <div>
            <CarouselImage src={CarouselImg4.src} alt="carouselImg4" />
          </div>
        </Slider>
      </SliderContainer>
    </Container>
  );
};
