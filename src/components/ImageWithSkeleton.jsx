// src/components/ImageWithSkeleton.jsx
import React, { useState } from 'react';
import Skeleton from './Skeleton.jsx';

export default function ImageWithSkeleton({
  src,
  alt = '',
  width,
  height,
  className = '',
  style = {},
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className="image-skeleton-wrapper"
      style={{
        position: 'relative',
        width: width ?? '100%',
        height: height ?? 'auto',
        aspectRatio: width && height ? `${width} / ${height}` : undefined,
        overflow: 'hidden',
        backgroundColor: '#191919',
        ...style,
      }}
    >
      {!loaded && !error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <Skeleton style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      {error ? (
        <div
          role="img"
          aria-label={alt || 'Image unavailable'}
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            minHeight: 120,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#A3A19C',
            fontSize: '0.85rem',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Image unavailable
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={className}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.35s ease',
            ...style,
          }}
          {...rest}
        />
      )}
    </div>
  );
}