'use client';
import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { Comparison } from '@/components/sections/Comparison';
import { Security } from '@/components/sections/Security';
import { Waitlist } from '@/components/sections/Waitlist';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !reveals.length) {
      reveals.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function PageContent() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Problem />
        <HowItWorks />
        <Features />
        <DashboardPreview />
        <Comparison />
        <Security />
        <Waitlist />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
