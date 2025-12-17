import { Button } from "@/components/ui/button";
import { CompassIcon, File, User2 } from "lucide-react";
import file from "../assets/file.png";
import user from "../assets/user.png";
import search from "../assets/search.png";
const steps = [
  {
    icon: file,
    title: "Fill in your details for your project",
    description: "Tell us about your project requirements",
  },
  {
    icon: user,
    title: "Receive quotes from Professionals",
    description: "Get competitive quotes from verified pros",
  },
  {
    icon: search,
    title: "Compare your quotes and enjoy great savings",
    description: "Choose the best option for your budget",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-8 surface-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          <span className="text-primary">How it</span> works.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="text-center space-y-4 animate-slide-up px-5"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="border-2 border-[#C7D1D8] rounded-2xl bg-white flex flex-col items-center justify-center h-[240px] md:h-[260px] w-full max-w-[320px] mx-auto shadow-sm">
                <div className="flex items-center justify-center mt-6 mb-4">
                  <span className="block">
                    <img src={step.icon} alt={step.title} className="w-20" />
                  </span>
                </div>
                <h3 className="font-black text-[1.5rem] leading-tight text-[#222] px-4 mb-6">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button style={{background:"#10C87B"}}  size="lg" name="Get Started" className="rounded-3xl">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
