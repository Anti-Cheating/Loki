'use client';
import { useState } from 'react';
import { TruoyyLogo } from '@/components/ui/TruoyyLogo';
import { NAV_LINKS } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? 'bg-[#0B1A10]/80 backdrop-blur-xl border-b border-[rgba(76,217,100,0.1)] shadow-lg shadow-black/10'
            : 'bg-transparent backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <TruoyyLogo className="h-13 w-auto" />
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#E5E7EB] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="#waitlist"
                className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853] transition-colors"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#E5E7EB] hover:text-white"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0B1A10]/95 backdrop-blur-xl flex flex-col pt-16">
          <div className="flex flex-col gap-1 px-6 pt-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-[#E5E7EB] hover:text-white py-4 border-b border-[rgba(76,217,100,0.08)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-lg bg-[#4CD964] text-[#0B1A10] hover:bg-[#3CB853] transition-colors"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
}
