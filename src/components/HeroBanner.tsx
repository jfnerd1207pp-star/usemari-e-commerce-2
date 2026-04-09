import heroBanner from '@/assets/hero-banner.jpg';
import logo from '@/assets/logo.png';

export default function HeroBanner() {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Nova Coleção Usemari"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <img src={logo} alt="Usemari" className="h-28 md:h-36 w-auto mx-auto mb-8 brightness-0 invert drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]" />
        <p className="text-sm uppercase tracking-[0.4em] text-primary-foreground/80 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          Primavera / Verão 2026
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-wide mb-6" style={{ fontFamily: 'var(--font-display)', color: 'hsl(0 0% 100%)' }}>
          Nova Coleção
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-10 font-light max-w-lg mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
          Peças exclusivas com design atemporal e materiais premium
        </p>
        <button onClick={scrollToProducts} className="btn-gold">
          Comprar Agora
        </button>
      </div>
    </section>
  );
}
