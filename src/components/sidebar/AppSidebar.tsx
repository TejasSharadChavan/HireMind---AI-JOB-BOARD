import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import { SignedIn, SignedOut } from "@/services/clerk/component/SignInStatus";
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton";
import { AppSidebarClient } from "./_AppSidebarClient";
import { ReactNode } from "react";

export function AppSidebar({children, content, footerButton}:{children:ReactNode,content:ReactNode, footerButton:ReactNode}) {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">HireMind</span>
          </SidebarHeader>
          <SidebarContent>{content}</SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  {footerButton}
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className="flex flex-1">{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}

