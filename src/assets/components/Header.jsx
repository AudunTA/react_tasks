import React from "react";

function Header(props) {
  return (
    <div className="container-header">
      <h2>Header</h2>
      <p>{props.page}</p>
    </div>
  );
}

export default Header;
