import { PropsWithChildren } from "react";
import { SidebarInset, SidebarProvider } from "../_components/ui/sidebar";

import { Header } from "../_components/header";
import { AppSidebar } from "../_components/app-sidebar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
