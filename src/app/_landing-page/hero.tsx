import CarouselLayout from "@/components/client/fragments/Carousel";
import { HeroPages_1, HeroPages_2 } from "@/components/client/HeroPages";
export default function Hero() {
  return (
    <CarouselLayout children_1={<HeroPages_1 />} children_2={<HeroPages_2 />} />
  );
}
