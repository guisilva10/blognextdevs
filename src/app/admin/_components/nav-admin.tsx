"use client";

import { useSession, signOut } from "next-auth/react";
import { ChevronsUpDown, LogOut } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/app/_components/ui/sidebar";
import { Suspense } from "react";

function NavAdminContent() {
  const session = useSession();
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={session.data?.user?.image as string}
                  alt={session.data?.user?.name as string}
                />
                <AvatarFallback className="rounded-lg">
                  {session.data?.user?.name?.charAt(0).toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  {session.data?.user?.name}
                </span>
                <span className="truncate text-xs">
                  {session.data?.user?.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 cursor-pointer rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="cursor-pointer p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={session.data?.user?.image as string}
                    alt={session.data?.user?.name as string}
                  />
                  <AvatarFallback className="rounded-lg">
                    {session.data?.user?.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {session.data?.user?.name}
                  </span>
                  <span className="truncate text-xs">
                    {session.data?.user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function LoadingUser() {
  return (
    <div className="flex animate-pulse items-center gap-2 p-2">
      <div className="h-8 w-8 rounded-lg bg-gray-300"></div>
      <div className="flex flex-col">
        <div className="h-3 w-20 rounded bg-gray-300"></div>
        <div className="mt-1 h-2 w-32 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export function NavUser() {
  return (
    <Suspense fallback={<LoadingUser />}>
      <NavAdminContent />
    </Suspense>
  );
}
