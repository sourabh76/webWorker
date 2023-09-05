import React from "react";
import worker_script from "./worker.js";

class MyClass extends React.Component {
  constructor() {
    super();

    this.state = { clickCount: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      bgColor: "yellow",
    };
  }

  componentDidMount() {
    this.worker = new Worker(worker_script);
    this.worker.onmessage = (ev) => {
      console.log("got data back from worker");
      console.log(ev);
    };
  }

  handleClick() {
    console.log("Posting message");
    this.worker.postMessage("Button clicked");
  }

  colorChange = (e) => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    this.setState({
      bgColor: "rgb(" + red + ", " + green + ", " + blue + ")",
    });
  };

  render() {
    return (
      <>
        <div id="button">
          <button onClick={this.handleClick} style={{ fontSize: "50px" }}>
            Click to trigger
          </button>

          <button
            onClick={this.colorChange}
            style={{ backgroundColor: this.state.bgColor, fontSize: "50px" }}
          >
            Background colour change
          </button>
        </div>
      </>
    );
  }
}

export default MyClass;
