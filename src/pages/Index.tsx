import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularJobs from "@/components/PopularJobs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularJobs />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
