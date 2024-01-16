import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import EmailSection from "./components/EmailSection/EmailSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-10 py-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
