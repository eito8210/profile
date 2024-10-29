import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import Card from "./Card";


 
export function ResizableDemo() {
  return (
      <div className="w-full h-[calc(100vh-5rem)] p-4 box-border">
          <ResizablePanelGroup
              direction="horizontal"
              className="w-full h-full max-w-full max-h-full rounded-lg border"
          >
              <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-8">
                  <img src="./sfupic.jpg" className="w-full h-full object-cover rounded-lg" />
                  </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={40}>
                  <ResizablePanelGroup direction="vertical">
                      <ResizablePanel defaultSize={50}>
                          <div className="flex flex-col h-full items-center justify-center p-8">
                            <h2 className="text-4xl font-bold mb-4">Education</h2> 
                            <ul className="text-2xl list-disc list-inside">
                                <li>Yasufuruichi High School</li>
                                <li>Alexander College</li>
                                <li>SFU</li>
                            </ul>
                          </div>
                      </ResizablePanel>
                      <ResizableHandle />
                      <ResizablePanel defaultSize={50}>
                          <div className="flex flex-col h-full items-center justify-center p-8">
                            <h2 className="text-4xl font-bold mb-4">Work Experience</h2> 
                              <ul className="text-1xl list-disc list-inside">
                                  <li>Smile5 Corporation Production Manager</li>
                                
                              </ul>
                          </div>
                      </ResizablePanel>
                  </ResizablePanelGroup>
              </ResizablePanel>
          </ResizablePanelGroup>
      </div>
  );
}