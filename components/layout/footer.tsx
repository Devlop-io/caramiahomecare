import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Cara Mia Companions.png"
                alt="Cara Mia Companions Logo"
                width={180}
                height={60}
                className="h-12 w-auto bg-white p-1 rounded-md"
              />
            </Link>
            <p className="text-white/80 text-sm mt-4">
              Cara Mia Companions provides compassionate, non-medical home care services 
              with a heart-centered approach. Where Home Care Becomes Heart Care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="text-white/80 hover:text-white flex items-center gap-2 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  For Professionals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-serif mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">info@caramiahomecare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  123 Compassion Way<br />
                  Suite 100<br />
                  Heartfelt, CA 90210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Monday - Friday: 8am - 6pm<br />
                  Saturday: 9am - 3pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-serif mb-4 border-b border-white/20 pb-2">Stay Connected</h3>
            <p className="text-white/80 text-sm mb-4">
              Subscribe to our newsletter for caregiving tips, resources, and updates.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-primary-dark hover:bg-white/90 font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20 text-center text-white/70 text-sm">
          <p className="flex items-center justify-center gap-1 mb-2">
            Made with <Heart className="h-4 w-4 text-accent" /> by Cara Mia Companions
          </p>
          <p>
            &copy; {currentYear} Cara Mia Companions™. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;