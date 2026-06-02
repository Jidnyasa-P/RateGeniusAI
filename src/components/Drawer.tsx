import { X, TrendingUp, Sparkles, Globe, Share2, Users, Flame, Tag } from 'lucide-react';
import { TrendTopic } from '../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DrawerProps {
  topic: TrendTopic | null;
  isOpen: boolean;
  onClose: () => void;
  onStartTemplate?: (topic: string) => void;
}

export default function Drawer({ topic, isOpen, onClose, onStartTemplate }: DrawerProps) {
  if (!topic || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans" id="trend-drawer-wrapper">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        id="trend-drawer-backdrop"
      />

      {/* Sliding Sheet */}
      <div className="absolute inset-y-0 right-0 max-w-full pl-10 flex">
        <div className="w-screen max-w-lg bg-zinc-950 border-l border-zinc-900 flex flex-col h-full shadow-2xl overflow-y-auto glow-combined">
          {/* Header */}
          <div className="p-6 border-b border-zinc-900 bg-zinc-950 sticky top-0 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="rounded bg-violet-500/10 px-2 py-0.5 text-[10px] font-mono text-violet-400 border border-violet-500/20 uppercase">
                {topic.category} ANALYSIS
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400">
                ● LIVE SIGNALS
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg border border-zinc-800 p-1.5 text-zinc-405 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 flex-1">
            {/* Title & Instant Score metrics */}
            <div>
              <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">{topic.topic}</h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{topic.insightSummary}</p>
            </div>

            {/* Grid of Scores */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-zinc-900 bg-zinc-900/40 p-3 text-center">
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Growth index</span>
                <span className="text-lg font-mono font-bold text-violet-400 mt-1 block">
                  {topic.growthScore}%
                </span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-900/40 p-3 text-center">
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Search volume</span>
                <span className="text-lg font-mono font-bold text-cyan-400 mt-1 block">
                  {topic.searchInterest}%
                </span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-900/40 p-3 text-center">
                <span className="text-[10px] text-zinc-500 block uppercase tracking-wider font-semibold">Engagement potential</span>
                <span className="text-lg font-mono font-bold text-amber-500 mt-1 block">
                  {topic.engagementPotential}%
                </span>
              </div>
            </div>

            {/* Recharts Area Chart representing the growth trend */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <TrendingUp className="h-4 w-4 text-violet-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Interest Trajectory (Past 6 Weeks)</span>
              </div>
              <div className="h-40 w-full" id="drawer-sparkline-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={topic.sparklineData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                    <XAxis dataKey="name" stroke="#71717a" fontSize={10} tickLine={false} />
                    <YAxis stroke="#71717a" fontSize={10} tickLine={false} domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '8px' }}
                      labelStyle={{ color: '#a1a1aa', fontSize: '10px' }}
                      itemStyle={{ color: '#FFF', fontSize: '11px' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#7C3AED" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Audience Demographics */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Users className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Demographics Breakdown</span>
              </div>
              <div className="space-y-2.5">
                {topic.demographics.map((demo) => (
                  <div key={demo.age} className="text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="text-zinc-500 select-none">{demo.age} Years</span>
                      <span className="font-mono text-cyan-400 font-semibold">{demo.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/50">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${demo.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Distribution Shares */}
            <div className="rounded-xl border border-zinc-900 bg-zinc-900/20 p-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Share2 className="h-4 w-4 text-indigo-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Platform Signal Distribution</span>
              </div>
              <div className="space-y-3">
                {topic.platforms.map((p) => (
                  <div key={p.name} className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400">{p.name}</span>
                    <div className="flex items-center gap-2 w-32 justify-end">
                      <span className="font-mono text-white text-[11px] font-semibold">{p.share}% Dev</span>
                      <div className="h-1 w-12 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/40">
                        <div className="h-full bg-violet-500 rounded-full" style={{ width: `${p.share}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Keywords */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Tag className="h-4 w-4 text-amber-500" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Target Keywords & Metadata</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {topic.keywords.map((tg) => (
                  <span key={tg} className="rounded bg-zinc-950 border border-zinc-800 px-2.5 py-1 text-[11px] text-zinc-300 font-mono hover:border-violet-500/40 transition-colors cursor-pointer">
                    #{tg.replace(' ', '')}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger Footer */}
          <div className="p-6 border-t border-zinc-900 bg-zinc-950/70 backdrop-blur sticky bottom-0 z-10">
            <button 
              onClick={() => {
                if (onStartTemplate) {
                  onStartTemplate(topic.topic);
                } else {
                  onClose();
                }
              }}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 py-3 text-xs font-bold text-white hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 glow-purple cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-cyan-300 animate-pulse" /> Initialize Studio Scripting Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
