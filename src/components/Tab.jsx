import React from "react";
import styled from "styled-components";
import { H4 } from "./Typography";

const TabWrapper = styled.div`
  display: flex;
  background-color: #eee;
  /* border: 1px solid #ccc; */
  border-radius: 9px;
  /* width: 100%; */
  max-width: max-content;
  padding: 4px;
`;

const TabItem = styled.div`
  padding: 8px 12px;
  /* max-width: 120px; */
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#fff" : "#eee")};
  border-radius: ${({ active }) => (active ? "9px 9px 9px 9px" : "9px")};
  transition: background-color 0.3s, border-radius 0.3s;
  .h4 {
    font-weight: ${({ active }) => (active ? "normal" : "normal")};
    font-size: 1rem;
  }
`;

const Tab = ({ tabs, activeTab, onTabChange }) => {
  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          <H4 className="h4">{tab.label}</H4>
        </TabItem>
      ))}
    </TabWrapper>
  );
};

export default Tab;
