import { Search } from "lucide-react";

const popularServices = [
  "Landscapers",
  "Patio Layers",
  "Private Tutors",
  "Fence & Gate Installers",
  "Personal Trainers",
  "Tree Surgeons",
  "Architects",
  "Painter Decorators",
  "Airport Transfers",
  "Physics and Maths Tutors",
];


const HeroSection = () => {
  return (
    <section className="bg-[#00AEEA] text-white py-16 px-4 md:py-24 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Trustpilot badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 rounded-full px-4 py-2 text-sm shadow-md">
              <span className="font-semibold text-[#00B67A]">Excellent</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#00B67A]" fill="currentColor" viewBox="0 0 20 20"><polygon points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" /></svg>
                ))}
              </div>
              <span className="text-xs text-[#666]">Trustpilot</span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black leading-[1.05] tracking-tight">
              Find Local<br />
              Services.<br />
              <span className="text-[#222]">Fast.</span>
            </h1>

            <p className="text-lg text-white/90 font-medium">
              Get instant quotes from local professionals.
            </p>

            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-md border border-white/80">
              <input
                type="text"
                placeholder="Search for a service"
                className="flex-1 px-3 py-2 text-[#222] placeholder-[#888] outline-none bg-transparent text-sm font-medium min-w-0
                  sm:px-2 sm:py-1 sm:text-xs"
                style={{ minWidth: 0 }}
              />
              <button  name="Search" className="p-4 text-[#00AEEA] hover:bg-[#e6f7fd] transition-colors">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="space-y-4 pt-4 md:pt-12">
            <h3 className="text-base font-semibold text-white mb-2">Popular Services:</h3>
            <div className="flex flex-wrap gap-3">
              {popularServices.map((service) => (
                <a
                  key={service}
                  href="#"
                  className="px-5 py-2 rounded-full border border-white/60 text-base font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors shadow-sm"
                  style={{ letterSpacing: 0.1 }}
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
