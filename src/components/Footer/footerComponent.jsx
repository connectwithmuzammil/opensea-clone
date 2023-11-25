import styled from "styled-components";
import { layout } from "../../helpers/constant";
import { fonts } from "../../helpers/constant";
const { mobile, tablet, laptop, desktop } = layout;

export const Container = styled.div`
  color: #fff;
  /* background-color: red; */
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: 2vw;

  @media only screen and (min-width: ${mobile}) {
    flex-direction: column;
    gap: 20px;
  }
  @media only screen and (min-width: ${laptop}) {
    flex-direction: row;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .p2 {
    max-width: 520px;
  }
  .inp-container {
    display: flex;
    gap: 10px;
  }
  button {
    width: 100px;
    border-radius: 7px;
    background-color: #2081e2;
    color: #ffffff;
    font-size: 1rem;
    border: none;
    cursor: pointer;
  }
  &:hover {
    button {
      background-color: #258cf3;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 380px;
  min-height: 45px;
  border-radius: 9px;
  outline: none;
  font-size: 1em;
  font-weight: 550;
  font-family: ${fonts.interRegular};
  padding-inline: 2vw;
  /* padding-block: 8px; */
  background-color: #ffffff;
  border: none;

  &::placeholder {
    color: gray;
  }
  /* @media only screen and (min-width: ${mobile}) {
min-height:30px 
 }
  @media only screen and (min-width: ${laptop}) {
    max-width: 380px;
    min-height: 45px;
  } */
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .right-img {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
export const Box = styled.div`
  background-color: #2081e2;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #ffffff;
  }
`;
export const FooterWrapper = styled.div`
  /* background-color: yellow; */
  color: white;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin-top: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
export const Column = styled.div`
  grid-column: span 1;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

export const ColumnHeading = styled.h4`
  margin-bottom: 10px;
  .img {
    width: clamp(35px, 5vw, 40px);
  }
  @media (max-width: 600px) {
    .img {
    }
  }
`;

export const ColumnSubheading = styled.p`
  margin-bottom: 10px;
  cursor: pointer;
  
  .p2{
    max-width: 200px;
  }
  @media (max-width: 600px) {
    .p2{
      max-width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
`;

export const FullWidthColumn = styled.div`
  grid-column: span 2; /* Takes full width */
  margin-bottom: 20px;

  @media (min-width: 600px) {
    grid-column: span 1; /* Takes one column on larger screens */
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #ffffff;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Copyright = styled.div`
  font-size: 0.8rem;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: 5px 0;
  }
`;
export const Policy = styled.div`
  display: flex;
  cursor: pointer;
  gap: 10px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
