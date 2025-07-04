import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { SidebarNavMenuGroup } from "@/components/sidebar/SidebarNavMenuGroup";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { SignedOut } from "@/services/clerk/component/SignInStatus";
import { BrainCircuitIcon, ClipboardListIcon, LayoutDashboard, LogInIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function JobSeekerLayout({ children }: { children: ReactNode }) {
  return (
    <AppSidebar
      content={
        <SidebarNavMenuGroup className="mt-auto" items={[
            {href:"/", icon:<ClipboardListIcon/>, label:"Job Board"},
            {href:"/ai-search", icon:<BrainCircuitIcon/>, label:"AI Search"},
            {href:"/employer", icon:<LayoutDashboard/>, label:"Employer Dashobard", authStatus:"signedIn"},
            {href:"/sign-in", icon:<LogInIcon/>, label:"Sign in", authStatus:"signedOut"}
        ]}/>
      }
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  );
}
