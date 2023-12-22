"use client";
import Tab from "@/components/Layout/Tab";
import { Button } from "@/components/ui/button";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddLog from "./AddLog";
import { Separator } from "@/components/ui/separator";
import { getLogs } from "@/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function MyLog() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [data, setData] = useState();

  async function readLog() {
    try {
      const rs = await getLogs(id);
      const format = rs.data.sort((a,b) => a.day - b.day)
      setData(format);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readLog();
  }, []);

  if (!data) {
    return (
      <div className="px-4 flex flex-col pb-12 relative min-h-[90vh]">
        <Tab
          pathname={"Ghi log"}
          pathname1={name}
        />
        <div className="flex flex-col gap-4 mt-4">
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
    <div className="px-4 flex flex-col pb-12 relative min-h-[90vh]">
      <Tab
        pathname={"Ghi log"}
        pathname1={name}
      />
      {/* <Button
        className="absolute bottom-0 right-5 animate-bounce"
        size="icon"
      >
        <MdAddCircle className="w-6 h-6" />
      </Button> */}
      <div className="flex flex-col">
        <h1 className="text-center font-bold py-4">Giáo án của {name}</h1>
          <span className="text-xs text-red-600 font-bold mb-4">*Hàng màu đỏ unleash rune</span>
        <div className="flex flex-col overflow-x-auto">
          <div className="overflow-x-auto hidden lg:block">
            <Table>
              {data.length === 0 && (
                <TableCaption>Chưa có dữ liệu.</TableCaption>
              )}
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <img
                      src="/em.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/up.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/in.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/bd.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/hl.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/ms.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead>
                    <img
                      src="/bs.png"
                      className="w-6 h-6 rounded-full mx-auto"
                    />
                  </TableHead>
                  <TableHead className="text-center font-bold text-red-500">Day</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.idol} className={cn("text-black", item.unl && "text-red-500")}>
                    <TableCell className="text-center">{item.em}</TableCell>
                    <TableCell className="text-center">{item.up}</TableCell>
                    <TableCell className="text-center">{item.in}</TableCell>
                    <TableCell className="text-center">{item.bd}</TableCell>
                    <TableCell className="text-center">{item.hl}</TableCell>
                    <TableCell className="text-center">{item.ms}</TableCell>
                    <TableCell className="text-center">{item.bs}</TableCell>
                    <TableCell className="text-center font-bold">
                      {item.day}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Accordion
            type="multiple"
            collapsible
            className="w-full lg:hidden"
          >
            {data?.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
              >
                <AccordionTrigger className={cn("font-bold", item.unl && "text-red-500")}>
                  Day: {item.day}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/em.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.em}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/up.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.up}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/in.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.in}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/bd.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.bd}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/hl.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.hl}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/ms.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.ms}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <img
                        src="/bs.png"
                        alt="img"
                        className="rounded-full w-6 h-6"
                      />
                      <span>{item.bs}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
