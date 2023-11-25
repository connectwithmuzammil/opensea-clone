import React from "react";
import Slider from "react-slick";
import { Section } from "./Banner";
import styled from "styled-components";
import { layout } from "../helpers/constant";
import { H3 } from "./Typography";
import icons from "../assets/icons/index";

const { mobile, tablet, laptop, desktop, mobileLarge } = layout;

const data = [
  {
    id: 1,
    image: icons.card3,
    title: "San Francisco",
    floor: "Floor 0.89ETH",
  },
  {
    id: 2,
    image: icons.card2,
    title: "A New York City",
    floor: "Floor 0.89ETH",
  },
  {
    id: 3,
    image: icons.card1,
    title: "San Francisco",
    floor: "Floor 0.89ETH",
  },
  {
    id: 4,
    image: icons.card4,
    title: "TheMonaLana",
    floor: "Floor 0.89ETH",
  },
  {
    id: 5,
    image: icons.card5,
    title: "San Francisco",
    floor: "Floor 0.89ETH",
  },
  {
    id: 6,
    image: icons.card4,
    title: "TheMonaLana",
    floor: "Floor 0.89ETH",
  },
];

const SEC = styled(Section)`
  @media only screen and (min-width: ${mobile}) {
    padding-inline: 8vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 3vw;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 70px;
  }
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover .img {
    transform: scale(1.1);
  }
  @media only screen and (min-width: ${mobile}) {
    height: 200px;
  }
  /* @media only screen and (min-width: ${mobileLarge}) {
    height: 100px;
  } */
  @media only screen and (min-width: ${tablet}) {
    height: 220px;
  }
  @media only screen and (min-width: ${laptop}) {
    height: 300px;
  }
  @media only screen and (min-width: ${desktop}) {
  }
`;
const Text = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 10px;
  box-sizing: border-box;
`;
const Slide = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SEC backgroundColor="linear-gradient(90deg, rgba(127,127,130,1) 22%, rgba(201,214,214,1) 100%)">
      <Slider {...settings}>
        {data.map(({ image, floor, title }, index) => {
          return (
            <Card key={index}>
              <img src={image} alt="" className="img" />
              <Text>
                <H3>{title}</H3>
                <H3>{floor}</H3>
              </Text>
            </Card>
          );
        })}
      </Slider>
    </SEC>
  );
};

export default Slide;
