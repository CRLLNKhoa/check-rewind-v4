import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function History() {
  return (
    <div className="flex flex-col">
      <Accordion
        defaultValue="item-1"
        type="single"
        collapsible
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Tin tức</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <span>- Chúc anh em chơi game vui vẻ!</span>
              <span>
                - Có đóng góp gì liên hệ với tôi{" "}
                <a
                  className="font-bold text-red-500"
                  href="https://luongkhoa.io.vn/"
                  target="_blank"
                >
                  tại đây
                </a>
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Chỉnh sửa</AccordionTrigger>
          <AccordionContent>
            - Update UI & Add Log
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Check-in</AccordionTrigger>
          <AccordionContent>
            <CheckIN />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function CheckIN() {
  return (
    <div className="flex flex-col pl-2 gap-2">
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-green-500 rounded-full p-1"></span>
        <p>IP: 171.249.217.108:</p>
        <p>- Check in</p>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-red-500 rounded-full p-1"></span>
        <p>IP: 171.249.217.108:</p>
        <p>- Xóa dữ liệu</p>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-orange-500 rounded-full p-1"></span>
        <p>IP: 171.249.217.108:</p>
        <p>- Chỉnh sữa dữ liệu</p>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className="bg-sky-500 rounded-full p-1"></span>
        <p>IP: 171.249.217.108:</p>
        <p>- Thêm dữ liệu</p>
      </div>
    </div>
  );
}
