import {
  FacebookOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  RiseOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { DatePicker, Empty, Input } from "antd";
import React, { useState } from "react";

const FormReceive2 = (props) => {
  const [countryEmpty, setCountryEmpty] = useState(true);
  const [provinceEmpty, setProvinceEmpty] = useState(true);
  const [codeCustomerEmtpy, setCodeCustomerEmpty] = useState(true);
  const [codeProjectEmpty, setCodeProjectEmpty] = useState(true);
  const [a1Empty, setA1Empty] = useState(true);
  const [a2Empty, setA2Empty] = useState(true);
  const [a3Empty, setA3Empty] = useState(true);
  const [a4Empty, setA4Empty] = useState(true);
  const [a5Empty, setA5Empty] = useState(true);
  const [crcEmpty, setCrcEmpty] = useState(true);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Input
            className={`mt-2 ${countryEmpty ? "empty-input" : ""}`}
            style={{ width: "90%" }}
            placeholder="Country"
            addonAfter={<RiseOutlined />}
            value={props.country}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCountry(newValue);
              setCountryEmpty(newValue.trim() === "");
            }}
          />
          <Input
            className={`mt-2 ${provinceEmpty ? "empty-input" : ""}`}
            style={{ width: "90%" }}
            placeholder="Province"
            addonAfter={<UserSwitchOutlined />}
            value={props.province}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setProvince(newValue);
              setProvinceEmpty(newValue.trim() === "");
            }}
          />
          <Input
            style={{ width: "90%" }}
            placeholder="Code customer"
            addonAfter={<FieldNumberOutlined />}
            value={props.codeCustomer}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCodeCustomer(newValue);
              setCodeCustomerEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${codeCustomerEmtpy ? "empty-input" : ""}`}
          />
          <Input
            style={{ width: "90%" }}
            addonAfter={<FieldStringOutlined />}
            placeholder="Code project"
            value={props.codeProject}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCodeProject(newValue);
              setCodeProjectEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${codeProjectEmpty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="A1"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.a1}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setA1(newValue);
              setA1Empty(newValue.trim() === "");
            }}
            className={`mt-2 ${a1Empty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="A2"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.a2}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setA2(newValue);
              setA2Empty(newValue.trim() === "");
            }}
            className={`mt-2 ${a2Empty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="A3"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.a3}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setA3(newValue);
              setA3Empty(newValue.trim() === "");
            }}
            className={`mt-2 ${a3Empty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="A4"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.a4}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setA4(newValue);
              setA4Empty(newValue.trim() === "");
            }}
            className={`mt-2 ${a4Empty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="A5"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.a5}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setA5(newValue);
              setA5Empty(newValue.trim() === "");
            }}
            className={`mt-2 ${a5Empty ? "empty-input" : ""}`}
          />
          <Input
            placeholder="CRC"
            style={{ width: "90%" }}
            addonAfter={<FacebookOutlined />}
            value={props.crc}
            onChange={(event) => {
              const newValue = event.target.value;
              props.setCrc(newValue);
              setCrcEmpty(newValue.trim() === "");
            }}
            className={`mt-2 ${crcEmpty ? "empty-input" : ""}`}
          />
        </div>
      </div>
    </>
  );
};

export default FormReceive2;
