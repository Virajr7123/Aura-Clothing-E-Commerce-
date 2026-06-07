import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#E5E5E5] py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 border-b border-white/5 pb-16">
        
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h2 className="text-3xl font-serif italic tracking-tight font-light text-white mb-6">
            AURA <span className="text-[#C1A482] text-sm not-italic align-top ml-1 underline">®</span>
          </h2>
          <p className="text-[12px] text-neutral-400 mb-6 max-w-xs mx-auto md:mx-0 leading-relaxed">
            A collection defined by the absence of color. Sculpted from heavyweight Japanese cotton and hand-finished in our Milanese atelier.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C1A482] mb-6">Shop</h4>
          <ul className="space-y-4 text-[11px] font-medium uppercase tracking-widest text-[#E5E5E5]/70">
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Womenswear</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Menswear</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C1A482] mb-6">Help</h4>
          <ul className="space-y-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#E5E5E5]/70">
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-[#C1A482] transition-colors">Track Order</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left flex flex-col">
          <h4 className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#C1A482] mb-6">Newsletter</h4>
          <p className="text-[12px] text-neutral-400 mb-6 leading-relaxed">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex border-b border-white/20 focus-within:border-[#C1A482] transition-colors mt-auto w-full max-w-sm mx-auto md:mx-0">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border-none outline-none text-[11px] font-medium w-full py-3 placeholder:text-neutral-600 text-white"
            />
            <button type="button" className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#E5E5E5] hover:text-[#C1A482] transition-colors px-4">
              Join
            </button>
          </form>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-1">Established</span>
            <span className="text-[11px] font-medium">2026</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/30 block mb-1">Origin</span>
            <span className="text-[11px] font-medium">Made in India</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block w-12 h-[1px] bg-white/20"></div>
          <p className="text-[11px] font-serif italic text-neutral-400">&copy; 2026 AURA Studio. All rights reserved to Viraj Sawant.</p>
        </div>
        
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-[#C1A482] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
