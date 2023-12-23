"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  return (
    <nav className="flex border-b z-50 items-center fixed h-[52px] justify-between  top-0 left-0 right-0 bg-white px-4 lg:hidden">
      <MenuMobile />
      <NoticMobile />
      <h1 className="font-bold cursor-pointer">{`<CheckCost />`}</h1>
    </nav>
  );
}

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

function MenuMobile() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden"
          variant="outline"
          size="icon"
        >
          <RiMenuUnfoldLine />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col h-full text-sm">
          <div
        onClick={() => router.push("/")}
        className={cn(
          "flex items-center pl-2 gap-2 duration-500 select-none hover:bg-slate-50 py-3 cursor-pointer",
          pathname === "/" && "border-r-2 border-primary bg-slate-100 font-bold"
        )}
      >
        <img
          src="/rw.svg"
          alt=""
          className="w-6 h-6"
        />
        <span>Single Rewind</span>
      </div>
      <div
         onClick={() => router.push("/double-rewind")}
        className={cn(
          "flex pl-2 items-center gap-2 duration-500 select-none hover:bg-slate-50 py-3 cursor-pointer",
          pathname === "/double-rewind" && "border-r-2 border-primary bg-slate-100 font-bold"
        )}
      >
        <img
          src="/dbrw.svg"
          alt=""
          className="w-6 h-6"
        />
        <span>Double Rewind</span>
      </div>
      <div
        onClick={() => router.push("/time-rewind")}
        className={cn(
          "flex pl-2 items-center gap-2 duration-500 select-none hover:bg-slate-50 py-3 cursor-pointer",
          pathname === "/time-rewind" && "border-r-2 border-primary bg-slate-100 font-bold"
        )}
      >
        <img
          src="/cal.svg"
          alt=""
          className="w-6 h-6"
        />
        <span>Time Rewind</span>
      </div>
      <div
        onClick={() => router.push("/calculate")}
        className={cn(
          "flex pl-2 items-center gap-2 duration-500 select-none hover:bg-slate-50 py-3 cursor-pointer",
          pathname === "/calculate" && "border-r-2 border-primary bg-slate-100 font-bold"
        )}
      >
        <img
          src="/log.svg"
          alt=""
          className="w-6 h-6"
        />
        <span>Tính dame leo day</span>
      </div>
      <div
        onClick={() => router.push("/log")}
        className={cn(
          "flex pl-2 items-center gap-2 duration-500 select-none hover:bg-slate-50 py-3 cursor-pointer",
          pathname.slice(0,4) === "/log" && "border-r-2 border-primary bg-slate-100 font-bold"
        )}
      >
        <img
          src="/five.svg"
          alt=""
          className="w-6 h-6"
        />
        <span>Giáo án leo day</span>
      </div>
            <span className="mt-auto text-xs py-4 pl-2 text-muted-foreground text-center">
              @Coded by Lương Khoa
            </span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NoticMobile() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="lg:hidden mr-auto ml-2"
          variant="outline"
          size="icon"
        >
          <FaBell />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
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
      </SheetContent>
    </Sheet>
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
