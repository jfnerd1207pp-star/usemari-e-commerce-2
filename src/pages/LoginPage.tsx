import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupCep, setSignupCep] = useState('');
  const [signupEndereco, setSignupEndereco] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com backend
    console.log('Login:', { loginEmail, loginPassword });
    navigate('/');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupPassword !== signupConfirm) {
      alert('As senhas não coincidem!');
      return;
    }
    // TODO: integrar com backend
    console.log('Signup:', { signupName, signupEmail, signupCep, signupEndereco });
    navigate('/');
  };

  const formatCep = (value: string) => {
    const nums = value.replace(/\D/g, '').slice(0, 8);
    if (nums.length > 5) return nums.slice(0, 5) + '-' + nums.slice(5);
    return nums;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10" style={{ backgroundColor: '#faf7f7' }}>
      {/* Back to home */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-10 flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
        style={{ color: '#8b7e7e' }}
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="w-full max-w-[400px] animate-fade-in">
        {/* Logo */}
        <div
          className="text-center text-[28px] font-semibold tracking-wider mb-8"
          style={{ color: '#d49a89', fontFamily: 'var(--font-display)' }}
        >
          UseMari
        </div>

        {/* Toggle Login / Cadastro */}
        <div
          className="flex relative rounded-[30px] mb-6 p-1"
          style={{ backgroundColor: '#e5dcdc' }}
        >
          <button
            onClick={() => setIsFlipped(false)}
            onMouseEnter={() => setIsFlipped(false)}
            className="flex-1 bg-transparent border-none py-2.5 text-sm font-medium cursor-pointer z-[2] transition-colors duration-300"
            style={{ color: isFlipped ? '#8b7e7e' : '#2d2d2d' }}
          >
            Login
          </button>
          <button
            onClick={() => setIsFlipped(true)}
            onMouseEnter={() => setIsFlipped(true)}
            className="flex-1 bg-transparent border-none py-2.5 text-sm font-medium cursor-pointer z-[2] transition-colors duration-300"
            style={{ color: isFlipped ? '#2d2d2d' : '#8b7e7e' }}
          >
            Cadastro
          </button>
          <div
            className="absolute top-1 left-1 h-[calc(100%-8px)] rounded-[26px] transition-transform duration-400 z-[1]"
            style={{
              width: 'calc(50% - 4px)',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              transform: isFlipped ? 'translateX(100%)' : 'translateX(0)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        </div>

        {/* 3D Card Scene */}
        <div style={{ perspective: '1000px', width: '100%' }}>
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              minHeight: isFlipped ? '580px' : '380px',
            }}
          >
            {/* Front - Login */}
            <div
              className="absolute w-full rounded-3xl p-8 flex flex-col"
              style={{
                backfaceVisibility: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
              }}
            >
              <h2 className="text-[22px] font-semibold mb-1" style={{ color: '#2d2d2d' }}>
                Bem-vinda de volta
              </h2>
              <p className="text-sm mb-8" style={{ color: '#8b7e7e' }}>
                Faça login para continuar
              </p>

              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <FloatingInput
                  type="email"
                  label="E-mail"
                  value={loginEmail}
                  onChange={setLoginEmail}
                />
                <FloatingInput
                  type="password"
                  label="Senha"
                  value={loginPassword}
                  onChange={setLoginPassword}
                />

                <a
                  href="#"
                  className="text-right text-xs -mt-2 mb-2 transition-colors hover:opacity-80"
                  style={{ color: '#8b7e7e' }}
                >
                  Esqueci minha senha
                </a>

                <PrimaryButton>Entrar</PrimaryButton>
              </form>
            </div>

            {/* Back - Cadastro */}
            <div
              className="absolute w-full rounded-3xl p-8 flex flex-col"
              style={{
                backfaceVisibility: 'hidden',
                backgroundColor: '#ffffff',
                boxShadow: '0 15px 35px rgba(0,0,0,0.04)',
                transform: 'rotateY(180deg)',
              }}
            >
              <h2 className="text-[22px] font-semibold mb-1" style={{ color: '#2d2d2d' }}>
                Crie sua conta
              </h2>
              <p className="text-sm mb-6" style={{ color: '#8b7e7e' }}>
                Junte-se à UseMari
              </p>

              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                <FloatingInput label="Nome completo" value={signupName} onChange={setSignupName} />
                <FloatingInput type="email" label="E-mail" value={signupEmail} onChange={setSignupEmail} />
                <FloatingInput
                  label="Insira seu CEP"
                  value={signupCep}
                  onChange={(v) => setSignupCep(formatCep(v))}
                  maxLength={9}
                />
                <FloatingInput label="Insira seu endereço" value={signupEndereco} onChange={setSignupEndereco} />
                <FloatingInput type="password" label="Senha" value={signupPassword} onChange={setSignupPassword} />
                <FloatingInput type="password" label="Confirmar senha" value={signupConfirm} onChange={setSignupConfirm} />
                <PrimaryButton>Criar conta</PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */

function FloatingInput({
  type = 'text',
  label,
  value,
  onChange,
  maxLength,
}: {
  type?: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  maxLength?: number;
}) {
  const hasValue = value.length > 0;
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        required
        placeholder=" "
        className="w-full py-3.5 px-4 text-sm rounded-xl outline-none transition-all duration-300 peer"
        style={{
          border: '1.5px solid #e5dcdc',
          backgroundColor: 'transparent',
          color: '#2d2d2d',
        }}
        onFocus={(e) => (e.target.style.borderColor = '#d49a89')}
        onBlur={(e) => {
          if (!hasValue) e.target.style.borderColor = '#e5dcdc';
        }}
      />
      <label
        className="absolute left-4 pointer-events-none transition-all duration-300 px-1"
        style={{
          top: hasValue ? '0' : '50%',
          transform: hasValue ? 'translateY(-50%)' : 'translateY(-50%)',
          fontSize: hasValue ? '12px' : '14px',
          color: hasValue ? '#d49a89' : '#8b7e7e',
          backgroundColor: hasValue ? '#ffffff' : 'transparent',
        }}
      >
        {label}
      </label>
      <style>{`
        .peer:focus + label {
          top: 0 !important;
          font-size: 12px !important;
          color: #d49a89 !important;
          background-color: #ffffff !important;
        }
      `}</style>
    </div>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full py-4 text-[15px] font-semibold rounded-xl border-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
      style={{
        backgroundColor: '#d49a89',
        color: '#ffffff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#c48674';
        e.currentTarget.style.boxShadow = '0 5px 15px rgba(212, 154, 137, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#d49a89';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
}
