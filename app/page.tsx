import RoadmapDesktop from "@/components/Roadmap/RoadmapDesktop";
import RoadmapMobile from "@/components/Roadmap/RoadmapMobile";
import About from "../components/About/About";
import Distribution from "@/components/Distribution/Distribution";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <main className="">
      <div>
        <Banner />
        <About />

        <Distribution />
        <div className="hidden md:block">
          <RoadmapDesktop />
        </div>
        <div className="block md:hidden">
          <RoadmapMobile />
        </div>
      </div>
    </main>
  );
}
