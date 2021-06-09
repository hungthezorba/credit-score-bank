import React, {useState} from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = (props: any) => {
    // Define basic config for the speedometer
    const minValue = 360;
    const maxValue = 850;
    const segmentNumber = 5;
    const segmentColors = ["#9fc54c", "#70b352", "#e9af4b", "#d25b30", "#a32330"];
    const segmentLabels: Array<object> = [
        {
        text: "Very Poor",
        position: "OUTSIDE",
        color: "#555"
        },
        {
        text: "Poor",
        position: "OUTSIDE",
        color: "#555"
        },
        {
        text: "Fair",
        position: "OUTSIDE",
        color: "#555"
        },
        {
        text: "Good",
        position: "OUTSIDE",
        color: "#555"
        },
        {
        text: "Excellent",
        position: "OUTSIDE",
        color: "#555"
        }
    ];

    // Take the value and define its color
    function textColor(value: number): string {
        const distance = (maxValue - minValue) / segmentNumber;
        const seg = Math.floor((value - minValue) / distance);
        return segmentColors[seg];
    }

    return (
      <>
        <ReactSpeedometer
          fluidWidth={true}
          minValue={minValue}
          maxValue={maxValue}
          segments={segmentNumber}
          value={props.resultScore}
          needleColor={"#434345"}
          needleHeightRatio={0.78}
          customSegmentLabels={segmentLabels}
          textColor={textColor(props.resultScore)}
          valueTextFontSize={"20px"}
          segmentColors={segmentColors}
        />
      </>
    );
};

export default Speedometer;