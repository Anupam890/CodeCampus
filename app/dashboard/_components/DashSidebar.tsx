import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  Home,
  Users,
  Settings,
  FileText,
  LogOut,
} from "lucide-react";

const DashSidebar = () => {
  return (
    <div>
      <Sidebar className="text-white">
        <SidebarHeader>
          <h1 className="text-xl font-bold px-4 py-2">CodeCampus</h1>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 cursor-pointer rounded-md">
              <Home className="w-5 h-5" />
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 cursor-pointer rounded-md">
              <Users className="w-5 h-5" />
              <span className="text-sm">Users</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 cursor-pointer rounded-md">
              <FileText className="w-5 h-5" />
              <span className="text-sm">Reports</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 cursor-pointer rounded-md">
              <Settings className="w-5 h-5" />
              <span className="text-sm">Settings</span>
            </div>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-red-100 dark:hover:bg-red-900 cursor-pointer rounded-md text-red-600 dark:text-red-400">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default DashSidebar;
