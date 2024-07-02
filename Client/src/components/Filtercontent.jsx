import React, { Fragment } from "react";

export default function Filtercontent({ filterItems, menuItems, setFilter }) {
  return (
    <Fragment>
      {menuItems.map(category => (
        <button key={category} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </Fragment>
  );
}
