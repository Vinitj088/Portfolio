'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Compass, Gamepad, FileText, Mail, Linkedin, Twitter, Menu, Github, UserCircle, BookAIcon, Paperclip, Book, BookCheck, BookDashed } from 'lucide-react';
import { useScroll } from '@/app/hooks/usescroll';
import { CustomCursor } from './CustomCursor';
import { GreetingText } from './GreetingText';
import { cn } from '@/lib/utils';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPercentage = useScroll();
  const [currentPath, setCurrentPath] = useState("/");
  
  useEffect(() => {
    // Update currentPath when the component mounts and when the URL changes
    setCurrentPath(window.location.pathname);
    
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);
  
  return (
    <>
      <CustomCursor />
      
      {/* Scroll Indicator */}
      <div className="fixed top-4 right-4 bg-black/50 px-3 py-1 rounded-md text-sm text-zinc-400 backdrop-blur-sm z-50">
        scroll: {scrollPercentage}%
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-zinc-900/50 backdrop-blur-sm p-4 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/pp.png"
                alt="Profile"
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="font-semibold">Vinit Jain</h3>
              <p className="text-sm text-zinc-400">Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Floating Style */}
      <div className={cn(
        "fixed lg:left-8 lg:top-8 lg:bottom-8 w-64 bg-[#211F1F] backdrop-blur-sm rounded-lg p-6 flex flex-col transition-transform duration-300 z-30",
        "lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        "lg:h-[calc(100vh-4rem)]"
      )}>
        {/* Profile Section - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-3 mb-8">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/pp.png"
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold">Vinit Jain</h3>
            <p className="text-sm text-zinc-400">Developer</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-5">
            <li>
              <Link href="/" className="flex items-center gap-3 text-[#ffffff] hover:text-[#ADFF00]/80">
                <Compass size={20} />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-3 text-[#ffffff] hover:text-[#ADFF00]/80">
                <UserCircle size={20} />
                <span>About me</span>
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1iL7nblvckETQk1zsgmq7jbA0CDQl-Nln/view?usp=sharing" className="flex items-center gap-3 text-[#ffffff] hover:text-[#ADFF00]/80">
                <BookAIcon size={20} />
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="space-y-4">
          <Link href="https://www.linkedin.com/in/vinit-j-2400a7246/" className="flex items-center gap-3 text-zinc-400 hover:text-white">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/Vinitj088" className="flex items-center gap-3 text-zinc-400 hover:text-white">
            <Github size={20} />
            <span>Github</span>
          </Link>
        </div>
      </div>  

      {/* Main Content */}
      <main className="lg:ml-80 flex-1 p-8 pt-24 lg:pt-8  pb-24 lg:pb-8">
        <div className="max-w-4xl">
          {children}
        </div>
      </main>

      {/* Mobile Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#211F1F] lg:hidden z-40">
        <nav className="flex justify-around items-center h-16 px-4">
          <Link 
            href="/" 
            className={cn(
              "flex flex-col items-center",
              currentPath === "/" ? "text-[#ADFF00]" : "text-zinc-400"
            )}
            onClick={() => setCurrentPath("/")}
          >
            <Compass size={20} />
            <span className="text-xs mt-1">Explore</span>
          </Link>
          
          <Link 
            href="/about"
            className={cn(
              "flex flex-col items-center",
              currentPath === "/about" ? "text-[#ADFF00]" : "text-zinc-400"
            )}
            onClick={() => setCurrentPath("/about")}
          >
            <UserCircle size={20} />
            <span className="text-xs mt-1">About</span>
          </Link>
          
          <Link 
            href="https://drive.google.com/file/d/1iL7nblvckETQk1zsgmq7jbA0CDQl-Nln/view?usp=sharing"
            className="flex flex-col items-center text-zinc-400"
          >
            <BookAIcon size={20} />
            <span className="text-xs mt-1">Resume</span>
          </Link>
          
          <Link 
            href="https://github.com/Vinitj088"
            className="flex flex-col items-center text-zinc-400"
          >
            <Github size={20} />
            <span className="text-xs mt-1">Github</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MainLayout;