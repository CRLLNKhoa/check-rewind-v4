"use client";
import Tab from "@/components/Layout/Tab";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import { time } from "@/api/time";
import { RiArrowUpDownLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

export default function Home() {
  const [data, setData] = useState(time);
  const [dataTable, setDataTable] = useState([]);
  const [currentDay, setCurrentDay] = useState(0);
  const [plannedDay, setPlannedDay] = useState(0);
  const [sort, setSort] = useState(false);

  function handleSearch() {
    const result = data.filter(
      (item) => item.Day >= currentDay && item.Day <= plannedDay
    );
    setDataTable(result);
  }

  function handleSortAZ() {
    setDataTable(dataTable.sort((a, b) => a.Day - b.Day));
  }

  function handleSortZA() {
    setDataTable(dataTable.sort((a, b) => b.Day - a.Day));
  }

  return (
    <div className="px-4 flex flex-col pb-12">
      <Tab pathname={"Time Rewind"} />
      <h1 className="text-center font-bold pt-4 m-0">Time Rewind</h1>
      <p className="text-center text-xs">
        Giá trị của time càng nhỏ thì thời gian rewind càng ít!
      </p>
      {/* NOTE --------- */}
      <div className="flex justify-center items-center my-4">
        <div className="flex flex-col text-xs">
          <label
            htmlFor="singleto"
            className="font-bold"
          >
            Ngày hiện tại
          </label>
          <input
            value={currentDay}
            type="number"
            placeholder="0"
            className="border-2 py-1 px-2 w-[124px] mt-1 outline-none rounded-md"
            onChange={(e) => setCurrentDay(e.target.value)}
          />
        </div>
        <div className="translate-y-[10px]">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="h-8 mx-4 "
          />
        </div>
        <div className="flex flex-col text-xs">
          <label
            htmlFor="singleto"
            className="font-bold text-end"
          >
            Ngày dự kiến
          </label>
          <input
            value={plannedDay}
            type="number"
            placeholder="0"
            className="border-2 text-end py-1 px-2 w-[124px] mt-1 outline-none rounded-md"
            onChange={(e) => setPlannedDay(e.target.value)}
          />
        </div>
      </div>
      {/* NOTE --------- */}
      <div className="flex justify-center gap-2 mb-8">
        <Button
          size="sm"
          className="w-[200px]"
          onClick={handleSearch}
        >
          Tra cứu
        </Button>
      </div>

      <Table>
        {dataTable?.length === 0 && (
          <TableCaption>Nhập day &gt; 1000.</TableCaption>
        )}
        <TableHeader>
          <TableRow className="bg-black hover:bg-black select-none">
            <TableHead className="text-center font-bold text-white">
              Day
            </TableHead>
            <TableHead className="text-center font-bold text-white">
              Time
            </TableHead>
            <TableHead
              onClick={() => {
                setSort(!sort);
                if (sort) {
                  handleSortZA();
                } else handleSortAZ();
              }}
              className="font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
            >
              Index <RiArrowUpDownLine className="w-4 h-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataTable.map((item, index) => (
            <TableRow
              className={cn(
                "border border-slate-400 hover:bg-black/80 duration-500 text-white cursor-pointer",
                index % 2 === 0 && "bg-red-500",
                index % 2 === 1 && "bg-[#3860ff]"
              )}
              key={item.Day}
            >
              <TableCell className="text-center">{item.Day}</TableCell>
              <TableCell className="text-center">{item.Time}</TableCell>
              <TableCell className="text-center">
                {Math.floor(index + 1)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
