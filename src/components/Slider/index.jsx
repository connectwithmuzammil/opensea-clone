import React from "react";
import styled from "styled-components";
import { Section } from "../Banner";
import { H3 } from "../Typography";
import { categories } from "./sliderComponents";
import Slide from "../Slide";
import { layout } from "../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const Sliders = styled.div`
  /* background: linear-gradient(
    90deg,
    rgba(231, 231, 240, 1) 22%,
    rgba(7, 8, 8, 1) 100%
  ); */

  width: 100%;
  /* height: dvh; */
  position: relative;
  z-index: 0;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 1rem;

  /* @media only screen and (min-width: ${mobile}) {
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${tablet}) {
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${laptop}) {
    display: flex;
  }
  @media only screen and (min-width: ${desktop}) {
    display: flex;
  } */
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 10px;
  padding: 20px 10px;
  border-radius: 6px;
  cursor: pointer;
  &:nth-child(1) {
    background: rgba(255, 255, 255, 0.4);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const Slider = () => {
  return (
    <Sliders>
      <Section backgroundColor="linear-gradient(90deg, rgba(127,127,130,1) 22%, rgba(201,214,214,1) 100%)">
        <CategoryContainer>
          {categories.map((category, index) => (
            <Category key={index}>
              <H3> {category}</H3>
            </Category>
          ))}
        </CategoryContainer>
      </Section>
      {/* <Slide /> */}
    </Sliders>
  );
};

export default Slider;
