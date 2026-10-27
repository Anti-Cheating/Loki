import { ImageResponse } from 'next/og';
import { getAllArticles, getArticleMeta, COVER_SIZE } from '@/lib/resources';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return (await getAllArticles()).map((a) => ({ slug: a.slug }));
}

// Sora (the site font) at 700 for the title. Google Fonts serves TTF when no
// browser UA is sent, which is what next/og needs. On any failure we fall back
// to the default font rather than failing the build.
async function loadSora(): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch('https://fonts.googleapis.com/css2?family=Sora:wght@700')).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

// Long titles step down in size so they stay on 2–3 lines.
const titleSize = (t: string) => (t.length > 70 ? 54 : t.length > 48 ? 62 : 72);

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = await getArticleMeta(slug);
  if (!meta) return new Response('Not found', { status: 404 });

  const sora = await loadSora();

  // Content is centered so it survives object-fit: cover cropping in cards.
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1A10',
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(76,217,100,0.22), rgba(11,26,16,0) 60%)',
          padding: '72px 120px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#4CD964',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            border: '2px solid rgba(76,217,100,0.45)',
            borderRadius: 999,
            padding: '8px 22px',
          }}
        >
          {meta.category}
        </div>
        <div
          style={{
            display: 'flex',
            color: '#FFFFFF',
            fontSize: titleSize(meta.title),
            fontWeight: 700,
            fontFamily: sora ? 'Sora' : undefined,
            letterSpacing: -1,
            lineHeight: 1.12,
            marginTop: 36,
            justifyContent: 'center',
          }}
        >
          {meta.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 44, fontSize: 26 }}>
          <div style={{ display: 'flex', color: '#4CD964', fontWeight: 700 }}>Trueyy</div>
          <div style={{ display: 'flex', color: 'rgba(255,255,255,0.45)', marginLeft: 14 }}>
            · Interview integrity
          </div>
        </div>
      </div>
    ),
    {
      ...COVER_SIZE,
      fonts: sora ? [{ name: 'Sora', data: sora, weight: 700, style: 'normal' }] : undefined,
    }
  );
}
