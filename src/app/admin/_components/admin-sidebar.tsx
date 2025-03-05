"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Settings,
  Users,
  ChevronDown,
  Code2Icon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/app/_components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/_components/ui/collapsible";

import { NavUser } from "@/app/admin/_components/nav-admin";
import { cn } from "@/app/_lib/utils";

export default function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/");
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="flex items-center gap-2 px-3 py-4">
            <div className="from-primary/70 via-primary to-primary/70 flex size-8 items-center justify-center rounded-md bg-gradient-to-r">
              <Code2Icon className="size-5" />
            </div>
            <p className="text-lg font-bold">
              LAB <span className="text-primary">NDA</span>
            </p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/admin")}
                  tooltip="Dashboard"
                >
                  <Link href="/admin">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuItem>
                      <SidebarMenuButton tooltip="Blog">
                        <FileText />
                        <span>Blog</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/blog/new")}
                          className={cn(
                            isActive("/admin/blog/new") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/blog/new">Novo Artigo</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/blog/list")}
                          className={cn(
                            isActive("/admin/blog/list") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/blog/list">Listar Artigos</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/blog/categories")}
                          className={cn(
                            isActive("/admin/blog/categories") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/blog/categories">Categorias</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip="Documentação">
                      <BookOpen />
                      <span>Documentação</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/docs/new")}
                          className={cn(
                            isActive("/admin/docs/new") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/docs/new">Nova Documentação</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/docs/list")}
                          className={cn(
                            isActive("/admin/docs/list") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/docs/list">
                            Listar Documentação
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/docs/sections")}
                          className={cn(
                            isActive("/admin/docs/sections") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/docs/sections">Seções</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={isActive("/admin/users")}
                  className={cn(
                    isActive("/admin/users") &&
                      "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                  )}
                >
                  <Link href="/admin/users">
                    <Users />
                    <span>Usuários</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      isActive={isActive("/admin/settings")}
                      tooltip="Configurações"
                    >
                      <Settings />
                      <span>Configurações</span>
                      <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive("/admin/settings")}
                          className={cn(
                            isActive("/admin/settings") &&
                              "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
                          )}
                        >
                          <Link href="/admin/settings">Geral</Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
