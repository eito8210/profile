//import { div } from "framer-motion/client";


import { ResizablePanel, ResizablePanelGroup, ResizableHandle } from "@/components/ui/resizable";
import {ResizableDemo} from "./components/education-Resizable";

export default function Education() {
    return (
        <div>
           <h1 className="text-4xl font-bold text-center my-4 mb-0">My Education</h1>
            <ResizableDemo />
        </div>
    );
}