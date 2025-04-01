import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <DashboardSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LeftSidebar;

const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
          <span>HashByte</span>
        </Link>
      </div>
    </div>
  );
};
