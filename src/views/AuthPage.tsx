import { useState, FormEvent } from 'react';
import { Sparkles, ArrowRight, Video, Chrome, Shield, Radio, Activity } from 'lucide-react';

interface AuthPageProps {
  onSuccessLogin: () => void;
}

export default function AuthPage({ onSuccessLogin }: AuthPageProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('adrian@rategenius.ai');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('');
  const [agree, setAgree] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in authentication parameters.');
      return;
    }
    // Simulate active transition login success
    onSuccessLogin();
  };

  return (
    <div className="flex min-h-screen w-full bg-[#09090b] font-sans" id="auth-split-layout">
      {/* Absolute background accent lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent pointer-none" />

      {/* LEFT SIDE: Clean, functional card credentials form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 z-10 bg-[#09090b] border-r border-zinc-800 shadow-2xl">
        <div className="mx-auto w-full max-w-sm lg:w-96 animate-fade-in" id="auth-form-panel">
          {/* Brand Header */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 font-mono text-base font-black text-white glow-purple select-none">
              RG
            </div>
            <div>
              <h1 className="text-sm font-extrabold uppercase tracking-widest text-white leading-none">
                RateGenius <span className="text-cyan-400 font-bold">AI</span>
              </h1>
              <span className="text-[10px] font-mono tracking-tight text-zinc-500">Autonomous Creator OS</span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {mode === 'signin' ? 'Access your account' : 'Register creator profile'}
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              {mode === 'signin' ? "Don't have an auth profile yet? " : 'Already registered? '}
              <button
                onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                className="font-bold text-violet-400 hover:text-violet-300 underline underline-offset-4 cursor-pointer"
              >
                {mode === 'signin' ? 'Request sandbox slot' : 'Sign in back'}
              </button>
            </p>
          </div>

          <div className="mt-8">
            {/* Social Oauth Buttons Option */}
            <div className="space-y-3">
              <button
                onClick={onSuccessLogin}
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-80 line-clamp-1 hover:bg-zinc-800 px-3.5 py-2.5 text-xs font-bold text-zinc-205 shadow-sm active:scale-95 transition-all text-zinc-200 cursor-pointer"
              >
                <Chrome className="h-4 w-4 text-emerald-450" />
                <span>Continue on via Google Profile</span>
              </button>
            </div>

            <div className="relative my-6 select-none">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-805 border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-xs font-semibold lowercase">
                <span className="bg-[#09090b] px-3.5 text-[10px] text-zinc-500 font-mono uppercase tracking-widest select-none">OR EMAIL</span>
              </div>
            </div>

            {/* Credential login forms */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium text-zinc-400">
              {mode === 'signup' && (
                <div className="flex flex-col gap-1.5 animate-fade-in">
                  <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Creator Display Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg border border-zinc-800 bg-zinc-950 py-2.5 px-3.5 text-white placeholder-zinc-650 outline-none transition focus:border-violet-600 focus:bg-zinc-900"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Creator Email address</label>
                <input
                  type="email"
                  required
                  placeholder="name@rategenius.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 py-2.5 px-3.5 text-white placeholder-zinc-650 outline-none transition focus:border-violet-600 focus:bg-zinc-900"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Custom security key</label>
                  {mode === 'signin' && (
                    <span className="text-[10px] text-zinc-500 font-mono block hover:text-zinc-350 cursor-pointer">Recover key?</span>
                  )}
                </div>
                <input
                  type="password"
                  required
                  placeholder="Enter Password"
                   value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 py-2.5 px-3.5 text-white placeholder-zinc-650 outline-none transition focus:border-violet-600 focus:bg-zinc-900"
                />
              </div>

              {/* T & C Agreement Check */}
              <div className="flex items-center gap-2.5 py-1">
                <input
                  type="checkbox"
                  id="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="rounded border-zinc-800 text-violet-600 bg-zinc-950 h-4.5 w-4.5 pointer-events-auto cursor-pointer focus:ring-0"
                />
                <label htmlFor="agree" className="text-[11px] text-zinc-500 leading-none cursor-pointer">
                  I accept standard creator sandbox user agreements.
                </label>
              </div>

              {/* Submit trigger */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 py-3 text-xs font-bold text-white shadow-xl shadow-violet-950/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 glow-purple mt-2 cursor-pointer"
              >
                <span>{mode === 'signin' ? 'Verify and Access Sandbox' : 'Establish Creator Blueprint'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Rich, animated SaaS dashboard cover layout */}
      <div className="relative hidden w-0 flex-1 lg:block" id="auth-splash-visual">
        {/* Animated gradients in background */}
        <div className="absolute inset-0 bg-[#0d0d0f]" />
        
        {/* Abstract futuristic background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
        
        {/* Colorful ambient light blobs */}
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-violet-600/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl animate-pulse" />

        {/* Floating cards to replicate a Stripe/Linear interface dashboard */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white select-none">
          {/* Floating UI Widget mockup card */}
          <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-4 max-w-md backdrop-blur-md mb-8 px-8 glow-combined">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radio className="h-4.5 w-4.5 text-violet-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A1A1AA]">Trend Signal Locked</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-405 text-cyan-300 bg-cyan-950/40 border border-cyan-900/30 px-2 py-0.5 rounded">
                +312% Growth
              </span>
            </div>
            
            <p className="text-left text-sm font-extrabold text-zinc-100 leading-snug">
              "No-Code Spatial Widgets design system is breaking developer records."
            </p>

            <div className="border-t border-zinc-800 pt-3 flex items-center justify-between text-[11px] text-zinc-550 text-zinc-500 font-mono">
              <span>EST. SATURATION: 14%</span>
              <span>COMP LEVEL: LOW</span>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="max-w-md space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-white leading-tight">
              "The best way to predict virality is to engineer it."
            </h3>
            <p className="text-xs leading-relaxed text-zinc-400">
              Quit guessing captions and formats. RateGenius tracks pre-saturation content vectors, audits alignment indexes, and delivers optimized creative frameworks before competition floods the sector.
            </p>
          </div>

          {/* Key capability summary indices */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[11px] font-mono font-bold tracking-widest text-[#71717A] uppercase select-none">
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-violet-500" /> Secure Sandbox
            </span>
            <span>●</span>
            <span className="flex items-center gap-1.5">
              <Activity className="h-4 w-4 text-cyan-400" /> Live Audits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
