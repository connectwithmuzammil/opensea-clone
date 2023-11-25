import styled from "styled-components";
import { layout } from "../helpers/constant";

const { mobile, tablet, laptop, desktop } = layout;

export const Section = styled.section`
  background: ${({
    backgroundImage,
    backgroundColor,
    backgroundColorImage,
  }) => {
    return backgroundImage
      ? `url(${backgroundImage})`
      : backgroundColor
      ? backgroundColor
      : backgroundColorImage
      ? backgroundColorImage
      : `radial-gradient(circle, rgba(240,162,204,1) 0%, rgba(255,231,218,1) 70%)`;
  }};

  padding-block: ${({ paddingBlock }) =>
    paddingBlock ? paddingBlock : "20px"};

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 3vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 42px;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
  }
`;
