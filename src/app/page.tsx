import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Hero from "./_landing-page/hero";
import KeyFeatures from "./_landing-page/key-feature";
import Testimonial from "./_landing-page/testimonial";
import Download from "./_landing-page/download";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Hero />
      <KeyFeatures />
      <Testimonial />
      <Download />
    </>
  );
}
