import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-inner">
          <span className="kicker reveal">AI cheating is happening right now</span>
          <h1 className="display reveal" data-d="1">
            The candidate is talking to you. <span className="tx-gradient">Their AI is answering.</span>
          </h1>
          <p className="lead reveal" data-d="2">
            Cluely, InterviewCoder, ChatGPT. The tools that ghost-write interviews have gotten disturbingly good. Trueyy reads every signal they leave behind and gives your team a real read before you extend the offer.
          </p>
          <div className="hero-cta reveal" data-d="3">
            <BookDemoButton className="btn btn--primary btn--lg">
              Book a demo <span className="arw">&rarr;</span>
            </BookDemoButton>
            <a className="btn btn--ghost btn--lg" href="#how">
              See how it works
            </a>
          </div>
          <div className="hero-meta reveal" data-d="4">
            <span><i className="live-dot" /> Works inside Zoom, Meet &amp; Teams</span>
            <span>No candidate install required</span>
            <span>Consent-first by design</span>
          </div>
          <div className="trust-badges reveal" data-d="4">
            <span className="badge-trust"><span className="bt-dot" /> GDPR ready</span>
            <span className="badge-trust"><span className="bt-dot" /> SOC 2 aligned</span>
            <span className="badge-trust"><span className="bt-dot" /> No video stored</span>
            <span className="badge-trust"><span className="bt-dot" /> Consent-first</span>
          </div>
        </div>
        <HeroCarousel />
      </div>
    </section>
  );
}
