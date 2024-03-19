'use client'
import Header from "@/components/Header";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState(false)
  return (
    <>
      <Header light={lightMode} lightMode={lightMode} setLightMode={setLightMode} />
      <div className="flex items-start justify-start w-full h-full">
        <Sidebar height={170} maxHeight={190} light={lightMode} />
        <Main light={lightMode} />
      </div>
    </>
  );
}
