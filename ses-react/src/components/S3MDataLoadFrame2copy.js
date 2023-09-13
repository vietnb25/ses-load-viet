import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import InputMinMax from "./InputMinMax";
import S3MDataLoadFrame2Entity from "../entities/S3MDataLoadFrame2Entity";
import { sendmessageframe2 } from "../service/S3MDataLoadFrame2Service";
import FormReceive from "./FormReceive";
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
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          Math.floor(random(1, 20))
        );
        console.log(e);
        sendmessageframe2(e, {
          url: url,
          username: username,
          password: password,
          client: client,
          topic: topic,
        });
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
    const iahVariables = [
      { min: minIAH13, max: maxIAH13, name: "IAH15" },
      { min: minIAH14, max: maxIAH14, name: "IAH14" },
      // Thêm các biến IAH khác tại đây
    ];
    for (const iahVar of iahVariables) {
      if (iahVar.min < 0) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} phải lớn hơn hoặc bằng 0`
        );
        return false;
      }

      if (iahVar.max > 100) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} phải nhỏ hơn hoặc bằng 100`
        );
        return false;
      }

      if (iahVar.min > iahVar.max) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} phải nhỏ hơn hoặc bằng max${iahVar.name}`
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

    // Nếu tất cả các biến IAH đều hợp lệ, trả về true
    // return true;
    //IAH1
    if (minIAH1 < 0) {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH1 > 100) {
      toastErrorAccessory("Lỗi IA-H1: maxIAH1 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH1 > maxIAH1) {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 phải nhỏ hơn hoặc bằng maxIAH1");
      return false;
    }

    if (minIAH1 === undefined || minIAH1 === null || minIAH1 === "") {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 không được để trống");
      return false;
    }

    if (maxIAH1 === undefined || maxIAH1 === null) {
      toastErrorAccessory("Lỗi IA-H1: maxIAH1 không được để trống");
      return false;
    }

    //IAH2
    if (minIAH2 < 0) {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH2 > 100) {
      toastErrorAccessory("Lỗi IA-H1: maxIAH1 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH2 > maxIAH2) {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 phải nhỏ hơn hoặc bằng maxIAH1");
      return false;
    }

    if (minIAH2 === undefined) {
      toastErrorAccessory("Lỗi IA-H1: minIAH1 không được để trống");
      return false;
    }

    if (maxIAH2 === undefined) {
      toastErrorAccessory("Lỗi IA-H1: maxIAH1 không được để trống");
      return false;
    }
    // Kiểm tra cho IA-H3
    if (minIAH3 < 0) {
      toastErrorAccessory("Lỗi IA-H3: minIAH3 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH3 > 100) {
      toastErrorAccessory("Lỗi IA-H3: maxIAH3 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH3 > maxIAH3) {
      toastErrorAccessory("Lỗi IA-H3: minIAH3 phải nhỏ hơn hoặc bằng maxIAH3");
      return false;
    }

    if (minIAH3 === undefined) {
      toastErrorAccessory("Lỗi IA-H3: minIAH3 không được để trống");
      return false;
    }

    if (maxIAH3 === undefined) {
      toastErrorAccessory("Lỗi IA-H3: maxIAH3 không được để trống");
      return false;
    }

    //IA-H4
    if (minIAH4 < 0) {
      toastErrorAccessory("Lỗi IA-H4: minIAH4 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH4 > 100) {
      toastErrorAccessory("Lỗi IA-H4: maxIAH4 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH4 > maxIAH4) {
      toastErrorAccessory("Lỗi IA-H4: minIAH4 phải nhỏ hơn hoặc bằng maxIAH4");
      return false;
    }

    if (minIAH4 === undefined) {
      toastErrorAccessory("Lỗi IA-H4: minIAH4 không được để trống");
      return false;
    }

    if (maxIAH4 === undefined) {
      toastErrorAccessory("Lỗi IA-H4: maxIAH4 không được để trống");
      return false;
    }

    if (minIAH5 < 0) {
      toastErrorAccessory("Lỗi IA-H5: minIAH5 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH5 > 100) {
      toastErrorAccessory("Lỗi IA-H5: maxIAH5 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH5 > maxIAH5) {
      toastErrorAccessory("Lỗi IA-H5: minIAH5 phải nhỏ hơn hoặc bằng maxIAH5");
      return false;
    }

    if (minIAH5 === undefined) {
      toastErrorAccessory("Lỗi IA-H5: minIAH5 không được để trống");
      return false;
    }

    if (maxIAH5 === undefined) {
      toastErrorAccessory("Lỗi IA-H5: maxIAH5 không được để trống");
      return false;
    }

    if (minIAH6 < 0) {
      toastErrorAccessory("Lỗi IA-H6: minIAH6 phải lớn hơn hoặc bằng 0");
      return false;
    }

    if (maxIAH6 > 100) {
      toastErrorAccessory("Lỗi IA-H6: maxIAH6 phải nhỏ hơn hoặc bằng 100");
      return false;
    }

    if (minIAH6 > maxIAH6) {
      toastErrorAccessory("Lỗi IA-H6: minIAH6 phải nhỏ hơn hoặc bằng maxIAH6");
      return false;
    }

    if (minIAH6 === undefined) {
      toastErrorAccessory("Lỗi IA-H6: minIAH6 không được để trống");
      return false;
    }

    if (maxIAH6 === undefined) {
      toastErrorAccessory("Lỗi IA-H6: maxIAH6 không được để trống");
      return false;
    }

    if (
      minIAH7 < 0 ||
      maxIAH7 > 100 ||
      maxIAH7 === undefined ||
      minIAH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH8 < 0 ||
      maxIAH8 > 100 ||
      maxIAH8 === undefined ||
      minIAH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH9 < 0 ||
      maxIAH9 > 100 ||
      maxIAH9 === undefined ||
      minIAH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH10 < 0 ||
      maxIAH10 > 100 ||
      maxIAH10 === undefined ||
      minIAH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH11 < 0 ||
      maxIAH11 > 100 ||
      maxIAH11 === undefined ||
      minIAH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH12 < 0 ||
      maxIAH12 > 100 ||
      maxIAH12 === undefined ||
      minIAH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH13 < 0 ||
      maxIAH13 > 100 ||
      maxIAH13 === undefined ||
      minIAH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH14 < 0 ||
      maxIAH14 > 100 ||
      maxIAH14 === undefined ||
      minIAH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIAH15 < 0 ||
      maxIAH15 > 100 ||
      maxIAH15 === undefined ||
      minIAH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH16 < 0 ||
      maxIAH16 > 100 ||
      maxIAH16 === undefined ||
      minIAH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH17 < 0 ||
      maxIAH17 > 100 ||
      maxIAH17 === undefined ||
      minIAH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH18 < 0 ||
      maxIAH18 > 100 ||
      maxIAH18 === undefined ||
      minIAH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH19 < 0 ||
      maxIAH19 > 100 ||
      maxIAH19 === undefined ||
      minIAH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH20 < 0 ||
      maxIAH20 > 100 ||
      maxIAH20 === undefined ||
      minIAH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH21 < 0 ||
      maxIAH21 > 100 ||
      maxIAH21 === undefined ||
      minIAH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH22 < 0 ||
      maxIAH22 > 100 ||
      maxIAH22 === undefined ||
      minIAH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH23 < 0 ||
      maxIAH23 > 100 ||
      maxIAH23 === undefined ||
      minIAH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH24 < 0 ||
      maxIAH24 > 100 ||
      maxIAH24 === undefined ||
      minIAH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH25 < 0 ||
      maxIAH25 > 100 ||
      maxIAH25 === undefined ||
      minIAH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH26 < 0 ||
      maxIAH26 > 100 ||
      maxIAH26 === undefined ||
      minIAH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH27 < 0 ||
      maxIAH27 > 100 ||
      maxIAH27 === undefined ||
      minIAH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH28 < 0 ||
      maxIAH28 > 100 ||
      maxIAH28 === undefined ||
      minIAH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH29 < 0 ||
      maxIAH29 > 100 ||
      maxIAH29 === undefined ||
      minIAH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH30 < 0 ||
      maxIAH30 > 100 ||
      maxIAH30 === undefined ||
      minIAH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIAH31 < 0 ||
      maxIAH31 > 100 ||
      maxIAH31 === undefined ||
      minIAH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH1 < 0 ||
      maxIBH1 > 100 ||
      minIBH1 === undefined ||
      minIBH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH2 < 0 ||
      maxIBH2 > 100 ||
      minIBH2 === undefined ||
      maxIBH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH3 < 0 ||
      maxIBH3 > 100 ||
      maxIBH3 === undefined ||
      minIBH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH4 < 0 ||
      maxIBH4 > 100 ||
      maxIBH4 === undefined ||
      minIBH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH5 < 0 ||
      maxIBH5 > 100 ||
      maxIBH5 === undefined ||
      minIBH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH6 < 0 ||
      maxIBH6 > 100 ||
      maxIBH6 === undefined ||
      minIBH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH7 < 0 ||
      maxIBH7 > 100 ||
      maxIBH7 === undefined ||
      minIBH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH8 < 0 ||
      maxIBH8 > 100 ||
      maxIBH8 === undefined ||
      minIBH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH9 < 0 ||
      maxIBH9 > 100 ||
      maxIBH9 === undefined ||
      minIBH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH10 < 0 ||
      maxIBH10 > 100 ||
      maxIBH10 === undefined ||
      minIBH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH11 < 0 ||
      maxIBH11 > 100 ||
      maxIBH11 === undefined ||
      minIBH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH12 < 0 ||
      maxIBH12 > 100 ||
      maxIBH12 === undefined ||
      minIBH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH13 < 0 ||
      maxIBH13 > 100 ||
      maxIBH13 === undefined ||
      minIBH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH14 < 0 ||
      maxIBH14 > 100 ||
      maxIBH14 === undefined ||
      minIBH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minIBH15 < 0 ||
      maxIBH15 > 100 ||
      maxIBH15 === undefined ||
      minIBH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH16 < 0 ||
      maxIBH16 > 100 ||
      maxIBH16 === undefined ||
      minIBH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH17 < 0 ||
      maxIBH17 > 100 ||
      maxIBH17 === undefined ||
      minIBH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH18 < 0 ||
      maxIBH18 > 100 ||
      maxIBH18 === undefined ||
      minIBH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH19 < 0 ||
      maxIBH19 > 100 ||
      maxIBH19 === undefined ||
      minIBH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH20 < 0 ||
      maxIBH20 > 100 ||
      maxIBH20 === undefined ||
      minIBH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH21 < 0 ||
      maxIBH21 > 100 ||
      maxIBH21 === undefined ||
      minIBH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH22 < 0 ||
      maxIBH22 > 100 ||
      maxIBH22 === undefined ||
      minIBH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH23 < 0 ||
      maxIBH23 > 100 ||
      maxIBH23 === undefined ||
      minIBH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH24 < 0 ||
      maxIBH24 > 100 ||
      maxIBH24 === undefined ||
      minIBH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH25 < 0 ||
      maxIBH25 > 100 ||
      maxIBH25 === undefined ||
      minIBH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH26 < 0 ||
      maxIBH26 > 100 ||
      maxIBH26 === undefined ||
      minIBH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH27 < 0 ||
      maxIBH27 > 100 ||
      maxIBH27 === undefined ||
      minIBH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH28 < 0 ||
      maxIBH28 > 100 ||
      maxIBH28 === undefined ||
      minIBH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH29 < 0 ||
      maxIBH29 > 100 ||
      maxIBH29 === undefined ||
      minIBH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH30 < 0 ||
      maxIBH30 > 100 ||
      maxIBH30 === undefined ||
      minIBH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minIBH31 < 0 ||
      maxIBH31 > 100 ||
      maxIBH31 === undefined ||
      minIBH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH1 < 0 ||
      maxICH1 > 100 ||
      minICH1 === undefined ||
      minICH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH2 < 0 ||
      maxICH2 > 100 ||
      minICH2 === undefined ||
      maxICH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH3 < 0 ||
      maxICH3 > 100 ||
      maxICH3 === undefined ||
      minICH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH4 < 0 ||
      maxICH4 > 100 ||
      maxICH4 === undefined ||
      minICH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH5 < 0 ||
      maxICH5 > 100 ||
      maxICH5 === undefined ||
      minICH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH6 < 0 ||
      maxICH6 > 100 ||
      maxICH6 === undefined ||
      minICH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH7 < 0 ||
      maxICH7 > 100 ||
      maxICH7 === undefined ||
      minICH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH8 < 0 ||
      maxICH8 > 100 ||
      maxICH8 === undefined ||
      minICH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH9 < 0 ||
      maxICH9 > 100 ||
      maxICH9 === undefined ||
      minICH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH10 < 0 ||
      maxICH10 > 100 ||
      maxICH10 === undefined ||
      minICH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH11 < 0 ||
      maxICH11 > 100 ||
      maxICH11 === undefined ||
      minICH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH12 < 0 ||
      maxICH12 > 100 ||
      maxICH12 === undefined ||
      minICH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH13 < 0 ||
      maxICH13 > 100 ||
      maxICH13 === undefined ||
      minICH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH14 < 0 ||
      maxICH14 > 100 ||
      maxICH14 === undefined ||
      minICH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minICH15 < 0 ||
      maxICH15 > 100 ||
      maxICH15 === undefined ||
      minICH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH16 < 0 ||
      maxICH16 > 100 ||
      maxICH16 === undefined ||
      minICH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH17 < 0 ||
      maxICH17 > 100 ||
      maxICH17 === undefined ||
      minICH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH18 < 0 ||
      maxICH18 > 100 ||
      maxICH18 === undefined ||
      minICH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH19 < 0 ||
      maxICH19 > 100 ||
      maxICH19 === undefined ||
      minICH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH20 < 0 ||
      maxICH20 > 100 ||
      maxICH20 === undefined ||
      minICH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH21 < 0 ||
      maxICH21 > 100 ||
      maxICH21 === undefined ||
      minICH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH22 < 0 ||
      maxICH22 > 100 ||
      maxICH22 === undefined ||
      minICH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH23 < 0 ||
      maxICH23 > 100 ||
      maxICH23 === undefined ||
      minICH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH24 < 0 ||
      maxICH24 > 100 ||
      maxICH24 === undefined ||
      minICH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH25 < 0 ||
      maxICH25 > 100 ||
      maxICH25 === undefined ||
      minICH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH26 < 0 ||
      maxICH26 > 100 ||
      maxICH26 === undefined ||
      minICH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH27 < 0 ||
      maxICH27 > 100 ||
      maxICH27 === undefined ||
      minICH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH28 < 0 ||
      maxICH28 > 100 ||
      maxICH28 === undefined ||
      minICH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH29 < 0 ||
      maxICH29 > 100 ||
      maxICH29 === undefined ||
      minICH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH30 < 0 ||
      maxICH30 > 100 ||
      maxICH30 === undefined ||
      minICH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minICH31 < 0 ||
      maxICH31 > 100 ||
      maxICH31 === undefined ||
      minICH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH1 < 0 ||
      maxVABH1 > 100 ||
      minVABH1 === undefined ||
      minVABH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH2 < 0 ||
      maxVABH2 > 100 ||
      minVABH2 === undefined ||
      maxVABH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH3 < 0 ||
      maxVABH3 > 100 ||
      maxVABH3 === undefined ||
      minVABH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH4 < 0 ||
      maxVABH4 > 100 ||
      maxVABH4 === undefined ||
      minVABH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH5 < 0 ||
      maxVABH5 > 100 ||
      maxVABH5 === undefined ||
      minVABH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH6 < 0 ||
      maxVABH6 > 100 ||
      maxVABH6 === undefined ||
      minVABH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH7 < 0 ||
      maxVABH7 > 100 ||
      maxVABH7 === undefined ||
      minVABH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH8 < 0 ||
      maxVABH8 > 100 ||
      maxVABH8 === undefined ||
      minVABH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH9 < 0 ||
      maxVABH9 > 100 ||
      maxVABH9 === undefined ||
      minVABH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH10 < 0 ||
      maxVABH10 > 100 ||
      maxVABH10 === undefined ||
      minVABH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH11 < 0 ||
      maxVABH11 > 100 ||
      maxVABH11 === undefined ||
      minVABH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH12 < 0 ||
      maxVABH12 > 100 ||
      maxVABH12 === undefined ||
      minVABH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH13 < 0 ||
      maxVABH13 > 100 ||
      maxVABH13 === undefined ||
      minVABH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH14 < 0 ||
      maxVABH14 > 100 ||
      maxVABH14 === undefined ||
      minVABH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVABH15 < 0 ||
      maxVABH15 > 100 ||
      maxVABH15 === undefined ||
      minVABH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH16 < 0 ||
      maxVABH16 > 100 ||
      maxVABH16 === undefined ||
      minVABH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH17 < 0 ||
      maxVABH17 > 100 ||
      maxVABH17 === undefined ||
      minVABH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH18 < 0 ||
      maxVABH18 > 100 ||
      maxVABH18 === undefined ||
      minVABH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH19 < 0 ||
      maxVABH19 > 100 ||
      maxVABH19 === undefined ||
      minVABH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH20 < 0 ||
      maxVABH20 > 100 ||
      maxVABH20 === undefined ||
      minVABH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH21 < 0 ||
      maxVABH21 > 100 ||
      maxVABH21 === undefined ||
      minVABH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH22 < 0 ||
      maxVABH22 > 100 ||
      maxVABH22 === undefined ||
      minVABH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH23 < 0 ||
      maxVABH23 > 100 ||
      maxVABH23 === undefined ||
      minVABH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH24 < 0 ||
      maxVABH24 > 100 ||
      maxVABH24 === undefined ||
      minVABH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH25 < 0 ||
      maxVABH25 > 100 ||
      maxVABH25 === undefined ||
      minVABH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH26 < 0 ||
      maxVABH26 > 100 ||
      maxVABH26 === undefined ||
      minVABH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH27 < 0 ||
      maxVABH27 > 100 ||
      maxVABH27 === undefined ||
      minVABH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH28 < 0 ||
      maxVABH28 > 100 ||
      maxVABH28 === undefined ||
      minVABH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH29 < 0 ||
      maxVABH29 > 100 ||
      maxVABH29 === undefined ||
      minVABH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH30 < 0 ||
      maxVABH30 > 100 ||
      maxVABH30 === undefined ||
      minVABH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVABH31 < 0 ||
      maxVABH31 > 100 ||
      maxVABH31 === undefined ||
      minVABH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH1 < 0 ||
      maxVBCH1 > 100 ||
      minVBCH1 === undefined ||
      minVBCH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH2 < 0 ||
      maxVBCH2 > 100 ||
      minVBCH2 === undefined ||
      maxVBCH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH3 < 0 ||
      maxVBCH3 > 100 ||
      maxVBCH3 === undefined ||
      minVBCH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH4 < 0 ||
      maxVBCH4 > 100 ||
      maxVBCH4 === undefined ||
      minVBCH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH5 < 0 ||
      maxVBCH5 > 100 ||
      maxVBCH5 === undefined ||
      minVBCH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH6 < 0 ||
      maxVBCH6 > 100 ||
      maxVBCH6 === undefined ||
      minVBCH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH7 < 0 ||
      maxVBCH7 > 100 ||
      maxVBCH7 === undefined ||
      minVBCH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH8 < 0 ||
      maxVBCH8 > 100 ||
      maxVBCH8 === undefined ||
      minVBCH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH9 < 0 ||
      maxVBCH9 > 100 ||
      maxVBCH9 === undefined ||
      minVBCH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH10 < 0 ||
      maxVBCH10 > 100 ||
      maxVBCH10 === undefined ||
      minVBCH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH11 < 0 ||
      maxVBCH11 > 100 ||
      maxVBCH11 === undefined ||
      minVBCH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH12 < 0 ||
      maxVBCH12 > 100 ||
      maxVBCH12 === undefined ||
      minVBCH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH13 < 0 ||
      maxVBCH13 > 100 ||
      maxVBCH13 === undefined ||
      minVBCH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH14 < 0 ||
      maxVBCH14 > 100 ||
      maxVBCH14 === undefined ||
      minVBCH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBCH15 < 0 ||
      maxVBCH15 > 100 ||
      maxVBCH15 === undefined ||
      minVBCH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH16 < 0 ||
      maxVBCH16 > 100 ||
      maxVBCH16 === undefined ||
      minVBCH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH17 < 0 ||
      maxVBCH17 > 100 ||
      maxVBCH17 === undefined ||
      minVBCH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH18 < 0 ||
      maxVBCH18 > 100 ||
      maxVBCH18 === undefined ||
      minVBCH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH19 < 0 ||
      maxVBCH19 > 100 ||
      maxVBCH19 === undefined ||
      minVBCH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH20 < 0 ||
      maxVBCH20 > 100 ||
      maxVBCH20 === undefined ||
      minVBCH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH21 < 0 ||
      maxVBCH21 > 100 ||
      maxVBCH21 === undefined ||
      minVBCH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH22 < 0 ||
      maxVBCH22 > 100 ||
      maxVBCH22 === undefined ||
      minVBCH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH23 < 0 ||
      maxVBCH23 > 100 ||
      maxVBCH23 === undefined ||
      minVBCH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH24 < 0 ||
      maxVBCH24 > 100 ||
      maxVBCH24 === undefined ||
      minVBCH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH25 < 0 ||
      maxVBCH25 > 100 ||
      maxVBCH25 === undefined ||
      minVBCH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH26 < 0 ||
      maxVBCH26 > 100 ||
      maxVBCH26 === undefined ||
      minVBCH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH27 < 0 ||
      maxVBCH27 > 100 ||
      maxVBCH27 === undefined ||
      minVBCH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH28 < 0 ||
      maxVBCH28 > 100 ||
      maxVBCH28 === undefined ||
      minVBCH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH29 < 0 ||
      maxVBCH29 > 100 ||
      maxVBCH29 === undefined ||
      minVBCH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH30 < 0 ||
      maxVBCH30 > 100 ||
      maxVBCH30 === undefined ||
      minVBCH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBCH31 < 0 ||
      maxVBCH31 > 100 ||
      maxVBCH31 === undefined ||
      minVBCH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH1 < 0 ||
      maxVCAH1 > 100 ||
      minVCAH1 === undefined ||
      minVCAH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH2 < 0 ||
      maxVCAH2 > 100 ||
      minVCAH2 === undefined ||
      maxVCAH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH3 < 0 ||
      maxVCAH3 > 100 ||
      maxVCAH3 === undefined ||
      minVCAH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH4 < 0 ||
      maxVCAH4 > 100 ||
      maxVCAH4 === undefined ||
      minVCAH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH5 < 0 ||
      maxVCAH5 > 100 ||
      maxVCAH5 === undefined ||
      minVCAH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH6 < 0 ||
      maxVCAH6 > 100 ||
      maxVCAH6 === undefined ||
      minVCAH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH7 < 0 ||
      maxVCAH7 > 100 ||
      maxVCAH7 === undefined ||
      minVCAH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH8 < 0 ||
      maxVCAH8 > 100 ||
      maxVCAH8 === undefined ||
      minVCAH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH9 < 0 ||
      maxVCAH9 > 100 ||
      maxVCAH9 === undefined ||
      minVCAH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH10 < 0 ||
      maxVCAH10 > 100 ||
      maxVCAH10 === undefined ||
      minVCAH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH11 < 0 ||
      maxVCAH11 > 100 ||
      maxVCAH11 === undefined ||
      minVCAH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH12 < 0 ||
      maxVCAH12 > 100 ||
      maxVCAH12 === undefined ||
      minVCAH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH13 < 0 ||
      maxVCAH13 > 100 ||
      maxVCAH13 === undefined ||
      minVCAH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH14 < 0 ||
      maxVCAH14 > 100 ||
      maxVCAH14 === undefined ||
      minVCAH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCAH15 < 0 ||
      maxVCAH15 > 100 ||
      maxVCAH15 === undefined ||
      minVCAH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH16 < 0 ||
      maxVCAH16 > 100 ||
      maxVCAH16 === undefined ||
      minVCAH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH17 < 0 ||
      maxVCAH17 > 100 ||
      maxVCAH17 === undefined ||
      minVCAH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH18 < 0 ||
      maxVCAH18 > 100 ||
      maxVCAH18 === undefined ||
      minVCAH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH19 < 0 ||
      maxVCAH19 > 100 ||
      maxVCAH19 === undefined ||
      minVCAH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH20 < 0 ||
      maxVCAH20 > 100 ||
      maxVCAH20 === undefined ||
      minVCAH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH21 < 0 ||
      maxVCAH21 > 100 ||
      maxVCAH21 === undefined ||
      minVCAH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH22 < 0 ||
      maxVCAH22 > 100 ||
      maxVCAH22 === undefined ||
      minVCAH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH23 < 0 ||
      maxVCAH23 > 100 ||
      maxVCAH23 === undefined ||
      minVCAH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH24 < 0 ||
      maxVCAH24 > 100 ||
      maxVCAH24 === undefined ||
      minVCAH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH25 < 0 ||
      maxVCAH25 > 100 ||
      maxVCAH25 === undefined ||
      minVCAH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH26 < 0 ||
      maxVCAH26 > 100 ||
      maxVCAH26 === undefined ||
      minVCAH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH27 < 0 ||
      maxVCAH27 > 100 ||
      maxVCAH27 === undefined ||
      minVCAH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH28 < 0 ||
      maxVCAH28 > 100 ||
      maxVCAH28 === undefined ||
      minVCAH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH29 < 0 ||
      maxVCAH29 > 100 ||
      maxVCAH29 === undefined ||
      minVCAH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH30 < 0 ||
      maxVCAH30 > 100 ||
      maxVCAH30 === undefined ||
      minVCAH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCAH31 < 0 ||
      maxVCAH31 > 100 ||
      maxVCAH31 === undefined ||
      minVCAH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH1 < 0 ||
      maxVANH1 > 100 ||
      minVANH1 === undefined ||
      minVANH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH2 < 0 ||
      maxVANH2 > 100 ||
      minVANH2 === undefined ||
      maxVANH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH3 < 0 ||
      maxVANH3 > 100 ||
      maxVANH3 === undefined ||
      minVANH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH4 < 0 ||
      maxVANH4 > 100 ||
      maxVANH4 === undefined ||
      minVANH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH5 < 0 ||
      maxVANH5 > 100 ||
      maxVANH5 === undefined ||
      minVANH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH6 < 0 ||
      maxVANH6 > 100 ||
      maxVANH6 === undefined ||
      minVANH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH7 < 0 ||
      maxVANH7 > 100 ||
      maxVANH7 === undefined ||
      minVANH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH8 < 0 ||
      maxVANH8 > 100 ||
      maxVANH8 === undefined ||
      minVANH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH9 < 0 ||
      maxVANH9 > 100 ||
      maxVANH9 === undefined ||
      minVANH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH10 < 0 ||
      maxVANH10 > 100 ||
      maxVANH10 === undefined ||
      minVANH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH11 < 0 ||
      maxVANH11 > 100 ||
      maxVANH11 === undefined ||
      minVANH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH12 < 0 ||
      maxVANH12 > 100 ||
      maxVANH12 === undefined ||
      minVANH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH13 < 0 ||
      maxVANH13 > 100 ||
      maxVANH13 === undefined ||
      minVANH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH14 < 0 ||
      maxVANH14 > 100 ||
      maxVANH14 === undefined ||
      minVANH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVANH15 < 0 ||
      maxVANH15 > 100 ||
      maxVANH15 === undefined ||
      minVANH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH16 < 0 ||
      maxVANH16 > 100 ||
      maxVANH16 === undefined ||
      minVANH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH17 < 0 ||
      maxVANH17 > 100 ||
      maxVANH17 === undefined ||
      minVANH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH18 < 0 ||
      maxVANH18 > 100 ||
      maxVANH18 === undefined ||
      minVANH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH19 < 0 ||
      maxVANH19 > 100 ||
      maxVANH19 === undefined ||
      minVANH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH20 < 0 ||
      maxVANH20 > 100 ||
      maxVANH20 === undefined ||
      minVANH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH21 < 0 ||
      maxVANH21 > 100 ||
      maxVANH21 === undefined ||
      minVANH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH22 < 0 ||
      maxVANH22 > 100 ||
      maxVANH22 === undefined ||
      minVANH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH23 < 0 ||
      maxVANH23 > 100 ||
      maxVANH23 === undefined ||
      minVANH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH24 < 0 ||
      maxVANH24 > 100 ||
      maxVANH24 === undefined ||
      minVANH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH25 < 0 ||
      maxVANH25 > 100 ||
      maxVANH25 === undefined ||
      minVANH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH26 < 0 ||
      maxVANH26 > 100 ||
      maxVANH26 === undefined ||
      minVANH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH27 < 0 ||
      maxVANH27 > 100 ||
      maxVANH27 === undefined ||
      minVANH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH28 < 0 ||
      maxVANH28 > 100 ||
      maxVANH28 === undefined ||
      minVANH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH29 < 0 ||
      maxVANH29 > 100 ||
      maxVANH29 === undefined ||
      minVANH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH30 < 0 ||
      maxVANH30 > 100 ||
      maxVANH30 === undefined ||
      minVANH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVANH31 < 0 ||
      maxVANH31 > 100 ||
      maxVANH31 === undefined ||
      minVANH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH1 < 0 ||
      maxVBNH1 > 100 ||
      minVBNH1 === undefined ||
      minVBNH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH2 < 0 ||
      maxVBNH2 > 100 ||
      minVBNH2 === undefined ||
      maxVBNH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH3 < 0 ||
      maxVBNH3 > 100 ||
      maxVBNH3 === undefined ||
      minVBNH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH4 < 0 ||
      maxVBNH4 > 100 ||
      maxVBNH4 === undefined ||
      minVBNH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH5 < 0 ||
      maxVBNH5 > 100 ||
      maxVBNH5 === undefined ||
      minVBNH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH6 < 0 ||
      maxVBNH6 > 100 ||
      maxVBNH6 === undefined ||
      minVBNH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH7 < 0 ||
      maxVBNH7 > 100 ||
      maxVBNH7 === undefined ||
      minVBNH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH8 < 0 ||
      maxVBNH8 > 100 ||
      maxVBNH8 === undefined ||
      minVBNH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH9 < 0 ||
      maxVBNH9 > 100 ||
      maxVBNH9 === undefined ||
      minVBNH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH10 < 0 ||
      maxVBNH10 > 100 ||
      maxVBNH10 === undefined ||
      minVBNH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH11 < 0 ||
      maxVBNH11 > 100 ||
      maxVBNH11 === undefined ||
      minVBNH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH12 < 0 ||
      maxVBNH12 > 100 ||
      maxVBNH12 === undefined ||
      minVBNH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH13 < 0 ||
      maxVBNH13 > 100 ||
      maxVBNH13 === undefined ||
      minVBNH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH14 < 0 ||
      maxVBNH14 > 100 ||
      maxVBNH14 === undefined ||
      minVBNH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVBNH15 < 0 ||
      maxVBNH15 > 100 ||
      maxVBNH15 === undefined ||
      minVBNH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH16 < 0 ||
      maxVBNH16 > 100 ||
      maxVBNH16 === undefined ||
      minVBNH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH17 < 0 ||
      maxVBNH17 > 100 ||
      maxVBNH17 === undefined ||
      minVBNH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH18 < 0 ||
      maxVBNH18 > 100 ||
      maxVBNH18 === undefined ||
      minVBNH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH19 < 0 ||
      maxVBNH19 > 100 ||
      maxVBNH19 === undefined ||
      minVBNH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH20 < 0 ||
      maxVBNH20 > 100 ||
      maxVBNH20 === undefined ||
      minVBNH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH21 < 0 ||
      maxVBNH21 > 100 ||
      maxVBNH21 === undefined ||
      minVBNH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH22 < 0 ||
      maxVBNH22 > 100 ||
      maxVBNH22 === undefined ||
      minVBNH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH23 < 0 ||
      maxVBNH23 > 100 ||
      maxVBNH23 === undefined ||
      minVBNH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH24 < 0 ||
      maxVBNH24 > 100 ||
      maxVBNH24 === undefined ||
      minVBNH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH25 < 0 ||
      maxVBNH25 > 100 ||
      maxVBNH25 === undefined ||
      minVBNH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH26 < 0 ||
      maxVBNH26 > 100 ||
      maxVBNH26 === undefined ||
      minVBNH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH27 < 0 ||
      maxVBNH27 > 100 ||
      maxVBNH27 === undefined ||
      minVBNH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH28 < 0 ||
      maxVBNH28 > 100 ||
      maxVBNH28 === undefined ||
      minVBNH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH29 < 0 ||
      maxVBNH29 > 100 ||
      maxVBNH29 === undefined ||
      minVBNH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH30 < 0 ||
      maxVBNH30 > 100 ||
      maxVBNH30 === undefined ||
      minVBNH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVBNH31 < 0 ||
      maxVBNH31 > 100 ||
      maxVBNH31 === undefined ||
      minVBNH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH1 < 0 ||
      maxVCNH1 > 100 ||
      minVCNH1 === undefined ||
      minVCNH1 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH2 < 0 ||
      maxVCNH2 > 100 ||
      minVCNH2 === undefined ||
      maxVCNH2 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH3 < 0 ||
      maxVCNH3 > 100 ||
      maxVCNH3 === undefined ||
      minVCNH3 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH4 < 0 ||
      maxVCNH4 > 100 ||
      maxVCNH4 === undefined ||
      minVCNH4 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH5 < 0 ||
      maxVCNH5 > 100 ||
      maxVCNH5 === undefined ||
      minVCNH5 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH6 < 0 ||
      maxVCNH6 > 100 ||
      maxVCNH6 === undefined ||
      minVCNH6 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH7 < 0 ||
      maxVCNH7 > 100 ||
      maxVCNH7 === undefined ||
      minVCNH7 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH8 < 0 ||
      maxVCNH8 > 100 ||
      maxVCNH8 === undefined ||
      minVCNH8 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH9 < 0 ||
      maxVCNH9 > 100 ||
      maxVCNH9 === undefined ||
      minVCNH9 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH10 < 0 ||
      maxVCNH10 > 100 ||
      maxVCNH10 === undefined ||
      minVCNH10 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH11 < 0 ||
      maxVCNH11 > 100 ||
      maxVCNH11 === undefined ||
      minVCNH11 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH12 < 0 ||
      maxVCNH12 > 100 ||
      maxVCNH12 === undefined ||
      minVCNH12 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH13 < 0 ||
      maxVCNH13 > 100 ||
      maxVCNH13 === undefined ||
      minVCNH13 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH14 < 0 ||
      maxVCNH14 > 100 ||
      maxVCNH14 === undefined ||
      minVCNH14 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    if (
      minVCNH15 < 0 ||
      maxVCNH15 > 100 ||
      maxVCNH15 === undefined ||
      minVCNH15 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH16 < 0 ||
      maxVCNH16 > 100 ||
      maxVCNH16 === undefined ||
      minVCNH16 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH17 < 0 ||
      maxVCNH17 > 100 ||
      maxVCNH17 === undefined ||
      minVCNH17 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH18 < 0 ||
      maxVCNH18 > 100 ||
      maxVCNH18 === undefined ||
      minVCNH18 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH19 < 0 ||
      maxVCNH19 > 100 ||
      maxVCNH19 === undefined ||
      minVCNH19 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH20 < 0 ||
      maxVCNH20 > 100 ||
      maxVCNH20 === undefined ||
      minVCNH20 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH21 < 0 ||
      maxVCNH21 > 100 ||
      maxVCNH21 === undefined ||
      minVCNH21 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH22 < 0 ||
      maxVCNH22 > 100 ||
      maxVCNH22 === undefined ||
      minVCNH22 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH23 < 0 ||
      maxVCNH23 > 100 ||
      maxVCNH23 === undefined ||
      minVCNH23 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH24 < 0 ||
      maxVCNH24 > 100 ||
      maxVCNH24 === undefined ||
      minVCNH24 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH25 < 0 ||
      maxVCNH25 > 100 ||
      maxVCNH25 === undefined ||
      minVCNH25 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH26 < 0 ||
      maxVCNH26 > 100 ||
      maxVCNH26 === undefined ||
      minVCNH26 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH27 < 0 ||
      maxVCNH27 > 100 ||
      maxVCNH27 === undefined ||
      minVCNH27 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH28 < 0 ||
      maxVCNH28 > 100 ||
      maxVCNH28 === undefined ||
      minVCNH28 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH29 < 0 ||
      maxVCNH29 > 100 ||
      maxVCNH29 === undefined ||
      minVCNH29 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH30 < 0 ||
      maxVCNH30 > 100 ||
      maxVCNH30 === undefined ||
      minVCNH30 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }
    if (
      minVCNH31 < 0 ||
      maxVCNH31 > 100 ||
      maxVCNH31 === undefined ||
      minVCNH31 === undefined
    ) {
      console.log("Lỗi");
      return false;
    }

    return true;
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
  return (
    <>
      <div className="mt-2 row">
        <div className="col-8">
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
                <div className="col-6">
                  <FormReceive
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
                  />
                </div>
                <div className="col-6">
                  <h4 style={{ fontSize: "20px" }} className="mt-2">
                    Url: {url === "" ? <i>không có dữ liệu</i> : url}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Username:{" "}
                    {username === "" ? <i>không có dữ liệu</i> : username}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Password:{" "}
                    {password === "" ? <i>không có dữ liệu</i> : "*******"}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Client: {client === "" ? <i>không có dữ liệu</i> : client}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Topic: {topic === "" ? <i>không có dữ liệu</i> : topic}
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
                title="IB_H1"
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
                title="IB_H2"
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
                title="IB_H3"
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
                title="IB_H4"
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
                title="IB_H5"
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
                title="IB_H6"
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
                title="IB_H7"
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
                title="IB_H8"
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
                title="IB_H9"
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
                title="IB_H10"
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
                title="IB_H11"
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
                title="IB_H12"
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
                title="IB_H13"
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
                title="IB_H14"
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
                title="IB_H15"
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
                title="IB_H16"
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
                title="IB_H17"
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
                title="IB_H18"
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
                title="IB_H19"
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
                title="IB_H20"
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
                title="IB_H21"
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
                title="IB_H22"
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
                title="IB_H23"
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
                title="IB_H25"
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
                title="IB_H26"
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
                title="IB_H27"
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
                title="IB_H28"
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
                title="IB_H29"
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
                title="IB_H30"
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
                title="IB_H31"
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
