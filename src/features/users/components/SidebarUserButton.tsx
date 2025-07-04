import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { SidebarUserButtonClient } from "./_SideBarUserButtonClient";
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth";
import { SignOutButton } from "@/services/clerk/component/AuthButtons";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";

export function SidebarUserButton() {
    return (
        <Suspense>
            <SidebarUserSuspense/>
        </Suspense>
    );
}

async function SidebarUserSuspense() {
    const {user} = await getCurrentUser({allData:true});
    if(user == null) {
        return (
            <SignOutButton>
                <SidebarMenuButton>
                    <LogOutIcon/>
                    <span>Log out</span>
                </SidebarMenuButton>
            </SignOutButton>
        );
    }
    return <SidebarUserButtonClient user={user}/>
}