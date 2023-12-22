// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { addIdol, addLog, getIdol } from "@/actions";
// import { useToast } from "@/components/ui/use-toast";

// export default function AddLog() {
//   const [idol, setIdol] = useState([]);
//   const [dataAdd, setDataAdd] = useState({ name: "", pin: 1111 });
//   const [isLoading, setIsLoading] = useState(false);
//   const [dataLog, setDataLog] = useState({
//     day: 0,
//     em: "",
//     up: "",
//     in: "",
//     bd: "",
//     hl: "",
//     ms: "",
//     bs: "",
//     idol: "",
//     pin: "",
//   });

//   async function handleAddIdol() {
//     try {
//       if (dataAdd.name !== "" && dataAdd.pin !== "") {
//         setIsLoading(true);
//         const rs = await addIdol(dataAdd);
//         setIdol(idol.concat(rs.data[0]));
//         setIsLoading(false);
//         alert("Thêm thành công!");
//       } else alert("Thiếu thông tin!");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function readIdol() {
//     try {
//       const rs = await getIdol();
//       setIdol(rs.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     readIdol();
//   }, []);

//   async function handleAddLog() {
//     try {
//       if (
//         dataLog.day !== "" &&
//         dataLog.em !== "" &&
//         dataLog.in !== "" &&
//         dataLog.up !== "" &&
//         dataLog.bd !== "" &&
//         dataLog.hl !== "" &&
//         dataLog.day !== "" &&
//         dataLog.bs !== "" &&
//         dataLog.ms !== "" &&
//         dataLog.idol !== "" &&
//         dataLog.pin !== ""
//       ) {
//         setIsLoading(true);
//         const rs = await addLog(dataLog);
//         console.log(rs.data);
//         setIsLoading(false);
//         if(rs.status === "Sai mã pin!"){
//             alert("Sai mã pin!");
//         }
//         if(rs.status === "Success!"){
//             alert("Thêm thành công!");
//         }
//       } else alert("Thiếu thông tin!");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
    // <div className="flex flex-col mt-4 gap-2 pr-2 ">
    //   <div className="flex flex-col">
    //     <label
    //       htmlFor="name"
    //       className="font-bold"
    //     >
    //       Tên idol:{" "}
    //     </label>
    //     <Select onValueChange={(e) => setDataLog({ ...dataLog, idol: e })}>
    //       <SelectTrigger className="w-[300px]">
    //         <SelectValue placeholder="Select a idol" />
    //       </SelectTrigger>
    //       <SelectContent>
    //         <SelectGroup>
    //           <Dialog>
    //             <DialogTrigger asChild>
    //               <SelectLabel className="cursor-pointer">
    //                 + Thêm idol
    //               </SelectLabel>
    //             </DialogTrigger>
    //             <DialogContent className="sm:max-w-md">
    //               <DialogHeader>
    //                 <DialogTitle>Thêm Idol</DialogTitle>
    //                 <DialogDescription>
    //                   Bạn hãy nhớ mã pin của mình.
    //                 </DialogDescription>
    //               </DialogHeader>
    //               <div className="flex space-y-2 flex-col">
    //                 <div className="flex gap-2 items-center justify-between">
    //                   <span>Tên:</span>
    //                   <input
    //                     value={dataAdd.name}
    //                     onChange={(e) =>
    //                       setDataAdd({ ...dataAdd, name: e.target.value })
    //                     }
    //                     type="text"
    //                     className="py-1 px-4 border border-black rounded-md"
    //                     placeholder="Tên..."
    //                   />
    //                 </div>
    //                 <div className="flex gap-2 items-center justify-between">
    //                   <span>Mã pin:</span>
    //                   <input
    //                     value={dataAdd.pin}
    //                     onChange={(e) =>
    //                       setDataAdd({ ...dataAdd, pin: e.target.value })
    //                     }
    //                     type="number"
    //                     className="py-1 px-4 border border-black rounded-md"
    //                     placeholder="Mã pin là số..."
    //                   />
    //                 </div>
    //                 <Button
    //                   disabled={isLoading}
    //                   onClick={handleAddIdol}
    //                   className="mt-4"
    //                 >
    //                   {isLoading ? "Đang thêm" : "Thêm"}
    //                 </Button>
    //               </div>
    //             </DialogContent>
    //           </Dialog>
    //           {idol.map((item) => (
    //             <SelectItem
    //               key={item.id}
    //               value={item.id}
    //             >
    //               {item.name}
    //             </SelectItem>
    //           ))}
    //         </SelectGroup>
    //       </SelectContent>
    //     </Select>
    //   </div>
    //   <div className="flex flex-col overflow-y-auto">
    //     <div className="flex flex-wrap gap-10">
    //       <div className="flex items-center gap-2 mt-4">
    //         <label
    //           htmlFor="name"
    //           className="font-bold"
    //         >
    //           Day:
    //         </label>
    //         <input
    //           value={dataLog.day}
    //           onChange={(e) => setDataLog({ ...dataLog, day: e.target.value })}
    //           type="number"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/em.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.em}
    //           onChange={(e) => setDataLog({ ...dataLog, em: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/up.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.up}
    //           onChange={(e) => setDataLog({ ...dataLog, up: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/in.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.in}
    //           onChange={(e) => setDataLog({ ...dataLog, in: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/bd.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.bd}
    //           onChange={(e) => setDataLog({ ...dataLog, bd: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/hl.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.hl}
    //           onChange={(e) => setDataLog({ ...dataLog, hl: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/ms.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.ms}
    //           onChange={(e) => setDataLog({ ...dataLog, ms: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2 mt-4">
    //         <img
    //           src="/bs.png"
    //           alt="sad"
    //           className="w-8 h-8 rounded-full"
    //         />
    //         <input
    //           value={dataLog.bs}
    //           onChange={(e) => setDataLog({ ...dataLog, bs: e.target.value })}
    //           type="text"
    //           className="border border-black w-[100px] py-1 px-2 rounded-md"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex items-center gap-2 mt-6">
    //       <label
    //         htmlFor="name"
    //         className="font-bold"
    //       >
    //         Pin:
    //       </label>
    //       <input
    //         value={dataLog.pin}
    //         onChange={(e) => setDataLog({ ...dataLog, pin: e.target.value })}
    //         type="number"
    //         className="border border-black w-[100px] py-1 px-2 rounded-md"
    //       />
    //     </div>
    //     <Button
    //       onClick={handleAddLog}
    //       className="w-[200px] mt-6"
    //     >
    //       Thêm
    //     </Button>
    //   </div>
    // </div>
//   );
// }
