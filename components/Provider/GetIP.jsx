"use client";
import React, { useEffect, useState } from "react";

export default function GetIP() {
  const [ipAddress, setIPAddress] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
}
