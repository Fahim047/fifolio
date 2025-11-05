import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import Clock from "./Clock";
import { MY_EMAIL, MY_PHONE, navLinks } from "@/constants";
import ScrollToTop from "./BackToTop";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto relative">
      <div className="py-4 border-t-2 border-gray-200/20 dark:border-gray-800 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-1 dark:text-primary-light"
          >
            <Logo />
            Fahim
          </Link>
          <p className="text-secondary-foreground dark:text-secondary-dark">
            Passionate full-stack web developer with a huge love for{" "}
            <span className="text-yellow-500 font-bold">JavaScript</span> and{" "}
            <span className="text-primary font-bold">Go</span>.
          </p>
          <SocialLinks />
          <Clock />
        </div>

        <div className="relative grid grid-cols-2">
          <div>
            <h4 className="font-bold mb-4 text-muted-foreground">Navigate</h4>
            <ul className="font-bold text-sm space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={`/${link.path}`}
                    className="hover:text-primary hover:underline transition-colors duration-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h4 className="font-bold text-muted-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="font-bold text-sm space-y-2">
              <li>
                <a
                  href={`mailto:${MY_EMAIL}`}
                  className="hover:text-primary hover:underline duration-300"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a
                  href={`tel:${MY_PHONE}`}
                  className="hover:text-primary hover:underline duration-300"
                >
                  Call Me
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary hover:underline duration-300"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
