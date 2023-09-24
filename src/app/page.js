import Image from "next/image";
import { NavigationBar } from "@/components/navbar/Navbar";
import Homepage from "@/components/homepage/page";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Homepage />
      <Footer />
    </>
  );
}
