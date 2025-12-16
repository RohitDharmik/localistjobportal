import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#e6f7fd] py-3 px-4 md:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and nav */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            {/* Pin icon for logo */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mr-1"><circle cx="11" cy="11" r="11" fill="#00AEEA"/><circle cx="11" cy="11" r="5" fill="#fff"/></svg>
            <span className="font-black text-2xl text-[#222] tracking-tight">localists</span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#222]">
            <a href="#" className="flex items-center gap-1 hover:text-[#00AEEA] transition-colors">
              Explore Our Services
              <svg className="w-4 h-4" fill="none" stroke="#00AEEA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-[#00AEEA] transition-colors">
              Advice
              <svg className="w-4 h-4" fill="none" stroke="#00AEEA" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Search bar */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-[#f2fbfd] rounded-full px-4 py-2 border border-[#e6f7fd] shadow-sm">
            <input
              type="text"
              placeholder="Search for a service"
              className="bg-transparent text-[#222] placeholder-[#888] outline-none text-[15px] w-48 font-medium"
            />
            <Search className="w-5 h-5 text-[#00AEEA] ml-2" />
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:block text-[15px] text-[#222] font-medium hover:text-[#00AEEA] transition-colors">Login</a>
          <a href="#" className="ml-1 px-5 py-2 rounded-full bg-[#00AEEA] text-white font-bold text-[15px] shadow hover:bg-[#0099cc] transition-colors">Sign Up</a>
          <button
            className="md:hidden ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 text-[#00AEEA]" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 text-base font-medium text-[#222]">
          <a href="#" className="hover:text-[#00AEEA] transition-colors">Explore Our Services</a>
          <a href="#" className="hover:text-[#00AEEA] transition-colors">Advice</a>
          <a href="#" className="hover:text-[#00AEEA] transition-colors">Login</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
