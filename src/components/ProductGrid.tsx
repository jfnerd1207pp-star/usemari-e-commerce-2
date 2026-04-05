import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { useCart } from '@/hooks/useCart';

export default function ProductGrid() {
  const { addItem } = useCart();

  return (
    <section id="produtos" className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3" style={{ fontFamily: 'var(--font-body)' }}>
          Curadoria exclusiva
        </p>
        <h2 className="section-title">Nossos Produtos</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={addItem} />
        ))}
      </div>
    </section>
  );
}
