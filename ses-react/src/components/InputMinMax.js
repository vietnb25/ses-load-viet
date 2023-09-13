import { Input } from "antd";
import React from "react";

const InputMinMax = (props) => {
  const validateInput = (value, min, max) => {
    if (value < min || value > max) {
      return "error"; // Trả về 'error' nếu có lỗi validate
    }
    return ""; // Không có lỗi validate
  };

  const statusMin = validateInput(props.minValue, props.minX, props.maxX);

  // Kiểm tra validate cho ô input maxValue
  const statusMax = validateInput(props.maxValue, props.minY, props.maxY);

  return (
    <div className={props.className}>
      <div className="row">
        <span className="ms-4 col-3" style={{ fontWeight: "bold" }}>
          {props.title}
        </span>
        <Input
          status={statusMin} // Sử dụng trạng thái được tính toán
          className="ms-3"
          type="number"
          bordered
          style={{
            width: "100px",
            borderColor: statusMin === "error" ? "red" : "",
          }}
          min={props.minX}
          max={props.maxX}
          value={props.minValue}
          onChange={(event) => props.setMinValue(event.target.value)}
        />
        {"~"}
        <Input
          status={statusMax} // Sử dụng trạng thái được tính toán
          type="number"
          bordered
          style={{
            width: "100px",
            borderColor: statusMax === "error" ? "red" : "",
          }}
          value={props.maxValue}
          min={props.minY}
          max={props.maxY}
          onChange={(event) => props.setMaxValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default InputMinMax;
