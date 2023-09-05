import React from "react";

class MyClass extends React.Component {
  constructor() {
    super();

    this.state = { clickCount: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      bgColor: "yellow",
    };
  }

  handleClick() {
    console.log("Message received from main script");
    setTimeout(() => {
      for (let i = 0; i < 555555; i++) {
        console.log(i);
      }
      console.log("Posting message back to main script");
    }, 3000);
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
            Click to trigger worker
          </button>

          <button
            style={{ backgroundColor: this.state.bgColor, fontSize: "50px" }}
            onClick={this.colorChange}
          >
            Background colour change
          </button>
        </div>
      </>
    );
  }
}

export default MyClass;
