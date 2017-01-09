import React from "react";
import Navigation from "Navigation";

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  );
};

export default Main;
