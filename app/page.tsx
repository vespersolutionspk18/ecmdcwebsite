import Image from "next/image";
import Hero from "./Hero";
import ClientCarousel from "./ClientCarousel";
import { ServicesTabs } from "./ServicesTabs";
import SerTabs from "./SerTabs";
import AboutSection from "./AboutSection";
import RecentProjects from "./RecentProjects";
import PraiseSection from "./PraiseSection";
import Footer from "./Footer";
import Header from "./Header";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <ClientCarousel />
    <AboutSection />
    <SerTabs />
    <RecentProjects />
    <PraiseSection />
    <Footer />
    </>
  );
}
