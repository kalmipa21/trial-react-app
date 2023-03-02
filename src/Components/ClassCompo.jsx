import React from "react";
import propTypes from "prop-types";

class ClassCompo extends React.Component {
  constructor(props) {
    super(props);
    console.log("Halo", props);
  }

  state = {
    count: 0,
  };
  handleTambah = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1 style={{ color: "red" }}>
          Sedang Belajar Class Component With : {this.props.mentor}{" "}
          {this.props.message}
        </h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
        <span style={{ margin: "0 8px" }}>{this.state.count}</span>
        <button onClick={this.handleTambah}>+</button>
      </>
    );
  }
}

ClassCompo.defaultProps = {
  mentor: "Your Mentor's Name",
};

ClassCompo.propTypes = {
  message: propTypes.string.isRequired,
};
export default ClassCompo;
