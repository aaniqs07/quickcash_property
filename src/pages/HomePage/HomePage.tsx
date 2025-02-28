import styled from "styled-components";
import HeroSection from "./components/HeroSection/HeroSection";

export const HomePage = () => {
  return (
    <HomeDiv>
      <HeroSection />
    </HomeDiv>
  );
};

const HomeDiv = styled.div`
  position: relative;
`;

export default HomePage;
