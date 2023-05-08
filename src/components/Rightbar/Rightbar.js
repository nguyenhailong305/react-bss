import "./rightbar.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["TV", "Washer", "Refrigerator", "Selling Fan"],
  datasets: [
    {
      label: "# of Votes",
      data: [3, 5, 5, 6],
      backgroundColor: [
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
      ],
      borderWidth: 1,
    },
  ],
};

const Rightbar = () => {
  return (
    <div className="right__container">
      <div className="right__table">
        <table className="my-table">
          <thead>
            <tr>
              <th>Device</th>
              <th>MAC Address</th>
              <th>IP</th>
              <th>Create Date</th>
              <th>Devices Consumption(Km/H)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dữ liệu 1</td>
              <td>Dữ liệu 2</td>
              <td>Dữ liệu 3</td>
              <td>Dữ liệu 4</td>
              <td>Dữ liệu 5</td>
            </tr>
            <tr>
              <td>Dữ liệu 6</td>
              <td>Dữ liệu 7</td>
              <td>Dữ liệu 8</td>
              <td>Dữ liệu 9</td>
              <td>Dữ liệu 10</td>
            </tr>
            <tr>
              <td>Dữ liệu 1</td>
              <td>Dữ liệu 2</td>
              <td>Dữ liệu 3</td>
              <td>Dữ liệu 4</td>
              <td>Dữ liệu 5</td>
            </tr>
            <tr>
              <td>Dữ liệu 1</td>
              <td>Dữ liệu 2</td>
              <td>Dữ liệu 3</td>
              <td>Dữ liệu 4</td>
              <td>Dữ liệu 5</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Dữ liệu 5</td>
            </tr>
            {/* Thêm các dòng khác tương tự */}
          </tbody>
        </table>
      </div>

      <div className="right__section">
        <div className="block__chart">
          <h2 className="block__title">Power Consumption</h2>
          <Doughnut data={data} responsive={true} />
        </div>
        <div className="block__input">
          <div className="input">
            <Input type="text" placeholder="Enter your name" size="larger" />
            <Input type="text" placeholder="Enter your name" size="larger" />
            <Input type="text" placeholder="Enter your name" size="larger" />
            <Button small>ADD DEVICE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
