import React from "react";
import Collection from "../../components/Collection";
import { Section } from "../../components";
import styled from "styled-components";
import { layout } from "../../helpers/constant";
import {
  collectionData1,
  topCollector,
  art,
  gaming,
  membership,
} from "./artComponents";

const { mobile, tablet, laptop, desktop, mobileLarge } = layout;

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

const Arts = () => {
  return (
    <SEC backgroundColor="white">
      <Collection title="Notable collections" data={collectionData1} />
      <Collection title="Top Collector Buys Today" data={topCollector} />
      <Collection title="Trending in Art" data={art} />
      <Collection title="Trending in Gaming" data={gaming} />
      <Collection title="Trending in Memberships" data={membership} />
      <Collection title="Trending in PFPs" data={collectionData1} />
      <Collection title="Trending in Photography" data={collectionData1} />
      <Collection title="NFT 101" data={collectionData1} />
      <Collection title="Explore Categories" data={collectionData1} />
    </SEC>
  );
};

export default Arts;
