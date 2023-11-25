import React from "react";
import { Twitter, Instagram, ClipboardX } from "lucide-react";
import { H2, H4, P2, Section } from "../index";
import {
  Container,
  Flex,
  Left,
  Right,
  Input,
  Box,
  FooterWrapper,
  Column,
  ColumnHeading,
  ColumnSubheading,
  FullWidthColumn,
  FooterContainer,
  Copyright,
  Policy,
} from "./footerComponent";
import icons from "../../assets/icons";

const Footer = () => {
  return (
    <Section backgroundColor="#1868B7">
      <Container>
        <Flex>
          <Left>
            <H2>Stay in the loop</H2>
            <P2 className="p2">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating OpenSea.
            </P2>
            <div className="inp-container">
              <Input type="text" placeholder="Your email address" />
              <button>Sign up</button>
            </div>
          </Left>
          <Right>
            <H2>Join the community</H2>
            <div className="right-img">
              <Box>
                <Twitter size={28} color="#ffffff" strokeWidth={3} />
              </Box>
              <Box>
                <Instagram size={28} color="#ffffff" strokeWidth={3} />
              </Box>
              <Box>
                <ClipboardX size={28} color="#ffffff" strokeWidth={3} />{" "}
              </Box>
              <Box>
                <Twitter size={28} color="#ffffff" strokeWidth={3} />
              </Box>
              <Box>
                <Instagram size={28} color="#ffffff" strokeWidth={3} />
              </Box>
              <Box>
                <ClipboardX size={28} color="#ffffff" strokeWidth={3} />{" "}
              </Box>
            </div>
          </Right>
        </Flex>
        <div style={{ height: "1px", background: "#ccc" }} />
      </Container>

      <FooterWrapper>
        <FullWidthColumn>
          {/* Full Width Column 1: Logo and About */}
          <ColumnHeading>
            <img src={icons.openseaWhite} alt="" className="img" />
          </ColumnHeading>
          <ColumnHeading>OpenSea</ColumnHeading>
          <ColumnSubheading>
            <P2 className="p2">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </P2>
          </ColumnSubheading>
        </FullWidthColumn>
        <Column>
          {/* Column 2: Marketplace */}
          <ColumnHeading>Marketplace</ColumnHeading>
          <ColumnSubheading>Art</ColumnSubheading>
          <ColumnSubheading>Gaming</ColumnSubheading>
          <ColumnSubheading>Memberships</ColumnSubheading>
          <ColumnSubheading>PFPs</ColumnSubheading>
          <ColumnSubheading>Photography</ColumnSubheading>
        </Column>
        <Column>
          {/* Column 3: My Account */}
          <ColumnHeading>My Account</ColumnHeading>
          <ColumnSubheading>Profile</ColumnSubheading>
          <ColumnSubheading>Favorites</ColumnSubheading>
          <ColumnSubheading>Watchlist</ColumnSubheading>
          <ColumnSubheading>Studio</ColumnSubheading>
          <ColumnSubheading>Settings Pro</ColumnSubheading>
          <ColumnHeading style={{ marginTop: "5rem" }}>Stats</ColumnHeading>
          <ColumnSubheading>Rankings</ColumnSubheading>
          <ColumnSubheading>Activity</ColumnSubheading>
        </Column>
        <Column>
          {/* Column 4: Resources */}
          <ColumnHeading>Resources</ColumnHeading>
          <ColumnSubheading>Blog</ColumnSubheading>
          <ColumnSubheading>Learn</ColumnSubheading>
          <ColumnSubheading>Help center</ColumnSubheading>
          <ColumnSubheading>Community standards</ColumnSubheading>
          <ColumnSubheading>Taxes</ColumnSubheading>
          <ColumnSubheading>Partners</ColumnSubheading>
          <ColumnSubheading>Developer platform</ColumnSubheading>
          <ColumnSubheading>Platform status</ColumnSubheading>
        </Column>
        <Column>
          {/* Column 5: Company */}
          <ColumnHeading>Company</ColumnHeading>
          <ColumnSubheading>About</ColumnSubheading>
          <ColumnSubheading>Careers</ColumnSubheading>
          <ColumnSubheading>Ventures</ColumnSubheading>
          <ColumnHeading style={{ marginTop: "3rem" }}>Stats</ColumnHeading>
          <ColumnSubheading>What is an NFT?</ColumnSubheading>
          <ColumnSubheading>How to buy an NFT</ColumnSubheading>
          <ColumnSubheading>What are NFT drops?</ColumnSubheading>
          <ColumnSubheading>How to sell an NFT using OpenSea</ColumnSubheading>
          <ColumnSubheading>What is a crypto wallet?</ColumnSubheading>
          <ColumnSubheading>What is cryptocurrency?</ColumnSubheading>
          <ColumnSubheading>What are blockchain gas fees?</ColumnSubheading>
          <ColumnSubheading>What is a blockchain?</ColumnSubheading>
          <ColumnSubheading>What is web3?</ColumnSubheading>
          <ColumnSubheading>How to stay protected in web3</ColumnSubheading>
        </Column>
      </FooterWrapper>
      <div style={{ height: "1px", background: "#ccc" }} />
      <FooterContainer>
        <Copyright>© 2018 - 2023 Ozone Networks, Inc</Copyright>
        <Policy>
          <P2>Privacy Policy</P2>
          <P2>Terms of Service</P2>
        </Policy>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
