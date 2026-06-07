import { ShoppingBag, Search, Menu } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        scrolled ? "bg-[#0F0F0F]/90 backdrop-blur-md border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <button className="lg:hidden p-2 -ml-2 text-[#E5E5E5] transition-opacity hover:text-[#C1A482]">
          <Menu className="w-5 h-5" />
        </button>

        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase text-[#E5E5E5]">
          <a href="#" className="hover:text-[#C1A482] transition-colors">New In</a>
          <a href="#" className="hover:text-[#C1A482] transition-colors">Women</a>
          <a href="#" className="hover:text-[#C1A482] transition-colors">Men</a>
          <a href="#" className="hover:text-[#C1A482] transition-colors">Accessories</a>
        </nav>

        <a href="#" className="text-3xl font-serif italic tracking-tight font-light absolute left-1/2 -translate-x-1/2 text-[#E5E5E5]">
          AURA <span className="text-[#C1A482] text-sm not-italic align-top ml-1 underline">®</span>
        </a>

        <div className="flex items-center gap-6 text-[#E5E5E5]">
          <button className="p-2 hidden sm:block hover:text-[#C1A482] transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="p-2 hover:text-[#C1A482] transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
