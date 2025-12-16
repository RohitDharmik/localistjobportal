const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="font-bold text-xl">localists</span>
            </div>
            <p className="text-sm opacity-70">
              Find local services fast. Get instant quotes from professionals in your area.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Landscaping</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home Repairs</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Personal Training</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Tutoring</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
          <p>© 2024 Localists. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
