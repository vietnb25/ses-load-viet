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

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Input
            className={`mt-2 ${urlEmpty ? "empty-input" : ""}`}
            style={{ width: "90%" }}
            placeholder="tcp://localhost:1883"
            addonAfter={<RiseOutlined />}
            value={props.url}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setUrl(newValue);
              setUrlEmpty(newValue.trim() === "");
            }}
          />
          <Input
            className={`mt-2 ${usernameEmpty ? "empty-input" : ""}`}
            style={{ width: "90%" }}
            placeholder="Username"
            addonAfter={<UserSwitchOutlined />}
            value={props.username}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setUsername(newValue);
              setUsernameEmpty(newValue.trim() === "");
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
              setPasswordEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${passwordEmpty ? "empty-input" : ""}`}
          />
          <Input
            style={{ width: "90%" }}
            addonAfter={<FieldStringOutlined />}
            placeholder="Client id"
            value={props.client}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setClient(newValue);
              setClientEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${clientEmpty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="Toppic"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.topic}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setToppic(newValue);
              setTopicEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${topicEmpty ? "empty-input" : ""}`}
          />
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
              setTypeSystemEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${typeSystemEmpty ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Type Device"
            addonAfter={<FacebookOutlined />}
            value={props.typeDevice}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setTypeDevice(newValue);
              setTypeDeviceEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${typeDeviceEmpty ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Code Function"
            addonAfter={<FacebookOutlined />}
            value={props.codeFunction}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCodeFunction(newValue);
              setCodeEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${codeEmpty ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Message Type"
            addonAfter={<FacebookOutlined />}
            value={props.messageType}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setMessageType(newValue);
              setMessageTypeEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${messageTypeEmpty ? "empty-input" : ""}`}
          />

          <Input
            style={{ width: "90%" }}
            placeholder="Data"
            addonAfter={<FacebookOutlined />}
            value={props.data}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setData(newValue);
              setDataEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${dataEmpty ? "empty-input" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default FormReceive;
