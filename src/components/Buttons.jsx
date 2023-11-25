import React from "react";
import Slider from "react-slick";
import { Section } from "./Banner";
import { layout } from "../helpers/constant";
import styled from "styled-components";
import { H3 } from "./Typography";

const { mobile, tablet, laptop, desktop } = layout;
const categories = [
  "All",
  "Art",
  "Gaming",
  "Memberships",
  "PFPS",
  "Photography",
  "Music",
];
const SEC = styled(Section)`
  margin-top: 1rem;
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
const CategoryContainer = styled.div`
  /* flex-wrap: wrap; */
  gap: 7px;
  margin-top: 1rem;

  @media only screen and (min-width: ${mobile}) {
    display: inline-block;
  }

  @media only screen and (min-width: ${tablet}) {
    display: inline-block;
  }

  @media only screen and (min-width: ${laptop}) {
    display: block;
  }
  @media only screen and (min-width: ${desktop}) {
    display: flex;
  }
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 10px;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  &:nth-child(1) {
    background: rgba(255, 255, 255, 0.4);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;
const Buttons = () => {
  var settings = {
    infinite: false,
    // speed: 500,
    slidesToShow: 6,
    // slidesToScroll: 4,
  };
  return (
    <SEC backgroundColor="linear-gradient(90deg, rgba(127,127,130,1) 22%, rgba(201,214,214,1) 100%)">
      <Slider {...settings} style={{ backgroundColor: "" }}>
          {categories.map((category, index) => (
        <CategoryContainer>
            <Category key={index} style={{ backgroundColor: "" }}>
              <H3 style={{}}> {category}</H3>
            </Category>
        </CategoryContainer>
          ))}
      </Slider>
    </SEC>
  );
};

export default Buttons;
