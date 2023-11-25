import React, { useEffect, useState } from "react";
import {
  Nav,
  UL,
  IconButton,
  VerticalLine,
  Input,
  Ipt,
  IptwithIcon,
  Box,
  MobileBox,
  SideMenu,
  MobileUl,
  Sec,
} from "./headerComponent";
import { Search, UserCircle2, ShoppingCart, Wallet } from "lucide-react";

import icons from "../../assets/icons/index";
import { H2, H3, H4 } from "../Typography";
import { Section } from "../Banner";
const index = () => {
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  //   window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Sec paddingBlock="0px">
        <Nav className={navbar ? "active" : "navbar"}>
          {/* left */}
          <UL align="left">
            <div className="logo">
              <img src={icons.opensealogo} alt="opensea" />
              <H3 
                style={{
                  color: navbar ? "#000000" : "#ffffff",
                
                }}
              >
                OpenSea
              </H3>
            </div>
            <VerticalLine active={navbar}></VerticalLine>
            {/* <div className="ul"> */}
            <ul className="ul">
              <li className="h3">
                <H3 style={{ color: navbar ? "#000000" : "#ffffff" }}>Drops</H3>
              </li>
              <li className="h3">
                <H3 style={{ color: navbar ? "#000000" : "#ffffff" }}>Stats</H3>
              </li>
              <li className="h3">
                <H3 style={{ color: navbar ? "#000000" : "#ffffff" }}>
                  Create
                </H3>
              </li>
            </ul>
            {/* </div>     */}
          </UL>

          {/* Center */}
          <UL>
            <Ipt>
              <IptwithIcon>
                <Input
                  type="text"
                  placeholder="search"
                  className="search"
                  active={navbar}
                />
                <Search
                  className="searchImg"
                  style={{ color: navbar ? "#000000" : "#ffffff" }}
                />
                <div
                  className="backSlash"
                  style={{ color: navbar ? "#000000" : "#ffffff" }}
                >
                  /
                </div>
              </IptwithIcon>
            </Ipt>
          </UL>
          <div className="logo del">
            <img src={icons.opensealogo} alt="opensea" />
            <H2 className="h2" fontSize="1.7rem">OpenSea</H2>
          </div>
          <MobileBox className="">
            <Box style={{ padding: "10px" }} active={navbar}>
              <Wallet
                size={28}
                style={{ color: navbar ? "#000000" : "#ffffff" }}
              />
              <H3 style={{ color: navbar ? "#000000" : "#ffffff" }}>Login</H3>
            </Box>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Search
                size={28}
                strokeWidth={2.25}
                style={{ color: navbar ? "#000000" : "#ffffff" }}
              />{" "}
            </div>
            <img
              src={icons.menu}
              alt=""
              width={""}
              height={""}
              onClick={() => setMenu(!menu)}
            />
          </MobileBox>

          {/* right */}
          <UL>
            <Box style={{ width: "" }} active={navbar}>
              <Wallet
                size={28}
                style={{ color: navbar ? "#000000" : "#ffffff" }}
              />
              <H3 style={{ color: navbar ? "#000000" : "#ffffff" }}>Login</H3>
            </Box>
            <Box active={navbar}>
              <UserCircle2
                style={{ color: navbar ? "#000000" : "#ffffff" }}
                size={28}
              />
            </Box>
            <Box active={navbar}>
              <ShoppingCart
                size={28}
                style={{ color: navbar ? "#000000" : "#ffffff" }}
              />
            </Box>
          </UL>
        </Nav>
        {/* <SideMenu className={menu ? "mobileMenu open" : "mobileMenu"}>
          <MobileUl></MobileUl>
        </SideMenu> */}
      </Sec>
    </>
  );
};

export default index;
