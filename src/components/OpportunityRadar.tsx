import { TrendingUp, Flame, AlertCircle, ShieldAlert, Zap, Compass } from 'lucide-react';
import { OpportunityItem } from '../types';

interface OpportunityRadarProps {
  opportunities: OpportunityItem[];
  onActionClick?: (item: OpportunityItem) => void;
}

export default function OpportunityRadar({
  opportunities,
  onActionClick,
}: OpportunityRadarProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl glow-combined" id="opportunity-radar-section">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-5 w-5 text-violet-400 animate-spin-slow" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Autonomous Opportunity Radar</h3>
          </div>
          <p className="mt-1 text-xs text-zinc-455 text-zinc-400">
            Micro-trends detected by social signal engines prior to mainstream YouTube or TikTok saturation.
          </p>
        </div>
        <span className="self-start rounded-full bg-cyan-500/10 px-3 py-1 text-[10px] font-mono text-cyan-400 border border-cyan-500/20">
          ● REAL-TIME RADAR SIGNAL ACTIVE
        </span>
      </div>

      {/* Grid of Futuristic Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" id="opportunity-grid">
        {opportunities.map((item) => {
          // Color coding competition & saturation
          const velocityColor = item.growthVelocity > 200 ? 'text-emerald-400' : 'text-violet-400';
          const compColor =
            item.competitionLevel === 'Low'
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : item.competitionLevel === 'Medium'
              ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
              : 'bg-rose-500/10 text-rose-400 border-rose-500/20';

          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-5 transition-all duration-300 hover:border-zinc-750 hover:bg-zinc-900/65 group"
              id={`opportunity-card-${item.id}`}
            >
              {/* Radial subtle glowing effect behind card */}
              <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-violet-600/10 to-cyan-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl" />

              {/* Tag and Category */}
              <div className="flex items-center justify-between">
                <span className="rounded bg-zinc-800/80 px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-700/30 capitalize">
                  {item.category}
                </span>
                <span className={`text-xs font-semibold ${velocityColor} flex items-center gap-1 font-mono`}>
                  <TrendingUp className="h-3.5 w-3.5" />
                  +{item.growthVelocity}%
                </span>
              </div>

              {/* Topic Title */}
              <h4 className="mt-3.5 text-sm font-bold text-white group-hover:text-violet-305 hover:text-violet-300 transition-colors">
                {item.topic}
              </h4>
              <p className="mt-1.5 text-[11px] text-zinc-400 leading-relaxed min-h-[44px]">
                {item.description}
              </p>

              {/* Futuristic Metrics Row */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 border-t border-zinc-800 pt-3 text-[10px] font-sans">
                <div>
                  <span className="text-zinc-500 uppercase block tracking-wider font-medium">Competition Level</span>
                  <span className={`inline-block mt-0.5 rounded px-1.5 py-0.5 border text-[9px] font-semibold uppercase ${compColor}`}>
                    {item.competitionLevel}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase block tracking-wider font-medium">Est. Saturation</span>
                  <span className="mt-0.5 block font-mono text-white font-medium">
                    {item.predictedSaturation}% <span className="text-zinc-500 text-[9px]">(Early)</span>
                  </span>
                </div>
              </div>

              {/* Core Opportunity score indicator footer */}
              <div className="mt-4.5 flex items-center justify-between border-t border-zinc-800 pt-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800">
                    <Flame className="h-4 w-4 text-amber-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-405 text-zinc-500 block font-mono lowercase">OPPORTUNITY INDEX</span>
                    <span className="text-xs font-mono font-bold text-white">{item.opportunityScore}/100</span>
                  </div>
                </div>

                <button
                  onClick={() => onActionClick?.(item)}
                  className="rounded-lg bg-violet-605 bg-violet-600 hover:bg-violet-500 px-3 py-1.5 text-[11px] font-bold text-white transition-all shadow-md active:scale-95 flex items-center gap-1 cursor-pointer"
                >
                  <Zap className="h-3 w-3" /> Execute Idea
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
