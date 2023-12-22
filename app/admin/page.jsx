"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [PIN, setPIN] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  function handleAdmin() {
    if (PIN === "12052000") {
      setIsAdmin(true);
    }
  }

  console.log(typeof(PIN))

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <input
            onChange={(e) => setPIN(e.target.value)}
            type="number"
            placeholder="Mã PIN"
            className="border border-black p-1 px-2 rounded-md"
          />
          <Button
            onClick={handleAdmin}
            type="submit"
          >
            Enter
          </Button>
        </div>
      </div>
    );
  } else return <div></div>;
}
