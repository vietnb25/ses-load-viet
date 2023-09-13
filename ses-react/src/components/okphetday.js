// const YourComponent = (props) => {
//   const [minValues, setMinValues] = useState(Array(30).fill(0));
//   const [maxValues, setMaxValues] = useState(Array(30).fill(100));

//   const handleValidation = () => {
//     for (let i = 0; i < 30; i++) {
//       const minIAH = minValues[i];
//       const maxIAH = maxValues[i];

//       if (minIAH < 0) {
//         toastErrorAccessory(
//           `Lỗi IA-H${i + 1}: minIAH${i + 1} phải lớn hơn hoặc bằng 0`
//         );
//         return false;
//       }

//       if (maxIAH > 100) {
//         toastErrorAccessory(
//           `Lỗi IA-H${i + 1}: maxIAH${i + 1} phải nhỏ hơn hoặc bằng 100`
//         );
//         return false;
//       }

//       if (minIAH > maxIAH) {
//         toastErrorAccessory(
//           `Lỗi IA-H${i + 1}: minIAH${i + 1} phải nhỏ hơn hoặc bằng maxIAH${
//             i + 1
//           }`
//         );
//         return false;
//       }

//       if (minIAH === undefined) {
//         toastErrorAccessory(
//           `Lỗi IA-H${i + 1}: minIAH${i + 1} không được để trống`
//         );
//         return false;
//       }

//       if (maxIAH === undefined) {
//         toastErrorAccessory(
//           `Lỗi IA-H${i + 1}: maxIAH${i + 1} không được để trống`
//         );
//         return false;
//       }
//     }

//     return true; // Không có lỗi
//   };

//   return (
//     <div>
//       {/* Các phần tử và mã JSX khác trong component của bạn */}
//       <button onClick={handleValidation}>Kiểm tra</button>
//     </div>
//   );
// };

//IAH1
// if (minIAH1 < 0) {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH1 > 100) {
//     toastErrorAccessory("Lỗi IA-H1: maxIAH1 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH1 > maxIAH1) {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 phải nhỏ hơn hoặc bằng maxIAH1");
//     return false;
//   }

//   if (minIAH1 === undefined || minIAH1 === null || minIAH1 === "") {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 không được để trống");
//     return false;
//   }

//   if (maxIAH1 === undefined || maxIAH1 === null) {
//     toastErrorAccessory("Lỗi IA-H1: maxIAH1 không được để trống");
//     return false;
//   }

//   //IAH2
//   if (minIAH2 < 0) {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH2 > 100) {
//     toastErrorAccessory("Lỗi IA-H1: maxIAH1 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH2 > maxIAH2) {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 phải nhỏ hơn hoặc bằng maxIAH1");
//     return false;
//   }

//   if (minIAH2 === undefined) {
//     toastErrorAccessory("Lỗi IA-H1: minIAH1 không được để trống");
//     return false;
//   }

//   if (maxIAH2 === undefined) {
//     toastErrorAccessory("Lỗi IA-H1: maxIAH1 không được để trống");
//     return false;
//   }
//   // Kiểm tra cho IA-H3
//   if (minIAH3 < 0) {
//     toastErrorAccessory("Lỗi IA-H3: minIAH3 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH3 > 100) {
//     toastErrorAccessory("Lỗi IA-H3: maxIAH3 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH3 > maxIAH3) {
//     toastErrorAccessory("Lỗi IA-H3: minIAH3 phải nhỏ hơn hoặc bằng maxIAH3");
//     return false;
//   }

//   if (minIAH3 === undefined) {
//     toastErrorAccessory("Lỗi IA-H3: minIAH3 không được để trống");
//     return false;
//   }

//   if (maxIAH3 === undefined) {
//     toastErrorAccessory("Lỗi IA-H3: maxIAH3 không được để trống");
//     return false;
//   }

//   //IA-H4
//   if (minIAH4 < 0) {
//     toastErrorAccessory("Lỗi IA-H4: minIAH4 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH4 > 100) {
//     toastErrorAccessory("Lỗi IA-H4: maxIAH4 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH4 > maxIAH4) {
//     toastErrorAccessory("Lỗi IA-H4: minIAH4 phải nhỏ hơn hoặc bằng maxIAH4");
//     return false;
//   }

//   if (minIAH4 === undefined) {
//     toastErrorAccessory("Lỗi IA-H4: minIAH4 không được để trống");
//     return false;
//   }

//   if (maxIAH4 === undefined) {
//     toastErrorAccessory("Lỗi IA-H4: maxIAH4 không được để trống");
//     return false;
//   }

//   if (minIAH5 < 0) {
//     toastErrorAccessory("Lỗi IA-H5: minIAH5 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH5 > 100) {
//     toastErrorAccessory("Lỗi IA-H5: maxIAH5 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH5 > maxIAH5) {
//     toastErrorAccessory("Lỗi IA-H5: minIAH5 phải nhỏ hơn hoặc bằng maxIAH5");
//     return false;
//   }

//   if (minIAH5 === undefined) {
//     toastErrorAccessory("Lỗi IA-H5: minIAH5 không được để trống");
//     return false;
//   }

//   if (maxIAH5 === undefined) {
//     toastErrorAccessory("Lỗi IA-H5: maxIAH5 không được để trống");
//     return false;
//   }

//   if (minIAH6 < 0) {
//     toastErrorAccessory("Lỗi IA-H6: minIAH6 phải lớn hơn hoặc bằng 0");
//     return false;
//   }

//   if (maxIAH6 > 100) {
//     toastErrorAccessory("Lỗi IA-H6: maxIAH6 phải nhỏ hơn hoặc bằng 100");
//     return false;
//   }

//   if (minIAH6 > maxIAH6) {
//     toastErrorAccessory("Lỗi IA-H6: minIAH6 phải nhỏ hơn hoặc bằng maxIAH6");
//     return false;
//   }

//   if (minIAH6 === undefined) {
//     toastErrorAccessory("Lỗi IA-H6: minIAH6 không được để trống");
//     return false;
//   }

//   if (maxIAH6 === undefined) {
//     toastErrorAccessory("Lỗi IA-H6: maxIAH6 không được để trống");
//     return false;
//   }

//   if (
//     minIAH7 < 0 ||
//     maxIAH7 > 100 ||
//     maxIAH7 === undefined ||
//     minIAH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH8 < 0 ||
//     maxIAH8 > 100 ||
//     maxIAH8 === undefined ||
//     minIAH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH9 < 0 ||
//     maxIAH9 > 100 ||
//     maxIAH9 === undefined ||
//     minIAH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH10 < 0 ||
//     maxIAH10 > 100 ||
//     maxIAH10 === undefined ||
//     minIAH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH11 < 0 ||
//     maxIAH11 > 100 ||
//     maxIAH11 === undefined ||
//     minIAH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH12 < 0 ||
//     maxIAH12 > 100 ||
//     maxIAH12 === undefined ||
//     minIAH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH13 < 0 ||
//     maxIAH13 > 100 ||
//     maxIAH13 === undefined ||
//     minIAH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH14 < 0 ||
//     maxIAH14 > 100 ||
//     maxIAH14 === undefined ||
//     minIAH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIAH15 < 0 ||
//     maxIAH15 > 100 ||
//     maxIAH15 === undefined ||
//     minIAH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH16 < 0 ||
//     maxIAH16 > 100 ||
//     maxIAH16 === undefined ||
//     minIAH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH17 < 0 ||
//     maxIAH17 > 100 ||
//     maxIAH17 === undefined ||
//     minIAH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH18 < 0 ||
//     maxIAH18 > 100 ||
//     maxIAH18 === undefined ||
//     minIAH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH19 < 0 ||
//     maxIAH19 > 100 ||
//     maxIAH19 === undefined ||
//     minIAH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH20 < 0 ||
//     maxIAH20 > 100 ||
//     maxIAH20 === undefined ||
//     minIAH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH21 < 0 ||
//     maxIAH21 > 100 ||
//     maxIAH21 === undefined ||
//     minIAH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH22 < 0 ||
//     maxIAH22 > 100 ||
//     maxIAH22 === undefined ||
//     minIAH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH23 < 0 ||
//     maxIAH23 > 100 ||
//     maxIAH23 === undefined ||
//     minIAH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH24 < 0 ||
//     maxIAH24 > 100 ||
//     maxIAH24 === undefined ||
//     minIAH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH25 < 0 ||
//     maxIAH25 > 100 ||
//     maxIAH25 === undefined ||
//     minIAH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH26 < 0 ||
//     maxIAH26 > 100 ||
//     maxIAH26 === undefined ||
//     minIAH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH27 < 0 ||
//     maxIAH27 > 100 ||
//     maxIAH27 === undefined ||
//     minIAH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH28 < 0 ||
//     maxIAH28 > 100 ||
//     maxIAH28 === undefined ||
//     minIAH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH29 < 0 ||
//     maxIAH29 > 100 ||
//     maxIAH29 === undefined ||
//     minIAH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH30 < 0 ||
//     maxIAH30 > 100 ||
//     maxIAH30 === undefined ||
//     minIAH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIAH31 < 0 ||
//     maxIAH31 > 100 ||
//     maxIAH31 === undefined ||
//     minIAH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH1 < 0 ||
//     maxIBH1 > 100 ||
//     minIBH1 === undefined ||
//     minIBH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH2 < 0 ||
//     maxIBH2 > 100 ||
//     minIBH2 === undefined ||
//     maxIBH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH3 < 0 ||
//     maxIBH3 > 100 ||
//     maxIBH3 === undefined ||
//     minIBH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH4 < 0 ||
//     maxIBH4 > 100 ||
//     maxIBH4 === undefined ||
//     minIBH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH5 < 0 ||
//     maxIBH5 > 100 ||
//     maxIBH5 === undefined ||
//     minIBH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH6 < 0 ||
//     maxIBH6 > 100 ||
//     maxIBH6 === undefined ||
//     minIBH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH7 < 0 ||
//     maxIBH7 > 100 ||
//     maxIBH7 === undefined ||
//     minIBH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH8 < 0 ||
//     maxIBH8 > 100 ||
//     maxIBH8 === undefined ||
//     minIBH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH9 < 0 ||
//     maxIBH9 > 100 ||
//     maxIBH9 === undefined ||
//     minIBH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH10 < 0 ||
//     maxIBH10 > 100 ||
//     maxIBH10 === undefined ||
//     minIBH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH11 < 0 ||
//     maxIBH11 > 100 ||
//     maxIBH11 === undefined ||
//     minIBH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH12 < 0 ||
//     maxIBH12 > 100 ||
//     maxIBH12 === undefined ||
//     minIBH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH13 < 0 ||
//     maxIBH13 > 100 ||
//     maxIBH13 === undefined ||
//     minIBH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH14 < 0 ||
//     maxIBH14 > 100 ||
//     maxIBH14 === undefined ||
//     minIBH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minIBH15 < 0 ||
//     maxIBH15 > 100 ||
//     maxIBH15 === undefined ||
//     minIBH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH16 < 0 ||
//     maxIBH16 > 100 ||
//     maxIBH16 === undefined ||
//     minIBH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH17 < 0 ||
//     maxIBH17 > 100 ||
//     maxIBH17 === undefined ||
//     minIBH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH18 < 0 ||
//     maxIBH18 > 100 ||
//     maxIBH18 === undefined ||
//     minIBH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH19 < 0 ||
//     maxIBH19 > 100 ||
//     maxIBH19 === undefined ||
//     minIBH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH20 < 0 ||
//     maxIBH20 > 100 ||
//     maxIBH20 === undefined ||
//     minIBH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH21 < 0 ||
//     maxIBH21 > 100 ||
//     maxIBH21 === undefined ||
//     minIBH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH22 < 0 ||
//     maxIBH22 > 100 ||
//     maxIBH22 === undefined ||
//     minIBH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH23 < 0 ||
//     maxIBH23 > 100 ||
//     maxIBH23 === undefined ||
//     minIBH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH24 < 0 ||
//     maxIBH24 > 100 ||
//     maxIBH24 === undefined ||
//     minIBH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH25 < 0 ||
//     maxIBH25 > 100 ||
//     maxIBH25 === undefined ||
//     minIBH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH26 < 0 ||
//     maxIBH26 > 100 ||
//     maxIBH26 === undefined ||
//     minIBH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH27 < 0 ||
//     maxIBH27 > 100 ||
//     maxIBH27 === undefined ||
//     minIBH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH28 < 0 ||
//     maxIBH28 > 100 ||
//     maxIBH28 === undefined ||
//     minIBH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH29 < 0 ||
//     maxIBH29 > 100 ||
//     maxIBH29 === undefined ||
//     minIBH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH30 < 0 ||
//     maxIBH30 > 100 ||
//     maxIBH30 === undefined ||
//     minIBH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minIBH31 < 0 ||
//     maxIBH31 > 100 ||
//     maxIBH31 === undefined ||
//     minIBH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH1 < 0 ||
//     maxICH1 > 100 ||
//     minICH1 === undefined ||
//     minICH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH2 < 0 ||
//     maxICH2 > 100 ||
//     minICH2 === undefined ||
//     maxICH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH3 < 0 ||
//     maxICH3 > 100 ||
//     maxICH3 === undefined ||
//     minICH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH4 < 0 ||
//     maxICH4 > 100 ||
//     maxICH4 === undefined ||
//     minICH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH5 < 0 ||
//     maxICH5 > 100 ||
//     maxICH5 === undefined ||
//     minICH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH6 < 0 ||
//     maxICH6 > 100 ||
//     maxICH6 === undefined ||
//     minICH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH7 < 0 ||
//     maxICH7 > 100 ||
//     maxICH7 === undefined ||
//     minICH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH8 < 0 ||
//     maxICH8 > 100 ||
//     maxICH8 === undefined ||
//     minICH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH9 < 0 ||
//     maxICH9 > 100 ||
//     maxICH9 === undefined ||
//     minICH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH10 < 0 ||
//     maxICH10 > 100 ||
//     maxICH10 === undefined ||
//     minICH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH11 < 0 ||
//     maxICH11 > 100 ||
//     maxICH11 === undefined ||
//     minICH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH12 < 0 ||
//     maxICH12 > 100 ||
//     maxICH12 === undefined ||
//     minICH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH13 < 0 ||
//     maxICH13 > 100 ||
//     maxICH13 === undefined ||
//     minICH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH14 < 0 ||
//     maxICH14 > 100 ||
//     maxICH14 === undefined ||
//     minICH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minICH15 < 0 ||
//     maxICH15 > 100 ||
//     maxICH15 === undefined ||
//     minICH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH16 < 0 ||
//     maxICH16 > 100 ||
//     maxICH16 === undefined ||
//     minICH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH17 < 0 ||
//     maxICH17 > 100 ||
//     maxICH17 === undefined ||
//     minICH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH18 < 0 ||
//     maxICH18 > 100 ||
//     maxICH18 === undefined ||
//     minICH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH19 < 0 ||
//     maxICH19 > 100 ||
//     maxICH19 === undefined ||
//     minICH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH20 < 0 ||
//     maxICH20 > 100 ||
//     maxICH20 === undefined ||
//     minICH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH21 < 0 ||
//     maxICH21 > 100 ||
//     maxICH21 === undefined ||
//     minICH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH22 < 0 ||
//     maxICH22 > 100 ||
//     maxICH22 === undefined ||
//     minICH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH23 < 0 ||
//     maxICH23 > 100 ||
//     maxICH23 === undefined ||
//     minICH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH24 < 0 ||
//     maxICH24 > 100 ||
//     maxICH24 === undefined ||
//     minICH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH25 < 0 ||
//     maxICH25 > 100 ||
//     maxICH25 === undefined ||
//     minICH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH26 < 0 ||
//     maxICH26 > 100 ||
//     maxICH26 === undefined ||
//     minICH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH27 < 0 ||
//     maxICH27 > 100 ||
//     maxICH27 === undefined ||
//     minICH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH28 < 0 ||
//     maxICH28 > 100 ||
//     maxICH28 === undefined ||
//     minICH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH29 < 0 ||
//     maxICH29 > 100 ||
//     maxICH29 === undefined ||
//     minICH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH30 < 0 ||
//     maxICH30 > 100 ||
//     maxICH30 === undefined ||
//     minICH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minICH31 < 0 ||
//     maxICH31 > 100 ||
//     maxICH31 === undefined ||
//     minICH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH1 < 0 ||
//     maxVABH1 > 100 ||
//     minVABH1 === undefined ||
//     minVABH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH2 < 0 ||
//     maxVABH2 > 100 ||
//     minVABH2 === undefined ||
//     maxVABH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH3 < 0 ||
//     maxVABH3 > 100 ||
//     maxVABH3 === undefined ||
//     minVABH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH4 < 0 ||
//     maxVABH4 > 100 ||
//     maxVABH4 === undefined ||
//     minVABH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH5 < 0 ||
//     maxVABH5 > 100 ||
//     maxVABH5 === undefined ||
//     minVABH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH6 < 0 ||
//     maxVABH6 > 100 ||
//     maxVABH6 === undefined ||
//     minVABH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH7 < 0 ||
//     maxVABH7 > 100 ||
//     maxVABH7 === undefined ||
//     minVABH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH8 < 0 ||
//     maxVABH8 > 100 ||
//     maxVABH8 === undefined ||
//     minVABH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH9 < 0 ||
//     maxVABH9 > 100 ||
//     maxVABH9 === undefined ||
//     minVABH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH10 < 0 ||
//     maxVABH10 > 100 ||
//     maxVABH10 === undefined ||
//     minVABH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH11 < 0 ||
//     maxVABH11 > 100 ||
//     maxVABH11 === undefined ||
//     minVABH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH12 < 0 ||
//     maxVABH12 > 100 ||
//     maxVABH12 === undefined ||
//     minVABH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH13 < 0 ||
//     maxVABH13 > 100 ||
//     maxVABH13 === undefined ||
//     minVABH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH14 < 0 ||
//     maxVABH14 > 100 ||
//     maxVABH14 === undefined ||
//     minVABH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVABH15 < 0 ||
//     maxVABH15 > 100 ||
//     maxVABH15 === undefined ||
//     minVABH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH16 < 0 ||
//     maxVABH16 > 100 ||
//     maxVABH16 === undefined ||
//     minVABH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH17 < 0 ||
//     maxVABH17 > 100 ||
//     maxVABH17 === undefined ||
//     minVABH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH18 < 0 ||
//     maxVABH18 > 100 ||
//     maxVABH18 === undefined ||
//     minVABH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH19 < 0 ||
//     maxVABH19 > 100 ||
//     maxVABH19 === undefined ||
//     minVABH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH20 < 0 ||
//     maxVABH20 > 100 ||
//     maxVABH20 === undefined ||
//     minVABH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH21 < 0 ||
//     maxVABH21 > 100 ||
//     maxVABH21 === undefined ||
//     minVABH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH22 < 0 ||
//     maxVABH22 > 100 ||
//     maxVABH22 === undefined ||
//     minVABH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH23 < 0 ||
//     maxVABH23 > 100 ||
//     maxVABH23 === undefined ||
//     minVABH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH24 < 0 ||
//     maxVABH24 > 100 ||
//     maxVABH24 === undefined ||
//     minVABH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH25 < 0 ||
//     maxVABH25 > 100 ||
//     maxVABH25 === undefined ||
//     minVABH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH26 < 0 ||
//     maxVABH26 > 100 ||
//     maxVABH26 === undefined ||
//     minVABH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH27 < 0 ||
//     maxVABH27 > 100 ||
//     maxVABH27 === undefined ||
//     minVABH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH28 < 0 ||
//     maxVABH28 > 100 ||
//     maxVABH28 === undefined ||
//     minVABH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH29 < 0 ||
//     maxVABH29 > 100 ||
//     maxVABH29 === undefined ||
//     minVABH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH30 < 0 ||
//     maxVABH30 > 100 ||
//     maxVABH30 === undefined ||
//     minVABH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVABH31 < 0 ||
//     maxVABH31 > 100 ||
//     maxVABH31 === undefined ||
//     minVABH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH1 < 0 ||
//     maxVBCH1 > 100 ||
//     minVBCH1 === undefined ||
//     minVBCH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH2 < 0 ||
//     maxVBCH2 > 100 ||
//     minVBCH2 === undefined ||
//     maxVBCH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH3 < 0 ||
//     maxVBCH3 > 100 ||
//     maxVBCH3 === undefined ||
//     minVBCH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH4 < 0 ||
//     maxVBCH4 > 100 ||
//     maxVBCH4 === undefined ||
//     minVBCH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH5 < 0 ||
//     maxVBCH5 > 100 ||
//     maxVBCH5 === undefined ||
//     minVBCH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH6 < 0 ||
//     maxVBCH6 > 100 ||
//     maxVBCH6 === undefined ||
//     minVBCH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH7 < 0 ||
//     maxVBCH7 > 100 ||
//     maxVBCH7 === undefined ||
//     minVBCH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH8 < 0 ||
//     maxVBCH8 > 100 ||
//     maxVBCH8 === undefined ||
//     minVBCH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH9 < 0 ||
//     maxVBCH9 > 100 ||
//     maxVBCH9 === undefined ||
//     minVBCH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH10 < 0 ||
//     maxVBCH10 > 100 ||
//     maxVBCH10 === undefined ||
//     minVBCH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH11 < 0 ||
//     maxVBCH11 > 100 ||
//     maxVBCH11 === undefined ||
//     minVBCH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH12 < 0 ||
//     maxVBCH12 > 100 ||
//     maxVBCH12 === undefined ||
//     minVBCH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH13 < 0 ||
//     maxVBCH13 > 100 ||
//     maxVBCH13 === undefined ||
//     minVBCH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH14 < 0 ||
//     maxVBCH14 > 100 ||
//     maxVBCH14 === undefined ||
//     minVBCH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBCH15 < 0 ||
//     maxVBCH15 > 100 ||
//     maxVBCH15 === undefined ||
//     minVBCH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH16 < 0 ||
//     maxVBCH16 > 100 ||
//     maxVBCH16 === undefined ||
//     minVBCH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH17 < 0 ||
//     maxVBCH17 > 100 ||
//     maxVBCH17 === undefined ||
//     minVBCH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH18 < 0 ||
//     maxVBCH18 > 100 ||
//     maxVBCH18 === undefined ||
//     minVBCH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH19 < 0 ||
//     maxVBCH19 > 100 ||
//     maxVBCH19 === undefined ||
//     minVBCH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH20 < 0 ||
//     maxVBCH20 > 100 ||
//     maxVBCH20 === undefined ||
//     minVBCH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH21 < 0 ||
//     maxVBCH21 > 100 ||
//     maxVBCH21 === undefined ||
//     minVBCH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH22 < 0 ||
//     maxVBCH22 > 100 ||
//     maxVBCH22 === undefined ||
//     minVBCH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH23 < 0 ||
//     maxVBCH23 > 100 ||
//     maxVBCH23 === undefined ||
//     minVBCH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH24 < 0 ||
//     maxVBCH24 > 100 ||
//     maxVBCH24 === undefined ||
//     minVBCH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH25 < 0 ||
//     maxVBCH25 > 100 ||
//     maxVBCH25 === undefined ||
//     minVBCH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH26 < 0 ||
//     maxVBCH26 > 100 ||
//     maxVBCH26 === undefined ||
//     minVBCH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH27 < 0 ||
//     maxVBCH27 > 100 ||
//     maxVBCH27 === undefined ||
//     minVBCH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH28 < 0 ||
//     maxVBCH28 > 100 ||
//     maxVBCH28 === undefined ||
//     minVBCH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH29 < 0 ||
//     maxVBCH29 > 100 ||
//     maxVBCH29 === undefined ||
//     minVBCH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH30 < 0 ||
//     maxVBCH30 > 100 ||
//     maxVBCH30 === undefined ||
//     minVBCH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBCH31 < 0 ||
//     maxVBCH31 > 100 ||
//     maxVBCH31 === undefined ||
//     minVBCH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH1 < 0 ||
//     maxVCAH1 > 100 ||
//     minVCAH1 === undefined ||
//     minVCAH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH2 < 0 ||
//     maxVCAH2 > 100 ||
//     minVCAH2 === undefined ||
//     maxVCAH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH3 < 0 ||
//     maxVCAH3 > 100 ||
//     maxVCAH3 === undefined ||
//     minVCAH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH4 < 0 ||
//     maxVCAH4 > 100 ||
//     maxVCAH4 === undefined ||
//     minVCAH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH5 < 0 ||
//     maxVCAH5 > 100 ||
//     maxVCAH5 === undefined ||
//     minVCAH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH6 < 0 ||
//     maxVCAH6 > 100 ||
//     maxVCAH6 === undefined ||
//     minVCAH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH7 < 0 ||
//     maxVCAH7 > 100 ||
//     maxVCAH7 === undefined ||
//     minVCAH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH8 < 0 ||
//     maxVCAH8 > 100 ||
//     maxVCAH8 === undefined ||
//     minVCAH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH9 < 0 ||
//     maxVCAH9 > 100 ||
//     maxVCAH9 === undefined ||
//     minVCAH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH10 < 0 ||
//     maxVCAH10 > 100 ||
//     maxVCAH10 === undefined ||
//     minVCAH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH11 < 0 ||
//     maxVCAH11 > 100 ||
//     maxVCAH11 === undefined ||
//     minVCAH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH12 < 0 ||
//     maxVCAH12 > 100 ||
//     maxVCAH12 === undefined ||
//     minVCAH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH13 < 0 ||
//     maxVCAH13 > 100 ||
//     maxVCAH13 === undefined ||
//     minVCAH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH14 < 0 ||
//     maxVCAH14 > 100 ||
//     maxVCAH14 === undefined ||
//     minVCAH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCAH15 < 0 ||
//     maxVCAH15 > 100 ||
//     maxVCAH15 === undefined ||
//     minVCAH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH16 < 0 ||
//     maxVCAH16 > 100 ||
//     maxVCAH16 === undefined ||
//     minVCAH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH17 < 0 ||
//     maxVCAH17 > 100 ||
//     maxVCAH17 === undefined ||
//     minVCAH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH18 < 0 ||
//     maxVCAH18 > 100 ||
//     maxVCAH18 === undefined ||
//     minVCAH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH19 < 0 ||
//     maxVCAH19 > 100 ||
//     maxVCAH19 === undefined ||
//     minVCAH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH20 < 0 ||
//     maxVCAH20 > 100 ||
//     maxVCAH20 === undefined ||
//     minVCAH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH21 < 0 ||
//     maxVCAH21 > 100 ||
//     maxVCAH21 === undefined ||
//     minVCAH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH22 < 0 ||
//     maxVCAH22 > 100 ||
//     maxVCAH22 === undefined ||
//     minVCAH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH23 < 0 ||
//     maxVCAH23 > 100 ||
//     maxVCAH23 === undefined ||
//     minVCAH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH24 < 0 ||
//     maxVCAH24 > 100 ||
//     maxVCAH24 === undefined ||
//     minVCAH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH25 < 0 ||
//     maxVCAH25 > 100 ||
//     maxVCAH25 === undefined ||
//     minVCAH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH26 < 0 ||
//     maxVCAH26 > 100 ||
//     maxVCAH26 === undefined ||
//     minVCAH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH27 < 0 ||
//     maxVCAH27 > 100 ||
//     maxVCAH27 === undefined ||
//     minVCAH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH28 < 0 ||
//     maxVCAH28 > 100 ||
//     maxVCAH28 === undefined ||
//     minVCAH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH29 < 0 ||
//     maxVCAH29 > 100 ||
//     maxVCAH29 === undefined ||
//     minVCAH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH30 < 0 ||
//     maxVCAH30 > 100 ||
//     maxVCAH30 === undefined ||
//     minVCAH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCAH31 < 0 ||
//     maxVCAH31 > 100 ||
//     maxVCAH31 === undefined ||
//     minVCAH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH1 < 0 ||
//     maxVANH1 > 100 ||
//     minVANH1 === undefined ||
//     minVANH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH2 < 0 ||
//     maxVANH2 > 100 ||
//     minVANH2 === undefined ||
//     maxVANH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH3 < 0 ||
//     maxVANH3 > 100 ||
//     maxVANH3 === undefined ||
//     minVANH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH4 < 0 ||
//     maxVANH4 > 100 ||
//     maxVANH4 === undefined ||
//     minVANH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH5 < 0 ||
//     maxVANH5 > 100 ||
//     maxVANH5 === undefined ||
//     minVANH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH6 < 0 ||
//     maxVANH6 > 100 ||
//     maxVANH6 === undefined ||
//     minVANH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH7 < 0 ||
//     maxVANH7 > 100 ||
//     maxVANH7 === undefined ||
//     minVANH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH8 < 0 ||
//     maxVANH8 > 100 ||
//     maxVANH8 === undefined ||
//     minVANH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH9 < 0 ||
//     maxVANH9 > 100 ||
//     maxVANH9 === undefined ||
//     minVANH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH10 < 0 ||
//     maxVANH10 > 100 ||
//     maxVANH10 === undefined ||
//     minVANH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH11 < 0 ||
//     maxVANH11 > 100 ||
//     maxVANH11 === undefined ||
//     minVANH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH12 < 0 ||
//     maxVANH12 > 100 ||
//     maxVANH12 === undefined ||
//     minVANH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH13 < 0 ||
//     maxVANH13 > 100 ||
//     maxVANH13 === undefined ||
//     minVANH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH14 < 0 ||
//     maxVANH14 > 100 ||
//     maxVANH14 === undefined ||
//     minVANH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVANH15 < 0 ||
//     maxVANH15 > 100 ||
//     maxVANH15 === undefined ||
//     minVANH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH16 < 0 ||
//     maxVANH16 > 100 ||
//     maxVANH16 === undefined ||
//     minVANH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH17 < 0 ||
//     maxVANH17 > 100 ||
//     maxVANH17 === undefined ||
//     minVANH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH18 < 0 ||
//     maxVANH18 > 100 ||
//     maxVANH18 === undefined ||
//     minVANH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH19 < 0 ||
//     maxVANH19 > 100 ||
//     maxVANH19 === undefined ||
//     minVANH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH20 < 0 ||
//     maxVANH20 > 100 ||
//     maxVANH20 === undefined ||
//     minVANH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH21 < 0 ||
//     maxVANH21 > 100 ||
//     maxVANH21 === undefined ||
//     minVANH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH22 < 0 ||
//     maxVANH22 > 100 ||
//     maxVANH22 === undefined ||
//     minVANH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH23 < 0 ||
//     maxVANH23 > 100 ||
//     maxVANH23 === undefined ||
//     minVANH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH24 < 0 ||
//     maxVANH24 > 100 ||
//     maxVANH24 === undefined ||
//     minVANH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH25 < 0 ||
//     maxVANH25 > 100 ||
//     maxVANH25 === undefined ||
//     minVANH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH26 < 0 ||
//     maxVANH26 > 100 ||
//     maxVANH26 === undefined ||
//     minVANH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH27 < 0 ||
//     maxVANH27 > 100 ||
//     maxVANH27 === undefined ||
//     minVANH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH28 < 0 ||
//     maxVANH28 > 100 ||
//     maxVANH28 === undefined ||
//     minVANH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH29 < 0 ||
//     maxVANH29 > 100 ||
//     maxVANH29 === undefined ||
//     minVANH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH30 < 0 ||
//     maxVANH30 > 100 ||
//     maxVANH30 === undefined ||
//     minVANH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVANH31 < 0 ||
//     maxVANH31 > 100 ||
//     maxVANH31 === undefined ||
//     minVANH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH1 < 0 ||
//     maxVBNH1 > 100 ||
//     minVBNH1 === undefined ||
//     minVBNH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH2 < 0 ||
//     maxVBNH2 > 100 ||
//     minVBNH2 === undefined ||
//     maxVBNH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH3 < 0 ||
//     maxVBNH3 > 100 ||
//     maxVBNH3 === undefined ||
//     minVBNH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH4 < 0 ||
//     maxVBNH4 > 100 ||
//     maxVBNH4 === undefined ||
//     minVBNH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH5 < 0 ||
//     maxVBNH5 > 100 ||
//     maxVBNH5 === undefined ||
//     minVBNH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH6 < 0 ||
//     maxVBNH6 > 100 ||
//     maxVBNH6 === undefined ||
//     minVBNH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH7 < 0 ||
//     maxVBNH7 > 100 ||
//     maxVBNH7 === undefined ||
//     minVBNH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH8 < 0 ||
//     maxVBNH8 > 100 ||
//     maxVBNH8 === undefined ||
//     minVBNH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH9 < 0 ||
//     maxVBNH9 > 100 ||
//     maxVBNH9 === undefined ||
//     minVBNH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH10 < 0 ||
//     maxVBNH10 > 100 ||
//     maxVBNH10 === undefined ||
//     minVBNH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH11 < 0 ||
//     maxVBNH11 > 100 ||
//     maxVBNH11 === undefined ||
//     minVBNH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH12 < 0 ||
//     maxVBNH12 > 100 ||
//     maxVBNH12 === undefined ||
//     minVBNH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH13 < 0 ||
//     maxVBNH13 > 100 ||
//     maxVBNH13 === undefined ||
//     minVBNH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH14 < 0 ||
//     maxVBNH14 > 100 ||
//     maxVBNH14 === undefined ||
//     minVBNH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVBNH15 < 0 ||
//     maxVBNH15 > 100 ||
//     maxVBNH15 === undefined ||
//     minVBNH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH16 < 0 ||
//     maxVBNH16 > 100 ||
//     maxVBNH16 === undefined ||
//     minVBNH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH17 < 0 ||
//     maxVBNH17 > 100 ||
//     maxVBNH17 === undefined ||
//     minVBNH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH18 < 0 ||
//     maxVBNH18 > 100 ||
//     maxVBNH18 === undefined ||
//     minVBNH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH19 < 0 ||
//     maxVBNH19 > 100 ||
//     maxVBNH19 === undefined ||
//     minVBNH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH20 < 0 ||
//     maxVBNH20 > 100 ||
//     maxVBNH20 === undefined ||
//     minVBNH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH21 < 0 ||
//     maxVBNH21 > 100 ||
//     maxVBNH21 === undefined ||
//     minVBNH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH22 < 0 ||
//     maxVBNH22 > 100 ||
//     maxVBNH22 === undefined ||
//     minVBNH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH23 < 0 ||
//     maxVBNH23 > 100 ||
//     maxVBNH23 === undefined ||
//     minVBNH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH24 < 0 ||
//     maxVBNH24 > 100 ||
//     maxVBNH24 === undefined ||
//     minVBNH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH25 < 0 ||
//     maxVBNH25 > 100 ||
//     maxVBNH25 === undefined ||
//     minVBNH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH26 < 0 ||
//     maxVBNH26 > 100 ||
//     maxVBNH26 === undefined ||
//     minVBNH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH27 < 0 ||
//     maxVBNH27 > 100 ||
//     maxVBNH27 === undefined ||
//     minVBNH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH28 < 0 ||
//     maxVBNH28 > 100 ||
//     maxVBNH28 === undefined ||
//     minVBNH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH29 < 0 ||
//     maxVBNH29 > 100 ||
//     maxVBNH29 === undefined ||
//     minVBNH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH30 < 0 ||
//     maxVBNH30 > 100 ||
//     maxVBNH30 === undefined ||
//     minVBNH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVBNH31 < 0 ||
//     maxVBNH31 > 100 ||
//     maxVBNH31 === undefined ||
//     minVBNH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH1 < 0 ||
//     maxVCNH1 > 100 ||
//     minVCNH1 === undefined ||
//     minVCNH1 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH2 < 0 ||
//     maxVCNH2 > 100 ||
//     minVCNH2 === undefined ||
//     maxVCNH2 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH3 < 0 ||
//     maxVCNH3 > 100 ||
//     maxVCNH3 === undefined ||
//     minVCNH3 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH4 < 0 ||
//     maxVCNH4 > 100 ||
//     maxVCNH4 === undefined ||
//     minVCNH4 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH5 < 0 ||
//     maxVCNH5 > 100 ||
//     maxVCNH5 === undefined ||
//     minVCNH5 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH6 < 0 ||
//     maxVCNH6 > 100 ||
//     maxVCNH6 === undefined ||
//     minVCNH6 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH7 < 0 ||
//     maxVCNH7 > 100 ||
//     maxVCNH7 === undefined ||
//     minVCNH7 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH8 < 0 ||
//     maxVCNH8 > 100 ||
//     maxVCNH8 === undefined ||
//     minVCNH8 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH9 < 0 ||
//     maxVCNH9 > 100 ||
//     maxVCNH9 === undefined ||
//     minVCNH9 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH10 < 0 ||
//     maxVCNH10 > 100 ||
//     maxVCNH10 === undefined ||
//     minVCNH10 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH11 < 0 ||
//     maxVCNH11 > 100 ||
//     maxVCNH11 === undefined ||
//     minVCNH11 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH12 < 0 ||
//     maxVCNH12 > 100 ||
//     maxVCNH12 === undefined ||
//     minVCNH12 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH13 < 0 ||
//     maxVCNH13 > 100 ||
//     maxVCNH13 === undefined ||
//     minVCNH13 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH14 < 0 ||
//     maxVCNH14 > 100 ||
//     maxVCNH14 === undefined ||
//     minVCNH14 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }

//   if (
//     minVCNH15 < 0 ||
//     maxVCNH15 > 100 ||
//     maxVCNH15 === undefined ||
//     minVCNH15 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH16 < 0 ||
//     maxVCNH16 > 100 ||
//     maxVCNH16 === undefined ||
//     minVCNH16 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH17 < 0 ||
//     maxVCNH17 > 100 ||
//     maxVCNH17 === undefined ||
//     minVCNH17 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH18 < 0 ||
//     maxVCNH18 > 100 ||
//     maxVCNH18 === undefined ||
//     minVCNH18 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH19 < 0 ||
//     maxVCNH19 > 100 ||
//     maxVCNH19 === undefined ||
//     minVCNH19 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH20 < 0 ||
//     maxVCNH20 > 100 ||
//     maxVCNH20 === undefined ||
//     minVCNH20 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH21 < 0 ||
//     maxVCNH21 > 100 ||
//     maxVCNH21 === undefined ||
//     minVCNH21 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH22 < 0 ||
//     maxVCNH22 > 100 ||
//     maxVCNH22 === undefined ||
//     minVCNH22 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH23 < 0 ||
//     maxVCNH23 > 100 ||
//     maxVCNH23 === undefined ||
//     minVCNH23 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH24 < 0 ||
//     maxVCNH24 > 100 ||
//     maxVCNH24 === undefined ||
//     minVCNH24 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH25 < 0 ||
//     maxVCNH25 > 100 ||
//     maxVCNH25 === undefined ||
//     minVCNH25 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH26 < 0 ||
//     maxVCNH26 > 100 ||
//     maxVCNH26 === undefined ||
//     minVCNH26 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH27 < 0 ||
//     maxVCNH27 > 100 ||
//     maxVCNH27 === undefined ||
//     minVCNH27 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH28 < 0 ||
//     maxVCNH28 > 100 ||
//     maxVCNH28 === undefined ||
//     minVCNH28 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH29 < 0 ||
//     maxVCNH29 > 100 ||
//     maxVCNH29 === undefined ||
//     minVCNH29 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH30 < 0 ||
//     maxVCNH30 > 100 ||
//     maxVCNH30 === undefined ||
//     minVCNH30 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
//   if (
//     minVCNH31 < 0 ||
//     maxVCNH31 > 100 ||
//     maxVCNH31 === undefined ||
//     minVCNH31 === undefined
//   ) {
//     console.log("Lỗi");
//     return false;
//   }
