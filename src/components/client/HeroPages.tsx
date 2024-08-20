import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroPages_1 = () => (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12  xl:grid-cols-[1fr_600px]">
        <div className="flex order-last flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"  data-aos="fade-right" data-aos-duration="900">
              Unlock Your Knowledge with Our Personalized Quizium
            </h1>
            <p data-aos="fade-right" className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover your strengths, identify your weaknesses, and
              improve your skills with our engaging and interactive
              quizzes.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row" >
            <Link href={"/quiz"} prefetch={false} data-aos="fade-left" data-aos-duration="900">
              <Button className="px-8 w-full sm:w-auto">
                Start Quiz
              </Button>
            </Link>
            <Link href={"/"} prefetch={false} data-aos="fade-left" data-aos-duration="1000">
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
         data-aos="fade-down"
         data-aos-duration="1000"
          className="mx-auto order-first aspect-video overflow-hidden rounded-xl  object-center object-cover lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
)


const HeroPages_2 = () => (
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
);


export {
    HeroPages_1,
    HeroPages_2
}