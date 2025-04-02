import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from "lucide-react";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'outline'} className="md:hidden m-4 ">
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
      <nav>
        <Link href='/dashboard'>
        <Button variant={'ghost'} className="w-full justify-start ">
          <LayoutDashboard className="w-5 h-5 mr-2 "/>
          Overview
        </Button>
        </Link>
        <Link href='/articles'>
        <Button variant={'ghost'} className="w-full justify-start ">
          <FileText className="w-5 h-5 mr-2 "/>
          Articles
        </Button>
        </Link>
        <Link href='/comments'>
        <Button variant={'ghost'} className="w-full justify-start ">
          <MessageCircle className="w-5 h-5 mr-2 "/>
          Comments
        </Button>
        </Link>
        <Link href='/anayltics'>
        <Button variant={'ghost'} className="w-full justify-start ">
          <BarChart className="w-5 h-5 mr-2 "/>
          Analytics
        </Button>
        </Link>
        <Link href='/settings'>
        <Button variant={'ghost'} className="w-full justify-start ">
          <Settings className="w-5 h-5 mr-2 "/>
          Settings
        </Button>
        </Link>

      </nav>
    </div>
  );
};

