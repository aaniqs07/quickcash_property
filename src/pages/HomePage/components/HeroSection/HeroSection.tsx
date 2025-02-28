import styled from "styled-components";
// import sliderImg01 from "@assets/images/sliderImg01.jpg";
// import sliderImg02 from "@assets/images/sliderImg02.jpg";
// import sliderImg03 from "@assets/images/sliderImg03.jpg";
import "react-slideshow-image/dist/styles.css";

import "react-slideshow-image/dist/styles.css";
// import { Fade } from "react-slideshow-image";
import { Col, Container, Row } from "react-bootstrap";
import { COLORS } from "@constants";

export const HeroSection = () => {
  // const imgUrl = [sliderImg01, sliderImg02, sliderImg03];

  return (
    <SectionDiv>
      {/* <Fade
        autoplay={true}
        duration={5000}
        transitionDuration={1000}
        indicators={true}
        arrows={false}
      >
        [<h1>1</h1>, <h1>1</h1>, <h1>1</h1>]
        {imgUrl.map((slideImage, index) => (
          <SlideItem
            key={index}
            style={{
              backgroundImage: `url(${slideImage})`,
            }}
          ></SlideItem>
        ))} 
      </Fade> */}

      {/* <Overlay /> */}

      <ContentContainer>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={8}>
              <HeadingLg>Work in Progress for Quickcash Property</HeadingLg>
            </Col>
          </Row>
        </Container>
      </ContentContainer>
    </SectionDiv>
  );
};

const SectionDiv = styled.section`
  scroll-behavior: smooth;
  min-height: 99vh;
  height: 100%;
  overflow: hidden;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* .react-slideshow-container + ul.indicators {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    opacity: 1 !important;
    z-index: 200;
    
    padding-left: 0 !important;
  }
  .react-slideshow-container + ul.indicators > li {
    margin: 0 1em;
    opacity: 1 !important;
  }
  .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
    height: 16px;
    width: 16px;
    background-color: ${COLORS.themeGray};
    opacity: 1 !important;
  }
  .react-slideshow-container
    + ul.indicators
    .each-slideshow-indicator.active:before {
    background-color: ${COLORS.primary};
    opacity: 1 !important;
  } */
`;

// const Overlay = styled.div`
//   background-color: #00000211;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 99;
// `;

// const SlideItem = styled.div`
//   height: 99vh;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   width: 100%;
// `;

const ContentContainer = styled.div``;

const HeadingLg = styled.h1`
  font-size: 3.5em;
  font-weight: 600;
  text-align: center;
  @media (max-width: 575px) {
    font-size: 3em;
  }
`;
// const BtnsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
// `;

// const OutlineLink = styled(Link)`
//   background-color: transparent;
//   border: 1px solid #ffffff;
//   display: inline-block;
//   padding: 0.6em 1em;
//   min-width: 200px;
//   white-space: nowrap;
//   border-radius: 50px;
//   font-size: 1.5em;
//   font-weight: 500;
//   margin-top: 2em;
//   color: #ffffff;
//   transition: 500ms all ease-in-out;

//   &:hover {
//     color: ${COLORS.themeMidnightBlue} !important;
//     background-color: #ffffff;
//   }

//   @media (max-width: 575px) {
//     padding: 0.4em;
//   }
// `;

export default HeroSection;
