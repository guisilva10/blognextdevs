import { auth } from "@/services/auth";
import { redirect } from "next/navigation";

import AdminSidebar from "./_components/admin-sidebar";
import { SidebarProvider } from "../_components/ui/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="bg-background flex min-h-screen w-full p-4">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container py-6 md:py-8 lg:py-10">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
