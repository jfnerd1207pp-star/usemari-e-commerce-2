import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </div>
  );
}
