import { SearchSidebar } from "@/components/search-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <SearchSidebar />
      <div>
        <SidebarTrigger />
        <div className="px-5">
          Properties
        </div>
      </div>
    </SidebarProvider>

  );
}
