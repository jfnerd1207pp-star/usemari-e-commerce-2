import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const update = () => {
      try {
        const cart = JSON.parse(localStorage.getItem('usemari_cart') || '[]');
        setCartCount(cart.reduce((s: number, i: { quantity: number }) => s + i.quantity, 0));
      } catch { setCartCount(0); }
    };
    update();
    window.addEventListener('cart-updated', update);
    window.addEventListener('storage', update);
    return () => {
      window.removeEventListener('cart-updated', update);
      window.removeEventListener('storage', update);
    };
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-3xl font-bold tracking-[0.3em] text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            USEMARI
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="nav-link">Home</Link>
            <a href="/#produtos" className="nav-link">Produtos</a>
            <Link to="/carrinho" className="nav-link">Carrinho</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/carrinho" className="relative group">
              <ShoppingBag className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link to="/" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <a href="/#produtos" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Produtos</a>
            <Link to="/carrinho" className="nav-link py-2" onClick={() => setMobileOpen(false)}>Carrinho</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
