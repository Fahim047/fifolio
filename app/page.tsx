import Blog from '@/components/Blog';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillsSection';
import Banner from '../components/Banner';
import FeaturedProjects from '../components/FeaturedProjects';
export default function Home() {
	return (
		<>
			<Banner />
			<SkillsSection />
			<FeaturedProjects />
			<Blog />
			<ContactSection />
		</>
	);
}
