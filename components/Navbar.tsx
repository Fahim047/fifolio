"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import ThemeToggler from "./theme-toggler";
import Logo from "./Logo";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      } backdrop-blur-lg bg-background/70 border-b border-border`}
    >
      <nav className="w-full px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center justify-center gap-1 text-primary"
          aria-label="Fahimul homepage"
        >
          <Logo />
          Fahim
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6 font-bold text-secondary-foreground">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.path}
                  className="hover:text-primary duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggler />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <HiBars3 size={24} className="text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 mt-2 border-2 border-border rounded-xl overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="py-2 px-4 space-y-2 bg-background/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.path}
                className="block py-2 px-4 rounded-lg duration-300 hover:bg-primary-foreground/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
