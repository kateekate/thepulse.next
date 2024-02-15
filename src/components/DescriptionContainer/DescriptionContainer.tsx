import styled from "styled-components";
import { Text } from "../shared/Text";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px 0 40px;
  gap: 40px;
`;

export const DescriptionContainer = () => {
  return (
    <Container>
      <Text>
        From corporate branding to bespoke event themes, our portfolio showcases
        a spectrum of imaginative solutions tailored to elevate your
        brand&apos;s identity and engage your audience like never before.
      </Text>
      <Text>
        Explore our design philosophy that merges aesthetics with functionality,
        creating visually stunning and impactful designs that speak volumes.
      </Text>
      <Text>
        Discover how we bring events to life through immersive experiences,
        meticulous planning, and flawless execution, setting new benchmarks in
        the industry.
      </Text>
    </Container>
  );
};
