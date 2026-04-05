import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="section-title mb-12">Seu Carrinho</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
            <p className="text-muted-foreground text-lg mb-6">Seu carrinho está vazio</p>
            <Link to="/" className="btn-gold inline-block">Explorar Produtos</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-5 p-4 rounded-xl bg-card" style={{ boxShadow: 'var(--shadow-soft)' }}>
                  <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-lg" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-lg" style={{ fontFamily: 'var(--font-display)' }}>{item.name}</h3>
                      <p className="text-gold font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-border rounded-lg">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card p-8 rounded-xl h-fit" style={{ boxShadow: 'var(--shadow-card)' }}>
              <h3 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>Resumo</h3>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span className="text-gold">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              <Link to="/checkout" className="btn-gold block text-center w-full">
                Finalizar Compra
              </Link>
              <Link to="/" className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Continuar comprando
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
