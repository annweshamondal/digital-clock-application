import ClockD from "@/components/ClockD";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Clock",
  description: "It's a Digital Clock Project",
};

const page = () => {
  return (
    <section className="grid min-h-dvh place-items-center">
      <ClockD />
    </section>
  );
};

export default page;
