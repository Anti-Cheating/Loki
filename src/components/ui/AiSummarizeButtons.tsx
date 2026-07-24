// Opens an AI assistant in a new tab with a prefilled "summarize this article"
// prompt (via each tool's ?q= URL param). Plain links — no client JS needed.
// Doubles as a GEO play: it nudges readers to pull the article into the AI
// engines we want citing us.

const ARROW = (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function AiSummarizeButtons({ url, title }: { url: string; title: string }) {
  const q = encodeURIComponent(`Summarize and analyze the key insights from this article: "${title}" ${url}`);

  const tools: { name: string; href: string }[] = [
    { name: 'ChatGPT', href: `https://chatgpt.com/?q=${q}` },
    { name: 'Claude', href: `https://claude.ai/new?q=${q}` },
    { name: 'Perplexity', href: `https://www.perplexity.ai/search?q=${q}` },
    { name: 'Grok', href: `https://grok.com/?q=${q}` },
    { name: 'Gemini', href: `https://gemini.google.com/app?q=${q}` },
  ];

  return (
    <div className="ai-summarize reveal" data-d="2">
      <span className="ai-summarize-label">Summarize this article with</span>
      <div className="ai-summarize-row">
        {tools.map((t) => (
          <a
            key={t.name}
            className="ai-chip"
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Summarize this article with ${t.name} (opens in a new tab)`}
          >
            {t.name}
            {ARROW}
          </a>
        ))}
      </div>
    </div>
  );
}
