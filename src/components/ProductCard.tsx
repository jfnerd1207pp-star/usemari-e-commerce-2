import { useState } from 'react';
import { Check } from 'lucide-react';
import type { Product } from '@/data/products';

interface Props {
  product: Product;
  onAdd: (p: Product) => void;
}

export default function ProductCard({ product, onAdd }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card group">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="product-image w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1" style={{ fontFamily: 'var(--font-body)' }}>
          {product.category}
        </p>
        <h3 className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-gold mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full py-3 rounded-lg text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-green-600 text-primary-foreground scale-[0.98]'
              : 'btn-gold'
          }`}
        >
          {added ? (
            <span className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4" /> Adicionado
            </span>
          ) : (
            'Adicionar ao Carrinho'
          )}
        </button>
      </div>
    </div>
  );
}
