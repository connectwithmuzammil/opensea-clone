import React, { useState } from "react";
import { Section } from "./Banner";
import Tab from "./Tab";
import styled from "styled-components";
import { layout } from "../helpers/constant";
import { H3, H4, H5 } from "./Typography";
import icons from "../assets/icons";

const { mobile, tablet, laptop, desktop } = layout;

const Table = () => {
  const [activeTab, setActiveTab] = useState(1);

  const trendingTab = [
    { id: 1, label: "Trending" },
    { id: 2, label: "Top" },
  ];
  const hourTab = [
    {
      id: 3,
      label: "1H",
    },
    {
      id: 4,
      label: "6H",
    },
    {
      id: 5,
      label: "24H",
    },
    {
      id: 6,
      label: "7d",
    },
  ];
  const viewAll = [
    {
      id: 7,
      label: "View All",
    },
  ];
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const Sec = styled(Section)`
    @media only screen and (min-width: ${mobile}) {
    }
    @media only screen and (min-width: ${tablet}) {
    }
    @media only screen and (min-width: ${laptop}) {
      padding-block: 2vw;
    }
    @media only screen and (min-width: ${desktop}) {
    }
    .tr {
      display: flex;
      gap: 100px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  `;

  const Table = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px; /* Adjust the gap as needed */

    @media only screen and (max-width: ${laptop}) {
      grid-template-columns: 1fr; /* Change to a single column on smaller screens */
    }
  `;

  const TableCell = styled.div`
    display: flex;
    /* gap: 16px; */
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid #ccc; */
    padding: 10px 18px;

    .collection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
  `;
  const TableHeading = styled(TableCell)`
    color: #979797;
    border-bottom: 1px solid #dddbdb; // Add this line to create a border

    @media only screen and (max-width: ${laptop}) {
      &:nth-child(2) {
        display: none;
      }
    }
  `;
  const TabContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  //   const InsideTab = styled.div`
  //     display: flex;
  //     gap: 16px;
  //   `;
  const sampleData = [
    {
      id: 1,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$100",
      volume: "20 ETH",
    },
    {
      id: 2,
      image: icons.blockGame2,
      name: "Trademark by j",
      floorPrice: "$75",
      volume: "15 ETH",
    },
    {
      id: 3,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$120",
      volume: "30 ETH",
    },
    {
      id: 4,
      image: icons.blockGame2,
      name: "Trademark by j",
      floorPrice: "$90",
      volume: "25 ETH",
    },
    {
      id: 5,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$150",
      volume: "18 ETH",
    },
    {
      id: 6,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$80",
      volume: "22 ETH",
    },
    {
      id: 7,
      image: icons.blockGame2,
      name: "Trademark by j",
      floorPrice: "$110",
      volume: "28 ETH",
    },
    {
      id: 8,
      image: icons.blockGame2,
      name: "Trademark by j",
      floorPrice: "$95",
      volume: "21 ETH",
    },
    {
      id: 9,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$130",
      volume: "35 ETH",
    },
    {
      id: 10,
      image: icons.blockGame1,
      name: "Trademark by j",
      floorPrice: "$130",
      volume: "35 ETH",
    },
  ];

  return (
    <Sec backgroundColor="white">
      <TabContainer>
        <Tab
          tabs={trendingTab}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {/* <InsideTab> */}
        <Tab
          tabs={hourTab}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {/* <Tab
            tabs={viewAll}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          /> */}
        {/* </InsideTab> */}
      </TabContainer>
      {/* <tr className="tr">
        <th className="th">Rank</th>
        <th>Collections</th>
        <th>Floor Price</th>
        <th>Volume</th>
      </tr> */}
      <Table>
        <TableHeading>
          <span>Rank</span>
          <span>Collection</span>
          <span>Floor Price</span>
          <span>Volume</span>
        </TableHeading>

        <TableHeading>
          <span>Rank</span>
          <span>Collection</span>
          <span>Floor Price</span>
          <span>Volume</span>
        </TableHeading>
        {sampleData.map((item, index) => {
          return (
            <TableCell key={index}>
              <H5>{item.id}</H5>
              <div className="collection">
                <img
                  src={item.image}
                  width="55px"
                  height="55px"
                  style={{ borderRadius: "9px" }}
                />
                {item.name}
              </div>
              <H3 style={{ fontWeight: "500" }}>{item.floorPrice}</H3>
              <H3 style={{ fontWeight: "500" }}>{item.volume}</H3>
            </TableCell>
          );
        })}
      </Table>
    </Sec>
  );
};

export default Table;
