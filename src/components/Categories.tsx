import { motion } from 'motion/react';
import { Category } from '../types';

const CATEGORIES: Category[] = [
  {
    id: 'c1',
    name: 'Womenswear',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'c2',
    name: 'Menswear',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=2574&auto=format&fit=crop',
    span: 'col-span-1'
  },
  {
    id: 'c3',
    name: 'Essentials',
    image: 'https://images.unsplash.com/photo-1509631179647-06773dd7a10f?q=80&w=2574&auto=format&fit=crop',
    span: 'col-span-1'
  }
];

export function Categories() {
  return (
    <section className="bg-[#0F0F0F] py-12 pb-24 sm:pb-32 px-4 sm:px-12 relative">
       <div className="max-w-7xl mx-auto border border-white/5 p-4 sm:p-8 relative">
        {/* Background gradient effect matching the 'noir' theme background */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[radial-gradient(circle_at_center,_#C1A482_0%,_transparent_70%)] pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:grid-rows-2 md:h-[800px] relative z-10">
          {CATEGORIES.map((category, index) => (
            <motion.a
              href="#"
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className={`relative overflow-hidden group block min-h-[400px] md:min-h-0 border border-white/10 ${category.span || ''}`}
            >
              <div className="absolute inset-0 bg-[#1A1A1A]">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover opacity-60 grayscale-[0.8] transition-all duration-1000 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0 group-hover:sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start bg-gradient-to-t from-black/80 to-transparent sm:bg-none sm:from-transparent sm:to-transparent">
                <h3 className="text-[#E5E5E5] text-4xl sm:text-5xl font-serif italic font-light mb-6 group-hover:text-[#C1A482] transition-colors duration-500 relative z-10">{category.name}</h3>
                <span className="text-[#C1A482] border-b border-[#C1A482]/30 pb-1 text-[10px] tracking-[0.2em] uppercase font-bold group-hover:border-[#C1A482] group-hover:text-white transition-all duration-300 relative z-10">
                  Shop Category
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
