import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Heart } from 'lucide-react';
import { Button, cn } from '../components/ui';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Appeals', path: '/my-appeals' },
    { name: 'Resources', path: '/resources' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 relative">
          <div className="relative text-primary">
            <Shield className="w-8 h-8 stroke-[2px]" />
            <Heart className="w-4 h-4 fill-current absolute top-2 left-2" />
          </div>
          <span className="text-[20px] font-bold text-primary leading-tight">CareGuard</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-nav-link hover:text-primary transition-colors relative group",
                  isActive && "text-nav-link-active"
                )}
              >
                {link.name}
                {/* Active Underline */}
                {isActive && (
                  <span className="absolute -bottom-[26px] left-0 right-0 h-[3px] bg-primary rounded-t-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button>Get Help</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-text-primary" onClick={() => setIsMenuOpen(true)}>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-[280px] bg-surface shadow-modal p-6 flex flex-col">
             <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2 text-primary">
                  <Shield className="w-6 h-6 stroke-[2px]" />
                  <span className="font-bold">CareGuard</span>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="text-text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>
             </div>
             <nav className="flex flex-col gap-6">
                {navLinks.map(link => (
                   <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className={cn("text-lg font-medium", location.pathname === link.path ? "text-primary" : "text-text-secondary")}>{link.name}</Link>
                ))}
             </nav>
             <div className="mt-8 pt-8 border-t border-border">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Get Help</Button>
                </Link>
             </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8 mt-auto w-full">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-text-muted font-medium text-sm">
          © {new Date().getFullYear()} CareGuard. Guided Clarity in Healthcare.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">Accessibility</a>
          <Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact Support</Link>
        </div>
      </div>
    </footer>
  );
}
