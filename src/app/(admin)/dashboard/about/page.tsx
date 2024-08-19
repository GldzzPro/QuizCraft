import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { dummyData } from "@/repositories/dummyData";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-end space-y-4">
      <div className="flex gap-4 flex-col justify-center">
        {/* <div className="flex max-w-xl m-5 flex-col text-muted-foreground gap-4"> */}
        <h1 className=" font-semibold text-2xl  text-muted-foreground ">
          {dummyData[0].title}
        </h1>
        <Separator />
        <ul className="space-y-4 mx-5 text-muted-foreground">
          {dummyData[0].list.map((item, index) => (
            <li className="list-disc " key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h2 className=" mt-3 text-2xl text-muted-foreground font-semibold ">
          {dummyData[1].title}
        </h2>
        <Separator />
        <ul className="space-y-4 mx-5 text-muted-foreground">
          {dummyData[1].list.map((item, index) => (
            <li className="list-disc " key={index}>
              {item}
            </li>
          ))}
        </ul>
        {/* </div> */}
      </div>
      <a href="https://wa.me/+6281906275742" target="_blank">
        <Button variant="outline" className="px-8 w-full sm:w-auto">Help</Button>
      </a>
    </div>
  );
}
