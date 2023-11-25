import React from "react";
import { H2, H3 } from "./Typography";
import styled from "styled-components";
import Slider from "react-slick";

const CardContainer = styled.div`
  cursor: pointer;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scaley(1.04);
  }
  .img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`;
const CardContent = styled.div`
  padding: 10px 20px;
`;
const ContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 12px;
  gap: 8px;
`;

const Collection = ({ title, data }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <H3 fontSize="1.3rem" style={{ color: "#3b3b3b" }}>
        {title}
      </H3>
      {/* <Wrapper> */}
      <Slider className="slider" {...settings}>
        {data.map((item, index) => (
          <CardContainer key={index}>
            <img src={item.img} alt="" className="img" />

            <CardContent>
              <H3 style={{ fontWeight: "500" }}>{item.title}</H3>
              <ContentStyle>
                <div>
                  <div style={{ color: "#797676" }}>Floor</div>
                  <H3>{` 0.0.1 ETH`}</H3>
                </div>
                <div>
                  <div style={{ color: "#797676" }}>Total Volume</div>
                  <H3>3 ETH</H3>
                </div>
              </ContentStyle>
            </CardContent>
          </CardContainer>
        ))}
      </Slider>
      {/* </Wrapper> */}
    </div>
  );
};

export default Collection;
