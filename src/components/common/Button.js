import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <>
    <button className="btn btn-primary active buttonstyle">
    {props.title}
  </button>
  </>
  );
}

export default Button;
