"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo1() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] p-4 box-border">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full max-w-full max-h-full rounded-lg shadow-xl border overflow-hidden"
      >
        
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-8 bg-gray-900 text-white">
            <div className="flex flex-col justify-center items-start text-left">
              <h1 className="font-bold text-4xl md:text-6xl mb-4">About Me</h1>
              <p className="font-normal text-lg md:text-2xl">
                I am Eito Nishikawa from Japan, a second-year computer science major at Simon Fraser University.
                I am passionate about developing innovative tech solutions and exploring the world of software engineering.
              </p>
            </div>
          </div>
        </ResizablePanel>

        
        <ResizableHandle withHandle />

     
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-8 bg-gray-900 text-white">
            <div className="w-full h-full relative">
              <img
                src="./Eito.jpg" 
                alt="Eito Nishikawa"
                className="w-full h-full object-cover rounded-lg transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 rounded-lg"></div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}