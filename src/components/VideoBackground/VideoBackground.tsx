import styled from "styled-components";

const VideoBackground = ({ src }) => {
  return (
    <StyledVideo autoPlay muted loop playsInline>
      <source src={src} type="video/mp4" />
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

export default VideoBackground;
