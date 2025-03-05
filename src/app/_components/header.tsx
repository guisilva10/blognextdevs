"use client";

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Github, Search } from "lucide-react";
import { SidebarTrigger } from "@/app/_components/ui/sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/app/_components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "./theme/toggle-theme-button";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b p-4 backdrop-blur">
      <div className="flex h-14 items-center p-6">
        <div className="mr-4 flex md:hidden">
          <SidebarTrigger />
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Mobile search trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Desktop search */}
            <div className="hidden md:flex md:w-80 lg:w-96">
              <div className="relative w-full">
                <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  className="w-full pl-8"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/yourusername/devdocs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile search sheet */}
      <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
        <SheetContent side="top" className="h-auto">
          <SheetHeader className="mb-4">
            <SheetTitle>Search</SheetTitle>
            <SheetDescription>
              Search for documentation, blog posts, and more.
            </SheetDescription>
          </SheetHeader>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8"
              autoFocus
            />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
