
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import img1 from "../assets/a.jpg";
import img2 from "../assets/b.jpg";
import img3 from "../assets/c.jpg";
import img4 from "../assets/d.jpg";

const jobs = [
  {
    title: "Tree Surgeon",
    image: img1,
  },
  {
    title: "Landscaper",
    image: img2,
  },
  {
    title: "Personal Trainer",
    image: img3,
  },
  {
    title: "Driveways",
    image: img4,
  },
];

const PopularJobs = () => {
  // Carousel state: show one job at a time on mobile, all on desktop
  const [current, setCurrent] = useState(0);
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const visibleJobs = isDesktop ? jobs : [jobs[current]];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary">Popular</span> jobs.
          </h2>
          <div className="flex gap-2">
            <button
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              onClick={handlePrev}
              aria-label="Previous job"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
              onClick={handleNext}
              aria-label="Next job"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Show only current job on mobile, all jobs in grid on desktop */}
        <div
          className="w-full"
        >
          <div className="lg:hidden flex gap-6 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
            {[jobs[current]].map((job, index) => (
              <div
                key={job.title}
                className="min-w-[85vw] max-w-xs group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 mx-auto"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary-foreground font-medium text-sm mb-2 block">{job.title}</span>
                  <Button variant="explore" size="sm">
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.title}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-primary-foreground font-medium text-sm mb-2 block">{job.title}</span>
                  <Button variant="explore" size="sm">
                    Explore
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {jobs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === current ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to job ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
