'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Compass, Gamepad, FileText, Mail, Linkedin, Twitter, Menu, Github, UserCircle, BookAIcon, Paperclip, Book, BookCheck, BookDashed } from 'lucide-react';
import { useScroll } from '@/app/hooks/usescroll';
import { CustomCursor } from './CustomCursor';
import { GreetingText } from './GreetingText';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollPercentage = useScroll();
  const [currentPath, setCurrentPath] = useState("/");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Update currentPath when the component mounts and when the URL changes
    setCurrentPath(window.location.pathname);

    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  useEffect(() => {
    // Check if desktop and trigger sidebar animation only on desktop
    const checkDesktop = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setIsDesktop(isLargeScreen);
      if (isLargeScreen) {
        setSidebarVisible(true);
      }
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  
  return (
    <>
      <CustomCursor />
      
      {/* Scroll Indicator */}
      <div className="fixed top-6 right-6 bg-secondary/80 px-3 py-1.5 rounded-full text-sm text-muted-foreground backdrop-blur-sm z-50 border border-border">
        {scrollPercentage}%
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md p-4 z-40 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
              <img
                src="/pp.png"
                alt="Profile"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-normal text-foreground">Vinit Jain</h3>
              <p className="text-sm text-muted-foreground font-light">Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Floating Style */}
      <motion.div
        initial={false}
        animate={
          isDesktop
            ? { x: sidebarVisible ? 0 : -300, opacity: sidebarVisible ? 1 : 0 }
            : { x: isMobileMenuOpen ? 0 : -300, opacity: 1 }
        }
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed left-0 top-0 bottom-0 lg:left-8 lg:top-8 lg:bottom-8 w-64 bg-card backdrop-blur-sm lg:rounded-2xl p-6 flex flex-col z-30 border-r lg:border border-border lg:shadow-sm",
          "lg:h-[calc(100vh-4rem)]"
        )}
      >
        {/* Profile Section - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-3 mb-10">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-border">
            <img
              src="/pp.png"
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-normal text-foreground">Vinit Jain</h3>
            <p className="text-sm text-muted-foreground font-light">Developer</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-light py-2">
                <Compass size={18} />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-light py-2">
                <UserCircle size={18} />
                <span>About me</span>
              </Link>
            </li>
            <li>
              <Link href="https://drive.google.com/file/d/1O2WVXS4H8nY6h913L0Z3t2iuqwoqS5aS/view?usp=sharing" className="flex items-center gap-3 text-foreground hover:text-foreground/60 transition-colors font-light py-2">
                <BookAIcon size={18} />
                <span>Resume</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="space-y-3 pt-6 border-t border-border">
          <Link href="https://www.linkedin.com/in/vinit-j-2400a7246/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-light py-1.5">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/Vinitj088" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-light py-1.5">
            <Github size={18} />
            <span>Github</span>
          </Link>
        </div>
      </motion.div>  

      {/* Main Content */}
      <main className="lg:ml-80 flex-1 p-8 pt-24 lg:pt-8  pb-24 lg:pb-8">
        <div className="max-w-4xl">
          {children}
        </div>
      </main>

      {/* Mobile Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-md lg:hidden z-40 border-t border-border">
        <nav className="flex justify-around items-center h-16 px-4">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center transition-colors",
              currentPath === "/" ? "text-foreground" : "text-muted-foreground"
            )}
            onClick={() => setCurrentPath("/")}
          >
            <Compass size={18} />
            <span className="text-xs mt-1 font-light">Explore</span>
          </Link>

          <Link
            href="/about"
            className={cn(
              "flex flex-col items-center transition-colors",
              currentPath === "/about" ? "text-foreground" : "text-muted-foreground"
            )}
            onClick={() => setCurrentPath("/about")}
          >
            <UserCircle size={18} />
            <span className="text-xs mt-1 font-light">About</span>
          </Link>

          <Link
            href="https://drive.google.com/file/d/1O2WVXS4H8nY6h913L0Z3t2iuqwoqS5aS/view?usp=sharing"
            className="flex flex-col items-center text-muted-foreground transition-colors"
          >
            <BookAIcon size={18} />
            <span className="text-xs mt-1 font-light">Resume</span>
          </Link>

          <Link
            href="https://github.com/Vinitj088"
            className="flex flex-col items-center text-muted-foreground transition-colors"
          >
            <Github size={18} />
            <span className="text-xs mt-1 font-light">Github</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MainLayout;