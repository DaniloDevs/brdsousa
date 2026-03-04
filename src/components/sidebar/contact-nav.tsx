"use client"

import {
  BadgeCheck,
  Bell,
  Bot,
  CameraIcon,
  ChevronRight,
  ChevronsUpDown,
  Contact,
  CreditCard,
  Instagram,
  LogOut,
  MessageCircle,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"
import { } from "radix-ui"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import Link from "next/link"

const socialLinks = [
  {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://instagram.com/brdsousa.fts',
    color: 'hover:text-pink-600',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    url: 'https://wa.me',
    color: 'hover:text-green-600',
  },
  {
    icon: CameraIcon,
    label: 'Balenk',
    url: 'https://banlek.com/brdsousafts',
    color: 'hover:text-blue-600',
  },
]

export function ContactNav() {

  return (
    <SidebarMenu className="gap-4">
      <Collapsible
        asChild
        defaultOpen={true}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip="Contatos">
              <Contact />
              <span>Contatos</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {socialLinks.map((subItem) => (
                <SidebarMenuSubItem key={subItem.label}>
                  <SidebarMenuSubButton asChild>
                    <Link target="_blank" href={subItem.url}>
                      <span>{subItem.label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>

      <SidebarMenuItem>
        <SidebarMenuButton tooltip="Contatos" className="text-center justify-center border">
          <span>© Todos os Direitos Reservados</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

    </SidebarMenu>
  )
}
