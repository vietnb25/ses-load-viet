import {
  FacebookOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  RiseOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { DatePicker, Input } from "antd";
import React, { useState } from "react";

const FormReceive = (props) => {
  // check trống
  const [urlEmpty, setUrlEmpty] = useState(true);
  const [usernameEmpty, setUsernameEmpty] = useState(true);
  const [passwordEmpty, setPasswordEmpty] = useState(true);
  const [topicEmpty, setTopicEmpty] = useState(true);
  const [clientEmpty, setClientEmpty] = useState(true);
  const [typeSystemEmpty, setTypeSystemEmpty] = useState(true);
  const [typeDeviceEmpty, setTypeDeviceEmpty] = useState(true);
  const [codeEmpty, setCodeEmpty] = useState(true);
  const [messageTypeEmpty, setMessageTypeEmpty] = useState(true);
  const [dataEmpty, setDataEmpty] = useState(true);

  //Check ô input không lỗi khi chạy
  const [isUrlError, setIsUrlError] = useState(false);
  const [isUrlUsernameError, setIsUrlUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isTopicError, setIsTopicError] = useState(false);
  const [isClientError, setIsClientError] = useState(false);
  const [isTypeSystemError, setIsTypeSystemError] = useState(false);
  const [isTypeDeviceError, setIsTypeDeviceError] = useState(false);
  const [isCodeError, setIsCodeError] = useState(false);
  const [isDataError, setIsDataError] = useState(false);
  const [isMessageTypeError, setIsMessageTypeError] = useState(false);

  //
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClickButton = () => {
    // Đặt isButtonClicked thành true khi nút được nhấn
    setIsButtonClicked(true);

    // Kiểm tra giá trị của props.topic và đặt lại topicEmpty
    if (props.topic.trim() === "") {
      props.setToppic("");
    }
  };
  const isInputEmpty = (value) => (value ? value === "" : true);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Input
            className={`mt-2`}
            style={{
              width: "90%",
              border: isInputEmpty(props.url) ? "2px red solid" : "",
              borderRadius: isInputEmpty(props.url) ? "8px" : "",
            }}
            placeholder="tcp://localhost:1883"
            addonAfter={<RiseOutlined />}
            value={props.url}
            onChange={(event) => props.setUrl(event.target.value)}
          />

          <Input
            className={`mt-2 ${isUrlUsernameError ? "empty-input" : ""}`}
            style={{ width: "90%" }}
            placeholder="Username"
            addonAfter={<UserSwitchOutlined />}
            value={props.username}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setUsername(newValue);
              if (newValue.trim() === "") {
                setIsUrlUsernameError(true);
              } else {
                setIsUrlUsernameError(false);
              }
            }}
          />
          <Input
            style={{ width: "90%" }}
            placeholder="Password"
            type="password"
            addonAfter={<FieldNumberOutlined />}
            value={props.password}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setPassword(newValue);
              if (newValue.trim() === "") {
                setIsPasswordError(true);
              } else {
                setIsPasswordError(false);
              }
            }}
            className={`mt-2 ${isPasswordError ? "empty-input" : ""}`}
          />
          <Input
            style={{ width: "90%" }}
            addonAfter={<FieldStringOutlined />}
            placeholder="Client id"
            value={props.client}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setClient(newValue);
              if (newValue.trim() === "") {
                setIsClientError(true);
              } else {
                setIsClientError(false);
              }
            }}
            className={`mt-2 ${isClientError ? "empty-input" : ""}`}
          />
          <Input
            placeholder="Toppic"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.topic}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setToppic(newValue);
              if (newValue.trim() === "") {
                setIsButtonClicked(false); // Đặt lại isButtonClicked khi thay đổi giá trị input
              }
            }}
            className={`mt-2 ${
              isButtonClicked && props.topic.trim() === "" ? "empty-input" : ""
            }`}
          />
          <button onClick={handleClickButton}>Click Me</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Input
            style={{ width: "90%" }}
            placeholder="Type System"
            addonAfter={<FacebookOutlined />}
            value={props.typeSystem}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setTypeSystem(newValue);
              if (newValue.trim() === "") {
                setIsTypeSystemError(true);
              } else {
                setIsTypeSystemError(false);
              }
            }}
            className={`mt-2 ${isTypeSystemError ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Type Device"
            addonAfter={<FacebookOutlined />}
            value={props.typeDevice}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setTypeDevice(newValue);
              if (newValue.trim() === "") {
                setIsTypeDeviceError(true);
              } else {
                setIsTypeDeviceError(false);
              }
            }}
            className={`mt-2 ${isTypeDeviceError ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Code Function"
            addonAfter={<FacebookOutlined />}
            value={props.codeFunction}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCodeFunction(newValue);
              if (newValue.trim() === "") {
                setIsCodeError(true);
              } else {
                setIsCodeError(false);
              }
            }}
            className={`mt-2 ${isCodeError ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Message Type"
            addonAfter={<FacebookOutlined />}
            value={props.messageType}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setMessageType(newValue);
              if (newValue.trim() === "") {
                setIsMessageTypeError(true);
              } else {
                setIsMessageTypeError(false);
              }
            }}
            className={`mt-2 ${isMessageTypeError ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Data"
            addonAfter={<FacebookOutlined />}
            value={props.data}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setData(newValue);
              if (newValue.trim() === "") {
                setIsDataError(true);
              } else {
                setIsDataError(false);
              }
            }}
            className={`mt-2 ${isDataError ? "empty-input" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default FormReceive;
