"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ClientView from "@/components/ClientView";
import GovermentView from "@/components/GovermentView";

export default function Page({ children }) {
    const [view, setView] = useState("client"); // Tracks the current view (client/government)

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                    </div>
                    {/* Toggle Button */}
                    <div className="ml-auto">
                        <Button
                            variant="outline"
                            onClick={() => setView((prev) => (prev === "client" ? "government" : "client"))}
                        >
                            Switch to {view === "client" ? "Government" : "Client"}
                        </Button>
                    </div>
                </header>
                {/* Toggle Content */}
                <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}

