import React from "react";
import DashSidebar from "./_components/DashSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashSidebar />
      <main className="flex-1 p-4 text-white  bg-black">
       <div className="border-b border-gray-700 pb-4 mb-4 flex items-center justify-between">
         <SidebarTrigger className="cursor-pointer"  />
       </div>
       
        {children}
      </main>
    </SidebarProvider>
  );
}
