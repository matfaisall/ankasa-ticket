import Image from "next/image";
import NavigationBar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavigationBar />
      <h1 className="italic">Muhammad Faisal</h1>
    </main>
  );
}
