
"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export function CardDemo() {
    return (
        <div className="w-full h-[80vh] pt-4 flex items-center p-4">
            <div className="flex w-full h-full rounded-md shadow-xl border overflow-hidden">
                
                <div className="w-1/2 bg-gray-900 text-white p-6 flex flex-col justify-center">
                    <h1 className="font-bold text-4xl md:text-6xl mb-4">About Me</h1>
                    <p className="font-normal text-lg md:text-2xl">
                        I am Eito Nishikawa from Japan, a second-year computer science major at Simon Fraser University.
                        I am passionate about developing innovative tech solutions and exploring the world of software engineering.
                    </p>
                </div>
                
                <div
                    className={cn("w-1/2 bg-cover bg-center relative", "bg-[url('/IMG_7979.jpg')]", "transition-all duration-500")}
                >
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500"></div>
                </div>
            </div>
        </div>
    );
}