import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default function Testimonial() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from real people who have used our quiz app and loved it.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center sm:items-start justify-center space-y-4">
            <Image
              src="/assets/images/testimonial1.jpg"
              alt="alt"
              width={150}
              height={150}
              className="rounded-xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <div className="text-xl font-bold" data-aos="fade-right" 
              data-aos-duration="900">
              &quot;This app has been a game-changer for me!&quot;
            </div>
            <p className="text-muted-foreground" data-aos="fade-right" 
              data-aos-duration="800">
              &quot;I&apos;ve been using the quiz app for a few months now, and
              it&apos;s helped me improve my knowledge in so many areas. The
              personalized quizzes are fantastic, and I love the progress
              tracking feature.&quot;
            </p>
            <div className="text-sm font-medium text-primary " data-aos="fade-right" 
              data-aos-duration="700">
              - Sarah, Student
            </div>
          </div>
          <div className="flex flex-col  items-center sm:items-end  justify-center space-y-4">
            <Image
              src="/assets/images/testimonial2.jpg"
              alt="alt"
              width={150}
              height={150}
              className="rounded-xl "
              data-aos="fade-left"
              
              data-aos-duration="1000"
            />
            <div className="text-xl font-bold" data-aos="fade-left" 
              data-aos-duration="900">
              &quot;I can&apos;t imagine learning without this app!&quot;
            </div>
            <p className="text-muted-foreground" data-aos="fade-left" 
              data-aos-duration="800">
              &quot;As a busy professional, I was struggling to find time to
              learn new skills. The quiz app has made it so much easier to fit
              learning into my schedule. The leaderboards are also a great way
              to stay motivated.&quot;
            </p>
            <div className="text-sm font-medium text-primary"data-aos="fade-left" 
              data-aos-duration="700">
              - Michael, Software Engineer
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
