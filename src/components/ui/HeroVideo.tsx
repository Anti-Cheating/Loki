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
        // rel=0 restricts YouTube's end-screen "more videos" to our own channel
        // (YouTube removed full-disable in 2018); modestbranding trims YT branding.
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
