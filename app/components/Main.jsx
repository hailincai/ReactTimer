import React from "react";
import Navigation from "Navigation";

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div className="row">
        {
          /*
          the <screesize>-<size> can only scale up
          so if not specified the small size definition, then small will take full screen
          */
        }
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
