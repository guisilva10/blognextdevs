import { AppSidebar } from "@/app/_components/app-sidebar";
import { SidebarInset } from "@/app/_components/ui/sidebar";
import { Header } from "./header";
import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full">
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </div>
  );
}
