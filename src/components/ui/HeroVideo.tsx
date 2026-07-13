interface Props {
  youtubeId: string;
  title: string;
  className?: string;
}

export function HeroVideo({ youtubeId, title, className }: Props) {
  return (
    <div className={`hero-video${className ? ` ${className}` : ''}`}>
      <iframe
        className="hero-video-frame"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
