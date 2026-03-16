import { Camera } from "lucide-react";

import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";

export function HeaderSidebar() {
  return (
    <SidebarMenu>
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <Camera className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">BRD SOUSA</span>
          <span className="truncate text-xs">Fotografo - VideoMaker</span>
        </div>
      </SidebarMenuButton>
    </SidebarMenu>
  );
}
