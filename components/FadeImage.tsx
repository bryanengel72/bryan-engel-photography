"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export default function FadeImage({ className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      className={`${className} transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
