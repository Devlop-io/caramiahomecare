"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  Heart
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: true,
      items: [
        { name: "Daily Living Support", path: "/services#daily-living" },
        { name: "Instrumental Activities", path: "/services#instrumental" },
        { name: "Specialized Care", path: "/services#specialized" },
      ]
    },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Resources", path: "/resources" },
    { name: "Careers", path: "/careers" },
    { name: "For Professionals", path: "/professionals" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/Cara Mia Companions.png"
              alt="Cara Mia Companions Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => 
              link.dropdown ? (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors ${
                      pathname === link.path
                        ? "text-primary font-semibold"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-muted py-1 z-10"
                      >
                        {link.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.path}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleTheme}
              className="mr-2 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-muted border-t border-border"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                          pathname === link.path
                            ? "text-primary font-semibold bg-primary/10"
                            : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-1 mt-1"
                          >
                            {link.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.path}
                                className="block px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        pathname === link.path
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center"
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;