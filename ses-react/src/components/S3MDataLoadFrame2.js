import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputMinMax from "./InputMinMax";
import S3MDataLoadFrame2Entity from "../entities/S3MDataLoadFrame2Entity";
import { sendmessageframe2 } from "../service/S3MDataLoadFrame2Service";
import FormReceive from "./FormReceive";
import FormReceive2 from "./FormReceive2";
import Context from "../store/Context";
import { updatestatus2 } from "../store/Actions";

export default function S3MDataLoadFrame2(props) {
  function formatDateToDDMMYYYYHHMMSS(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const [state, dispatch] = useContext(Context);
  const [timerId, setTimerId] = useState(null);
  const [disabled, setDisable] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [frequency, setFrequency] = useState(3000);

  const handelChangeInputTime = (event) => {
    if (event.target.value === "") {
      setFrequency(3000);
    }
    setFrequency(event.target.value);
  };
  const handelCkickStop = () => {
    updateStatus({ key: props.data, status: false });
    clearInterval(timerId);
  };
  const random = (min, max) => {
    return parseFloat(
      Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
    );
  };
  const handelCkickRun = () => {
    if (validationForm() === true) {
      updateStatus({ key: props.data, status: true });
      const timer = setInterval(() => {
        const e = new S3MDataLoadFrame2Entity(
          Math.floor(random(1, 10000)),
          random(minIAH1, maxIAH1).toFixed(2),
          random(minIAH2, maxIAH2).toFixed(2),
          random(minIAH3, maxIAH3).toFixed(2),
          random(minIAH4, maxIAH4).toFixed(2),
          random(minIAH5, maxIAH5).toFixed(2),
          random(minIAH6, maxIAH6).toFixed(2),
          random(minIAH7, maxIAH7).toFixed(2),
          random(minIAH8, maxIAH8).toFixed(2),
          random(minIAH9, maxIAH9).toFixed(2),
          random(minIAH10, maxIAH10).toFixed(2),
          random(minIAH11, maxIAH11).toFixed(2),
          random(minIAH12, maxIAH12).toFixed(2),
          random(minIAH13, maxIAH13).toFixed(2),
          random(minIAH14, maxIAH14).toFixed(2),
          random(minIAH15, maxIAH15).toFixed(2),
          random(minIAH16, maxIAH16).toFixed(2),
          random(minIAH17, maxIAH17).toFixed(2),
          random(minIAH18, maxIAH18).toFixed(2),
          random(minIAH19, maxIAH19).toFixed(2),
          random(minIAH20, maxIAH20).toFixed(2),
          random(minIAH21, maxIAH21).toFixed(2),
          random(minIAH22, maxIAH22).toFixed(2),
          random(minIAH23, maxIAH23).toFixed(2),
          random(minIAH24, maxIAH24).toFixed(2),
          random(minIAH25, maxIAH25).toFixed(2),
          random(minIAH26, maxIAH26).toFixed(2),
          random(minIAH27, maxIAH27).toFixed(2),
          random(minIAH28, maxIAH28).toFixed(2),
          random(minIAH29, maxIAH29).toFixed(2),
          random(minIAH30, maxIAH30).toFixed(2),
          random(minIAH31, maxIAH31).toFixed(2),
          random(minIBH1, maxIBH1).toFixed(2),
          random(minIBH2, maxIBH2).toFixed(2),
          random(minIBH3, maxIBH3).toFixed(2),
          random(minIBH4, maxIBH4).toFixed(2),
          random(minIBH5, maxIBH5).toFixed(2),
          random(minIBH6, maxIBH6).toFixed(2),
          random(minIBH7, maxIBH7).toFixed(2),
          random(minIBH8, maxIBH8).toFixed(2),
          random(minIBH9, maxIBH9).toFixed(2),
          random(minIBH10, maxIBH10).toFixed(2),
          random(minIBH11, maxIBH11).toFixed(2),
          random(minIBH12, maxIBH12).toFixed(2),
          random(minIBH13, maxIBH13).toFixed(2),
          random(minIBH14, maxIBH14).toFixed(2),
          random(minIBH15, maxIBH15).toFixed(2),
          random(minIBH16, maxIBH16).toFixed(2),
          random(minIBH17, maxIBH17).toFixed(2),
          random(minIBH18, maxIBH18).toFixed(2),
          random(minIBH19, maxIBH19).toFixed(2),
          random(minIBH20, maxIBH20).toFixed(2),
          random(minIBH21, maxIBH21).toFixed(2),
          random(minIBH22, maxIBH22).toFixed(2),
          random(minIBH23, maxIBH23).toFixed(2),
          random(minIBH24, maxIBH24).toFixed(2),
          random(minIBH25, maxIBH25).toFixed(2),
          random(minIBH26, maxIBH26).toFixed(2),
          random(minIBH27, maxIBH27).toFixed(2),
          random(minIBH28, maxIBH28).toFixed(2),
          random(minIBH29, maxIBH29).toFixed(2),
          random(minIBH30, maxIBH30).toFixed(2),
          random(minIBH31, maxIBH31).toFixed(2),
          random(minICH1, maxICH1).toFixed(2),
          random(minICH2, maxICH2).toFixed(2),
          random(minICH3, maxICH3).toFixed(2),
          random(minICH4, maxICH4).toFixed(2),
          random(minICH5, maxICH5).toFixed(2),
          random(minICH6, maxICH6).toFixed(2),
          random(minICH7, maxICH7).toFixed(2),
          random(minICH8, maxICH8).toFixed(2),
          random(minICH9, maxICH9).toFixed(2),
          random(minICH10, maxICH10).toFixed(2),
          random(minICH11, maxICH11).toFixed(2),
          random(minICH12, maxICH12).toFixed(2),
          random(minICH13, maxICH13).toFixed(2),
          random(minICH14, maxICH14).toFixed(2),
          random(minICH15, maxICH15).toFixed(2),
          random(minICH16, maxICH16).toFixed(2),
          random(minICH17, maxICH17).toFixed(2),
          random(minICH18, maxICH18).toFixed(2),
          random(minICH19, maxICH19).toFixed(2),
          random(minICH20, maxICH20).toFixed(2),
          random(minICH21, maxICH21).toFixed(2),
          random(minICH22, maxICH22).toFixed(2),
          random(minICH23, maxICH23).toFixed(2),
          random(minICH24, maxICH24).toFixed(2),
          random(minICH25, maxICH25).toFixed(2),
          random(minICH26, maxICH26).toFixed(2),
          random(minICH27, maxICH27).toFixed(2),
          random(minICH28, maxICH28).toFixed(2),
          random(minICH29, maxICH29).toFixed(2),
          random(minICH30, maxICH30).toFixed(2),
          random(minICH31, maxICH31).toFixed(2),
          random(minVABH1, maxVABH1).toFixed(2),
          random(minVABH2, maxVABH2).toFixed(2),
          random(minVABH3, maxVABH3).toFixed(2),
          random(minVABH4, maxVABH4).toFixed(2),
          random(minVABH5, maxVABH5).toFixed(2),
          random(minVABH6, maxVABH6).toFixed(2),
          random(minVABH7, maxVABH7).toFixed(2),
          random(minVABH8, maxVABH8).toFixed(2),
          random(minVABH9, maxVABH9).toFixed(2),
          random(minVABH10, maxVABH10).toFixed(2),
          random(minVABH11, maxVABH11).toFixed(2),
          random(minVABH12, maxVABH12).toFixed(2),
          random(minVABH13, maxVABH13).toFixed(2),
          random(minVABH14, maxVABH14).toFixed(2),
          random(minVABH15, maxVABH15).toFixed(2),
          random(minVABH16, maxVABH16).toFixed(2),
          random(minVABH17, maxVABH17).toFixed(2),
          random(minVABH18, maxVABH18).toFixed(2),
          random(minVABH19, maxVABH19).toFixed(2),
          random(minVABH20, maxVABH20).toFixed(2),
          random(minVABH21, maxVABH21).toFixed(2),
          random(minVABH22, maxVABH22).toFixed(2),
          random(minVABH23, maxVABH23).toFixed(2),
          random(minVABH24, maxVABH24).toFixed(2),
          random(minVABH25, maxVABH25).toFixed(2),
          random(minVABH26, maxVABH26).toFixed(2),
          random(minVABH27, maxVABH27).toFixed(2),
          random(minVABH28, maxVABH28).toFixed(2),
          random(minVABH29, maxVABH29).toFixed(2),
          random(minVABH30, maxVABH30).toFixed(2),
          random(minVABH31, maxVABH31).toFixed(2),
          random(minVBCH1, maxVBCH1).toFixed(2),
          random(minVBCH2, maxVBCH2).toFixed(2),
          random(minVBCH3, maxVBCH3).toFixed(2),
          random(minVBCH4, maxVBCH4).toFixed(2),
          random(minVBCH5, maxVBCH5).toFixed(2),
          random(minVBCH6, maxVBCH6).toFixed(2),
          random(minVBCH7, maxVBCH7).toFixed(2),
          random(minVBCH8, maxVBCH8).toFixed(2),
          random(minVBCH9, maxVBCH9).toFixed(2),
          random(minVBCH10, maxVBCH10).toFixed(2),
          random(minVBCH11, maxVBCH11).toFixed(2),
          random(minVBCH12, maxVBCH12).toFixed(2),
          random(minVBCH13, maxVBCH13).toFixed(2),
          random(minVBCH14, maxVBCH14).toFixed(2),
          random(minVBCH15, maxVBCH15).toFixed(2),
          random(minVBCH16, maxVBCH16).toFixed(2),
          random(minVBCH17, maxVBCH17).toFixed(2),
          random(minVBCH18, maxVBCH18).toFixed(2),
          random(minVBCH19, maxVBCH19).toFixed(2),
          random(minVBCH20, maxVBCH20).toFixed(2),
          random(minVBCH21, maxVBCH21).toFixed(2),
          random(minVBCH22, maxVBCH22).toFixed(2),
          random(minVBCH23, maxVBCH23).toFixed(2),
          random(minVBCH24, maxVBCH24).toFixed(2),
          random(minVBCH25, maxVBCH25).toFixed(2),
          random(minVBCH26, maxVBCH26).toFixed(2),
          random(minVBCH27, maxVBCH27).toFixed(2),
          random(minVBCH28, maxVBCH28).toFixed(2),
          random(minVBCH29, maxVBCH29).toFixed(2),
          random(minVBCH30, maxVBCH30).toFixed(2),
          random(minVBCH31, maxVBCH31).toFixed(2),
          random(minVCAH1, maxVCAH1).toFixed(2),
          random(minVCAH2, maxVCAH2).toFixed(2),
          random(minVCAH3, maxVCAH3).toFixed(2),
          random(minVCAH4, maxVCAH4).toFixed(2),
          random(minVCAH5, maxVCAH5).toFixed(2),
          random(minVCAH6, maxVCAH6).toFixed(2),
          random(minVCAH7, maxVCAH7).toFixed(2),
          random(minVCAH8, maxVCAH8).toFixed(2),
          random(minVCAH9, maxVCAH9).toFixed(2),
          random(minVCAH10, maxVCAH10).toFixed(2),
          random(minVCAH11, maxVCAH11).toFixed(2),
          random(minVCAH12, maxVCAH12).toFixed(2),
          random(minVCAH13, maxVCAH13).toFixed(2),
          random(minVCAH14, maxVCAH14).toFixed(2),
          random(minVCAH15, maxVCAH15).toFixed(2),
          random(minVCAH16, maxVCAH16).toFixed(2),
          random(minVCAH17, maxVCAH17).toFixed(2),
          random(minVCAH18, maxVCAH18).toFixed(2),
          random(minVCAH19, maxVCAH19).toFixed(2),
          random(minVCAH20, maxVCAH20).toFixed(2),
          random(minVCAH21, maxVCAH21).toFixed(2),
          random(minVCAH22, maxVCAH22).toFixed(2),
          random(minVCAH23, maxVCAH23).toFixed(2),
          random(minVCAH24, maxVCAH24).toFixed(2),
          random(minVCAH25, maxVCAH25).toFixed(2),
          random(minVCAH26, maxVCAH26).toFixed(2),
          random(minVCAH27, maxVCAH27).toFixed(2),
          random(minVCAH28, maxVCAH28).toFixed(2),
          random(minVCAH29, maxVCAH29).toFixed(2),
          random(minVCAH30, maxVCAH30).toFixed(2),
          random(minVCAH31, maxVCAH31).toFixed(2),

          random(minVANH1, maxVANH1).toFixed(2),
          random(minVANH2, maxVANH2).toFixed(2),
          random(minVANH3, maxVANH3).toFixed(2),
          random(minVANH4, maxVANH4).toFixed(2),
          random(minVANH5, maxVANH5).toFixed(2),
          random(minVANH6, maxVANH6).toFixed(2),
          random(minVANH7, maxVANH7).toFixed(2),
          random(minVANH8, maxVANH8).toFixed(2),
          random(minVANH9, maxVANH9).toFixed(2),
          random(minVANH10, maxVANH10).toFixed(2),
          random(minVANH11, maxVANH11).toFixed(2),
          random(minVANH12, maxVANH12).toFixed(2),
          random(minVANH13, maxVANH13).toFixed(2),
          random(minVANH14, maxVANH14).toFixed(2),
          random(minVANH15, maxVANH15).toFixed(2),
          random(minVANH16, maxVANH16).toFixed(2),
          random(minVANH17, maxVANH17).toFixed(2),
          random(minVANH18, maxVANH18).toFixed(2),
          random(minVANH19, maxVANH19).toFixed(2),
          random(minVANH20, maxVANH20).toFixed(2),
          random(minVANH21, maxVANH21).toFixed(2),
          random(minVANH22, maxVANH22).toFixed(2),
          random(minVANH23, maxVANH23).toFixed(2),
          random(minVANH24, maxVANH24).toFixed(2),
          random(minVANH25, maxVANH25).toFixed(2),
          random(minVANH26, maxVANH26).toFixed(2),
          random(minVANH27, maxVANH27).toFixed(2),
          random(minVANH28, maxVANH28).toFixed(2),
          random(minVANH29, maxVANH29).toFixed(2),
          random(minVANH30, maxVANH30).toFixed(2),
          random(minVANH31, maxVANH31).toFixed(2),
          random(minVBNH1, maxVBNH1).toFixed(2),
          random(minVBNH2, maxVBNH2).toFixed(2),
          random(minVBNH3, maxVBNH3).toFixed(2),
          random(minVBNH4, maxVBNH4).toFixed(2),
          random(minVBNH5, maxVBNH5).toFixed(2),
          random(minVBNH6, maxVBNH6).toFixed(2),
          random(minVBNH7, maxVBNH7).toFixed(2),
          random(minVBNH8, maxVBNH8).toFixed(2),
          random(minVBNH9, maxVBNH9).toFixed(2),
          random(minVBNH10, maxVBNH10).toFixed(2),
          random(minVBNH11, maxVBNH11).toFixed(2),
          random(minVBNH12, maxVBNH12).toFixed(2),
          random(minVBNH13, maxVBNH13).toFixed(2),
          random(minVBNH14, maxVBNH14).toFixed(2),
          random(minVBNH15, maxVBNH15).toFixed(2),
          random(minVBNH16, maxVBNH16).toFixed(2),
          random(minVBNH17, maxVBNH17).toFixed(2),
          random(minVBNH18, maxVBNH18).toFixed(2),
          random(minVBNH19, maxVBNH19).toFixed(2),
          random(minVBNH20, maxVBNH20).toFixed(2),
          random(minVBNH21, maxVBNH21).toFixed(2),
          random(minVBNH22, maxVBNH22).toFixed(2),
          random(minVBNH23, maxVBNH23).toFixed(2),
          random(minVBNH24, maxVBNH24).toFixed(2),
          random(minVBNH25, maxVBNH25).toFixed(2),
          random(minVBNH26, maxVBNH26).toFixed(2),
          random(minVBNH27, maxVBNH27).toFixed(2),
          random(minVBNH28, maxVBNH28).toFixed(2),
          random(minVBNH29, maxVBNH29).toFixed(2),
          random(minVBNH30, maxVBNH30).toFixed(2),
          random(minVBNH31, maxVBNH31).toFixed(2),
          random(minVCNH1, maxVCNH1).toFixed(2),
          random(minVCNH2, maxVCNH2).toFixed(2),
          random(minVCNH3, maxVCNH3).toFixed(2),
          random(minVCNH4, maxVCNH4).toFixed(2),
          random(minVCNH5, maxVCNH5).toFixed(2),
          random(minVCNH6, maxVCNH6).toFixed(2),
          random(minVCNH7, maxVCNH7).toFixed(2),
          random(minVCNH8, maxVCNH8).toFixed(2),
          random(minVCNH9, maxVCNH9).toFixed(2),
          random(minVCNH10, maxVCNH10).toFixed(2),
          random(minVCNH11, maxVCNH11).toFixed(2),
          random(minVCNH12, maxVCNH12).toFixed(2),
          random(minVCNH13, maxVCNH13).toFixed(2),
          random(minVCNH14, maxVCNH14).toFixed(2),
          random(minVCNH15, maxVCNH15).toFixed(2),
          random(minVCNH16, maxVCNH16).toFixed(2),
          random(minVCNH17, maxVCNH17).toFixed(2),
          random(minVCNH18, maxVCNH18).toFixed(2),
          random(minVCNH19, maxVCNH19).toFixed(2),
          random(minVCNH20, maxVCNH20).toFixed(2),
          random(minVCNH21, maxVCNH21).toFixed(2),
          random(minVCNH22, maxVCNH22).toFixed(2),
          random(minVCNH23, maxVCNH23).toFixed(2),
          random(minVCNH24, maxVCNH24).toFixed(2),
          random(minVCNH25, maxVCNH25).toFixed(2),
          random(minVCNH26, maxVCNH26).toFixed(2),
          random(minVCNH27, maxVCNH27).toFixed(2),
          random(minVCNH28, maxVCNH28).toFixed(2),
          random(minVCNH29, maxVCNH29).toFixed(2),
          random(minVCNH30, maxVCNH30).toFixed(2),
          random(minVCNH31, maxVCNH31).toFixed(2),
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          Math.floor(random(1, 20))
        );
        console.log(e);
        sendmessageframe2(
          e,
          {
            url: url,
            username: username,
            password: password,
            client: client,
            topic: topic,
          },
          {
            typeSystem: typeSystem,
            typeDevice: typeDevice,
            province: province,
            country: country,
            codeCustomer: codeCustomer,
            codeProject: codeProject,
            a1: a1,
            a2: a2,
            a3: a3,
            a4: a4,
            a5: a5,
            func: codeFunction,
            messageType: messageType,
            crc: crc,
          }
        );
      }, 3000);
      setTimerId(timer);

      return () => clearInterval(timer);
    } else {
      toastErrorAccessory("Dữ liệu truyền vào không hợp lệ");
    }
  };
  const toastErrorAccessory = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastSuccessAccessory = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const onChangeSw = (checked) => {
    setDisable(checked);
    handelCkickStop();
  };
  const updateStatus = (payload) => {
    dispatch(updatestatus2(payload));
  };
  const onChangeTime = (time, timeString) => {
    setStartTime(new Date(timeString[0]));
    setEndTime(new Date(timeString[1]));
  };
  const checkTime = () => {
    if (
      startTime === undefined ||
      startTime === "" ||
      endTime === undefined ||
      endTime === ""
    ) {
      toastErrorAccessory("Chưa nhập giờ!");
      return;
    } else {
      toastSuccessAccessory("Đã bắt đầu!");
    }

    const id = setInterval(() => {
      const nows = new Date();
      const st = new Date(startTime);
      const end = new Date(endTime);
      if (
        nows.getDate() == st.getDate() &&
        nows.getMonth() == st.getMonth() &&
        nows.getFullYear() == st.getFullYear() &&
        nows.getHours() == st.getHours() &&
        nows.getMinutes() == st.getMinutes() &&
        nows.getSeconds() == st.getSeconds()
      ) {
        handelCkickRun();
      }
      if (
        nows.getDate() == end.getDate() &&
        nows.getMonth() == end.getMonth() &&
        nows.getFullYear() == end.getFullYear() &&
        nows.getHours() == end.getHours() &&
        nows.getMinutes() == end.getMinutes() &&
        nows.getSeconds() == end.getSeconds()
      ) {
        clearInterval(id);
        onChangeSw();
      }
    }, 1000);
  };

  const validationForm = (props) => {
    const fields = [
      { value: url, message: "Vui lòng nhập URL" },
      { value: username, message: "Vui lòng nhập username" },
      { value: password, message: "Vui lòng nhập Password" },
      { value: topic, message: "Vui lòng nhập Topic" },
      { value: client, message: "Vui lòng nhập Client-ID" },
      { value: codeFunction, message: "Vui lòng nhập Code Function" },
      { value: messageType, message: "Vui lòng nhập Message Type" },
      { value: data, message: "Vui lòng nhập Data" },
      { value: typeSystem, message: "Vui lòng nhập Type System" },
      { value: typeDevice, message: "Vui lòng nhập Type Device" },
      { value: codeCustomer, message: "Vui lòng nhập Code Customer" },
      { value: codeProject, message: "Vui lòng nhập Code Project" },
      { value: a1, message: "Vui lòng nhập A1" },
      { value: a2, message: "Vui lòng nhập A2" },
      { value: a3, message: "Vui lòng nhập A3" },
      { value: a4, message: "Vui lòng nhập A4" },
      { value: a5, message: "Vui lòng nhập A5" },
      { value: province, message: "Vui lòng nhập Province" },
      { value: country, message: "Vui lòng nhập Country" },
    ];

    for (const field of fields) {
      if (field.value === null || field.value === "") {
        toastErrorAccessory(field.message);
        return false;
      }
    }
    const iahVariables = [
      //IA_H1
      { min: minIAH1, max: maxIAH1, name: "IAH1" },
      { min: minIAH2, max: maxIAH2, name: "IAH2" },
      { min: minIAH3, max: maxIAH3, name: "IAH3" },
      { min: minIAH4, max: maxIAH4, name: "IAH4" },
      { min: minIAH5, max: maxIAH5, name: "IAH5" },
      { min: minIAH6, max: maxIAH6, name: "IAH6" },
      { min: minIAH7, max: maxIAH7, name: "IAH7" },
      { min: minIAH8, max: maxIAH8, name: "IAH8" },
      { min: minIAH9, max: maxIAH9, name: "IAH9" },
      { min: minIAH10, max: maxIAH10, name: "IAH10" },
      { min: minIAH11, max: maxIAH11, name: "IAH11" },
      { min: minIAH12, max: maxIAH12, name: "IAH12" },
      { min: minIAH13, max: maxIAH13, name: "IAH13" },
      { min: minIAH14, max: maxIAH14, name: "IAH14" },
      { min: minIAH15, max: maxIAH15, name: "IAH15" },
      { min: minIAH16, max: maxIAH16, name: "IAH16" },
      { min: minIAH17, max: maxIAH17, name: "IAH17" },
      { min: minIAH18, max: maxIAH18, name: "IAH18" },
      { min: minIAH19, max: maxIAH19, name: "IAH19" },
      { min: minIAH20, max: maxIAH20, name: "IAH20" },
      { min: minIAH21, max: maxIAH21, name: "IAH21" },
      { min: minIAH22, max: maxIAH22, name: "IAH22" },
      { min: minIAH23, max: maxIAH23, name: "IAH23" },
      { min: minIAH24, max: maxIAH24, name: "IAH24" },
      { min: minIAH25, max: maxIAH25, name: "IAH25" },
      { min: minIAH26, max: maxIAH26, name: "IAH26" },
      { min: minIAH27, max: maxIAH27, name: "IAH27" },
      { min: minIAH28, max: maxIAH28, name: "IAH28" },
      { min: minIAH29, max: maxIAH29, name: "IAH29" },
      { min: minIAH30, max: maxIAH30, name: "IAH30" },
      { min: minIAH31, max: maxIAH31, name: "IAH31" },

      //IB_H1
      { min: minIBH1, max: maxIBH1, name: "IBH1" },
      { min: minIBH2, max: maxIBH2, name: "IBH2" },
      { min: minIBH3, max: maxIBH3, name: "IBH3" },
      { min: minIBH4, max: maxIBH4, name: "IBH4" },
      { min: minIBH5, max: maxIBH5, name: "IBH5" },
      { min: minIBH6, max: maxIBH6, name: "IBH6" },
      { min: minIBH7, max: maxIBH7, name: "IBH7" },
      { min: minIBH8, max: maxIBH8, name: "IBH8" },
      { min: minIBH9, max: maxIBH9, name: "IBH9" },
      { min: minIBH10, max: maxIBH10, name: "IBH10" },
      { min: minIBH11, max: maxIBH11, name: "IBH11" },
      { min: minIBH12, max: maxIBH12, name: "IBH12" },
      { min: minIBH13, max: maxIBH13, name: "IBH13" },
      { min: minIBH14, max: maxIBH14, name: "IBH14" },
      { min: minIBH15, max: maxIBH15, name: "IBH15" },
      { min: minIBH16, max: maxIBH16, name: "IBH16" },
      { min: minIBH17, max: maxIBH17, name: "IBH17" },
      { min: minIBH18, max: maxIBH18, name: "IBH18" },
      { min: minIBH19, max: maxIBH19, name: "IBH19" },
      { min: minIBH20, max: maxIBH20, name: "IBH20" },
      { min: minIBH21, max: maxIBH21, name: "IBH21" },
      { min: minIBH22, max: maxIBH22, name: "IBH22" },
      { min: minIBH23, max: maxIBH23, name: "IBH23" },
      { min: minIBH24, max: maxIBH24, name: "IBH24" },
      { min: minIBH25, max: maxIBH25, name: "IBH25" },
      { min: minIBH26, max: maxIBH26, name: "IBH26" },
      { min: minIBH27, max: maxIBH27, name: "IBH27" },
      { min: minIBH28, max: maxIBH28, name: "IBH28" },
      { min: minIBH29, max: maxIBH29, name: "IBH29" },
      { min: minIBH30, max: maxIBH30, name: "IBH30" },
      { min: minIBH31, max: maxIBH31, name: "IBH31" },

      // IC_H1
      { min: minICH1, max: maxICH1, name: "ICH1" },
      { min: minICH2, max: maxICH2, name: "ICH2" },
      { min: minICH3, max: maxICH3, name: "ICH3" },
      { min: minICH4, max: maxICH4, name: "ICH4" },
      { min: minICH5, max: maxICH5, name: "ICH5" },
      { min: minICH6, max: maxICH6, name: "ICH6" },
      { min: minICH7, max: maxICH7, name: "ICH7" },
      { min: minICH8, max: maxICH8, name: "ICH8" },
      { min: minICH9, max: maxICH9, name: "ICH9" },
      { min: minICH10, max: maxICH10, name: "ICH10" },
      { min: minICH11, max: maxICH11, name: "ICH11" },
      { min: minICH12, max: maxICH12, name: "ICH12" },
      { min: minICH13, max: maxICH13, name: "ICH13" },
      { min: minICH14, max: maxICH14, name: "ICH14" },
      { min: minICH15, max: maxICH15, name: "ICH15" },
      { min: minICH16, max: maxICH16, name: "ICH16" },
      { min: minICH17, max: maxICH17, name: "ICH17" },
      { min: minICH18, max: maxICH18, name: "ICH18" },
      { min: minICH19, max: maxICH19, name: "ICH19" },
      { min: minICH20, max: maxICH20, name: "ICH20" },
      { min: minICH21, max: maxICH21, name: "ICH21" },
      { min: minICH22, max: maxICH22, name: "ICH22" },
      { min: minICH23, max: maxICH23, name: "ICH23" },
      { min: minICH24, max: maxICH24, name: "ICH24" },
      { min: minICH25, max: maxICH25, name: "ICH25" },
      { min: minICH26, max: maxICH26, name: "ICH26" },
      { min: minICH27, max: maxICH27, name: "ICH27" },
      { min: minICH28, max: maxICH28, name: "ICH28" },
      { min: minICH29, max: maxICH29, name: "ICH29" },
      { min: minICH30, max: maxICH30, name: "ICH30" },
      { min: minICH31, max: maxICH31, name: "ICH31" },

      //VAN_H1
      { min: minVANH1, max: maxVANH1, name: "VAN_H1" },
      { min: minVANH2, max: maxVANH2, name: "VAN_H2" },
      { min: minVANH3, max: maxVANH3, name: "VAN_H3" },
      { min: minVANH4, max: maxVANH4, name: "VAN_H4" },
      { min: minVANH5, max: maxVANH5, name: "VAN_H5" },
      { min: minVANH6, max: maxVANH6, name: "VAN_H6" },
      { min: minVANH7, max: maxVANH7, name: "VAN_H7" },
      { min: minVANH8, max: maxVANH8, name: "VAN_H8" },
      { min: minVANH9, max: maxVANH9, name: "VAN_H9" },
      { min: minVANH10, max: maxVANH10, name: "VAN_H10" },
      { min: minVANH11, max: maxVANH11, name: "VAN_H11" },
      { min: minVANH12, max: maxVANH12, name: "VAN_H12" },
      { min: minVANH13, max: maxVANH13, name: "VAN_H13" },
      { min: minVANH14, max: maxVANH14, name: "VAN_H14" },
      { min: minVANH15, max: maxVANH15, name: "VAN_H15" },
      { min: minVANH16, max: maxVANH16, name: "VAN_H16" },
      { min: minVANH17, max: maxVANH17, name: "VAN_H17" },
      { min: minVANH18, max: maxVANH18, name: "VAN_H18" },
      { min: minVANH19, max: maxVANH19, name: "VAN_H19" },
      { min: minVANH20, max: maxVANH20, name: "VAN_H20" },
      { min: minVANH21, max: maxVANH21, name: "VAN_H21" },
      { min: minVANH22, max: maxVANH22, name: "VAN_H22" },
      { min: minVANH23, max: maxVANH23, name: "VAN_H23" },
      { min: minVANH24, max: maxVANH24, name: "VAN_H24" },
      { min: minVANH25, max: maxVANH25, name: "VAN_H25" },
      { min: minVANH26, max: maxVANH26, name: "VAN_H26" },
      { min: minVANH27, max: maxVANH27, name: "VAN_H27" },
      { min: minVANH28, max: maxVANH28, name: "VAN_H28" },
      { min: minVANH29, max: maxVANH29, name: "VAN_H29" },
      { min: minVANH30, max: maxVANH30, name: "VAN_H30" },
      { min: minVANH31, max: maxVANH31, name: "VAN_H31" },

      //VBN_H1
      { min: minVBNH1, max: maxVBNH1, name: "VBN_H1" },
      { min: minVBNH2, max: maxVBNH2, name: "VBN_H2" },
      { min: minVBNH3, max: maxVBNH3, name: "VBN_H3" },
      { min: minVBNH4, max: maxVBNH4, name: "VBN_H4" },
      { min: minVBNH5, max: maxVBNH5, name: "VBN_H5" },
      { min: minVBNH6, max: maxVBNH6, name: "VBN_H6" },
      { min: minVBNH7, max: maxVBNH7, name: "VBN_H7" },
      { min: minVBNH8, max: maxVBNH8, name: "VBN_H8" },
      { min: minVBNH9, max: maxVBNH9, name: "VBN_H9" },
      { min: minVBNH10, max: maxVBNH10, name: "VBN_H10" },
      { min: minVBNH11, max: maxVBNH11, name: "VBN_H11" },
      { min: minVBNH12, max: maxVBNH12, name: "VBN_H12" },
      { min: minVBNH13, max: maxVBNH13, name: "VBN_H13" },
      { min: minVBNH14, max: maxVBNH14, name: "VBN_H14" },
      { min: minVBNH15, max: maxVBNH15, name: "VBN_H15" },
      { min: minVBNH16, max: maxVBNH16, name: "VBN_H16" },
      { min: minVBNH17, max: maxVBNH17, name: "VBN_H17" },
      { min: minVBNH18, max: maxVBNH18, name: "VBN_H18" },
      { min: minVBNH19, max: maxVBNH19, name: "VBN_H19" },
      { min: minVBNH20, max: maxVBNH20, name: "VBN_H20" },
      { min: minVBNH21, max: maxVBNH21, name: "VBN_H21" },
      { min: minVBNH22, max: maxVBNH22, name: "VBN_H22" },
      { min: minVBNH23, max: maxVBNH23, name: "VBN_H23" },
      { min: minVBNH24, max: maxVBNH24, name: "VBN_H24" },
      { min: minVBNH25, max: maxVBNH25, name: "VBN_H25" },
      { min: minVBNH26, max: maxVBNH26, name: "VBN_H26" },
      { min: minVBNH27, max: maxVBNH27, name: "VBN_H27" },
      { min: minVBNH28, max: maxVBNH28, name: "VBN_H28" },
      { min: minVBNH29, max: maxVBNH29, name: "VBN_H29" },
      { min: minVBNH30, max: maxVBNH30, name: "VBN_H30" },
      { min: minVBNH31, max: maxVBNH31, name: "VBN_H31" },

      //VCN_H1
      { min: minVCNH1, max: maxVCNH1, name: "VCN_H1" },
      { min: minVCNH2, max: maxVCNH2, name: "VCN_H2" },
      { min: minVCNH3, max: maxVCNH3, name: "VCN_H3" },
      { min: minVCNH4, max: maxVCNH4, name: "VCN_H4" },
      { min: minVCNH5, max: maxVCNH5, name: "VCN_H5" },
      { min: minVCNH6, max: maxVCNH6, name: "VCN_H6" },
      { min: minVCNH7, max: maxVCNH7, name: "VCN_H7" },
      { min: minVCNH8, max: maxVCNH8, name: "VCN_H8" },
      { min: minVCNH9, max: maxVCNH9, name: "VCN_H9" },
      { min: minVCNH10, max: maxVCNH10, name: "VCN_H10" },
      { min: minVCNH11, max: maxVCNH11, name: "VCN_H11" },
      { min: minVCNH12, max: maxVCNH12, name: "VCN_H12" },
      { min: minVCNH13, max: maxVCNH13, name: "VCN_H13" },
      { min: minVCNH14, max: maxVCNH14, name: "VCN_H14" },
      { min: minVCNH15, max: maxVCNH15, name: "VCN_H15" },
      { min: minVCNH16, max: maxVCNH16, name: "VCN_H16" },
      { min: minVCNH17, max: maxVCNH17, name: "VCN_H17" },
      { min: minVCNH18, max: maxVCNH18, name: "VCN_H18" },
      { min: minVCNH19, max: maxVCNH19, name: "VCN_H19" },
      { min: minVCNH20, max: maxVCNH20, name: "VCN_H20" },
      { min: minVCNH21, max: maxVCNH21, name: "VCN_H21" },
      { min: minVCNH22, max: maxVCNH22, name: "VCN_H22" },
      { min: minVCNH23, max: maxVCNH23, name: "VCN_H23" },
      { min: minVCNH24, max: maxVCNH24, name: "VCN_H24" },
      { min: minVCNH25, max: maxVCNH25, name: "VCN_H25" },
      { min: minVCNH26, max: maxVCNH26, name: "VCN_H26" },
      { min: minVCNH27, max: maxVCNH27, name: "VCN_H27" },
      { min: minVCNH28, max: maxVCNH28, name: "VCN_H28" },
      { min: minVCNH29, max: maxVCNH29, name: "VCN_H29" },
      { min: minVCNH30, max: maxVCNH30, name: "VCN_H30" },
      { min: minVCNH31, max: maxVCNH31, name: "VCN_H31" },
    ];

    for (const iahVar of iahVariables) {
      if (iahVar.min < 0) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng 0`
        );
        return false;
      }

      if (iahVar.max > 100) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 100`
        );
        return false;
      }

      if (iahVar.min > iahVar.max) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải nhỏ hơn hoặc bằng max${iahVar.name}`
        );
        return false;
      }

      if (
        iahVar.min === undefined ||
        iahVar.min === null ||
        iahVar.min === ""
      ) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} không được để trống`
        );
        return false;
      }

      if (iahVar.max === undefined || iahVar.max === null) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} không được để trống`
        );
        return false;
      }
    }

    return true;
  };
  const handleClearClick = () => {
    // Đặt lại giá trị của các trạng thái của ô input về chuỗi rỗng
    setUrl("");
    setCrc("");
    setUsername("");
    setPassword("");
    setToppics("");
    setClient("");
    setTypeDevice("");
    setTypeSystem("");
    setCodeFunction("");
    setIdDevice("");
    setMessageType("");
    setData("");
    setTime("");
    setCountry("");
    setProvince("");
    setCodeCustomer("");
    setCodeProject("");
    setA1("");
    setA2("");
    setA3("");
    setA4("");
    setA5("");
  };
  useEffect(() => {
    clearInterval(timerId);
    setTimerId(null);
    updateStatus({ key: props.data, status: true });
  }, [disabled == false]);

  const [minIAH1, setMinIAH1] = useState(0);
  const [maxIAH1, setMaxIAH1] = useState(100);

  const [minIAH2, setMinIAH2] = useState(0);
  const [maxIAH2, setMaxIAH2] = useState(100);

  const [minIAH3, setMinIAH3] = useState(0);
  const [maxIAH3, setMaxIAH3] = useState(100);

  const [minIAH4, setMinIAH4] = useState(0);
  const [maxIAH4, setMaxIAH4] = useState(100);

  const [minIAH5, setMinIAH5] = useState(0);
  const [maxIAH5, setMaxIAH5] = useState(100);

  const [minIAH6, setMinIAH6] = useState(0);
  const [maxIAH6, setMaxIAH6] = useState(100);

  const [minIAH7, setMinIAH7] = useState(0);
  const [maxIAH7, setMaxIAH7] = useState(100);

  const [minIAH8, setMinIAH8] = useState(0);
  const [maxIAH8, setMaxIAH8] = useState(100);

  const [minIAH9, setMinIAH9] = useState(0);
  const [maxIAH9, setMaxIAH9] = useState(100);

  const [minIAH10, setMinIAH10] = useState(0);
  const [maxIAH10, setMaxIAH10] = useState(100);

  const [minIAH11, setMinIAH11] = useState(0);
  const [maxIAH11, setMaxIAH11] = useState(100);

  const [minIAH12, setMinIAH12] = useState(0);
  const [maxIAH12, setMaxIAH12] = useState(100);

  const [minIAH13, setMinIAH13] = useState(0);
  const [maxIAH13, setMaxIAH13] = useState(100);

  const [minIAH14, setMinIAH14] = useState(0);
  const [maxIAH14, setMaxIAH14] = useState(100);

  const [minIAH15, setMinIAH15] = useState(0);
  const [maxIAH15, setMaxIAH15] = useState(100);

  const [minIAH16, setMinIAH16] = useState(0);
  const [maxIAH16, setMaxIAH16] = useState(100);

  const [minIAH17, setMinIAH17] = useState(0);
  const [maxIAH17, setMaxIAH17] = useState(100);

  const [minIAH18, setMinIAH18] = useState(0);
  const [maxIAH18, setMaxIAH18] = useState(100);

  const [minIAH19, setMinIAH19] = useState(0);
  const [maxIAH19, setMaxIAH19] = useState(100);

  const [minIAH20, setMinIAH20] = useState(0);
  const [maxIAH20, setMaxIAH20] = useState(100);

  const [minIAH21, setMinIAH21] = useState(0);
  const [maxIAH21, setMaxIAH21] = useState(100);

  const [minIAH22, setMinIAH22] = useState(0);
  const [maxIAH22, setMaxIAH22] = useState(100);

  const [minIAH23, setMinIAH23] = useState(0);
  const [maxIAH23, setMaxIAH23] = useState(100);

  const [minIAH24, setMinIAH24] = useState(0);
  const [maxIAH24, setMaxIAH24] = useState(100);

  const [minIAH25, setMinIAH25] = useState(0);
  const [maxIAH25, setMaxIAH25] = useState(100);

  const [minIAH26, setMinIAH26] = useState(0);
  const [maxIAH26, setMaxIAH26] = useState(100);

  const [minIAH27, setMinIAH27] = useState(0);
  const [maxIAH27, setMaxIAH27] = useState(100);

  const [minIAH28, setMinIAH28] = useState(0);
  const [maxIAH28, setMaxIAH28] = useState(100);

  const [minIAH29, setMinIAH29] = useState(0);
  const [maxIAH29, setMaxIAH29] = useState(100);

  const [minIAH30, setMinIAH30] = useState(0);
  const [maxIAH30, setMaxIAH30] = useState(100);

  const [minIAH31, setMinIAH31] = useState(0);
  const [maxIAH31, setMaxIAH31] = useState(100);
  const [minIBH1, setMinIBH1] = useState(0);
  const [maxIBH1, setMaxIBH1] = useState(100);

  const [minIBH2, setMinIBH2] = useState(0);
  const [maxIBH2, setMaxIBH2] = useState(100);

  const [minIBH3, setMinIBH3] = useState(0);
  const [maxIBH3, setMaxIBH3] = useState(100);

  const [minIBH4, setMinIBH4] = useState(0);
  const [maxIBH4, setMaxIBH4] = useState(100);

  const [minIBH5, setMinIBH5] = useState(0);
  const [maxIBH5, setMaxIBH5] = useState(100);

  const [minIBH6, setMinIBH6] = useState(0);
  const [maxIBH6, setMaxIBH6] = useState(100);

  const [minIBH7, setMinIBH7] = useState(0);
  const [maxIBH7, setMaxIBH7] = useState(100);

  const [minIBH8, setMinIBH8] = useState(0);
  const [maxIBH8, setMaxIBH8] = useState(100);

  const [minIBH9, setMinIBH9] = useState(0);
  const [maxIBH9, setMaxIBH9] = useState(100);

  const [minIBH10, setMinIBH10] = useState(0);
  const [maxIBH10, setMaxIBH10] = useState(100);

  const [minIBH11, setMinIBH11] = useState(0);
  const [maxIBH11, setMaxIBH11] = useState(100);

  const [minIBH12, setMinIBH12] = useState(0);
  const [maxIBH12, setMaxIBH12] = useState(100);

  const [minIBH13, setMinIBH13] = useState(0);
  const [maxIBH13, setMaxIBH13] = useState(100);

  const [minIBH14, setMinIBH14] = useState(0);
  const [maxIBH14, setMaxIBH14] = useState(100);

  const [minIBH15, setMinIBH15] = useState(0);
  const [maxIBH15, setMaxIBH15] = useState(100);

  const [minIBH16, setMinIBH16] = useState(0);
  const [maxIBH16, setMaxIBH16] = useState(100);

  const [minIBH17, setMinIBH17] = useState(0);
  const [maxIBH17, setMaxIBH17] = useState(100);

  const [minIBH18, setMinIBH18] = useState(0);
  const [maxIBH18, setMaxIBH18] = useState(100);

  const [minIBH19, setMinIBH19] = useState(0);
  const [maxIBH19, setMaxIBH19] = useState(100);

  const [minIBH20, setMinIBH20] = useState(0);
  const [maxIBH20, setMaxIBH20] = useState(100);

  const [minIBH21, setMinIBH21] = useState(0);
  const [maxIBH21, setMaxIBH21] = useState(100);

  const [minIBH22, setMinIBH22] = useState(0);
  const [maxIBH22, setMaxIBH22] = useState(100);

  const [minIBH23, setMinIBH23] = useState(0);
  const [maxIBH23, setMaxIBH23] = useState(100);

  const [minIBH24, setMinIBH24] = useState(0);
  const [maxIBH24, setMaxIBH24] = useState(100);

  const [minIBH25, setMinIBH25] = useState(0);
  const [maxIBH25, setMaxIBH25] = useState(100);

  const [minIBH26, setMinIBH26] = useState(0);
  const [maxIBH26, setMaxIBH26] = useState(100);

  const [minIBH27, setMinIBH27] = useState(0);
  const [maxIBH27, setMaxIBH27] = useState(100);

  const [minIBH28, setMinIBH28] = useState(0);
  const [maxIBH28, setMaxIBH28] = useState(100);

  const [minIBH29, setMinIBH29] = useState(0);
  const [maxIBH29, setMaxIBH29] = useState(100);

  const [minIBH30, setMinIBH30] = useState(0);
  const [maxIBH30, setMaxIBH30] = useState(100);

  const [minIBH31, setMinIBH31] = useState(0);
  const [maxIBH31, setMaxIBH31] = useState(100);
  const [minICH1, setMinICH1] = useState(0);
  const [maxICH1, setMaxICH1] = useState(100);

  const [minICH2, setMinICH2] = useState(0);
  const [maxICH2, setMaxICH2] = useState(100);

  const [minICH3, setMinICH3] = useState(0);
  const [maxICH3, setMaxICH3] = useState(100);

  const [minICH4, setMinICH4] = useState(0);
  const [maxICH4, setMaxICH4] = useState(100);

  const [minICH5, setMinICH5] = useState(0);
  const [maxICH5, setMaxICH5] = useState(100);

  const [minICH6, setMinICH6] = useState(0);
  const [maxICH6, setMaxICH6] = useState(100);

  const [minICH7, setMinICH7] = useState(0);
  const [maxICH7, setMaxICH7] = useState(100);

  const [minICH8, setMinICH8] = useState(0);
  const [maxICH8, setMaxICH8] = useState(100);

  const [minICH9, setMinICH9] = useState(0);
  const [maxICH9, setMaxICH9] = useState(100);

  const [minICH10, setMinICH10] = useState(0);
  const [maxICH10, setMaxICH10] = useState(100);

  const [minICH11, setMinICH11] = useState(0);
  const [maxICH11, setMaxICH11] = useState(100);

  const [minICH12, setMinICH12] = useState(0);
  const [maxICH12, setMaxICH12] = useState(100);

  const [minICH13, setMinICH13] = useState(0);
  const [maxICH13, setMaxICH13] = useState(100);

  const [minICH14, setMinICH14] = useState(0);
  const [maxICH14, setMaxICH14] = useState(100);

  const [minICH15, setMinICH15] = useState(0);
  const [maxICH15, setMaxICH15] = useState(100);

  const [minICH16, setMinICH16] = useState(0);
  const [maxICH16, setMaxICH16] = useState(100);

  const [minICH17, setMinICH17] = useState(0);
  const [maxICH17, setMaxICH17] = useState(100);

  const [minICH18, setMinICH18] = useState(0);
  const [maxICH18, setMaxICH18] = useState(100);

  const [minICH19, setMinICH19] = useState(0);
  const [maxICH19, setMaxICH19] = useState(100);

  const [minICH20, setMinICH20] = useState(0);
  const [maxICH20, setMaxICH20] = useState(100);

  const [minICH21, setMinICH21] = useState(0);
  const [maxICH21, setMaxICH21] = useState(100);

  const [minICH22, setMinICH22] = useState(0);
  const [maxICH22, setMaxICH22] = useState(100);

  const [minICH23, setMinICH23] = useState(0);
  const [maxICH23, setMaxICH23] = useState(100);

  const [minICH24, setMinICH24] = useState(0);
  const [maxICH24, setMaxICH24] = useState(100);

  const [minICH25, setMinICH25] = useState(0);
  const [maxICH25, setMaxICH25] = useState(100);

  const [minICH26, setMinICH26] = useState(0);
  const [maxICH26, setMaxICH26] = useState(100);

  const [minICH27, setMinICH27] = useState(0);
  const [maxICH27, setMaxICH27] = useState(100);

  const [minICH28, setMinICH28] = useState(0);
  const [maxICH28, setMaxICH28] = useState(100);

  const [minICH29, setMinICH29] = useState(0);
  const [maxICH29, setMaxICH29] = useState(100);

  const [minICH30, setMinICH30] = useState(0);
  const [maxICH30, setMaxICH30] = useState(100);

  const [minICH31, setMinICH31] = useState(0);
  const [maxICH31, setMaxICH31] = useState(100);
  const [minVABH1, setMinVABH1] = useState(0);
  const [maxVABH1, setMaxVABH1] = useState(100);

  const [minVABH2, setMinVABH2] = useState(0);
  const [maxVABH2, setMaxVABH2] = useState(100);

  const [minVABH3, setMinVABH3] = useState(0);
  const [maxVABH3, setMaxVABH3] = useState(100);

  const [minVABH4, setMinVABH4] = useState(0);
  const [maxVABH4, setMaxVABH4] = useState(100);

  const [minVABH5, setMinVABH5] = useState(0);
  const [maxVABH5, setMaxVABH5] = useState(100);

  const [minVABH6, setMinVABH6] = useState(0);
  const [maxVABH6, setMaxVABH6] = useState(100);

  const [minVABH7, setMinVABH7] = useState(0);
  const [maxVABH7, setMaxVABH7] = useState(100);

  const [minVABH8, setMinVABH8] = useState(0);
  const [maxVABH8, setMaxVABH8] = useState(100);

  const [minVABH9, setMinVABH9] = useState(0);
  const [maxVABH9, setMaxVABH9] = useState(100);

  const [minVABH10, setMinVABH10] = useState(0);
  const [maxVABH10, setMaxVABH10] = useState(100);

  const [minVABH11, setMinVABH11] = useState(0);
  const [maxVABH11, setMaxVABH11] = useState(100);

  const [minVABH12, setMinVABH12] = useState(0);
  const [maxVABH12, setMaxVABH12] = useState(100);

  const [minVABH13, setMinVABH13] = useState(0);
  const [maxVABH13, setMaxVABH13] = useState(100);

  const [minVABH14, setMinVABH14] = useState(0);
  const [maxVABH14, setMaxVABH14] = useState(100);

  const [minVABH15, setMinVABH15] = useState(0);
  const [maxVABH15, setMaxVABH15] = useState(100);

  const [minVABH16, setMinVABH16] = useState(0);
  const [maxVABH16, setMaxVABH16] = useState(100);

  const [minVABH17, setMinVABH17] = useState(0);
  const [maxVABH17, setMaxVABH17] = useState(100);

  const [minVABH18, setMinVABH18] = useState(0);
  const [maxVABH18, setMaxVABH18] = useState(100);

  const [minVABH19, setMinVABH19] = useState(0);
  const [maxVABH19, setMaxVABH19] = useState(100);

  const [minVABH20, setMinVABH20] = useState(0);
  const [maxVABH20, setMaxVABH20] = useState(100);

  const [minVABH21, setMinVABH21] = useState(0);
  const [maxVABH21, setMaxVABH21] = useState(100);

  const [minVABH22, setMinVABH22] = useState(0);
  const [maxVABH22, setMaxVABH22] = useState(100);

  const [minVABH23, setMinVABH23] = useState(0);
  const [maxVABH23, setMaxVABH23] = useState(100);

  const [minVABH24, setMinVABH24] = useState(0);
  const [maxVABH24, setMaxVABH24] = useState(100);

  const [minVABH25, setMinVABH25] = useState(0);
  const [maxVABH25, setMaxVABH25] = useState(100);

  const [minVABH26, setMinVABH26] = useState(0);
  const [maxVABH26, setMaxVABH26] = useState(100);

  const [minVABH27, setMinVABH27] = useState(0);
  const [maxVABH27, setMaxVABH27] = useState(100);

  const [minVABH28, setMinVABH28] = useState(0);
  const [maxVABH28, setMaxVABH28] = useState(100);

  const [minVABH29, setMinVABH29] = useState(0);
  const [maxVABH29, setMaxVABH29] = useState(100);

  const [minVABH30, setMinVABH30] = useState(0);
  const [maxVABH30, setMaxVABH30] = useState(100);

  const [minVABH31, setMinVABH31] = useState(0);
  const [maxVABH31, setMaxVABH31] = useState(100);
  const [minVCAH1, setMinVCAH1] = useState(0);
  const [maxVCAH1, setMaxVCAH1] = useState(100);

  const [minVCAH2, setMinVCAH2] = useState(0);
  const [maxVCAH2, setMaxVCAH2] = useState(100);

  const [minVCAH3, setMinVCAH3] = useState(0);
  const [maxVCAH3, setMaxVCAH3] = useState(100);

  const [minVCAH4, setMinVCAH4] = useState(0);
  const [maxVCAH4, setMaxVCAH4] = useState(100);

  const [minVCAH5, setMinVCAH5] = useState(0);
  const [maxVCAH5, setMaxVCAH5] = useState(100);

  const [minVCAH6, setMinVCAH6] = useState(0);
  const [maxVCAH6, setMaxVCAH6] = useState(100);

  const [minVCAH7, setMinVCAH7] = useState(0);
  const [maxVCAH7, setMaxVCAH7] = useState(100);

  const [minVCAH8, setMinVCAH8] = useState(0);
  const [maxVCAH8, setMaxVCAH8] = useState(100);

  const [minVCAH9, setMinVCAH9] = useState(0);
  const [maxVCAH9, setMaxVCAH9] = useState(100);

  const [minVCAH10, setMinVCAH10] = useState(0);
  const [maxVCAH10, setMaxVCAH10] = useState(100);

  const [minVCAH11, setMinVCAH11] = useState(0);
  const [maxVCAH11, setMaxVCAH11] = useState(100);

  const [minVCAH12, setMinVCAH12] = useState(0);
  const [maxVCAH12, setMaxVCAH12] = useState(100);

  const [minVCAH13, setMinVCAH13] = useState(0);
  const [maxVCAH13, setMaxVCAH13] = useState(100);

  const [minVCAH14, setMinVCAH14] = useState(0);
  const [maxVCAH14, setMaxVCAH14] = useState(100);

  const [minVCAH15, setMinVCAH15] = useState(0);
  const [maxVCAH15, setMaxVCAH15] = useState(100);

  const [minVCAH16, setMinVCAH16] = useState(0);
  const [maxVCAH16, setMaxVCAH16] = useState(100);

  const [minVCAH17, setMinVCAH17] = useState(0);
  const [maxVCAH17, setMaxVCAH17] = useState(100);

  const [minVCAH18, setMinVCAH18] = useState(0);
  const [maxVCAH18, setMaxVCAH18] = useState(100);

  const [minVCAH19, setMinVCAH19] = useState(0);
  const [maxVCAH19, setMaxVCAH19] = useState(100);

  const [minVCAH20, setMinVCAH20] = useState(0);
  const [maxVCAH20, setMaxVCAH20] = useState(100);

  const [minVCAH21, setMinVCAH21] = useState(0);
  const [maxVCAH21, setMaxVCAH21] = useState(100);

  const [minVCAH22, setMinVCAH22] = useState(0);
  const [maxVCAH22, setMaxVCAH22] = useState(100);

  const [minVCAH23, setMinVCAH23] = useState(0);
  const [maxVCAH23, setMaxVCAH23] = useState(100);

  const [minVCAH24, setMinVCAH24] = useState(0);
  const [maxVCAH24, setMaxVCAH24] = useState(100);

  const [minVCAH25, setMinVCAH25] = useState(0);
  const [maxVCAH25, setMaxVCAH25] = useState(100);

  const [minVCAH26, setMinVCAH26] = useState(0);
  const [maxVCAH26, setMaxVCAH26] = useState(100);

  const [minVCAH27, setMinVCAH27] = useState(0);
  const [maxVCAH27, setMaxVCAH27] = useState(100);

  const [minVCAH28, setMinVCAH28] = useState(0);
  const [maxVCAH28, setMaxVCAH28] = useState(100);

  const [minVCAH29, setMinVCAH29] = useState(0);
  const [maxVCAH29, setMaxVCAH29] = useState(100);

  const [minVCAH30, setMinVCAH30] = useState(0);
  const [maxVCAH30, setMaxVCAH30] = useState(100);

  const [minVCAH31, setMinVCAH31] = useState(0);
  const [maxVCAH31, setMaxVCAH31] = useState(100);

  const [minVBCH1, setMinVBCH1] = useState(0);
  const [maxVBCH1, setMaxVBCH1] = useState(100);

  const [minVBCH2, setMinVBCH2] = useState(0);
  const [maxVBCH2, setMaxVBCH2] = useState(100);

  const [minVBCH3, setMinVBCH3] = useState(0);
  const [maxVBCH3, setMaxVBCH3] = useState(100);

  const [minVBCH4, setMinVBCH4] = useState(0);
  const [maxVBCH4, setMaxVBCH4] = useState(100);

  const [minVBCH5, setMinVBCH5] = useState(0);
  const [maxVBCH5, setMaxVBCH5] = useState(100);

  const [minVBCH6, setMinVBCH6] = useState(0);
  const [maxVBCH6, setMaxVBCH6] = useState(100);

  const [minVBCH7, setMinVBCH7] = useState(0);
  const [maxVBCH7, setMaxVBCH7] = useState(100);

  const [minVBCH8, setMinVBCH8] = useState(0);
  const [maxVBCH8, setMaxVBCH8] = useState(100);

  const [minVBCH9, setMinVBCH9] = useState(0);
  const [maxVBCH9, setMaxVBCH9] = useState(100);

  const [minVBCH10, setMinVBCH10] = useState(0);
  const [maxVBCH10, setMaxVBCH10] = useState(100);

  const [minVBCH11, setMinVBCH11] = useState(0);
  const [maxVBCH11, setMaxVBCH11] = useState(100);

  const [minVBCH12, setMinVBCH12] = useState(0);
  const [maxVBCH12, setMaxVBCH12] = useState(100);

  const [minVBCH13, setMinVBCH13] = useState(0);
  const [maxVBCH13, setMaxVBCH13] = useState(100);

  const [minVBCH14, setMinVBCH14] = useState(0);
  const [maxVBCH14, setMaxVBCH14] = useState(100);

  const [minVBCH15, setMinVBCH15] = useState(0);
  const [maxVBCH15, setMaxVBCH15] = useState(100);

  const [minVBCH16, setMinVBCH16] = useState(0);
  const [maxVBCH16, setMaxVBCH16] = useState(100);

  const [minVBCH17, setMinVBCH17] = useState(0);
  const [maxVBCH17, setMaxVBCH17] = useState(100);

  const [minVBCH18, setMinVBCH18] = useState(0);
  const [maxVBCH18, setMaxVBCH18] = useState(100);

  const [minVBCH19, setMinVBCH19] = useState(0);
  const [maxVBCH19, setMaxVBCH19] = useState(100);

  const [minVBCH20, setMinVBCH20] = useState(0);
  const [maxVBCH20, setMaxVBCH20] = useState(100);

  const [minVBCH21, setMinVBCH21] = useState(0);
  const [maxVBCH21, setMaxVBCH21] = useState(100);

  const [minVBCH22, setMinVBCH22] = useState(0);
  const [maxVBCH22, setMaxVBCH22] = useState(100);

  const [minVBCH23, setMinVBCH23] = useState(0);
  const [maxVBCH23, setMaxVBCH23] = useState(100);

  const [minVBCH24, setMinVBCH24] = useState(0);
  const [maxVBCH24, setMaxVBCH24] = useState(100);

  const [minVBCH25, setMinVBCH25] = useState(0);
  const [maxVBCH25, setMaxVBCH25] = useState(100);

  const [minVBCH26, setMinVBCH26] = useState(0);
  const [maxVBCH26, setMaxVBCH26] = useState(100);

  const [minVBCH27, setMinVBCH27] = useState(0);
  const [maxVBCH27, setMaxVBCH27] = useState(100);

  const [minVBCH28, setMinVBCH28] = useState(0);
  const [maxVBCH28, setMaxVBCH28] = useState(100);

  const [minVBCH29, setMinVBCH29] = useState(0);
  const [maxVBCH29, setMaxVBCH29] = useState(100);

  const [minVBCH30, setMinVBCH30] = useState(0);
  const [maxVBCH30, setMaxVBCH30] = useState(100);

  const [minVBCH31, setMinVBCH31] = useState(0);
  const [maxVBCH31, setMaxVBCH31] = useState(100);
  const [minVANH1, setMinVANH1] = useState(0);
  const [maxVANH1, setMaxVANH1] = useState(100);

  const [minVANH2, setMinVANH2] = useState(0);
  const [maxVANH2, setMaxVANH2] = useState(100);

  const [minVANH3, setMinVANH3] = useState(0);
  const [maxVANH3, setMaxVANH3] = useState(100);

  const [minVANH4, setMinVANH4] = useState(0);
  const [maxVANH4, setMaxVANH4] = useState(100);

  const [minVANH5, setMinVANH5] = useState(0);
  const [maxVANH5, setMaxVANH5] = useState(100);

  const [minVANH6, setMinVANH6] = useState(0);
  const [maxVANH6, setMaxVANH6] = useState(100);

  const [minVANH7, setMinVANH7] = useState(0);
  const [maxVANH7, setMaxVANH7] = useState(100);

  const [minVANH8, setMinVANH8] = useState(0);
  const [maxVANH8, setMaxVANH8] = useState(100);

  const [minVANH9, setMinVANH9] = useState(0);
  const [maxVANH9, setMaxVANH9] = useState(100);

  const [minVANH10, setMinVANH10] = useState(0);
  const [maxVANH10, setMaxVANH10] = useState(100);

  const [minVANH11, setMinVANH11] = useState(0);
  const [maxVANH11, setMaxVANH11] = useState(100);

  const [minVANH12, setMinVANH12] = useState(0);
  const [maxVANH12, setMaxVANH12] = useState(100);

  const [minVANH13, setMinVANH13] = useState(0);
  const [maxVANH13, setMaxVANH13] = useState(100);

  const [minVANH14, setMinVANH14] = useState(0);
  const [maxVANH14, setMaxVANH14] = useState(100);

  const [minVANH15, setMinVANH15] = useState(0);
  const [maxVANH15, setMaxVANH15] = useState(100);

  const [minVANH16, setMinVANH16] = useState(0);
  const [maxVANH16, setMaxVANH16] = useState(100);

  const [minVANH17, setMinVANH17] = useState(0);
  const [maxVANH17, setMaxVANH17] = useState(100);

  const [minVANH18, setMinVANH18] = useState(0);
  const [maxVANH18, setMaxVANH18] = useState(100);

  const [minVANH19, setMinVANH19] = useState(0);
  const [maxVANH19, setMaxVANH19] = useState(100);

  const [minVANH20, setMinVANH20] = useState(0);
  const [maxVANH20, setMaxVANH20] = useState(100);

  const [minVANH21, setMinVANH21] = useState(0);
  const [maxVANH21, setMaxVANH21] = useState(100);

  const [minVANH22, setMinVANH22] = useState(0);
  const [maxVANH22, setMaxVANH22] = useState(100);

  const [minVANH23, setMinVANH23] = useState(0);
  const [maxVANH23, setMaxVANH23] = useState(100);

  const [minVANH24, setMinVANH24] = useState(0);
  const [maxVANH24, setMaxVANH24] = useState(100);

  const [minVANH25, setMinVANH25] = useState(0);
  const [maxVANH25, setMaxVANH25] = useState(100);

  const [minVANH26, setMinVANH26] = useState(0);
  const [maxVANH26, setMaxVANH26] = useState(100);

  const [minVANH27, setMinVANH27] = useState(0);
  const [maxVANH27, setMaxVANH27] = useState(100);

  const [minVANH28, setMinVANH28] = useState(0);
  const [maxVANH28, setMaxVANH28] = useState(100);

  const [minVANH29, setMinVANH29] = useState(0);
  const [maxVANH29, setMaxVANH29] = useState(100);

  const [minVANH30, setMinVANH30] = useState(0);
  const [maxVANH30, setMaxVANH30] = useState(100);

  const [minVANH31, setMinVANH31] = useState(0);
  const [maxVANH31, setMaxVANH31] = useState(100);
  const [minVBNH1, setMinVBNH1] = useState(0);
  const [maxVBNH1, setMaxVBNH1] = useState(100);

  const [minVBNH2, setMinVBNH2] = useState(0);
  const [maxVBNH2, setMaxVBNH2] = useState(100);

  const [minVBNH3, setMinVBNH3] = useState(0);
  const [maxVBNH3, setMaxVBNH3] = useState(100);

  const [minVBNH4, setMinVBNH4] = useState(0);
  const [maxVBNH4, setMaxVBNH4] = useState(100);

  const [minVBNH5, setMinVBNH5] = useState(0);
  const [maxVBNH5, setMaxVBNH5] = useState(100);

  const [minVBNH6, setMinVBNH6] = useState(0);
  const [maxVBNH6, setMaxVBNH6] = useState(100);

  const [minVBNH7, setMinVBNH7] = useState(0);
  const [maxVBNH7, setMaxVBNH7] = useState(100);

  const [minVBNH8, setMinVBNH8] = useState(0);
  const [maxVBNH8, setMaxVBNH8] = useState(100);

  const [minVBNH9, setMinVBNH9] = useState(0);
  const [maxVBNH9, setMaxVBNH9] = useState(100);

  const [minVBNH10, setMinVBNH10] = useState(0);
  const [maxVBNH10, setMaxVBNH10] = useState(100);

  const [minVBNH11, setMinVBNH11] = useState(0);
  const [maxVBNH11, setMaxVBNH11] = useState(100);

  const [minVBNH12, setMinVBNH12] = useState(0);
  const [maxVBNH12, setMaxVBNH12] = useState(100);

  const [minVBNH13, setMinVBNH13] = useState(0);
  const [maxVBNH13, setMaxVBNH13] = useState(100);

  const [minVBNH14, setMinVBNH14] = useState(0);
  const [maxVBNH14, setMaxVBNH14] = useState(100);

  const [minVBNH15, setMinVBNH15] = useState(0);
  const [maxVBNH15, setMaxVBNH15] = useState(100);

  const [minVBNH16, setMinVBNH16] = useState(0);
  const [maxVBNH16, setMaxVBNH16] = useState(100);

  const [minVBNH17, setMinVBNH17] = useState(0);
  const [maxVBNH17, setMaxVBNH17] = useState(100);

  const [minVBNH18, setMinVBNH18] = useState(0);
  const [maxVBNH18, setMaxVBNH18] = useState(100);

  const [minVBNH19, setMinVBNH19] = useState(0);
  const [maxVBNH19, setMaxVBNH19] = useState(100);

  const [minVBNH20, setMinVBNH20] = useState(0);
  const [maxVBNH20, setMaxVBNH20] = useState(100);

  const [minVBNH21, setMinVBNH21] = useState(0);
  const [maxVBNH21, setMaxVBNH21] = useState(100);

  const [minVBNH22, setMinVBNH22] = useState(0);
  const [maxVBNH22, setMaxVBNH22] = useState(100);

  const [minVBNH23, setMinVBNH23] = useState(0);
  const [maxVBNH23, setMaxVBNH23] = useState(100);

  const [minVBNH24, setMinVBNH24] = useState(0);
  const [maxVBNH24, setMaxVBNH24] = useState(100);

  const [minVBNH25, setMinVBNH25] = useState(0);
  const [maxVBNH25, setMaxVBNH25] = useState(100);

  const [minVBNH26, setMinVBNH26] = useState(0);
  const [maxVBNH26, setMaxVBNH26] = useState(100);

  const [minVBNH27, setMinVBNH27] = useState(0);
  const [maxVBNH27, setMaxVBNH27] = useState(100);

  const [minVBNH28, setMinVBNH28] = useState(0);
  const [maxVBNH28, setMaxVBNH28] = useState(100);

  const [minVBNH29, setMinVBNH29] = useState(0);
  const [maxVBNH29, setMaxVBNH29] = useState(100);

  const [minVBNH30, setMinVBNH30] = useState(0);
  const [maxVBNH30, setMaxVBNH30] = useState(100);

  const [minVBNH31, setMinVBNH31] = useState(0);
  const [maxVBNH31, setMaxVBNH31] = useState(100);
  const [minVCNH1, setMinVCNH1] = useState(0);
  const [maxVCNH1, setMaxVCNH1] = useState(100);

  const [minVCNH2, setMinVCNH2] = useState(0);
  const [maxVCNH2, setMaxVCNH2] = useState(100);

  const [minVCNH3, setMinVCNH3] = useState(0);
  const [maxVCNH3, setMaxVCNH3] = useState(100);

  const [minVCNH4, setMinVCNH4] = useState(0);
  const [maxVCNH4, setMaxVCNH4] = useState(100);

  const [minVCNH5, setMinVCNH5] = useState(0);
  const [maxVCNH5, setMaxVCNH5] = useState(100);

  const [minVCNH6, setMinVCNH6] = useState(0);
  const [maxVCNH6, setMaxVCNH6] = useState(100);

  const [minVCNH7, setMinVCNH7] = useState(0);
  const [maxVCNH7, setMaxVCNH7] = useState(100);

  const [minVCNH8, setMinVCNH8] = useState(0);
  const [maxVCNH8, setMaxVCNH8] = useState(100);

  const [minVCNH9, setMinVCNH9] = useState(0);
  const [maxVCNH9, setMaxVCNH9] = useState(100);

  const [minVCNH10, setMinVCNH10] = useState(0);
  const [maxVCNH10, setMaxVCNH10] = useState(100);

  const [minVCNH11, setMinVCNH11] = useState(0);
  const [maxVCNH11, setMaxVCNH11] = useState(100);

  const [minVCNH12, setMinVCNH12] = useState(0);
  const [maxVCNH12, setMaxVCNH12] = useState(100);

  const [minVCNH13, setMinVCNH13] = useState(0);
  const [maxVCNH13, setMaxVCNH13] = useState(100);

  const [minVCNH14, setMinVCNH14] = useState(0);
  const [maxVCNH14, setMaxVCNH14] = useState(100);

  const [minVCNH15, setMinVCNH15] = useState(0);
  const [maxVCNH15, setMaxVCNH15] = useState(100);

  const [minVCNH16, setMinVCNH16] = useState(0);
  const [maxVCNH16, setMaxVCNH16] = useState(100);

  const [minVCNH17, setMinVCNH17] = useState(0);
  const [maxVCNH17, setMaxVCNH17] = useState(100);

  const [minVCNH18, setMinVCNH18] = useState(0);
  const [maxVCNH18, setMaxVCNH18] = useState(100);

  const [minVCNH19, setMinVCNH19] = useState(0);
  const [maxVCNH19, setMaxVCNH19] = useState(100);

  const [minVCNH20, setMinVCNH20] = useState(0);
  const [maxVCNH20, setMaxVCNH20] = useState(100);

  const [minVCNH21, setMinVCNH21] = useState(0);
  const [maxVCNH21, setMaxVCNH21] = useState(100);

  const [minVCNH22, setMinVCNH22] = useState(0);
  const [maxVCNH22, setMaxVCNH22] = useState(100);

  const [minVCNH23, setMinVCNH23] = useState(0);
  const [maxVCNH23, setMaxVCNH23] = useState(100);

  const [minVCNH24, setMinVCNH24] = useState(0);
  const [maxVCNH24, setMaxVCNH24] = useState(100);

  const [minVCNH25, setMinVCNH25] = useState(0);
  const [maxVCNH25, setMaxVCNH25] = useState(100);

  const [minVCNH26, setMinVCNH26] = useState(0);
  const [maxVCNH26, setMaxVCNH26] = useState(100);

  const [minVCNH27, setMinVCNH27] = useState(0);
  const [maxVCNH27, setMaxVCNH27] = useState(100);

  const [minVCNH28, setMinVCNH28] = useState(0);
  const [maxVCNH28, setMaxVCNH28] = useState(100);

  const [minVCNH29, setMinVCNH29] = useState(0);
  const [maxVCNH29, setMaxVCNH29] = useState(100);

  const [minVCNH30, setMinVCNH30] = useState(0);
  const [maxVCNH30, setMaxVCNH30] = useState(100);

  const [minVCNH31, setMinVCNH31] = useState(0);
  const [maxVCNH31, setMaxVCNH31] = useState(100);
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState("");
  const [topic, setToppics] = useState("");
  const [typeSystem, setTypeSystem] = useState("");
  const [typeDevice, setTypeDevice] = useState("");
  const [idDevice, setIdDevice] = useState("");
  const [time, setTime] = useState("");
  const [codeFunction, setCodeFunction] = useState("");
  const [crc, setCrc] = useState("");
  const [messageType, setMessageType] = useState("");
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [codeCustomer, setCodeCustomer] = useState("");
  const [codeProject, setCodeProject] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="mt-2 row">
        <div className="col-12">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample10"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Setting user receive
            </button>
          </p>
          <div class="collapse" id="collapseExample10">
            <div class="card card-body">
              <div className="row">
                <div className="col-3">
                  <FormReceive
                    onBlur={handleFocus}
                    onFocus={() => setFocused(true)}
                    focused={focused.toString()}
                    url={url}
                    setUrl={setUrl}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    client={client}
                    setClient={setClient}
                    topic={topic}
                    setToppic={setToppics}
                    typeSystem={typeSystem}
                    setTypeSystem={setTypeSystem}
                    typeDevice={typeDevice}
                    setTypeDevice={setTypeDevice}
                    codeFunction={codeFunction}
                    setCodeFunction={setCodeFunction}
                    messageType={messageType}
                    setMessageType={setMessageType}
                    data={data}
                    setData={setData}
                    crc={crc}
                    setCrc={setCrc}
                  />
                </div>
                <div className="col-3">
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Url:{" "}
                    {url === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      url
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Username:{" "}
                    {username === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu</i>
                    ) : (
                      username
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Password:{" "}
                    {password === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ border: "none" }}
                      />
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Client:{" "}
                    {client === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      client
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Topic:{" "}
                    {topic === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      topic
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Type system:{" "}
                    {typeSystem === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      typeSystem
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Type device:{" "}
                    {typeDevice === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      typeDevice
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Code function:{" "}
                    {codeFunction === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      codeFunction
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Message tyle:{" "}
                    {messageType === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      messageType
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Data:{" "}
                    {data === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      data
                    )}
                  </h4>
                </div>
                <div className="col-3">
                  <FormReceive2
                    country={country}
                    setCountry={setCountry}
                    province={province}
                    setProvince={setProvince}
                    codeCustomer={codeCustomer}
                    setCodeCustomer={setCodeCustomer}
                    codeProject={codeProject}
                    setCodeProject={setCodeProject}
                    a1={a1}
                    a2={a2}
                    a3={a3}
                    a4={a4}
                    a5={a5}
                    setA1={setA1}
                    setA2={setA2}
                    setA3={setA3}
                    setA4={setA4}
                    setA5={setA5}
                    crc={crc}
                    setCrc={setCrc}
                  />
                </div>
                <div className="col-3">
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Country:{" "}
                    {country === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      country
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Province:{" "}
                    {province === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu</i>
                    ) : (
                      province
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Code customer:{" "}
                    {codeCustomer === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      codeCustomer
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    A1:{" "}
                    {a1 === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      a1
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    A2:{" "}
                    {a2 === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      a2
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    A3:{" "}
                    {a3 === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      a3
                    )}
                  </h4>

                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    A4:{" "}
                    {a4 === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      a4
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    A5:{" "}
                    {a5 === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      a5
                    )}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    CRC:{" "}
                    {crc === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      crc
                    )}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thao tác */}
      <div className="row">
        <div className="col-5">
          <Card
            bordered={true}
            className="card bg-light"
            style={{
              width: 500,
            }}
          >
            <div className="d-flex justify-content-around">
              <Button type="primary" className="ms-2" onClick={handelCkickRun}>
                Gửi tin
              </Button>
              <Button
                type="primary"
                className="ms-1"
                onClick={handleClearClick}
              >
                Clear
              </Button>
              <Button
                type="primary"
                danger
                className="ms-2"
                onClick={handelCkickStop}
              >
                Dừng
              </Button>
              <div className="">
                <label>
                  Tần xuất (
                  <i style={{ fontWeight: "500", fontSize: "13px" }}>ms</i>)
                </label>
                <Input
                  className="ms-2 inputN"
                  width={100}
                  min={1}
                  max={10}
                  value={frequency}
                  onChange={(event) => handelChangeInputTime(event)}
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-7">
          <Card
            bordered={true}
            className="card"
            style={{
              width: 700,
            }}
          >
            <span className="me-2" style={{ fontWeight: "bold" }}>
              Hẹn giờ
            </span>
            <Switch
              className="ms-2 me-2"
              onChange={onChangeSw}
              checked={disabled}
            />
            <DatePicker.RangePicker
              showTime
              disabled={!disabled}
              onChange={onChangeTime}
            />
            <Button
              className="ms-2"
              type="primary"
              onClick={checkTime}
              disabled={!disabled}
            >
              Gửi
            </Button>
          </Card>
        </div>
      </div>
      {/* Set dữ liệu */}

      <div className="row mt-4">
        <ToastContainer />
        {/* Cột 1 */}
        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ width: "80%" }}
            >
              Setting IA
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="IA_H1"
                  minValue={minIAH1}
                  maxValue={maxIAH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH1}
                  setMaxValue={setMaxIAH1}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H2"
                  minValue={minIAH2}
                  maxValue={maxIAH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH2}
                  setMaxValue={setMaxIAH2}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H3"
                  minValue={minIAH3}
                  maxValue={maxIAH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH3}
                  setMaxValue={setMaxIAH3}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H4"
                  minValue={minIAH4}
                  maxValue={maxIAH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH4}
                  setMaxValue={setMaxIAH4}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H5"
                  minValue={minIAH5}
                  maxValue={maxIAH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH5}
                  setMaxValue={setMaxIAH5}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H6"
                  minValue={minIAH6}
                  maxValue={maxIAH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH6}
                  setMaxValue={setMaxIAH6}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H7"
                  minValue={minIAH7}
                  maxValue={maxIAH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH7}
                  setMaxValue={setMaxIAH7}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H8"
                  minValue={minIAH8}
                  maxValue={maxIAH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH8}
                  setMaxValue={setMaxIAH8}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H9"
                  minValue={minIAH9}
                  maxValue={maxIAH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH9}
                  setMaxValue={setMaxIAH9}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H10"
                  minValue={minIAH10}
                  maxValue={maxIAH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH10}
                  setMaxValue={setMaxIAH10}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H11"
                  minValue={minIAH11}
                  maxValue={maxIAH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH11}
                  setMaxValue={setMaxIAH11}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H12"
                  minValue={minIAH12}
                  maxValue={maxIAH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH12}
                  setMaxValue={setMaxIAH12}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H13"
                  minValue={minIAH13}
                  maxValue={maxIAH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH13}
                  setMaxValue={setMaxIAH13}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H14"
                  minValue={minIAH14}
                  maxValue={maxIAH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH14}
                  setMaxValue={setMaxIAH14}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H15"
                  minValue={minIAH15}
                  maxValue={maxIAH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH15}
                  setMaxValue={setMaxIAH15}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H16"
                  minValue={minIAH16}
                  maxValue={maxIAH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH16}
                  setMaxValue={setMaxIAH16}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H17"
                  minValue={minIAH17}
                  maxValue={maxIAH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH17}
                  setMaxValue={setMaxIAH17}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H18"
                  minValue={minIAH18}
                  maxValue={maxIAH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH18}
                  setMaxValue={setMaxIAH18}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H19"
                  minValue={minIAH19}
                  maxValue={maxIAH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH19}
                  setMaxValue={setMaxIAH19}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H20"
                  minValue={minIAH20}
                  maxValue={maxIAH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH20}
                  setMaxValue={setMaxIAH20}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H21"
                  minValue={minIAH21}
                  maxValue={maxIAH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH21}
                  setMaxValue={setMaxIAH21}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H22"
                  minValue={minIAH22}
                  maxValue={maxIAH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH22}
                  setMaxValue={setMaxIAH22}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H23"
                  minValue={minIAH23}
                  maxValue={maxIAH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH24}
                  setMaxValue={setMaxIAH24}
                />

                <InputMinMax
                  className="mt-2"
                  title="IA_H25"
                  minValue={minIAH25}
                  maxValue={maxIAH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH25}
                  setMaxValue={setMaxIAH25}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H26"
                  minValue={minIAH26}
                  maxValue={maxIAH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH26}
                  setMaxValue={setMaxIAH26}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H27"
                  minValue={minIAH27}
                  maxValue={maxIAH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH27}
                  setMaxValue={setMaxIAH27}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H28"
                  minValue={minIAH28}
                  maxValue={maxIAH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH28}
                  setMaxValue={setMaxIAH28}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H29"
                  minValue={minIAH29}
                  maxValue={maxIAH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH29}
                  setMaxValue={setMaxIAH29}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H30"
                  minValue={minIAH30}
                  maxValue={maxIAH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH30}
                  setMaxValue={setMaxIAH30}
                />
                <InputMinMax
                  className="mt-2"
                  title="IA_H31"
                  minValue={minIAH31}
                  maxValue={maxIAH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIAH31}
                  setMaxValue={setMaxIAH31}
                />
              </Card>
            </div>
          </div>
          <p className="text-center">
            <button
              class="btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample3"
              aria-expanded="false"
              aria-controls="collapseExample3"
              style={{ width: "80%" }}
            >
              Setting VAN
            </button>
          </p>
          <div className="collapse " id="collapseExample3">
            <div className="card card-body p-0">
              <Card
                bordered={true}
                className="bg-light"
                style={{ width: "100%" }}
              >
                <InputMinMax
                  title="VAN_H1"
                  minValue={minVANH1}
                  maxValue={maxVANH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH1}
                  setMaxValue={setMaxVANH1}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H2"
                  minValue={minVANH2}
                  maxValue={maxVANH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH2}
                  setMaxValue={setMaxVANH2}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H3"
                  minValue={minVANH3}
                  maxValue={maxVANH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH3}
                  setMaxValue={setMaxVANH3}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H4"
                  minValue={minVANH4}
                  maxValue={maxVANH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH4}
                  setMaxValue={setMaxVANH4}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H5"
                  minValue={minVANH5}
                  maxValue={maxVANH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH5}
                  setMaxValue={setMaxVANH5}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H6"
                  minValue={minVANH6}
                  maxValue={maxVANH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH6}
                  setMaxValue={setMaxVANH6}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H7"
                  minValue={minVANH7}
                  maxValue={maxVANH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH7}
                  setMaxValue={setMaxVANH7}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H8"
                  minValue={minVANH8}
                  maxValue={maxVANH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH8}
                  setMaxValue={setMaxVANH8}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H9"
                  minValue={minVANH9}
                  maxValue={maxVANH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH9}
                  setMaxValue={setMaxVANH9}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H10"
                  minValue={minVANH10}
                  maxValue={maxVANH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH10}
                  setMaxValue={setMaxVANH10}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H11"
                  minValue={minVANH11}
                  maxValue={maxVANH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH11}
                  setMaxValue={setMaxVANH11}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H12"
                  minValue={minVANH12}
                  maxValue={maxVANH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH12}
                  setMaxValue={setMaxVANH12}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H13"
                  minValue={minVANH13}
                  maxValue={maxVANH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH13}
                  setMaxValue={setMaxVANH13}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H14"
                  minValue={minVANH14}
                  maxValue={maxVANH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH14}
                  setMaxValue={setMaxVANH14}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H15"
                  minValue={minVANH15}
                  maxValue={maxVANH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH15}
                  setMaxValue={setMaxVANH15}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H16"
                  minValue={minVANH16}
                  maxValue={maxVANH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH16}
                  setMaxValue={setMaxVANH16}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H17"
                  minValue={minVANH17}
                  maxValue={maxVANH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH17}
                  setMaxValue={setMaxVANH17}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H18"
                  minValue={minVANH18}
                  maxValue={maxVANH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH18}
                  setMaxValue={setMaxVANH18}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H19"
                  minValue={minVANH19}
                  maxValue={maxVANH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH19}
                  setMaxValue={setMaxVANH19}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H20"
                  minValue={minVANH20}
                  maxValue={maxVANH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH20}
                  setMaxValue={setMaxVANH20}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H21"
                  minValue={minVANH21}
                  maxValue={maxVANH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH21}
                  setMaxValue={setMaxVANH21}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H22"
                  minValue={minVANH22}
                  maxValue={maxVANH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH22}
                  setMaxValue={setMaxVANH22}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H23"
                  minValue={minVANH23}
                  maxValue={maxVANH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH24}
                  setMaxValue={setMaxVANH24}
                />

                <InputMinMax
                  className="mt-2"
                  title="VAN_H25"
                  minValue={minVANH25}
                  maxValue={maxVANH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH25}
                  setMaxValue={setMaxVANH25}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H26"
                  minValue={minVANH26}
                  maxValue={maxVANH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH26}
                  setMaxValue={setMaxVANH26}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H27"
                  minValue={minVANH27}
                  maxValue={maxVANH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH27}
                  setMaxValue={setMaxVANH27}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H28"
                  minValue={minVANH28}
                  maxValue={maxVANH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH28}
                  setMaxValue={setMaxVANH28}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H29"
                  minValue={minVANH29}
                  maxValue={maxVANH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH29}
                  setMaxValue={setMaxVANH29}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H30"
                  minValue={minVANH30}
                  maxValue={maxVANH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH30}
                  setMaxValue={setMaxVANH30}
                />
                <InputMinMax
                  className="mt-2"
                  title="VAN_H31"
                  minValue={minVANH31}
                  maxValue={maxVANH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVANH31}
                  setMaxValue={setMaxVANH31}
                />
              </Card>
            </div>
          </div>
        </div>
        {/* Cột 2 */}
        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ width: "80%" }}
            >
              Setting IB
            </button>
          </p>
          <div class="collapse" id="collapseExample1">
            <div class="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="IB_H1"
                  minValue={minIBH1}
                  maxValue={maxIBH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH1}
                  setMaxValue={setMaxIBH1}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H2"
                  minValue={minIBH2}
                  maxValue={maxIBH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH2}
                  setMaxValue={setMaxIBH2}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H3"
                  minValue={minIBH3}
                  maxValue={maxIBH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH3}
                  setMaxValue={setMaxIBH3}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H4"
                  minValue={minIBH4}
                  maxValue={maxIBH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH4}
                  setMaxValue={setMaxIBH4}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H5"
                  minValue={minIBH5}
                  maxValue={maxIBH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH5}
                  setMaxValue={setMaxIBH5}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H6"
                  minValue={minIBH6}
                  maxValue={maxIBH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH6}
                  setMaxValue={setMaxIBH6}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H7"
                  minValue={minIBH7}
                  maxValue={maxIBH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH7}
                  setMaxValue={setMaxIBH7}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H8"
                  minValue={minIBH8}
                  maxValue={maxIBH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH8}
                  setMaxValue={setMaxIBH8}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H9"
                  minValue={minIBH9}
                  maxValue={maxIBH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH9}
                  setMaxValue={setMaxIBH9}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H10"
                  minValue={minIBH10}
                  maxValue={maxIBH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH10}
                  setMaxValue={setMaxIBH10}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H11"
                  minValue={minIBH11}
                  maxValue={maxIBH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH11}
                  setMaxValue={setMaxIBH11}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H12"
                  minValue={minIBH12}
                  maxValue={maxIBH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH12}
                  setMaxValue={setMaxIBH12}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H13"
                  minValue={minIBH13}
                  maxValue={maxIBH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH13}
                  setMaxValue={setMaxIBH13}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H14"
                  minValue={minIBH14}
                  maxValue={maxIBH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH14}
                  setMaxValue={setMaxIBH14}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H15"
                  minValue={minIBH15}
                  maxValue={maxIBH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH15}
                  setMaxValue={setMaxIBH15}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H16"
                  minValue={minIBH16}
                  maxValue={maxIBH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH16}
                  setMaxValue={setMaxIBH16}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H17"
                  minValue={minIBH17}
                  maxValue={maxIBH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH17}
                  setMaxValue={setMaxIBH17}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H18"
                  minValue={minIBH18}
                  maxValue={maxIBH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH18}
                  setMaxValue={setMaxIBH18}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H19"
                  minValue={minIBH19}
                  maxValue={maxIBH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH19}
                  setMaxValue={setMaxIBH19}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H20"
                  minValue={minIBH20}
                  maxValue={maxIBH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH20}
                  setMaxValue={setMaxIBH20}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H21"
                  minValue={minIBH21}
                  maxValue={maxIBH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH21}
                  setMaxValue={setMaxIBH21}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H22"
                  minValue={minIBH22}
                  maxValue={maxIBH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH22}
                  setMaxValue={setMaxIBH22}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H23"
                  minValue={minIBH23}
                  maxValue={maxIBH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH24}
                  setMaxValue={setMaxIBH24}
                />

                <InputMinMax
                  className="mt-2"
                  title="IB_H25"
                  minValue={minIBH25}
                  maxValue={maxIBH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH25}
                  setMaxValue={setMaxIBH25}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H26"
                  minValue={minIBH26}
                  maxValue={maxIBH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH26}
                  setMaxValue={setMaxIBH26}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H27"
                  minValue={minIBH27}
                  maxValue={maxIBH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH27}
                  setMaxValue={setMaxIBH27}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H28"
                  minValue={minIBH28}
                  maxValue={maxIBH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH28}
                  setMaxValue={setMaxIBH28}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H29"
                  minValue={minIBH29}
                  maxValue={maxIBH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH29}
                  setMaxValue={setMaxIBH29}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H30"
                  minValue={minIBH30}
                  maxValue={maxIBH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH30}
                  setMaxValue={setMaxIBH30}
                />
                <InputMinMax
                  className="mt-2"
                  title="IB_H31"
                  minValue={minIBH31}
                  maxValue={maxIBH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinIBH31}
                  setMaxValue={setMaxIBH31}
                />
              </Card>
            </div>
          </div>
          <p className="text-center">
            <button
              class="btn btn-success"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample4"
              aria-expanded="false"
              aria-controls="collapseExample4"
              style={{ width: "80%" }}
            >
              Setting VBN{" "}
            </button>
          </p>
          <div className="collapse " id="collapseExample4">
            <div className="card card-body p-0">
              <Card bordered={true} className="bg-light">
                <InputMinMax
                  title="VBN_H1"
                  minValue={minVBNH1}
                  maxValue={maxVBNH1}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH1}
                  setMaxValue={setMaxVBNH1}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H2"
                  minValue={minVBNH2}
                  maxValue={maxVBNH2}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH2}
                  setMaxValue={setMaxVBNH2}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H3"
                  minValue={minVBNH3}
                  maxValue={maxVBNH3}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH3}
                  setMaxValue={setMaxVBNH3}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H4"
                  minValue={minVBNH4}
                  maxValue={maxVBNH4}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH4}
                  setMaxValue={setMaxVBNH4}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H5"
                  minValue={minVBNH5}
                  maxValue={maxVBNH5}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH5}
                  setMaxValue={setMaxVBNH5}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H6"
                  minValue={minVBNH6}
                  maxValue={maxVBNH6}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH6}
                  setMaxValue={setMaxVBNH6}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H7"
                  minValue={minVBNH7}
                  maxValue={maxVBNH7}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH7}
                  setMaxValue={setMaxVBNH7}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H8"
                  minValue={minVBNH8}
                  maxValue={maxVBNH8}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH8}
                  setMaxValue={setMaxVBNH8}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H9"
                  minValue={minVBNH9}
                  maxValue={maxVBNH9}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH9}
                  setMaxValue={setMaxVBNH9}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H10"
                  minValue={minVBNH10}
                  maxValue={maxVBNH10}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH10}
                  setMaxValue={setMaxVBNH10}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H11"
                  minValue={minVBNH11}
                  maxValue={maxVBNH11}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH11}
                  setMaxValue={setMaxVBNH11}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H12"
                  minValue={minVBNH12}
                  maxValue={maxVBNH12}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH12}
                  setMaxValue={setMaxVBNH12}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H13"
                  minValue={minVBNH13}
                  maxValue={maxVBNH13}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH13}
                  setMaxValue={setMaxVBNH13}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H14"
                  minValue={minVBNH14}
                  maxValue={maxVBNH14}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH14}
                  setMaxValue={setMaxVBNH14}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H15"
                  minValue={minVBNH15}
                  maxValue={maxVBNH15}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH15}
                  setMaxValue={setMaxVBNH15}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H16"
                  minValue={minVBNH16}
                  maxValue={maxVBNH16}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH16}
                  setMaxValue={setMaxVBNH16}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H17"
                  minValue={minVBNH17}
                  maxValue={maxVBNH17}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH17}
                  setMaxValue={setMaxVBNH17}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H18"
                  minValue={minVBNH18}
                  maxValue={maxVBNH18}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH18}
                  setMaxValue={setMaxVBNH18}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H19"
                  minValue={minVBNH19}
                  maxValue={maxVBNH19}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH19}
                  setMaxValue={setMaxVBNH19}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H20"
                  minValue={minVBNH20}
                  maxValue={maxVBNH20}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH20}
                  setMaxValue={setMaxVBNH20}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H21"
                  minValue={minVBNH21}
                  maxValue={maxVBNH21}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH21}
                  setMaxValue={setMaxVBNH21}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H22"
                  minValue={minVBNH22}
                  maxValue={maxVBNH22}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH22}
                  setMaxValue={setMaxVBNH22}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H23"
                  minValue={minVBNH23}
                  maxValue={maxVBNH23}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH24}
                  setMaxValue={setMaxVBNH24}
                />

                <InputMinMax
                  className="mt-2"
                  title="VBN_H25"
                  minValue={minVBNH25}
                  maxValue={maxVBNH25}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH25}
                  setMaxValue={setMaxVBNH25}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H26"
                  minValue={minVBNH26}
                  maxValue={maxVBNH26}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH26}
                  setMaxValue={setMaxVBNH26}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H27"
                  minValue={minVBNH27}
                  maxValue={maxVBNH27}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH27}
                  setMaxValue={setMaxVBNH27}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H28"
                  minValue={minVBNH28}
                  maxValue={maxVBNH28}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH28}
                  setMaxValue={setMaxVBNH28}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H29"
                  minValue={minVBNH29}
                  maxValue={maxVBNH29}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH29}
                  setMaxValue={setMaxVBNH29}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H30"
                  minValue={minVBNH30}
                  maxValue={maxVBNH30}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH30}
                  setMaxValue={setMaxVBNH30}
                />
                <InputMinMax
                  className="mt-2"
                  title="VBN_H31"
                  minValue={minVBNH31}
                  maxValue={maxVBNH31}
                  minX={0}
                  maxX={99}
                  minY={1}
                  maxY={100}
                  setMinValue={setMinVBNH31}
                  setMaxValue={setMaxVBNH31}
                />
              </Card>
            </div>
          </div>
        </div>
        {/* Cột 3 */}

        <div className="col-4">
          <p className="text-center">
            <button
              class="btn btn-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample2"
              style={{ width: "80%" }}
            >
              Setting IC
            </button>
          </p>
          <div class="collapse" id="collapseExample2">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="IC_H1"
                minValue={minICH1}
                maxValue={maxICH1}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH1}
                setMaxValue={setMaxICH1}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H2"
                minValue={minICH2}
                maxValue={maxICH2}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH2}
                setMaxValue={setMaxICH2}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H3"
                minValue={minICH3}
                maxValue={maxICH3}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH3}
                setMaxValue={setMaxICH3}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H4"
                minValue={minICH4}
                maxValue={maxICH4}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH4}
                setMaxValue={setMaxICH4}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H5"
                minValue={minICH5}
                maxValue={maxICH5}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH5}
                setMaxValue={setMaxICH5}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H6"
                minValue={minICH6}
                maxValue={maxICH6}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH6}
                setMaxValue={setMaxICH6}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H7"
                minValue={minICH7}
                maxValue={maxICH7}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH7}
                setMaxValue={setMaxICH7}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H8"
                minValue={minICH8}
                maxValue={maxICH8}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH8}
                setMaxValue={setMaxICH8}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H9"
                minValue={minICH9}
                maxValue={maxICH9}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH9}
                setMaxValue={setMaxICH9}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H10"
                minValue={minICH10}
                maxValue={maxICH10}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH10}
                setMaxValue={setMaxICH10}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H11"
                minValue={minICH11}
                maxValue={maxICH11}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH11}
                setMaxValue={setMaxICH11}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H12"
                minValue={minICH12}
                maxValue={maxICH12}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH12}
                setMaxValue={setMaxICH12}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H13"
                minValue={minICH13}
                maxValue={maxICH13}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH13}
                setMaxValue={setMaxICH13}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H14"
                minValue={minICH14}
                maxValue={maxICH14}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH14}
                setMaxValue={setMaxICH14}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H15"
                minValue={minICH15}
                maxValue={maxICH15}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH15}
                setMaxValue={setMaxICH15}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H16"
                minValue={minICH16}
                maxValue={maxICH16}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH16}
                setMaxValue={setMaxICH16}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H17"
                minValue={minICH17}
                maxValue={maxICH17}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH17}
                setMaxValue={setMaxICH17}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H18"
                minValue={minICH18}
                maxValue={maxICH18}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH18}
                setMaxValue={setMaxICH18}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H19"
                minValue={minICH19}
                maxValue={maxICH19}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH19}
                setMaxValue={setMaxICH19}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H20"
                minValue={minICH20}
                maxValue={maxICH20}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH20}
                setMaxValue={setMaxICH20}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H21"
                minValue={minICH21}
                maxValue={maxICH21}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH21}
                setMaxValue={setMaxICH21}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H22"
                minValue={minICH22}
                maxValue={maxICH22}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH22}
                setMaxValue={setMaxICH22}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H23"
                minValue={minICH23}
                maxValue={maxICH23}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH24}
                setMaxValue={setMaxICH24}
              />

              <InputMinMax
                className="mt-2"
                title="IC_H25"
                minValue={minICH25}
                maxValue={maxICH25}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH25}
                setMaxValue={setMaxICH25}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H26"
                minValue={minICH26}
                maxValue={maxICH26}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH26}
                setMaxValue={setMaxICH26}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H27"
                minValue={minICH27}
                maxValue={maxICH27}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH27}
                setMaxValue={setMaxICH27}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H28"
                minValue={minICH28}
                maxValue={maxICH28}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH28}
                setMaxValue={setMaxICH28}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H29"
                minValue={minICH29}
                maxValue={maxICH29}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH29}
                setMaxValue={setMaxICH29}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H30"
                minValue={minICH30}
                maxValue={maxICH30}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH30}
                setMaxValue={setMaxICH30}
              />
              <InputMinMax
                className="mt-2"
                title="IC_H31"
                minValue={minICH31}
                maxValue={maxICH31}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinICH31}
                setMaxValue={setMaxICH31}
              />
            </Card>
          </div>
          <p className="text-center">
            <button
              class="btn btn-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample5"
              aria-expanded="false"
              aria-controls="collapseExample5"
              style={{ width: "80%" }}
            >
              Setting VCN{" "}
            </button>
          </p>
          <div class="collapse" id="collapseExample5">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="VCN_H1"
                minValue={minVCNH1}
                maxValue={maxVCNH1}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH1}
                setMaxValue={setMaxVCNH1}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H2"
                minValue={minVCNH2}
                maxValue={maxVCNH2}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH2}
                setMaxValue={setMaxVCNH2}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H3"
                minValue={minVCNH3}
                maxValue={maxVCNH3}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH3}
                setMaxValue={setMaxVCNH3}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H4"
                minValue={minVCNH4}
                maxValue={maxVCNH4}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH4}
                setMaxValue={setMaxVCNH4}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H5"
                minValue={minVCNH5}
                maxValue={maxVCNH5}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH5}
                setMaxValue={setMaxVCNH5}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H6"
                minValue={minVCNH6}
                maxValue={maxVCNH6}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH6}
                setMaxValue={setMaxVCNH6}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H7"
                minValue={minVCNH7}
                maxValue={maxVCNH7}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH7}
                setMaxValue={setMaxVCNH7}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H8"
                minValue={minVCNH8}
                maxValue={maxVCNH8}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH8}
                setMaxValue={setMaxVCNH8}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H9"
                minValue={minVCNH9}
                maxValue={maxVCNH9}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH9}
                setMaxValue={setMaxVCNH9}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H10"
                minValue={minVCNH10}
                maxValue={maxVCNH10}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH10}
                setMaxValue={setMaxVCNH10}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H11"
                minValue={minVCNH11}
                maxValue={maxVCNH11}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH11}
                setMaxValue={setMaxVCNH11}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H12"
                minValue={minVCNH12}
                maxValue={maxVCNH12}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH12}
                setMaxValue={setMaxVCNH12}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H13"
                minValue={minVCNH13}
                maxValue={maxVCNH13}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH13}
                setMaxValue={setMaxVCNH13}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H14"
                minValue={minVCNH14}
                maxValue={maxVCNH14}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH14}
                setMaxValue={setMaxVCNH14}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H15"
                minValue={minVCNH15}
                maxValue={maxVCNH15}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH15}
                setMaxValue={setMaxVCNH15}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H16"
                minValue={minVCNH16}
                maxValue={maxVCNH16}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH16}
                setMaxValue={setMaxVCNH16}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H17"
                minValue={minVCNH17}
                maxValue={maxVCNH17}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH17}
                setMaxValue={setMaxVCNH17}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H18"
                minValue={minVCNH18}
                maxValue={maxVCNH18}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH18}
                setMaxValue={setMaxVCNH18}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H19"
                minValue={minVCNH19}
                maxValue={maxVCNH19}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH19}
                setMaxValue={setMaxVCNH19}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H20"
                minValue={minVCNH20}
                maxValue={maxVCNH20}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH20}
                setMaxValue={setMaxVCNH20}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H21"
                minValue={minVCNH21}
                maxValue={maxVCNH21}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH21}
                setMaxValue={setMaxVCNH21}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H22"
                minValue={minVCNH22}
                maxValue={maxVCNH22}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH22}
                setMaxValue={setMaxVCNH22}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H23"
                minValue={minVCNH23}
                maxValue={maxVCNH23}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH24}
                setMaxValue={setMaxVCNH24}
              />

              <InputMinMax
                className="mt-2"
                title="VCN_H25"
                minValue={minVCNH25}
                maxValue={maxVCNH25}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH25}
                setMaxValue={setMaxVCNH25}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H26"
                minValue={minVCNH26}
                maxValue={maxVCNH26}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH26}
                setMaxValue={setMaxVCNH26}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H27"
                minValue={minVCNH27}
                maxValue={maxVCNH27}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH27}
                setMaxValue={setMaxVCNH27}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H28"
                minValue={minVCNH28}
                maxValue={maxVCNH28}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH28}
                setMaxValue={setMaxVCNH28}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H29"
                minValue={minVCNH29}
                maxValue={maxVCNH29}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH29}
                setMaxValue={setMaxVCNH29}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H30"
                minValue={minVCNH30}
                maxValue={maxVCNH30}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH30}
                setMaxValue={setMaxVCNH30}
              />
              <InputMinMax
                className="mt-2"
                title="VCN_H31"
                minValue={minVCNH31}
                maxValue={maxVCNH31}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinVCNH31}
                setMaxValue={setMaxVCNH31}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
