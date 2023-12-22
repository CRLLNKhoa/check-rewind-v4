"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
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
      <span className="mt-auto text-xs py-4 pl-2 text-muted-foreground">@Coded by Lương Khoa</span>
    </div>
  );
}
