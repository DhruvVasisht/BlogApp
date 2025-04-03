import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

const BlogDashboard = () => {
  return (
    <main className="flex-1 p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p>Manage your content & analytics</p>
        </div>
        <Link href="/dashboard/articles/create">
        <Button>New Article <PlusCircle className="h-4 w-4"/></Button>
         
          
        </Link>
      </div>
    </main>
  );
};

export default BlogDashboard;
