"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import {
  Book,
  Code,
  FileText,
  Home,
  Layers,
  LayoutTemplate,
  Settings,
  X,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("getting-started");

  const items = [
    {
      title: "Getting Started",
      icon: Home,
      href: "#getting-started",
      id: "getting-started",
    },
    {
      title: "Installation",
      icon: FileText,
      href: "#installation",
      id: "installation",
    },
    {
      title: "Components",
      icon: Layers,
      href: "#components",
      id: "components",
    },
    {
      title: "Theming",
      icon: LayoutTemplate,
      href: "#theming",
      id: "theming",
    },
    {
      title: "API Reference",
      icon: Code,
      href: "#api-reference",
      id: "api-reference",
    },
    {
      title: "Guides",
      icon: Book,
      href: "#guides",
      id: "guides",
    },
    {
      title: "Configuration",
      icon: Settings,
      href: "#configuration",
      id: "configuration",
    },
  ];

  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-30 w-72 transform border-r bg-background transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:z-0 md:w-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center border-b px-6 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
          <span className="ml-2 font-bold">BLOG NEXTDEVS</span>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)] py-6 pl-8 pr-6 md:h-[calc(100vh-5rem)]">
          <div className="space-y-4">
            <div className="py-2">
              <h4 className="mb-2 text-sm font-semibold">Documentation</h4>
              <nav className="space-y-1">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.id);
                          if (window.innerWidth < 768) {
                            setOpen(false);
                          }
                        }}
                        className={cn(
                          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          activeItem === item.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </nav>
            </div>
          </div>
        </ScrollArea>
      </aside>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
