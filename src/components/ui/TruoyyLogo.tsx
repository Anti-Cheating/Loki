export function TruoyyLogo({ className = '' }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/trueyy-transparent-white-text.svg"
      alt="Trueyy"
      className={`block ${className}`}
    />
  );
}
