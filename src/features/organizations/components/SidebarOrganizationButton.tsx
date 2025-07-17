import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { getCurrentOrganization, getCurrentUser } from "@/services/clerk/lib/getCurrentAuth";
import { SignOutButton } from "@/services/clerk/component/AuthButtons";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import { SidebarOrganizationButtonClient } from "./_SideBarOrganizationButtonClient";

export function SidebarOrganizationButton() {
    return (
        <Suspense>
            <SidebarOrganiationSuspense/>
        </Suspense>
    );
}

async function SidebarOrganiationSuspense() {
    const [{user},{organization}] = await Promise.all([getCurrentUser({allData:true}), getCurrentOrganization({allData:true})])
    if(user == null || organization == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogOutIcon/>
                    <span>Log out</span>
                </SidebarMenuButton>
            </SignOutButton>
        );
    }
    return <SidebarOrganizationButtonClient user={user} organization={organization}/>
}