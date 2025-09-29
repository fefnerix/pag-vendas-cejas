import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  placeholderClassName?: string;
  className?: string;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  aspectRatio = '1',
  placeholderClassName,
  className,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={{ aspectRatio }}
    >
      {/* Placeholder with shimmer effect */}
      <div
        className={cn(
          'absolute inset-0 bg-muted',
          'before:absolute before:inset-0 before:animate-shimmer',
          'before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
          (isLoaded || hasError) && 'hidden',
          placeholderClassName
        )}
      />
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <span className="text-sm">Erro ao carregar imagem</span>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && !hasError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'absolute inset-0 w-full h-full object-cover',
            !isLoaded && 'opacity-0',
            isLoaded && 'opacity-100 transition-opacity duration-300'
          )}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
