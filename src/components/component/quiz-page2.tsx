/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/BsUOoXbRz6k
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function QuizPage2() {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-background rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-center">Quiz App</h1>
          <p className="mt-2 text-muted-foreground text-center">Test your knowledge with our fun quiz!</p>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">What is the capital of France?</h2>
            <div className="mt-2 grid gap-2">
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="paris" id="q1-paris" />
                  <Label htmlFor="q1-paris">Paris</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="london" id="q1-london" />
                  <Label htmlFor="q1-london">London</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="berlin" id="q1-berlin" />
                  <Label htmlFor="q1-berlin">Berlin</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Time limit: 30 seconds</div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What is the largest ocean on Earth?</h2>
            <div className="mt-2 grid gap-2">
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="atlantic" id="q2-atlantic" />
                  <Label htmlFor="q2-atlantic">Atlantic Ocean</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="pacific" id="q2-pacific" />
                  <Label htmlFor="q2-pacific">Pacific Ocean</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="indian" id="q2-indian" />
                  <Label htmlFor="q2-indian">Indian Ocean</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="arctic" id="q2-arctic" />
                  <Label htmlFor="q2-arctic">Arctic Ocean</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Time limit: 45 seconds</div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">What is the smallest planet in our solar system?</h2>
            <div className="mt-2 grid gap-2">
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="earth" id="q3-earth" />
                  <Label htmlFor="q3-earth">Earth</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="jupiter" id="q3-jupiter" />
                  <Label htmlFor="q3-jupiter">Jupiter</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mercury" id="q3-mercury" />
                  <Label htmlFor="q3-mercury">Mercury</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="venus" id="q3-venus" />
                  <Label htmlFor="q3-venus">Venus</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Time limit: 60 seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}
