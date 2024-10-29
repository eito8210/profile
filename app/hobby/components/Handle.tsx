import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <div className="w-full h-[calc(100vh-5rem)] p-4 box-border">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full h-full max-w-full max-h-full rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-8">
          <img src="./IMG_7272.jpg" alt="Right Panel Image" className="w-full h-full object-cover rounded-lg" />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-8">
            <span className="font-semibold">My hobby is watching games of the Hiroshima Toyo Carp, my local baseball team. I’ve loved baseball since I was a kid and used to watch it on TV every day. Even now, on days when there’s a game, I watch the highlights.</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
