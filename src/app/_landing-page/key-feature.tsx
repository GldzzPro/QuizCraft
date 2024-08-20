import Image from "next/image";

export default function KeyFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Anywhere Learning, Anytime Progress
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our quiz app offers a range of features to help you learn, grow,
              and succeed.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col order-last justify-center space-y-4">
            <ul className="grid gap-6">
              <li data-aos="fade-left" data-aos-duration="1000">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Personalized Quizzes</h3>
                  <p className="text-muted-foreground">
                    Our algorithm creates tailored quizzes based on your
                    interests and skill level.
                  </p>
                </div>
              </li>
              <li  data-aos="fade-left" data-aos-duration="900">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Progress Tracking</h3>
                  <p className="text-muted-foreground">
                    Monitor your progress and see how you&apos;re improving over
                    time.
                  </p>
                </div>
              </li>
              <li  data-aos="fade-left" data-aos-duration="800">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Leaderboards</h3>
                  <p className="text-muted-foreground">
                    Compete with friends and see how you stack up against other
                    users.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
            src="/assets/images/person.jpg"
            alt="alt"
             data-aos="fade-right"
            width={550}
            height={550}
            className="mx-auto aspect-video order-first object-cover overflow-hidden rounded-xl  sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
