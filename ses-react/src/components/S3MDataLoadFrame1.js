import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "../styles/card.css";
import InputMinMax from "./InputMinMax";
import FormReceive from "./FormReceive";
import FormReceive2 from "./FormReceive2";
import S3MDataLoadFrame1Entity from "../entities/S3MDataLoadFrame1Entity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendmessage } from "../service/S3MDataLoadFrame1Service";
import Context from "../store/Context";
import { updatestatus } from "../store/Actions";
export default function S3MDataLoadFrame1(props) {
  const [state, dispatch] = useContext(Context);
  function formatDateToDDMMYYYYHHMMSS(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const [frequency, setFrequency] = useState(3000);
  const handelChangeInputTime = (event) => {
    if (event.target.value === "") {
      setFrequency(0);
    }
    setFrequency(event.target.value);
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
  const isInputError = () => {};
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
  const random = (min, max) => {
    return parseFloat(
      Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
    );
  };
  const [timerId, setTimerId] = useState(null);

  const updateStatus = (payload) => {
    dispatch(updatestatus(payload));
  };

  const handelCkickRun = () => {
    updateStatus({ key: props.data, status: true });
    console.log(url, username, password, client, topic);

    if (timerId != null) {
      clearInterval(timerId);
    }
    if (validationForm() === true) {
      const timer = setInterval(() => {
        const e = new S3MDataLoadFrame1Entity(
          random(minUab, maxUab),
          random(minUbc, maxUbc),
          random(minUca, maxUca),
          random(minUll, maxUll),
          random(minUan, maxUan),
          random(minUbn, maxUbn),
          random(minUcn, maxUcn),
          random(minUln, maxUln),
          random(minIa, maxIa),
          random(minIb, maxIb),
          random(minIc, maxIc),
          random(minIN, maxIN),
          random(minIG, maxIG),
          random(minIAvg, maxIAvg),
          random(minPa, maxPa),
          random(minPb, maxPb),
          random(minPc, maxPc),
          random(minPTotal, maxPTotal),
          random(minQa, maxQa),
          random(minQb, maxQb),
          random(minQc, maxQc),
          random(minQTotal, maxQTotal),
          random(minSa, maxSa),
          random(minSb, maxSb),
          random(minSc, maxSc),
          random(minSTotal, maxSTotal),
          random(minPfa, maxPfa),
          random(minPfb, maxPfb),
          random(minPfc, maxPfc),
          random(minPFAvg, maxPFAvg),
          random(minF, maxF),
          Math.floor(random(minEp, maxEp)),
          Math.floor(random(minEpR, maxEpR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEq, maxEq)),
          Math.floor(random(minEqR, maxEqR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEs, maxEs)),
          Math.floor(random(minEsR, maxEsR)),
          Math.floor(random(minEsDR, maxEsDR)),
          Math.floor(random(minEsDRR, maxEsDRR)),
          random(minT1, maxT2),
          random(minT2, maxT2),
          random(minT3, maxT3),
          Math.floor(random(minCommandData1, maxCommandData1)),
          Math.floor(random(minCommandData2, maxCommandData2)),
          Math.floor(random(minCommandData3, maxCommandData3)),
          Math.floor(random(minCommandData4, maxCommandData4)),
          Math.floor(random(minCommandData5, maxCommandData5)),
          Math.floor(random(minCommandData6, maxCommandData6)),
          random(minThdIa, maxThdIa),
          random(minThdIb, maxThdIb),
          random(minThdIc, maxThdIc),
          random(minThdIg, maxThdIg),
          random(minThdVab, maxThdVab),
          random(minThdVbc, maxThdVbc),
          random(minThdVca, maxThdVca),
          random(minThdVan, maxThdVan),
          random(minThdVll, maxThdVll),
          random(minThdVbn, maxThdVbn),
          random(minThdVcn, maxThdVcn),
          random(minThdVln, maxThdVln),
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          random(minThdIn, maxThdIn),
          Math.floor(random(0, 10000000)),
          deviceId
        );
        sendmessage(
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
            func: func,
            messageType: messageType,
            crc: crc,
          }
        );
      }, frequency);
      setTimerId(timer);
      return () => clearInterval(timer);
    } else {
      // toastErrorAccessory("Dữ liệu truyền vào không hợp lệ");
    }
  };
  const handelCkickStop = () => {
    updateStatus({ key: props.data, status: false });
    clearInterval(timerId);
  };
  const validationForm = (props) => {
    const fields = [
      { value: url, message: "Vui lòng nhập URL" },
      { value: username, message: "Vui lòng nhập username" },
      { value: password, message: "Vui lòng nhập Password" },
      { value: topic, message: "Vui lòng nhập Topic" },
      { value: client, message: "Vui lòng nhập Client-ID" },
      { value: func, message: "Vui lòng nhập Code Function" },
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
      //0-45k 0-10K
      { min0: minUab, max45k: maxUab, name: "Uab" },
      { min0: minUbc, max45k: maxUbc, name: "Ubc" },
      { min0: minUca, max45k: maxUca, name: "Uca" },
      { min0: minUll, max45k: maxUll, name: "Ull" },
      { min0: minUan, max45k: maxUan, name: "Uan" },
      { min0: minUbn, max45k: maxUbn, name: "Ubn" },
      { min0: minUcn, max45k: maxUcn, name: "Ucn" },
      { min0: minUln, max45k: maxUln, name: "Uln" },
      { min0: minIa, max10k: maxIa, name: "Ia" },
      { min0: minIb, max10k: maxIb, name: "Ib" },
      { min0: minIc, max10k: maxIc, name: "Ic" },
      { min0: minIN, max10k: maxIN, name: "In" },
      { min0: minIG, max10k: maxIG, name: "Ig" },
      { min0: minIAvg, max10k: maxIAvg, name: "Iavg" },

      //[-2:2]M
      { min2M: minPa, max2M: maxPa, name: "Pa" },
      { min2M: minPb, max2M: maxPb, name: "Pb" },
      { min2M: minPc, max2M: maxPc, name: "Pc" },
      { min6M: minPTotal, max6M: maxPTotal, name: "PTotal" },
      { min2M: minQa, max2M: maxQa, name: "Qa" },
      { min2M: minQb, max2M: maxQb, name: "Qb" },
      { min2M: minQc, max2M: maxQc, name: "Qc" },
      { min2M: minQTotal, max2M: maxQTotal, name: "QTotal" },

      //[0:2]M [0:6]M
      { min: minSa, max2M: maxSa, name: "Sa" },
      { min: minSb, max2M: maxSb, name: "Sb" },
      { min: minSc, max2M: maxSc, name: "Sc" },
      { min: minSTotal, max6M: maxSTotal, name: "STotal" },

      //[-1:1]
      { min1: minPfa, max1: maxPfa, name: "PFa" },
      { min1: minPfb, max1: maxPfb, name: "PFb" },
      { min1: minPfc, max1: maxPfc, name: "PFc" },
      { min1: minPFAvg, max1: maxPFAvg, name: "PFavg" },

      //F, EP, EQ, ES
      { min: minF, max4B: maxF, name: "F" },
      { min: minEp, max4B: maxEp, name: "EP" },
      { min: minEq, max4B: maxEq, name: "EQ" },
      { min: minEs, max4B: maxEs, name: "ES" },

      //T1,2,3
      { min100: minT1, max200: maxT1, name: "T1" },
      { min100: minT2, max200: maxT2, name: "T2" },
      { min100: minT3, max200: maxT3, name: "T3" },

      //THD
      { min: minThdIa, max: maxThdIa, name: "ThdIa" },
      { min: minThdIb, max: maxThdIb, name: "ThdIb" },
      { min: minThdIc, max: maxThdIc, name: "ThdIc" },
      { min: minThdIn, max: maxThdIn, name: "ThdIn" },
      { min: minThdIg, max: maxThdIg, name: "ThdIg" },
      { min: minThdVab, max: maxThdVab, name: "ThdVab" },
      { min: minThdVbc, max: maxThdVbc, name: "ThdVbc" },
      { min: minThdVca, max: maxThdVca, name: "ThdVca" },
      { min: minThdVll, max: maxThdVll, name: "ThdVll" },
      { min: minThdVan, max: maxThdVan, name: "ThdVan" },
      { min: minThdVbn, max: maxThdVbn, name: "ThdVbn" },
      { min: minThdVcn, max: maxThdVcn, name: "ThdVcn" },
      { min: minThdVln, max: maxThdVln, name: "ThdVln" },
    ];
    for (const iahVar of iahVariables) {
      //VALIDATE MIN
      if (iahVar.min0 < 0) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng 0`
        );
        return false;
      }

      if (iahVar.min1 < -1) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng -1`
        );
        return false;
      }

      if (iahVar.min100 < -100) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng -100`
        );
        return false;
      }

      if (iahVar.min2M < -2000000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng -2000000`
        );
        return false;
      }

      if (iahVar.min6M < -6000000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải lớn hơn hoặc bằng -6000000`
        );
        return false;
      }

      //VALIDATE MAX
      if (iahVar.max10k > 10000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 10000`
        );
        return false;
      }

      if (iahVar.max200 > 200) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 200`
        );
        return false;
      }

      if (iahVar.max4B > 4000000000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 4000000000`
        );
        return false;
      }

      if (iahVar.max1 > 1) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 1`
        );
        return false;
      }

      if (iahVar.max45k > 45000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 45000`
        );
        return false;
      }

      if (iahVar.max2M > 2000000) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 2000000`
        );
        return false;
      }

      if (iahVar.max > 100) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: max${iahVar.name} phải nhỏ hơn hoặc bằng 100`
        );
        return false;
      }

      //VALIDATE MIN < MAX
      if (iahVar.min > iahVar.max) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: min${iahVar.name} phải nhỏ hơn hoặc bằng max${iahVar.name}`
        );
        return false;
      }

      ///VALIDATE RỖNG

      if (iahVar.min === null || iahVar.min === "") {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} không được để trống`
        );
        return false;
      }

      if (iahVar.max === null) {
        toastErrorAccessory(
          `Lỗi ${iahVar.name}: ${iahVar.name} không được để trống`
        );
        return false;
      }
    }

    return true;
  };

  const [minUab, setMinUab] = useState(0);
  const [maxUab, setMaxUab] = useState(45000);
  const [minUbc, setMinUbc] = useState(0);
  const [maxUbc, setMaxUbc] = useState(45000);
  const [minUca, setMinUca] = useState(0);
  const [maxUca, setMaxUca] = useState(45000);
  const [minUll, setMinUll] = useState(0);
  const [maxUll, setMaxUll] = useState(45000);
  const [minUan, setMinUan] = useState(0);
  const [maxUan, setMaxUan] = useState(45000);
  const [minUbn, setMinUbn] = useState(0);
  const [maxUbn, setMaxUbn] = useState(45000);
  const [minUcn, setMinUcn] = useState(0);
  const [maxUcn, setMaxUcn] = useState(45000);
  const [minUln, setMinUln] = useState(0);
  const [maxUln, setMaxUln] = useState(45000);
  const [minIa, setMinIa] = useState(0);
  const [maxIa, setMaxIa] = useState(10000);
  const [minIb, setMinIb] = useState(0);
  const [maxIb, setMaxIb] = useState(10000);
  const [minIc, setMinIc] = useState(0);
  const [maxIc, setMaxIc] = useState(10000);
  const [minIN, setMinIN] = useState(0);
  const [maxIN, setMaxIN] = useState(10000);
  const [minIG, setMinIG] = useState(0);
  const [maxIG, setMaxIG] = useState(10000);
  const [minIAvg, setMinIAvg] = useState(0);
  const [maxIAvg, setMaxIAvg] = useState(10000);
  const [minPa, setMinPa] = useState(-2000000);
  const [maxPa, setMaxPa] = useState(2000000);
  const [minPb, setMinPb] = useState(-2000000);
  const [maxPb, setMaxPb] = useState(2000000);
  const [minPc, setMinPc] = useState(-2000000);
  const [maxPc, setMaxPc] = useState(2000000);
  const [minPTotal, setMinPTotal] = useState(-6000000);
  const [maxPTotal, setMaxPTotal] = useState(6000000);
  const [minQa, setMinQa] = useState(-2000000);
  const [maxQa, setMaxQa] = useState(2000000);
  const [minQb, setMinQb] = useState(-2000000);
  const [maxQb, setMaxQb] = useState(2000000);
  const [minQc, setMinQc] = useState(-2000000);
  const [maxQc, setMaxQc] = useState(2000000);
  const [minQTotal, setMinQTotal] = useState(-2000000);
  const [maxQTotal, setMaxQTotal] = useState(2000000);
  const [minSa, setMinSa] = useState(0);
  const [maxSa, setMaxSa] = useState(2000000);
  const [minSb, setMinSb] = useState(0);
  const [maxSb, setMaxSb] = useState(2000000);
  const [minSc, setMinSc] = useState(0);
  const [maxSc, setMaxSc] = useState(2000000);
  const [minSTotal, setMinSTotal] = useState(0);
  const [maxSTotal, setMaxSTotal] = useState(6000000);
  const [minPfa, setMinPfa] = useState(-1);
  const [maxPfa, setMaxPfa] = useState(1);
  const [minPfb, setMinPfb] = useState(-1);
  const [maxPfb, setMaxPfb] = useState(1);
  const [minPfc, setMinPfc] = useState(-1);
  const [maxPfc, setMaxPfc] = useState(1);
  const [minPFAvg, setMinPFAvg] = useState(-1);
  const [maxPFAvg, setMaxPFAvg] = useState(1);
  const [minF, setMinF] = useState(45);
  const [maxF, setMaxF] = useState(65);
  const [minEp, setMinEp] = useState(0);
  const [maxEp, setMaxEp] = useState(4000000000);
  const [minEpR, setMinEpR] = useState(0);
  const [maxEpR, setMaxEpR] = useState(4000000000);
  const [minEpDR, setMinEpDR] = useState(0);
  const [maxEpDR, setMaxEpDR] = useState(4000000000);
  const [minEpDRR, setMinEpDRR] = useState(0);
  const [maxEpDRR, setMaxEpDRR] = useState(4000000000);
  const [minEq, setMinEq] = useState(0);
  const [maxEq, setMaxEq] = useState(4000000000);
  const [minEqR, setMinEqR] = useState(0);
  const [maxEqR, setMaxEqR] = useState(4000000000);
  const [minEqDR, setMinEqDR] = useState(0);
  const [maxEqDR, setMaxEqDR] = useState(4000000000);
  const [minEqDRR, setMinEqDRR] = useState(0);
  const [maxEqDRR, setMaxEqDRR] = useState(4000000000);
  const [minEs, setMinEs] = useState(0);
  const [maxEs, setMaxEs] = useState(4000000000);
  const [minEsR, setMinEsR] = useState(0);
  const [maxEsR, setMaxEsR] = useState(4000000000);
  const [minEsDR, setMinEsDR] = useState(0);
  const [maxEsDR, setMaxEsDR] = useState(4000000000);
  const [minEsDRR, setMinEsDRR] = useState(0);
  const [maxEsDRR, setMaxEsDRR] = useState(4000000000);
  const [minT1, setMinT1] = useState(-100);
  const [maxT1, setMaxT1] = useState(200);
  const [minT2, setMinT2] = useState(-100);
  const [maxT2, setMaxT2] = useState(200);
  const [minT3, setMinT3] = useState(-100);
  const [maxT3, setMaxT3] = useState(200);
  const [minCommandData1, setMinCommandData1] = useState(0);
  const [maxCommandData1, setMaxCommandData1] = useState(100);
  const [minCommandData2, setMinCommandData2] = useState(0);
  const [maxCommandData2, setMaxCommandData2] = useState(100);
  const [minCommandData3, setMinCommandData3] = useState(0);
  const [maxCommandData3, setMaxCommandData3] = useState(100);
  const [minCommandData4, setMinCommandData4] = useState(0);
  const [maxCommandData4, setMaxCommandData4] = useState(100);
  const [minCommandData5, setMinCommandData5] = useState(0);
  const [maxCommandData5, setMaxCommandData5] = useState(100);
  const [minCommandData6, setMinCommandData6] = useState(0);
  const [maxCommandData6, setMaxCommandData6] = useState(100);
  const [minThdIa, setMinThdIa] = useState(0);
  const [maxThdIa, setMaxThdIa] = useState(100);
  const [minThdIb, setMinThdIb] = useState(0);
  const [maxThdIb, setMaxThdIb] = useState(100);
  const [minThdIc, setMinThdIc] = useState(0);
  const [maxThdIc, setMaxThdIc] = useState(100);
  const [minThdIn, setMinThdIn] = useState(0);
  const [maxThdIn, setMaxThdIn] = useState(100);
  const [minThdIg, setMinThdIg] = useState(0);
  const [maxThdIg, setMaxThdIg] = useState(100);
  const [minThdVab, setMinThdVab] = useState(0);
  const [maxThdVab, setMaxThdVab] = useState(100);
  const [minThdVbc, setMinThdVbc] = useState(0);
  const [maxThdVbc, setMaxThdVbc] = useState(100);
  const [minThdVca, setMinThdVca] = useState(0);
  const [maxThdVca, setMaxThdVca] = useState(100);
  const [minThdVll, setMinThdVll] = useState(0);
  const [maxThdVll, setMaxThdVll] = useState(100);
  const [minThdVan, setMinThdVan] = useState(0);
  const [maxThdVan, setMaxThdVan] = useState(100);
  const [minThdVbn, setMinThdVbn] = useState(0);
  const [maxThdVbn, setMaxThdVbn] = useState(100);
  const [minThdVcn, setMinThdVcn] = useState(0);
  const [maxThdVcn, setMaxThdVcn] = useState(100);
  const [minThdVln, setMinThdVln] = useState(0);
  const [maxThdVln, setMaxThdVln] = useState(100);
  const [status, setStatus] = useState(false);
  const [deviceId, setDeviceId] = useState();
  const [disabled, setDisable] = useState(false);
  const onChangeSw = (checked) => {
    setDisable(checked);
    handelCkickStop();
  };
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  //Input
  const [url, setUrl] = useState("tcp://localhost:1883");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState("client-sub");
  const [topic, setToppics] = useState("loadTopic");
  const [typeSystem, setTypeSystem] = useState("");
  const [typeDevice, setTypeDevice] = useState("");
  const [idDevice, setIdDevice] = useState("");
  const [time, setTime] = useState("");
  const [func, setFunc] = useState("");
  const [messageType, setMessageType] = useState("");
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [codeCustomer, setCodeCustomer] = useState("");
  const [codeProject, setCodeProject] = useState("");
  const [a1, setA1] = useState("3232");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a4, setA4] = useState("");
  const [a5, setA5] = useState("");
  const [crc, setCrc] = useState("");
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
      updateStatus({ key: props.data, status: true });
      toastSuccessAccessory("Đã gửi");
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
  const handleClearClick = () => {
    // Đặt lại giá trị của các trạng thái của ô input về chuỗi rỗng
    setUrl("");
    setUsername("");
    setPassword("");
    setToppics("");
    setClient("");
    setTypeDevice("");
    setTypeSystem("");
    setFunc("");

    setMessageType("");
    setData("");
    setCrc("");
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
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    clearInterval(timerId);
    updateStatus({ key: props.data, status: false });
    setTimerId(null);
  }, [disabled]);

  return (
    <>
      {/* Thao tác */}
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
                    func={func}
                    setFunc={setFunc}
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
                    {func === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      func
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
                    Code project:{" "}
                    {codeProject === "" ? (
                      <i style={{ color: "red" }}>không có dữ liệu đâu nè</i>
                    ) : (
                      codeProject
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
      <div className="row mt-2">
        <div className="col-5">
          <Card
            bordered={true}
            className="card bg-light"
            style={{
              width: 500,
            }}
          >
            <div className="d-flex justify-content-around">
              <Button type="primary" className="ms-1" onClick={handelCkickRun}>
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
                className="ms-1"
                onClick={handelCkickStop}
              >
                Dừng
              </Button>

              <div className="" style={{ marginLeft: "10px" }}>
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
      <div class="card card-body mt-2">
        <div className="row mt-4">
          <ToastContainer />
          {/* Cột 1 */}
          <div className="col-4">
            <Input
              placeholder="Device Id"
              value={deviceId}
              onChange={(event) => setDeviceId(event.target.value)}
            />
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="UAB"
                minValue={minUab}
                maxValue={maxUab}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUab}
                setMaxValue={setMaxUab}
              />
              <InputMinMax
                className="mt-2"
                title="UBC"
                minValue={minUbc}
                maxValue={maxUbc}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbc}
                setMaxValue={setMaxUbc}
              />
              <InputMinMax
                className="mt-2"
                title="UCA"
                minValue={minUca}
                maxValue={maxUca}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUca}
                setMaxValue={setMaxUca}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ULL"
                minValue={minUll}
                maxValue={maxUll}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUll}
                setMaxValue={setMaxUll}
              />
              <InputMinMax
                className="mt-2"
                title="UAN"
                minValue={minUan}
                maxValue={maxUan}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUan}
                setMaxValue={setMaxUan}
              />
              <InputMinMax
                className="mt-2"
                title="UBN"
                minValue={minUbn}
                maxValue={maxUbn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbn}
                setMaxValue={setMaxUbn}
              />
              <InputMinMax
                className="mt-2"
                title="UCN"
                minValue={minUcn}
                maxValue={maxUcn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUcn}
                setMaxValue={setMaxUcn}
              />
              <InputMinMax
                className="mt-2"
                title="ULN"
                minValue={minUln}
                maxValue={maxUln}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUln}
                setMaxValue={setMaxUln}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="IA"
                minValue={minIa}
                maxValue={maxIa}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIa}
                setMaxValue={setMaxIa}
              />
              <InputMinMax
                className="mt-2"
                title="IB"
                minValue={minIb}
                maxValue={maxIb}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIb}
                setMaxValue={setMaxIb}
              />
              <InputMinMax
                className="mt-2"
                title="IC"
                minValue={minIc}
                maxValue={maxIc}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIc}
                setMaxValue={setMaxIc}
              />

              <InputMinMax
                className="mt-2"
                title="IN"
                minValue={minIN}
                maxValue={maxIN}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIN}
                setMaxValue={setMaxIN}
              />
              <InputMinMax
                className="mt-2"
                title="IG"
                minValue={minIG}
                maxValue={maxIG}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIG}
                setMaxValue={setMaxIG}
              />
              <InputMinMax
                className="mt-2"
                title="Iavg"
                minValue={minIAvg}
                maxValue={maxIAvg}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={10000}
                setMinValue={setMinIAvg}
                setMaxValue={setMaxIAvg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Ep"
                minValue={minEp}
                maxValue={maxEp}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEp}
                setMaxValue={setMaxEp}
              />
              <InputMinMax
                className="mt-2"
                title="Ep R"
                minValue={minEpR}
                maxValue={maxEpR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpR}
                setMaxValue={setMaxEpR}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Dr"
                minValue={minEpDR}
                maxValue={maxEpDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDR}
                setMaxValue={setMaxEpDR}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Drr"
                minValue={minEpDRR}
                maxValue={maxEpDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDRR}
                setMaxValue={setMaxEpDRR}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Eq"
                minValue={minEq}
                maxValue={maxEq}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEq}
                setMaxValue={setMaxEq}
              />
              <InputMinMax
                className="mt-2"
                title="Eq R"
                minValue={minEqR}
                maxValue={maxEqR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqR}
                setMaxValue={setMaxEqR}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Dr"
                minValue={minEqDR}
                maxValue={maxEqDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDR}
                setMaxValue={setMaxEqDR}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Drr"
                minValue={minEqDRR}
                maxValue={maxEqDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDRR}
                setMaxValue={setMaxEqDRR}
              />
            </Card>
          </div>
          {/* Cột 2 */}
          <div className="col-4">
            <Card bordered={true} className=" bg-light">
              {" "}
              <InputMinMax
                className="mt-2"
                title="F"
                minValue={minF}
                maxValue={maxF}
                minX={45}
                maxX={64}
                minY={46}
                maxY={65}
                setMinValue={setMinF}
                setMaxValue={setMaxF}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pa"
                minValue={minPa}
                maxValue={maxPa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPa}
                setMaxValue={setMaxPa}
              />
              <InputMinMax
                className="mt-2"
                title="Pb"
                minValue={minPb}
                maxValue={maxPb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPb}
                setMaxValue={setMaxPb}
              />
              <InputMinMax
                className="mt-2"
                title="Pc"
                minValue={minPc}
                maxValue={maxPc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPc}
                setMaxValue={setMaxPc}
              />

              <InputMinMax
                className="mt-2"
                title="P total"
                minValue={minPTotal}
                maxValue={maxPTotal}
                minX={-6000000}
                maxX={1999999}
                minY={-1999999}
                maxY={6000000}
                setMinValue={setMinPTotal}
                setMaxValue={setMaxPTotal}
              />
            </Card>
            <Card bordered={true} className="mt-2  bg-light">
              <InputMinMax
                title="Qa"
                minValue={minQa}
                maxValue={maxQa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQa}
                setMaxValue={setMaxQa}
              />
              <InputMinMax
                className="mt-2"
                title="Qb"
                minValue={minQb}
                maxValue={maxQb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQb}
                setMaxValue={setMaxQb}
              />
              <InputMinMax
                className="mt-2"
                title="Qc"
                minValue={minQc}
                maxValue={maxQc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQc}
                setMaxValue={setMaxQc}
              />

              <InputMinMax
                className="mt-2"
                title="Q total"
                minValue={minQTotal}
                maxValue={maxQTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQTotal}
                setMaxValue={setMaxQTotal}
              />
            </Card>
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="Sa"
                minValue={minSa}
                maxValue={maxSa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSa}
                setMaxValue={setMaxSa}
              />
              <InputMinMax
                className="mt-2"
                title="Sb"
                minValue={minSb}
                maxValue={maxSb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSb}
                setMaxValue={setMaxSb}
              />
              <InputMinMax
                className="mt-2"
                title="Sc"
                minValue={minSc}
                maxValue={maxSc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSc}
                setMaxValue={setMaxSc}
              />

              <InputMinMax
                className="mt-2"
                title="S total"
                minValue={minSTotal}
                maxValue={maxSTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={6000000}
                setMinValue={setMinSTotal}
                setMaxValue={setMaxSTotal}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pfa"
                minValue={minPfa}
                maxValue={maxPfa}
                minX={-1}
                maxX={0}
                minY={0}
                maxY={1}
                setMinValue={setMinPfa}
                setMaxValue={setMaxPfa}
              />
              <InputMinMax
                className="mt-2"
                title="Pfb"
                minValue={minPfb}
                maxValue={maxPfb}
                minX={-1}
                maxY={1}
                maxX={0}
                minY={0}
                setMinValue={setMinPfb}
                setMaxValue={setMaxPfb}
              />
              <InputMinMax
                className="mt-2"
                title="Pfc"
                minValue={minPfc}
                maxValue={maxPfc}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPfc}
                setMaxValue={setMaxPfc}
              />

              <InputMinMax
                className="mt-2"
                title="Pf Avg"
                minValue={minPFAvg}
                maxValue={maxPFAvg}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPFAvg}
                setMaxValue={setMaxPFAvg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Es"
                minValue={minEs}
                maxValue={maxEs}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEs}
                setMaxValue={setMaxEs}
              />
              <InputMinMax
                className="mt-2"
                title="Es R"
                minValue={minEsR}
                maxValue={maxEsR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsR}
                setMaxValue={setMaxEsR}
              />
              <InputMinMax
                className="mt-2"
                title="Es Dr"
                minValue={minEsDR}
                maxValue={maxEsDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDR}
                setMaxValue={setMaxEsDR}
              />
              <InputMinMax
                className="mt-2"
                title="Es Drr"
                minValue={minEsDRR}
                maxValue={maxEsDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDRR}
                setMaxValue={setMaxEsDRR}
              />
            </Card>
          </div>
          {/* Cột 3 */}

          <div className="col-4">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="T1"
                minValue={minT1}
                maxValue={maxT1}
                minX={-100}
                maxX={249}
                minY={1}
                maxY={200}
                setMinValue={setMinT1}
                setMaxValue={setMaxT1}
              />
              <InputMinMax
                className="mt-2"
                title="T2"
                minValue={minT2}
                maxValue={maxT2}
                minX={-100}
                maxX={249}
                minY={1}
                maxY={200}
                setMinValue={setMinT2}
                setMaxValue={setMaxT2}
              />
              <InputMinMax
                className="mt-2"
                title="T3"
                minValue={minT2}
                maxValue={maxT2}
                minX={-100}
                maxX={249}
                minY={1}
                maxY={200}
                setMinValue={setMinT2}
                setMaxValue={setMaxT2}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdIa"
                minValue={minThdIa}
                maxValue={maxThdIa}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIa}
                setMaxValue={setMaxThdIa}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIb"
                minValue={minThdIb}
                maxValue={maxThdIb}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIb}
                setMaxValue={setMaxThdIb}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIc"
                minValue={minThdIc}
                maxValue={maxThdIc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIc}
                setMaxValue={setMaxThdIc}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIn"
                minValue={minThdIn}
                maxValue={maxThdIn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIn}
                setMaxValue={setMaxThdIn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIg"
                minValue={minThdIg}
                maxValue={maxThdIg}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIg}
                setMaxValue={setMaxThdIg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdVab"
                minValue={minThdVab}
                maxValue={maxThdVab}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVab}
                setMaxValue={setMaxThdVab}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbc"
                minValue={minThdVbc}
                maxValue={maxThdVbc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbc}
                setMaxValue={setMaxThdVbc}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVca"
                minValue={minThdVca}
                maxValue={maxThdVca}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVca}
                setMaxValue={setMaxThdVca}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVll"
                minValue={minThdVll}
                maxValue={maxThdVll}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVll}
                setMaxValue={setMaxThdVll}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVan"
                minValue={minThdVan}
                maxValue={maxThdVan}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVan}
                setMaxValue={setMaxThdVan}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbn"
                minValue={minThdVbn}
                maxValue={maxThdVbn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbn}
                setMaxValue={setMaxThdVbn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVcn"
                minValue={minThdVcn}
                maxValue={maxThdVcn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVcn}
                setMaxValue={setMaxThdVcn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVln"
                minValue={minThdVln}
                maxValue={maxThdVln}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVln}
                setMaxValue={setMaxThdVln}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
