import React from "react";
import PropTypes from 'prop-types';
import Tab from "./Tab/Tab.js";
import "./style.scss";

export default function Tabs({tabs, activeTabName, onClickTabItem}) {
  return (
    <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            name={tab.name}
            isActive={tab.name === activeTabName}
            onClick={onClickTabItem}
            key={tab.name}
          />
        ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTabName: PropTypes.string,
  onClickTabItem: PropTypes.func.isRequired,
};
