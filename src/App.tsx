import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#C1A482] selection:text-black overflow-x-hidden bg-[#0F0F0F] text-[#E5E5E5] font-sans">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <Categories />
      <Footer />
    </div>
  );
}
