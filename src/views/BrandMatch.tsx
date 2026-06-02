import { useState } from 'react';
import { Handshake, Target, HelpCircle, Check, DollarSign, Award, ChevronRight, Activity, Sparkles } from 'lucide-react';
import { BrandMatchItem, UserProfile } from '../types';
import { mockBrands } from '../data/mockData';

interface BrandMatchProps {
  user: UserProfile;
}

export default function BrandMatch({ user }: BrandMatchProps) {
  const [brands, setBrands] = useState<BrandMatchItem[]>(mockBrands);
  const [selectedBrand, setSelectedBrand] = useState<BrandMatchItem>(mockBrands[0]);
  const [matchStatus, setMatchStatus] = useState<'idle' | 'matched'>('idle');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleRecalculate = () => {
    setMatchStatus('matched');
    setSaveStatus('Sponsorship arrays recalculated and aligned.');
    setTimeout(() => {
      setSaveStatus(null);
    }, 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans relative" id="brand-match-view">
      {/* Transient Save Status Banner */}
      {saveStatus && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-zinc-900 border border-emerald-500/30 px-3.5 py-2.5 text-xs text-[#10B981] shadow-2xl animate-slide-in">
          <Activity className="h-4 w-4 animate-pulse text-emerald-400" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Handshake className="h-4.5 w-4.5 text-cyan-400" />
            <span className="text-xs font-bold font-mono tracking-widest text-cyan-400 uppercase">Sponsorship Match Protocol</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Sponsor Brand Matchmaking</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Evaluate sponsorship fit index based on verified demographic interests, organic user alignment, and target budgets.
          </p>
        </div>
      </div>

      {/* Two Columns Workspace */}
      <div className="grid gap-6 lg:grid-cols-5" id="brand-match-workspace">
        {/* Left Creator Brief (2cols) */}
        <div className="lg:col-span-2 space-y-5">
          {/* Creator stats overview */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Audit Target Profile</h3>
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-11 w-11 rounded-lg object-cover ring-1 ring-zinc-800"
              />
              <div>
                <h4 className="text-sm font-extrabold text-white">{user.name}</h4>
                <span className="text-xs font-mono text-cyan-400 block mt-0.5">{user.handle}</span>
              </div>
            </div>

            {/* Target niches list */}
            <div className="border-t border-zinc-800 pt-4 space-y-3">
              <div>
                <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">PRIMARY AUDIENCE INTERESTS</span>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  <span className="rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-350 font-mono">#IndieSaaS</span>
                  <span className="rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-350 font-mono">#ReactDevelopers</span>
                  <span className="rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-350 font-mono">#AISystems</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider">CREATOR CAPABILITY RANKS</span>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="rounded bg-zinc-950/45 border border-zinc-800 p-2 text-center">
                    <span className="text-[8px] uppercase text-zinc-500 block leading-none">Authority</span>
                    <span className="text-xs font-mono font-bold text-white mt-1 block">{user.creatorScore}/100</span>
                  </div>
                  <div className="rounded bg-zinc-950/45 border border-zinc-800 p-2 text-center">
                    <span className="text-[8px] uppercase text-zinc-500 block leading-none">Brand Match</span>
                    <span className="text-xs font-mono font-bold text-cyan-400 mt-1 block">{user.brandMatchScore}/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Match customizer */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Match Preferences</h3>
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[10px] uppercase text-zinc-500 block tracking-wider font-mono">Target Campaign Style</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-2 text-xs text-zinc-350 outline-none focus:border-cyan-500 appearance-none cursor-pointer mt-1">
                  <option className="bg-zinc-900">Affiliate & Sponsorship Hybrid</option>
                  <option className="bg-zinc-900">Direct Brand Representation</option>
                  <option className="bg-zinc-900">Newsletter Co-Sponsor</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase text-zinc-500 block tracking-wider font-mono">Minimum budget threshold</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-2 text-xs text-zinc-350 outline-none focus:border-cyan-500 appearance-none cursor-pointer mt-1">
                  <option className="bg-zinc-900">$5k / Campaign run</option>
                  <option className="bg-zinc-900">$10k / Campaign run</option>
                  <option className="bg-zinc-900">$20k+ / Campaign run</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleRecalculate}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 py-2.5 text-xs font-bold text-white transition-all shadow-md mt-1 cursor-pointer"
            >
              Recalculate Sponsorship Arrays
            </button>
          </div>
        </div>

        {/* Right Recommended Brands Cards (3cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Match Recommendations ({brands.length})</h3>
            <span className="text-[10px] text-cyan-400 font-mono">● ALIGNMENT STRETCHING OPTIMAL</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-1" id="recommended-brands-list">
            {brands.map((b) => {
              const isSelected = selectedBrand.id === b.id;
              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBrand(b)}
                  className={`cursor-pointer overflow-hidden rounded-xl border p-5 transition-all relative ${
                    isSelected
                      ? 'border-cyan-500 bg-cyan-950/20 shadow-xl shadow-cyan-950/20'
                      : 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800/50'
                  }`}
                  id={`brand-match-card-${b.id}`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    {/* Brand Meta */}
                    <div className="flex items-start gap-4">
                      {/* Round abstract letter logo */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 text-base font-extrabold text-white border border-zinc-700 select-none">
                        {b.logo}
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">{b.brandName}</h4>
                          <span className="rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[9px] text-[#A1A1AA] font-mono">
                            {b.category}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 max-w-md leading-relaxed">
                          {b.whyMatch}
                        </p>
                      </div>
                    </div>

                    {/* Score Indicator */}
                    <div className="text-left sm:text-right flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-1.5 border-t border-zinc-800 pt-3 sm:border-transparent sm:pt-0">
                      <span className="text-[10px] text-zinc-500 uppercase font-mono font-bold tracking-widest">Match Score</span>
                      <span className="text-lg font-mono font-black text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/30">
                        {b.matchScore}%
                      </span>
                    </div>
                  </div>

                  {/* Alignment & Success Probability indicators */}
                  <div className="mt-4 grid gap-4 grid-cols-2 border-t border-zinc-850 border-t-zinc-800 pb-1 pt-3.5">
                    {/* Progress 1 */}
                    <div className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500 font-medium font-bold text-[10px] tracking-wider uppercase">Audience Alignment</span>
                        <span className="font-mono text-cyan-400">{b.audienceAlignment}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                        <div className="h-full bg-cyan-500" style={{ width: `${b.audienceAlignment}%` }} />
                      </div>
                    </div>

                    {/* Progress 2 */}
                    <div className="text-xs">
                      <div className="flex justify-between mb-1">
                        <span className="text-zinc-500 font-medium font-bold text-[10px] tracking-wider uppercase">Est. Success probability</span>
                        <span className="font-mono text-cyan-400">{b.successProbability}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                        <div className="h-full bg-cyan-400" style={{ width: `${b.successProbability}%` }} />
                      </div>
                    </div>
                  </div>

                  {/* Campaign Specifics */}
                  <div className="mt-4.5 border-t border-zinc-850 border-t-zinc-800 pt-3.5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-zinc-400 font-medium">
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3.5 w-3.5 text-emerald-400" />
                      Budget: <strong className="text-white">{b.budgetRange}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="h-3.5 w-3.5 text-violet-400" />
                      Type: <strong className="text-zinc-350">{b.campaignType}</strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
