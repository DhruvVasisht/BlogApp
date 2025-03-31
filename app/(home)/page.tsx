import NavBar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import TopArticles from "@/components/home/top-article";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <section className="relative py-14 md:py-22">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
              Featured Articles
            </h2>
            <p>
              Discover Our Most Popular and trending content
            </p>
          </div>
        </div>
        <TopArticles />
        <div>
          <Link href="/articles">
          <Button className="rounded-md hover:gray-900 hover:text-white darK:bg-white dark:hover:text-gray-900">
            View All Articles
          </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
