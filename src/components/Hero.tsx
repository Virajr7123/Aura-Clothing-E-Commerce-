import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0F0F0F]">
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#262626] to-[#0A0A0A] mix-blend-overlay z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop" 
          alt="Fashion Model" 
          className="w-full h-full object-cover object-top opacity-50 sepia-[0.3] grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-10"></div>
      </motion.div>

      <div className="relative z-20 flex h-full items-center justify-center pt-20">
         <div className="absolute inset-6 sm:inset-12 border border-white/5 pointer-events-none"></div>
         <div className="max-w-7xl w-full mx-auto px-12 sm:px-24 flex flex-col items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[10px] uppercase tracking-[0.4em] text-[#C1A482] font-bold mb-6"
          >
            Spring / Summer 2026
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-6xl sm:text-8xl font-serif leading-[0.85] mb-8 text-white"
          >
            The Art of <br/><span className="italic ml-8 sm:ml-16">Understatement</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <a 
              href="#discover" 
              className="inline-block px-8 py-4 bg-[#C1A482] text-black text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-all"
            >
              Discover Collection
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
