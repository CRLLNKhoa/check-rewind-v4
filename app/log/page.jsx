"use client";
import Tab from "@/components/Layout/Tab";
import { FcLike } from "react-icons/fc";
import React, { useEffect, useState } from "react";
import { FaEye, FaUser } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoFolderOpenOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getIdol } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  const router = useRouter();
  const [idol, setIdol] = useState([]);

  async function readIdol() {
    try {
      const rs = await getIdol();
      setIdol(rs.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readIdol();
  }, []);

  if (idol.length === 0) {
    return (
      <div className="px-4 flex flex-col pb-12">
        <Tab pathname={"Ghi log"} />
        <div className="my-4 flex justify-between items-center border-b border-black pb-2">
          <h1 className="text-center font-bold border px-2 mt-4 border-black border-b-transparent relative pt-2">
            Danh sách các giáo án{" "}
            <span className="bg-white absolute -left-[1px] -right-[1px] -bottom-[10px] border-x border-black h-[12px]"></span>
          </h1>
          <Button onClick={() => router.push("/log/my-log")}>
            Giáo án của tôi
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
          <Skeleton className="h-12" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 flex flex-col pb-12">
      <Tab pathname={"Ghi log"} />
      <div className="my-4 flex justify-between items-center border-b border-black pb-2">
        <h1 className="text-center font-bold border px-2 mt-4 border-black border-b-transparent relative pt-2">
          Danh sách các giáo án{" "}
          <span className="bg-white absolute -left-[1px] -right-[1px] -bottom-[10px] border-x border-black h-[12px]"></span>
        </h1>
        <Button onClick={() => router.push("/log/my-log")}>
          Giáo án của tôi
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {idol.map(item => (
          <CardLog
          key={item.id}
          name={item.name}
          view={item.view}
          like={item.like}
          id={item.id}
        />
        ))}
      </div>
    </div>
  );
}

function CardLog({ name, view, like, id }) {
  return (
    <div className="border border-black select-none p-4 rounded-lg text-black cursor-pointer flex items-center justify-between">
      <div className="text-sm flex gap-2 font-bold items-center">
        <FaUser /> {name}
      </div>
      <div className="flex gap-2 text-[12px] justify-between">
        <span className="flex items-center gap-1">
          <FaEye /> {view}
        </span>
     
        <span className="flex items-center gap-1">
          <FcLike /> {like}
        </span>

        <span className="text-green-500 font-bold">Đã xác thực</span>
      </div>
      <Button
        className="text-white"
        size="icon"
        asChild
      >
        <Link href={`/log/${id}?name=${name}`}>
          {" "}
          <IoFolderOpenOutline />
        </Link>
      </Button>
    </div>
  );
}
