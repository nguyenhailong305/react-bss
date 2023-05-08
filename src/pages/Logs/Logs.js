import React, { useState } from "react";
import Leftbar from "../../components/Leftbar/Leftbar";
import "./logs.scss";
import Input from "../../common/input/Input";
import Button from "../../common/button/Button";

const Logs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(5);

  // Mảng dữ liệu logs
  const logsData = [
    {
      device: "Dữ liệu 1",
      macAddress: "Dữ liệu 2",
      ip: "Dữ liệu 3",
      createDate: "Dữ liệu 4",
      consumption: "Dữ liệu 5",
    },
    {
      device: "Dữ liệu 6",
      macAddress: "Dữ liệu 7",
      ip: "Dữ liệu 8",
      createDate: "Dữ liệu 9",
      consumption: "Dữ liệu 10",
    },
    {
      device: "Dữ liệu 6",
      macAddress: "Dữ liệu 7",
      ip: "Dữ liệu 8",
      createDate: "Dữ liệu 9",
      consumption: "Dữ liệu 10",
    },
    {
      device: "Dữ liệu 6",
      macAddress: "Dữ liệu 7",
      ip: "Dữ liệu 8",
      createDate: "Dữ liệu 9",
      consumption: "Dữ liệu 10",
    },
    {
      device: "Dữ liệu 6",
      macAddress: "Dữ liệu 7",
      ip: "Dữ liệu 8",
      createDate: "Dữ liệu 9",
      consumption: "Dữ liệu 10",
    },
    {
      device: "Dữ liệu 6",
      macAddress: "Dữ liệu 7",
      ip: "Dữ liệu 8",
      createDate: "Dữ liệu 9",
      consumption: "Dữ liệu 10",
    },
    // Thêm các dòng khác tương tự
  ];
  const totalPages = Math.ceil(logsData.length / logsPerPage);

  // Tính toán index của logs hiện tại
  const indexOfLastLog = currentPage * logsPerPage;
  const indexOfFirstLog = indexOfLastLog - logsPerPage;
  const currentLogs = logsData.slice(indexOfFirstLog, indexOfLastLog);

  // Xử lý sự kiện khi chuyển trang
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tạo các nút phân trang
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Leftbar />
      <div className="logs__container">
        <div className="logs__title">
          <h2>Action Logs</h2>
          <div className="logs__search">
            <Input type="text" placeholder="search" size="small" />
            <Button smaller>Search</Button>
          </div>
        </div>
        <div className="logs__table">
          <table className="my__logs">
            <thead>
              <tr>
                <th>Device</th>
                <th>MAC Address</th>
                <th>Create Date</th>
                <th>Devices Consumption(Km/H)</th>
              </tr>
            </thead>
            <tbody>
              {currentLogs.map((log, index) => (
                <tr key={index}>
                  <td>{log.device}</td>
                  <td>{log.macAddress}</td>
                  <td>{log.ip}</td>
                  <td>{log.consumption}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>Dữ liệu 5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <ul>
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : ""}
              >
                <a
                  href="#"
                  onClick={() => handlePageClick(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Logs;
