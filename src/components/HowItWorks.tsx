import { FileText, MessageSquare, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileText,
    title: "Fill in your details for your project",
    description: "Tell us about your project requirements",
  },
  {
    icon: MessageSquare,
    title: "Receive quotes from Professionals",
    description: "Get competitive quotes from verified pros",
  },
  {
    icon: ThumbsUp,
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
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground px-4">{step.title}</h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" name="Get Started">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
