import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        className={cn(
          "group relative overflow-hidden transition-all hover:scale-[1.02]",
          "border border-gray-200/50 dark:border-white/10",
          "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
        )}
      >
        <div className="p-6">
          <Link href={`/articles/${1234}`}>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Avatar className="h-8 w-8 ">
                    <AvatarImage src="" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>Dhruv Vasisht</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                How To Become Full Stack Developer in 2025
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Web Developement
            </p>
            <div className="mt-6 flex items-center justify-between text-sm text-gray-600 dar:text-gray-400">
                <span>12 Feb 2025</span>
                <span>{12} Mins to read</span>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default TopArticles;
