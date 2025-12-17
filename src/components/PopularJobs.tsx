
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
              className="w-10 h-10 rounded-full bg-[#b3e6fa] flex items-center justify-center shadow border border-[#b3e6fa] hover:bg-[#00AEEA]/20 transition-colors"
              onClick={handlePrev}
              aria-label="Previous job"
            >
              <ChevronLeft className="w-5 h-5 text-[#00AEEA]" />
            </button>
            <button
              className="w-10 h-10 rounded-full bg-[#b3e6fa] flex items-center justify-center shadow border border-[#b3e6fa] hover:bg-[#00AEEA]/20 transition-colors"
              onClick={handleNext}
              aria-label="Next job"
            >
              <ChevronRight className="w-5 h-5 text-[#00AEEA]" />
            </button>
          </div>
        </div>

        {/* Show only current job on mobile, all jobs in grid on desktop */}
        <div className="w-full">
          <div className="lg:hidden flex gap-6 overflow-x-auto pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
            {[jobs[current]].map((job, index) => (
              <div
                key={job.title}
                className="min-w-[85vw] max-w-xs flex-shrink-0 mx-auto rounded-2xl overflow-hidden shadow-lg bg-white border border-[#e0e7ef] flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#00AEEA] px-6 py-4 text-white text-lg  text-center rounded-t-2xl">
                  {job.title}
                </div>
                <div className="relative flex-1 flex flex-col">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
                    <button className="bg-white text-[#222] font-bold rounded-full px-7 py-2 shadow-md border border-[#bbb] hover:bg-gray-100 transition-all text-base">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.title}
                className="rounded-2xl overflow-hidden shadow-lg bg-[#00AEEA]  border border-[#e0e7ef] flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-[#00AEEA] px-6 py-4 text-white text-lg font-bold text-center rounded-t-2xl">
                  {job.title}
                </div>
                <div className="relative left-7  bac flex-1 flex flex-col">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-72 object-cover rounded-tl-3xl"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center w-full">
                    <button className="bg-white text-[#222] font-bold rounded-full px-7 py-2 shadow-md border border-[#bbb] hover:bg-gray-100 transition-all text-base">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {jobs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-10 h-3 rounded-full transition-all duration-200 border-none focus:outline-none ${
                idx === current ? "bg-[#222]" : "bg-[#e0e7ef]"
              }`}
              aria-label={`Go to job ${idx + 1}`}
              tabIndex={0}
              style={{ minWidth: 40 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;