"use client"
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CarouselLayout = ({children_1, children_2}: {
    children_1: React.ReactNode
    children_2: React.ReactNode
}) => {
  return (
    <Carousel
    plugins={[
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: false
        
      }),
    ]}
    opts={{ align: "start", loop: true }}
  >
    <CarouselContent>
      <CarouselItem>
    {children_1}
      </CarouselItem>
      <CarouselItem>
    {children_2}
      </CarouselItem>
    </CarouselContent>
  </Carousel>
  )
}

export default CarouselLayout