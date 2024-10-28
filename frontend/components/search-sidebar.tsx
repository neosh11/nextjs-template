import {
    Sidebar,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import { SearchForm } from "./form"

const projects = [
    {
        name: "Project 1",
        url: "/project1",
        icon: Plus,
    },
    {
        name: "Project 2",
        url: "/project2",
        icon: Plus,
    },
    {
        name: "Project 3",
        url: "/project3",
        icon: Plus,
    },
    {
        name: "Project 4",
        url: "/project4",
        icon: Plus,
    },
    {
        name: "Project 5",
        url: "/project5",
        icon: Plus,
    },
]

export function SearchSidebar() {


    return (
        <Sidebar>
            <Sidebar>
                <SidebarHeader>
                    HouseHunter
                </SidebarHeader>
                <SidebarGroup>
                    <SidebarGroupLabel asChild>Projects</SidebarGroupLabel>

                    <SidebarMenu>
                        <SidebarMenuItem>
                            <div>
                                Search Options
                            </div>
                            <div>
                                <SearchForm />
                            </div>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarFooter />
            </Sidebar>
        </Sidebar>
    )
}