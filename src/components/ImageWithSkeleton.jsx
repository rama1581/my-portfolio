// src/components/ImageWithSkeleton.jsx
import React, { useState } from "react";
import Skeleton from "./Skeleton.jsx";

export default function ImageWithSkeleton({ src, alt, width, height, className = "", ...rest }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width, height }}>
      {!loaded && <Skeleton style={{ width: "100%", height: "100%" }} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{ display: loaded ? "block" : "none", width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
        className={className}
        {...rest}
      />
    </div>
  );
}
