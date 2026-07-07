import React from "react";
import { maxQualityImageUrl } from "../lib/imageQuality";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  srcSet?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  decoding?: "sync" | "async" | "auto";
  fetchPriority?: "high" | "low" | "auto";
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export default function OptimizedImage({
  src,
  srcSet,
  sizes,
  priority = false,
  className = "",
  alt,
  loading,
  decoding,
  fetchPriority,
  style,
  onClick,
}: OptimizedImageProps) {
  const optimizedSrc =
    src.startsWith("/") || src.startsWith("data:") ? src : maxQualityImageUrl(src);

  return (
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? (priority ? "sync" : "async")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      className={`image-crisp ${className}`.trim()}
      style={style}
      onClick={onClick}
    />
  );
}
