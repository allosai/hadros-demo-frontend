import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./pie.css";

const Pie = (props) => {
  ChartJS.register(ArcElement);
  const data = {
    labels: ["0x00....v19", "0x0010..8v19"],

    datasets: [
      {
        cutout: "80%",
        data: [props.prob, 1 - props.prob],
        backgroundColor: ["#0d8f8f50", "transparent"],
        borderColor: ["#0d8f8f", "#0d8f8f"],
        borderWidth: 2,
        borderJoinStyle: "round",
        borderRadius: 0,
        hoverBorderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const roundToN = (num, n) => {
    return Math.round(num * Math.pow(10, n)) / Math.pow(10, n);
}

  return (
    <div className="ret-main">
      <div className="pie-main">
        <div className="inner-text">
          <div className="p-box">
            P<sub>({props.text})</sub>
          </div>
          <div className="number">{roundToN(props.prob, 5)}</div>
        </div>
        <Doughnut data={data} options={options} />
      </div>
      <div className="ret-table">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>{props.text}</th>
            </tr>{" "}
          </thead>
          <tbody>
            <tr>
              <td>probability</td>
              <td>{props.prob}</td>
            </tr>
            <tr>
              <td>ACE</td>
              <td>{1 - props.prob}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pie;
