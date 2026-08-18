import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import AcademicPrograms from "../components/sections/AcademicPrograms";
import NewsEvents from "../components/sections/NewsEvents";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <AcademicPrograms />
      <NewsEvents />
      <Testimonials />
    </>
  );
}