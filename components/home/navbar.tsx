import Link from "next/link";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-8 ">
            <Link href={"/"} className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent ">
                  Byte
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/Articles"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href={"/Tutorials"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href={"/About"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href={"/Dashboard"}
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
