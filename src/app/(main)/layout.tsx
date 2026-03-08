import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from "next/link";



export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
          <Button
            size="sm"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 "
          >
            <Link target="_blank" href={"https://wa.me/5521994557464?text=ola%2C%20gostaria%20de%20fazer%20um%20orcamento"}>
              Solicitar Orçamento
            </Link>
          </Button>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
