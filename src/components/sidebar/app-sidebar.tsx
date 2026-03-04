"use client"

import * as React from "react"
import {
  Home,
  LibraryBigIcon,
  MessageCircleCheck,
  UserStar,
  Wrench,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { HeaderSidebar } from "@/components/sidebar/header-sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ContactNav } from "./contact-nav"

const data = {
  navMain: [
    {
      title: "Inicio",
      url: "#",
      icon: Home,
    },
    {
      title: "Portfólio",
      url: "#",
      icon: LibraryBigIcon,
      isActive: true,
      items: [
        {
          title: "Automotivo",
          url: "#",
        },
        {
          title: "Eventos",
          url: "#",
        },
      ],
    },
    {
      title: "Sobre mim",
      url: "#",
      icon: UserStar,
    },
    {
      title: "Depoimentos",
      url: "#",
      icon: MessageCircleCheck,
    },
    {
      title: "Serviços",
      url: "#",
      icon: Wrench,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <HeaderSidebar />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <ContactNav  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
