import styled from "styled-components";
import { layout } from "../../helpers/constant";
import { fonts } from "../../helpers/constant";
import { Section } from "../Banner";
const { mobile, tablet, laptop, desktop } = layout;

export const Sec = styled(Section)`
  @media only screen and (min-width: ${mobile}) {
    .open {
      width: 100%;
      ul {
        opacity: 1;
        transition: 0.3s all ease-in-out;
      }
    }
  }

  @media only screen and (min-width: ${tablet}) {
    .open {
      width: 100%;
      ul {
        opacity: 1;
        transition: 0.3s all ease-in-out;
      }
    }
  }

  @media only screen and (min-width: ${laptop}) {
    .mobileMenu {
      display: none;
    }
  }
  @media only screen and (min-width: ${desktop}) {
    .mobileMenu {
      display: none;
    }
  }
`;
export const Nav = styled.nav`
  padding-block: 1vw;
  /* padding-inline: 1.5vw; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  transition: 0s.6s;
  z-index: 1;
  .logo {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      width: clamp(35px, 5vw, 40px);
    }
    .h3 {
      font-size: 25px;
      color: ${(props) => (props.active ? "#000000" : "#ffffff")};
    }
  }
  .hamburger {
    padding: 0px;
  }

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 3vw;

    .hamburger {
      display: flex;
    }
    .del {
      display: flex;
    }
    .open {
      width: 100%;
      ul {
        opacity: 1;
        transition: 0.3s all ease-in-out;
      }
    }
  }

  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
    .del {
      display: flex;
    }
    .hamburger {
      display: flex;
    }
    .open {
      width: 100%;
      ul {
        opacity: 1;
        transition: 0.3s all ease-in-out;
      }
    }
  }

  @media only screen and (min-width: ${laptop}) {
    padding-inline: 42px;
    .del {
      display: none;
    }
    .hamburger {
      display: none;
    }
    .mobileMenu {
      display: none;
    }
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
    padding-block: 18px;
    .mobileMenu {
      display: none;
    }
  }
`;

export const UL = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => (align ? align : "center")};
  /* border:1px solid red; */
  ul {
    display: flex;
    gap: 10px;
  }
  li {
    .h3 {
      font-family: ${fonts.interRegular};
    }
    /* font-weight: 500; */
    /* text-transform: uppercase; */
  }

  @media only screen and (min-width: ${mobile}) {
    display: none;
  }

  @media only screen and (min-width: ${tablet}) {
    display: none;
  }

  @media only screen and (min-width: ${laptop}) {
    display: flex;
    gap: 15px;
    font-size: 15px;
  }
  @media only screen and (min-width: ${desktop}) {
    gap: 30px;
    font-size: 16px;
  }
`;
export const MobileBox = styled.div`
  padding-block: 1rem;
  display: flex;
  gap: 20px;
`;

export const SideMenu = styled.div`
  height: 100vh;
  width: 0%;
  position: fixed;
  z-index: 1;
  top: 0px;
  right: 0;
  background-color: red;
  /* transition: 0.2s all ease-in-out; */
  transition: width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  padding-top: 80px;
  text-align: center;
  display: flex;
  overflow: hidden;
`;
export const MobileUl = styled.div``;
export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  /* transition:var(--transition03s); */
  font-size: 16px;
  padding: 5px;
  /* filter:invert(); */

  &:disabled {
    img {
      filter: invert(0.9);
    }
    cursor: initial;
  }
`;

export const VerticalLine = styled.div`
  border-left: ${(props) =>
    props.active
      ? "1px solid rgb(150, 149, 149)"
      : "1px solid rgba(255, 255, 255, 0.4);"};

  height: 30px;
`;

export const Ipt = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`;
export const IptwithIcon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  & .searchImg {
    width: 22px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    cursor: pointer;
    /* color: ${(props) => (props.active ? "#000000" : "#ffffff")}; */
  }
  & .backSlash {
    display: flex;
    justify-content: center;
    background: rgba(255, 255, 255, 0.4);
    width: 25px;
    height: 25px;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    cursor: pointer;
    /* color: #ffffff; */
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 45px;
  border-radius: 9px;
  outline: none;
  font-size: 1em;
  font-weight: 500;
  font-family: ${fonts.interRegular};
  padding-inline: 3.6vw;
  padding-block: 8px;
  background: ${(props) =>
    props.active ? "rgba(236, 228, 228,0.5);" : " rgba(255, 255, 255, 0.4);"};
  border: none;

  &::placeholder {
    color: ${(props) => (props.active ? "#000000" : "#ffffff")};
  }
`;

export const Box = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  gap: 10px;
  align-items: center;
  background: ${(props) =>
    props.active ? "rgb(241, 236, 236)" : "rgba(255, 255, 255, 0.4);"};
  /* background: rgba(255, 255, 255, 0.4); */
  height: 45px;
  border-radius: 7px;
  padding: 20px;
`;
