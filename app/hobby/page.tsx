//import { div } from "framer-motion/client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ResizableDemo } from "./components/Handle";

export default function Hobby() {
  return(
    <div>
      <h1 className="text-4xl font-bold text-center my-4 mb-0">My Hobby</h1>
      <ResizableDemo/>

    </div>
  );
}