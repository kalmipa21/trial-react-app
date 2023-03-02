import React from "react";
import { useState } from "react";
import propTypes from "prop-types";
function FComponent({ name, message }) {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    // console.log("Halo");
    setCount(count + 1);
  };
  return (
    <>
      <h1>
        Hello Arif {name} {message}
      </h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Kurang
      </button>
      <span style={{ margin: "0 8px" }}>{count}</span>
      <button onClick={handlePlus}>Tambah</button>
    </>
  );
}
FComponent.defaultProps = {
  name: "Your name",
};

FComponent.propTypes = {
  message: propTypes.string.isRequired,
};
export default FComponent;
