'use client';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { Security } from '@/components/sections/Security';
import { Waitlist } from '@/components/sections/Waitlist';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default function PageContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <DashboardPreview />
        <Security />
        <Waitlist />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
