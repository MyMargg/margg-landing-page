/**
 * LazyImage – drop-in replacement for <img> with native lazy loading,
 * optional fade-in animation, and proper width/height for CLS prevention.
 */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const Img = styled.img`
  opacity: ${(p) => (p.$loaded ? 1 : 0)};
  animation: ${(p) => (p.$loaded ? fadeIn : "none")} 0.4s ease forwards;
  transition: opacity 0.4s ease;
`;

export default function LazyImage({
  src,
  alt,
  width,
  height,
  style,
  className,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      $loaded={loaded}
      onLoad={() => setLoaded(true)}
      style={style}
      className={className}
      {...rest}
    />
  );
}
