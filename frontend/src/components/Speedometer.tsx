import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = (
  props: {
    minValue: number,
    maxValue: number,
    segmentNumber: number,
    segmentColors: string[],
    resultScore: number
  }) => {
    // Define basic config for the speedometer
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

    return (
      <>
        <ReactSpeedometer
          fluidWidth={true}
          minValue={props.minValue}
          maxValue={props.maxValue}
          segments={props.segmentNumber}
          value={props.resultScore}
          needleColor={"#434345"}
          needleHeightRatio={0.78}
          currentValueText={""}
          customSegmentLabels={segmentLabels}
          segmentColors={props.segmentColors}
        />
      </>
    );
};

export default Speedometer;