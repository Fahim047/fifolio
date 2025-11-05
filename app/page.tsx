import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
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
      <ContactSection />
    </>
  );
}
