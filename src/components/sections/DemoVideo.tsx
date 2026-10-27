import { HeroVideo } from '@/components/ui/HeroVideo';

export function DemoVideo() {
  return (
    <section className="section" id="demo-video">
      <div className="wrap">
        <div className="center reveal">
          <span className="kicker kicker--center">See it in action</span>
          <h2 className="h2">Watch Trueyy catch AI help in a live interview</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            A real session: the candidate gets answers from a hidden AI overlay that screen share never shows. Trueyy flags it while the interview is still going.
          </p>
        </div>
        <div className="reveal" data-d="1" style={{ maxWidth: '960px', margin: '40px auto 0' }}>
          <HeroVideo youtubeId="c06WSF7J_g4" title="Trueyy demo: catching AI-assisted interview cheating live" />
        </div>
      </div>
    </section>
  );
}
