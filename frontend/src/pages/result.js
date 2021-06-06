import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import "./result.css";

export default class ResultPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        value: {
            analysisValue: 700,

        }
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            width: "500px",
            height: "300px",
            background: "#fff",
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ReactSpeedometer
            fluidWidth={true}
            minValue={360}
            maxValue={850}
            value={this.state.value.analysisValue}
            needleColor="black"
            startColor={"#81FF6C"}
            endColor={"#9A0900"}
          />
        </div>
      </div>
    );}
}