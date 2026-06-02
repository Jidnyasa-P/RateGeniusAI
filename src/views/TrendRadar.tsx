import { useState } from 'react';
import { Search, Radio, ChevronRight, TrendingUp, Sparkles, Filter, Globe } from 'lucide-react';
import { TrendTopic } from '../types';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

interface TrendRadarProps {
  trends: TrendTopic[];
  onSelectTrend: (trend: TrendTopic) => void;
}

export default function TrendRadar({ trends, onSelectTrend }: TrendRadarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Tech', 'Startups', 'Business', 'Finance', 'Creator Economy'];

  const filteredTrends = trends.filter((item) => {
    const matchesSearch = item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.insightSummary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="trend-radar-view">
      {/* Editorial Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-805 border-b-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="h-5 w-5 text-violet-500 animate-pulse" />
            <span className="text-xs font-bold font-mono tracking-widest text-violet-400 uppercase">Live Index Signals</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Autonomous Trend Hub</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Realtime queries scoring across primary content catalogs, measuring search trajectory & virality index.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 self-start">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono text-emerald-400 font-medium">SYNCED WITH TIKTOK & YOUTUBE API</span>
        </div>
      </div>

      {/* Modern Search & Filters Layout */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-zinc-900 p-4 rounded-xl border border-zinc-800">
        {/* Search Input Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute top-2.5 left-3.5 h-4.5 w-4.5 text-zinc-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search keyphrases (e.g., 'generative ui', 'framer')..."
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950/40 py-2 pr-4 pl-10.5 text-xs text-white placeholder-zinc-500 outline-none transition focus:border-violet-600 focus:bg-zinc-950"
          />
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <div className="flex items-center gap-1 text-zinc-500 font-mono text-[10px] uppercase font-bold mr-1">
            <Filter className="h-3 w-3" />
            <span>Scope</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all border ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-950 border-violet-600 cursor-pointer'
                  : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border-zinc-700/60 cursor-pointer'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Interactive Topic Cards */}
      <div className="grid gap-5 md:grid-cols-2" id="trends-radar-grid">
        {filteredTrends.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectTrend(item)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:scale-[1.01] hover:border-violet-500/35 hover:bg-zinc-900/65 shadow-xl"
            id={`trend-radar-card-${item.id}`}
          >
            {/* Visual Header */}
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-zinc-950 border border-zinc-800 px-2.5 py-0.5 text-[10px] font-mono font-medium text-zinc-400 capitalize">
                {item.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-violet-400 font-semibold uppercase tracking-wider">Growth Index</span>
                <span className="text-sm font-mono font-bold text-white bg-violet-950/40 px-2 py-0.5 rounded border border-violet-800/30">
                  {item.growthScore}
                </span>
              </div>
            </div>

            {/* Card Content Title */}
            <h3 className="mt-4 text-base font-extrabold text-white group-hover:text-violet-300 transition-colors tracking-tight">
              {item.topic}
            </h3>
            
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-2 pb-[2px]">
              {item.insightSummary}
            </p>

            {/* Grid display for search/engagement metrics */}
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-4">
              {/* Sparkline Visual Trajectory */}
              <div>
                <span className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider">Interest Vector</span>
                <div className="h-10 w-full mt-1 bg-zinc-950/40 rounded border border-zinc-800/40 overflow-hidden" id={`recharts-sparkline-${item.id}`}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={item.sparklineData}>
                      <defs>
                        <linearGradient id={`gradSpark-${item.id}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#8B5CF6" strokeWidth={1.5} fillOpacity={1} fill={`url(#gradSpark-${item.id})`} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Engagement Potential percentage score layout */}
              <div className="flex flex-col justify-end">
                <div className="flex items-center justify-between text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">
                  <span>Viral Potential</span>
                  <span className="font-mono text-cyan-400 font-bold">{item.engagementPotential}%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" 
                    style={{ width: `${item.engagementPotential}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Keywords indicator list */}
            <div className="mt-4 flex flex-wrap gap-1">
              {item.keywords.slice(0, 3).map((kw) => (
                <span key={kw} className="rounded bg-zinc-850 px-2 py-0.5 text-[9px] font-mono text-zinc-500 border border-zinc-800/10">
                  #{kw.replace(' ', '')}
                </span>
              ))}
            </div>

            {/* Subtle action cue at edge */}
            <div className="absolute bottom-4 right-4 text-zinc-650 text-zinc-500 group-hover:text-violet-400 transition-colors">
              <ChevronRight className="h-4.5 w-4.5" />
            </div>
          </div>
        ))}

        {filteredTrends.length === 0 && (
          <div className="col-span-2 text-center py-12 rounded-xl border border-dashed border-zinc-800" id="empty-trends">
            <span className="text-zinc-500 text-sm block">No trend matches current category/search criteria.</span>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
