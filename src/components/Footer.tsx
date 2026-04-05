export default function Footer() {
  return (
    <footer className="bg-beige-light border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl tracking-[0.3em] font-light mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          USEMARI
        </h3>
        <p className="text-muted-foreground text-sm mb-6" style={{ fontFamily: 'var(--font-body)' }}>
          Elegância em cada detalhe
        </p>
        <p className="text-xs text-muted-foreground">
          © 2026 Usemari. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
