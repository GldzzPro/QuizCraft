"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
export default function Hero() {
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12  xl:grid-cols-[1fr_600px]">
                <div className="flex order-last flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Unlock Your Knowledge with Our Personalized Quizium
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Discover your strengths, identify your weaknesses, and
                      improve your skills with our engaging and interactive
                      quizzes.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href={"/quiz"} prefetch={false}>
                      <Button className="px-8 w-full sm:w-auto">
                        Start Quiz
                      </Button>
                    </Link>
                    <Link href={"/"} prefetch={false}>
                      <Button
                        className="px-7 w-full sm:w-auto"
                        variant={"secondary"}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <Image
                  src="/assets/images/hero2.png"
                  alt="alt"
                  width={550}
                  height={550}
                  className="mx-auto order-first aspect-video overflow-hidden rounded-xl  object-center object-cover lg:order-last lg:aspect-square"
                />
              </div>
            </div>
          </section>
        </CarouselItem>
        <CarouselItem>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12  xl:grid-cols-[1fr_600px]">
               
                <Image
                  src="/assets/images/hero3.png"
                  alt="alt"
                  width={550}
                  height={550}
                  className="mx-auto order-first aspect-video overflow-hidden rounded-xl  object-center object-cover lg:order-last lg:aspect-square"
                />
                 <div className="flex order-last flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Learning, Anytime, Anywhere with Quizium
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Discover your strengths, identify your weaknesses, and
                      improve your skills with our engaging and interactive
                      quizzes.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href={"/quiz"} prefetch={false}>
                      <Button className="px-8 w-full sm:w-auto">Start Quiz</Button>
                    </Link>
                    <Link href={"/"} prefetch={false}>
                      <Button className="px-8 w-full sm:w-auto" variant={"secondary"}>
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
