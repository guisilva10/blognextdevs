"use client";

import { Book, ChevronDown, Code2Icon, FileText, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/app/_components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/app/_components/ui/sidebar";
import { cn } from "../_lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const docSections = [
    {
      title: "Introdução",
      items: [
        { title: "Introdução", slug: "introduction" },
        { title: "Instalação", slug: "installation" },
        { title: "Configuração", slug: "configuration" },
      ],
    },
    {
      title: "Conceitos Básicos",
      items: [
        { title: "Gerenciamento de Conteúdo", slug: "content-management" },
        { title: "Roteamento", slug: "routing" },
        { title: "Busca de Dados", slug: "data-fetching" },
      ],
    },
    {
      title: "Tópicos Avançados",
      items: [
        { title: "Autenticação", slug: "authentication" },
        { title: "Integração com API", slug: "api-integration" },
        {
          title: "Otimização de Performance",
          slug: "performance-optimization",
        },
      ],
    },
    {
      title: "Implantação",
      items: [
        { title: "Opções de Implantação", slug: "deployment-options" },
        { title: "Integração CI/CD", slug: "ci-cd-integration" },
        { title: "Monitoramento", slug: "monitoring" },
      ],
    },
  ];

  const blogCategories = [
    { title: "Tutoriais", slug: "tutorials" },
    { title: "CSS", slug: "css" },
    { title: "UI/UX", slug: "ui-ux" },
    { title: "React", slug: "react" },
    { title: "Performance", slug: "performance" },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-3 py-4">
          <div className="from-primary/70 via-primary to-primary/70 flex size-8 items-center justify-center rounded-md bg-gradient-to-r">
            <Code2Icon className="size-5" />
          </div>
          <p className="text-lg font-bold">
            LAB <span className="text-primary">NDA</span>
          </p>
        </div>
        <div className="px-2 pt-2">
          <SidebarInput placeholder="Search..." />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem
              className={cn(
                isActive("/") &&
                  "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
              )}
            >
              <SidebarMenuButton asChild isActive={isActive("/")}>
                <Link href="/">
                  <Home />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem
              className={cn(
                isActive("/blog") &&
                  "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
              )}
            >
              <SidebarMenuButton asChild isActive={isActive("/blog")}>
                <Link href="/blog">
                  <FileText />
                  <span>Blog</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem
              className={cn(
                isActive("/docs") &&
                  "from-primary/70 via-primary to-primary/70 rounded-md bg-gradient-to-r text-white",
              )}
            >
              <SidebarMenuButton asChild isActive={isActive("/docs")}>
                <Link href="/docs">
                  <Book />
                  <span>Documentação</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Documentation Sections */}
        <Collapsible
          defaultOpen={isActive("/docs")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
                Documentação
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                {docSections.map((section) => (
                  <Collapsible key={section.title} className="group/section">
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <span>{section.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/section:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {section.items.map((item) => (
                              <SidebarMenuSubItem key={item.slug}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isActive(`/docs/${item.slug}`)}
                                >
                                  <Link href={`/docs/${item.slug}`}>
                                    {item.title}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </Collapsible>
                ))}
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        <SidebarSeparator />

        {/* Blog Categories */}
        <Collapsible
          defaultOpen={isActive("/blog")}
          className="group/collapsible"
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
                Navegação do Blog
                <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {blogCategories.map((category) => (
                    <SidebarMenuItem key={category.slug}>
                      <SidebarMenuButton asChild>
                        <Link href={`/blog/category/${category.slug}`}>
                          <span>{category.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <span className="text-muted-foreground text-xs">v1.0.0</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
