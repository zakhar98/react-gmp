import React from "react";
import Tabs from "../../components/Tabs/Tabs.js"

const GenreFilterTabs = [
  {
    name: 'All',
  },   {
    name: 'Documentary',
  },   {
    name: 'Comedy',
  },   {
    name: 'Horror',
  },   {
    name: 'Crime',
  }, 
];

export default function GenreFilter() {
  return (
    <>
      <Tabs
        tabs={GenreFilterTabs}
        onClickTabItem={()=>{}}
      />
    </>
  );
}
