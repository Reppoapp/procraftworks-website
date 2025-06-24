import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Pro Craftworks</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming Atlanta's finest neighborhoods since 2005 with exceptional craftsmanship 
              and attention to detail. Interior renovations for residential, commercial, and custom projects.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:404-402-7777" className="hover:text-white transition-colors">
                  404-402-7777
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:Alex@ProCraftworks.com" className="hover:text-white transition-colors">
                  Alex@ProCraftworks.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Address:</span> 225 Tidwell Drive, Alpharetta, GA 30004
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Renovations</li>
              <li>Commercial Projects</li>
              <li>Custom Builds</li>
              <li>Kitchen Remodeling</li>
              <li>Interior Design</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Pro Craftworks. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="tel:404-402-7777" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Call us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a 
                href="mailto:Alex@ProCraftworks.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 