import {useState} from 'react';
import {Building2} from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({src, alt, className = '', fallbackTitle}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#243344] to-[#1a2533] text-white p-6 text-center ${className}`}
      >
        <Building2 className="w-10 h-10 text-[#f4c03b] mb-3" strokeWidth={1.5} />
        {fallbackTitle && (
          <span className="font-display text-sm font-semibold tracking-wide text-white/90">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
