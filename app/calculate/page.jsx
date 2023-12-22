import Tab from "@/components/Layout/Tab";
import React from "react";
import Elix from "./Elix";
import Wb from "./Wb";
import DayPush from "./DayPush";

export default function page() {
  return (
    <div className="px-4 flex flex-col pb-12 relative min-h-[90vh]">
      <Tab pathname={"Tính toán"} />
      <Elix />
      <Wb />
      <DayPush />
    </div>
  );
}
