import Tab from "@/components/Layout/Tab";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="px-4 flex flex-col pb-12">
      <Tab pathname={"Ghi log"} pathname1={"Log của tôi"} />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-bold my-4">Xác nhận</h1>
        <div className="border border-black relative rounded-md">
            <span className="bg-white absolute -top-[14px] px-2 left-2 font-bold text-sm">Tên: </span>
            <input type="text" className="py-2 px-2 rounded-md" />
        </div>
        <div className="border border-black relative rounded-md mt-4">
            <span className="bg-white absolute -top-[14px] px-2 left-2 font-bold text-sm">Mã PIN: </span>
            <input type="text" className="py-2 px-2 rounded-md" />
        </div>
        <div className="mt-4 flex gap-2">
            <Button>Đăng ký</Button>
            <Button>Đăng nhập</Button>
        </div>
        <span className="text-sm font-bold text-red-500 my-4">Sắp cập nhật</span>
      </div>
    </div>
  );
}
