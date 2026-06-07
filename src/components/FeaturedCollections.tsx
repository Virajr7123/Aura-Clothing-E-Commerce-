import { motion } from 'motion/react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Leather Tote',
    price: 345,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1587&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Classic Silk Shirt',
    price: 185,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Structured Wool Coat',
    price: 590,
    category: 'Men',
    image: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Pleated Evening Dress',
    price: 420,
    category: 'Women',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop'
  }
];

export function FeaturedCollections() {
  return (
    <section id="discover" className="py-24 sm:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif italic font-light text-white mb-6">Curated Details</h2>
            <p className="text-[13px] leading-relaxed text-neutral-400 max-w-md">Pieces designed with intention, crafted for longevity, and tailored for the modern silhouette.</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#" 
            className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C1A482] hover:text-white transition-colors flex items-center gap-2"
          >
            Shop All
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#1A1A1A] border border-white/5 mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                />
                {/* Overlay for hover state */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-[#C1A482] text-black py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 pl-2 border-l border-[#C1A482]/30">
                <p className="text-[9px] text-[#C1A482] tracking-[0.3em] uppercase mb-2 font-bold">{product.category}</p>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-[13px] text-[#E5E5E5] font-serif pr-4 leading-snug">{product.name}</h3>
                  <p className="text-[11px] text-[#C1A482] shrink-0 font-medium">${product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
