"use client"

import { useState } from "react"
import Image from "next/image"
import nolinkImage from "@/public/common/no-image.jpg"

interface CardImageProps {
  alt: string
  image: string
}

export default function CardImage(props: CardImageProps) {
  const [isImageError, setIsImageError] = useState(false)
  const handleImageError = () => setIsImageError(true)

  return (
    <Image
      src={isImageError ? nolinkImage : props.image}
      alt={props.alt}
      onError={handleImageError}
      fill
      sizes="(max-width: 768px) 100vw"
      priority={false}
    />
  )
}
