"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { BarChart, Globe, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function QuizCreatorLanding() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate background patterns
    const circles = Array.from({ length: 50 }).map((_, i) => {
      const circle = document.createElement("div");
      circle.className =
        "absolute rounded-full bg-primary/5 dark:bg-primary/10";
      const size = Math.random() * 100 + 50;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      backgroundRef.current?.appendChild(circle);

      gsap.set(circle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(circle, {
        x: "+=100",
        y: "+=100",
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      return circle;
    });
    return () => {
      circles.forEach((circle) => circle.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <main className="container px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-1">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Challenge, Learn, and Compete with QuizCraft
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Create engaging quizzes, challenge your friends or students,
                  and climb the leaderboards. Make learning an exciting
                  adventure!
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={"/quiz"}>
                  <Button size="lg" className="gap-2">
                    <Zap className="h-4 w-4" />
                    Explore Quizzes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:pl-12 mt-8 lg:mt-0 space-y-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <Trophy className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Compete & Win</h3>
                      <p className="text-sm text-muted-foreground">
                        Challenge friends and top the leaderboards
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-4">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Social Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Collaborate and learn together
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <BarChart className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Track Progress</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor your improvement over time
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="font-semibold">Global Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with learners worldwide
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
