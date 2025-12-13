import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import Banner from "../components/Banner";
import FeaturedProjects from "../components/FeaturedProjects";
export default async function Home() {
  return (
    <>
      <Banner />
      <FeaturedProjects />
      <SkillsSection />
      <BlogSection />
      {/* <ContactSection /> */}
    </>
  );
}
