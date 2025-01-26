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
        <div>
            {children}
    </div>
        
    );
}

