import NavBar from "@/components/home/navbar";

export default function Home() {
  return (
    <div className="sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavBar/>
    </div>
  );
}
