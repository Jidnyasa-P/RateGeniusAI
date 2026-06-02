import { useState } from 'react';
import {
  TrendingUp,
  Award,
  Zap,
  Target,
  Clock,
  ArrowUpRight,
  Flame,
  ArrowDownRight,
  Sparkles
} from 'lucide-react';
import { UserProfile, OpportunityItem } from '../types';
import ScoreRing from '../components/ScoreRing';
import OpportunityRadar from '../components/OpportunityRadar';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface DashboardHomeProps {
  user: UserProfile;
  opportunities: OpportunityItem[];
  onExecuteOpportunity: (item: OpportunityItem) => void;
  onSetView: (view: any) => void;
}

export default function DashboardHome({
  user,
  opportunities,
  onExecuteOpportunity,
  onSetView,
}: DashboardHomeProps) {
  // Mock weekly performance stats over time
  const growthChartData = [
    { date: 'May 05', impressions: 45000, engagement: 2900, brandInquiries: 12 },
    { date: 'May 10', impressions: 58000, engagement: 4100, brandInquiries: 14 },
    { date: 'May 15', impressions: 52000, engagement: 3800, brandInquiries: 19 },
    { date: 'May 20', impressions: 78000, engagement: 5600, brandInquiries: 22 },
    { date: 'May 25', impressions: 95000, engagement: 7400, brandInquiries: 28 },
    { date: 'May 30', impressions: 124000, engagement: 9800, brandInquiries: 35 },
  ];

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="dashboard-home-view">
      {/* Top Banner Accent */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-r from-violet-950/20 to-zinc-900/40 p-6 md:p-8" id="welcome-gradient-banner">
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-12 h-20 w-20 rounded-full bg-cyan-400/5 blur-2xl" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-4.5 w-4.5 text-violet-400 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#A78BFA] uppercase block">Platform Health: Excellent</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Elevating your content vectors, Adrian.
          </h2>
          <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed">
            Your content virality score increased by <strong className="text-white">+8.2%</strong> this cycle. There are <strong className="text-violet-300">5 high-velocity opportunities</strong> awaiting deployment.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button 
              onClick={() => onSetView('trend-radar')}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white transition hover:scale-[1.02] active:scale-95"
            >
              Analyze Live Trends
            </button>
            <button 
              onClick={() => onSetView('content-studio')}
              className="rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
            >
              Open Studio Workspace
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Score Cards Row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" id="score-ring-row">
        {/* Card 1: Creator Score */}
        <div className="rounded-xl border border-zinc-805 bg-zinc-900 p-4.5 flex flex-col items-center justify-between shadow-lg hover:border-zinc-800 transition-colors">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center block mb-2.5">Creator Authority</span>
          <ScoreRing score={user.creatorScore} primaryColor="#7C3AED" secondaryColor="#C084FC" size={105} />
          <div className="mt-3.5 text-center">
            <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center justify-center gap-0.5">
              ▲ +3.4% this wk
            </span>
          </div>
        </div>

        {/* Card 2: Virality score */}
        <div className="rounded-xl border border-zinc-805 bg-zinc-900 p-4.5 flex flex-col items-center justify-between shadow-lg hover:border-zinc-800 transition-colors">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center block mb-2.5">Virality Predict</span>
          <ScoreRing score={user.viralityScore} primaryColor="#EC4899" secondaryColor="#F43F5E" size={105} />
          <div className="mt-3.5 text-center">
            <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center justify-center gap-0.5">
              ▲ +8.2% spike
            </span>
          </div>
        </div>

        {/* Card 3: Brand Match Index */}
        <div className="rounded-xl border border-zinc-805 bg-zinc-900 p-4.5 flex flex-col items-center justify-between shadow-lg hover:border-zinc-800 transition-colors">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center block mb-2.5">Brand Alignment</span>
          <ScoreRing score={user.brandMatchScore} primaryColor="#06B6D4" secondaryColor="#22D3EE" size={105} />
          <div className="mt-3.5 text-center">
            <span className="text-[10px] text-cyan-400 font-mono font-semibold flex items-center justify-center gap-0.5">
              ● Highly Aligned
            </span>
          </div>
        </div>

        {/* Card 4: Growth Index */}
        <div className="rounded-xl border border-zinc-805 bg-zinc-900 p-4.5 flex flex-col items-center justify-between shadow-lg hover:border-zinc-800 transition-colors">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center block mb-2.5">Growth Velocity</span>
          <ScoreRing score={user.growthPotential} primaryColor="#F59E0B" secondaryColor="#10B981" size={105} />
          <div className="mt-3.5 text-center">
            <span className="text-[10px] text-zinc-500 font-mono flex items-center justify-center gap-0.5">
              Steady pacing
            </span>
          </div>
        </div>

        {/* Card 5: Trend Opportunity Score */}
        <div className="rounded-xl border border-zinc-850 bg-zinc-900 p-4.5 flex flex-col items-center justify-between shadow-lg hover:border-zinc-800 transition-colors">
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center block mb-2.5">Opportunity Index</span>
          <ScoreRing score={user.trendOpportunityScore} primaryColor="#10B981" secondaryColor="#3B82F6" size={105} />
          <div className="mt-3.5 text-center">
            <span className="text-[10px] text-emerald-400 font-mono font-semibold flex items-center justify-center gap-0.5">
              ▲ 2 Hot leads
            </span>
          </div>
        </div>
      </div>

      {/* Visual Analytics Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3" id="charts-and-signals-container">
        {/* Growth Graph */}
        <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl" id="growth-graph-card">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-450 text-zinc-300">Total Organic Impressions Vector</h3>
              <p className="text-xs text-zinc-500 mt-0.5">Aggregated content reach across TikTok, YouTube, and X handles.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-violet-600" />
                <span>Impressions</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span>Engagement Index</span>
              </div>
            </div>
          </div>

          <div className="h-72 w-full" id="growth-trajectory-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthChartData}>
                <defs>
                  <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="cyanGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="date" stroke="#71717a" fontSize={10} tickLine={false} />
                <YAxis stroke="#71717a" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0d0d0f', borderColor: '#27272a', borderRadius: '12px' }}
                  labelStyle={{ color: '#a1a1aa', fontSize: '10px' }}
                  itemStyle={{ fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="impressions" stroke="#7C3AED" strokeWidth={2.5} fillOpacity={1} fill="url(#purpleGlow)" name="Impressions" />
                <Area type="monotone" dataKey="engagement" stroke="#06B6D4" strokeWidth={1.5} fillOpacity={1} fill="url(#cyanGlow)" name="Engagement" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Signals Panel */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl flex flex-col justify-between" id="weekly-overview-card">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Weekly Signals Summary</h3>
            <div className="space-y-3.5">
              {/* Metric Row 1 */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded bg-zinc-800 text-violet-400">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block leading-none">Authority Rating</span>
                    <span className="text-[9px] text-zinc-500">Tier A Global Rank</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white block">92.4</span>
                  <span className="text-[9px] text-emerald-400 font-semibold font-mono">▲ +1.5%</span>
                </div>
              </div>

              {/* Metric Row 2 */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded bg-zinc-800 text-cyan-400">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block leading-none">Peak Velocity</span>
                    <span className="text-[9px] text-zinc-500">Fastest rising trend interaction</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white block">312%</span>
                  <span className="text-[9px] text-emerald-400 font-semibold font-mono">▲ Critical</span>
                </div>
              </div>

              {/* Metric Row 3 */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded bg-zinc-800 text-amber-500">
                    <Target className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block leading-none">Sponsor Interest</span>
                    <span className="text-[9px] text-zinc-500">Active inbound inquiries</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white block">35 Direct</span>
                  <span className="text-[9px] text-emerald-400 font-semibold font-mono">▲ +25%</span>
                </div>
              </div>

              {/* Metric Row 4 */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded bg-zinc-800 text-zinc-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block leading-none">Consistency Metrics</span>
                    <span className="text-[9px] text-zinc-500">Average weekly publications</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-white block">4.8 / wk</span>
                  <span className="text-[9px] text-zinc-500 font-mono">Stable</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/10 p-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-amber-500 animate-pulse" />
              <span className="text-[11px] text-zinc-400 font-medium select-none">Audience Engagement Rank</span>
            </div>
            <span className="text-xs font-mono font-semibold text-amber-500">TOP 1.2% Globally</span>
          </div>
        </div>
      </div>

      {/* Main Focus: Opportunity Radar Section */}
      <OpportunityRadar
        opportunities={opportunities}
        onActionClick={onExecuteOpportunity}
      />
    </div>
  );
}
