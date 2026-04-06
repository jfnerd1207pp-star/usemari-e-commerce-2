import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, FileText, ArrowLeft, CheckCircle, QrCode } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';

type PaymentMethod = 'card' | 'boleto' | 'pix';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [payment, setPayment] = useState<PaymentMethod>('card');
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  if (items.length === 0 && !done) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-6">Seu carrinho está vazio</p>
            <Link to="/" className="btn-gold inline-block">Voltar à Loja</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (done) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center max-w-md animate-fade-in">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h1 className="section-title mb-4">Pedido Confirmado!</h1>
            <p className="text-muted-foreground mb-8">Obrigado pela sua compra. Você receberá um e-mail com os detalhes do pedido.</p>
            <button onClick={() => navigate('/')} className="btn-gold">Voltar à Loja</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setDone(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-20 px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <Link to="/carrinho" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar ao carrinho
        </Link>
        <h1 className="section-title mb-12">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Payment method */}
            <div>
              <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Forma de Pagamento</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setPayment('card')}
                  className={`p-5 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                    payment === 'card' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                  }`}
                >
                  <CreditCard className={`w-6 h-6 ${payment === 'card' ? 'text-gold' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-medium">Cartão</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPayment('boleto')}
                  className={`p-5 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                    payment === 'boleto' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                  }`}
                >
                  <FileText className={`w-6 h-6 ${payment === 'boleto' ? 'text-gold' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-medium">Boleto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPayment('pix')}
                  className={`p-5 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${
                    payment === 'pix' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/40'
                  }`}
                >
                  <QrCode className={`w-6 h-6 ${payment === 'pix' ? 'text-gold' : 'text-muted-foreground'}`} />
                  <span className="text-sm font-medium">Pix</span>
                </button>
              </div>
            </div>

            {/* Form fields */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                {payment === 'card' ? 'Dados do Cartão' : payment === 'boleto' ? 'Dados para Boleto' : 'Dados para Pix'}
              </h3>
              <input required type="text" placeholder="Nome completo" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
              <input required type="email" placeholder="E-mail" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
              {payment === 'card' && (
                <>
                  <input required type="text" placeholder="Número do cartão" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required type="text" placeholder="Validade (MM/AA)" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                    <input required type="text" placeholder="CVV" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                  </div>
                </>
              )}
              {payment === 'boleto' && (
                <input required type="text" placeholder="CPF" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
              )}
              {payment === 'pix' && (
                <div className="space-y-4">
                  <input required type="text" placeholder="CPF" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                  <div className="p-6 rounded-xl border border-border bg-muted/30 text-center space-y-3">
                    <QrCode className="w-16 h-16 mx-auto text-gold" />
                    <p className="text-sm text-muted-foreground">O QR Code será gerado após confirmar o pedido</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-card p-8 rounded-xl h-fit" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h3 className="text-xl font-medium mb-6" style={{ fontFamily: 'var(--font-display)' }}>Resumo do Pedido</h3>
            <div className="space-y-3 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span className="text-gold">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>
            <button type="submit" className="btn-gold w-full text-center">
              Confirmar Pedido
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
