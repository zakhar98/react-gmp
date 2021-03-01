import React from "react";
import PropTypes from 'prop-types';
import Tab from "./Tab/Tab.js";
import "./style.scss";

export default function Tabs({tabs, activeTabIndex, onClickTabItem}) {
  return (
    <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            name={tab.name}
            tabIndex={i}
            isActive={activeTabIndex ? i === activeTabIndex: i === 0}
            onClick={onClickTabItem}
            key={i}
          />
        ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTabIndex: PropTypes.number,
  onClickTabItem: PropTypes.func.isRequired,
};
