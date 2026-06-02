import { useState } from 'react';
import { UserSearch, Search, ShieldCheck, TrendingUp, Users, RefreshCw, BarChart2, Star } from 'lucide-react';
import { InfluencerProfile } from '../types';
import { mockInfluencers } from '../data/mockData';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function InfluencerIntelligence() {
  const [searchHandle, setSearchHandle] = useState('@adriansterling');
  const [selectedInfluencer, setSelectedInfluencer] = useState<InfluencerProfile>(
    mockInfluencers['@adriansterling']
  );

  const handleSearch = () => {
    const formatted = searchHandle.trim().startsWith('@') ? searchHandle.trim() : `@${searchHandle.trim()}`;
    const found = mockInfluencers[formatted.toLowerCase()];
    if (found) {
      setSelectedInfluencer(found);
    } else {
      // Return a dynamic mock profile if they search a custom name to feel highly responsive!
      const capitalized = searchHandle.replace('@', '');
      setSelectedInfluencer({
        id: `m-dyn-${Date.now()}`,
        name: capitalized.charAt(0).toUpperCase() + capitalized.slice(1),
        handle: formatted,
        avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80',
        category: 'Tech Enthusiast & Growth Strategist',
        followers: '85,000',
        authenticityScore: 88,
        engagementScore: 5.2,
        growthPotential: 75,
        audienceQuality: 82,
        consistencyScore: 90,
        demographics: [
          { segment: 'United States', percentage: 40 },
          { segment: 'United Kingdom', percentage: 22 },
          { segment: 'Others', percentage: 38 },
        ],
        growthStats: [
          { date: 'Jan', followers: 71000, engagement: 4.8 },
          { date: 'Feb', followers: 74000, engagement: 4.9 },
          { date: 'Mar', followers: 77000, engagement: 5.0 },
          { date: 'Apr', followers: 81000, engagement: 5.1 },
          { date: 'May', followers: 85000, engagement: 5.2 },
        ],
      });
    }
  };

  const trendingHandles = ['@adriansterling', '@marquesbrownlee', '@linustech', '@rowancheung'];

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="influencer-intel-view">
      {/* View Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <UserSearch className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold font-mono tracking-widest text-violet-400 uppercase">Enterprise Audit Workspace</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Creator Intelligence Auditing</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Audit creator metrics, verify community interaction indexes, and review historical audience trajectory analytics.
          </p>
        </div>
      </div>

      {/* Profile Selector & Search Row */}
      <div className="grid gap-4 md:grid-cols-3 bg-zinc-900 p-4 rounded-xl border border-zinc-800 items-center">
        {/* Left Search Bar Form */}
        <div className="relative md:col-span-2">
          <Search className="absolute top-2.5 left-3.5 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Review creator handle (e.g. '@marquesbrownlee', '@rowancheung')"
            value={searchHandle}
            onChange={(e) => setSearchTermAndSync(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950/40 py-2 pr-20 pl-10 text-xs text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-violet-600 focus:bg-zinc-900"
          />
          <button
            onClick={handleSearch}
            className="absolute right-1.5 top-1.5 rounded bg-violet-600 hover:bg-violet-500 px-3 py-1 text-[11px] font-bold text-white transition-all shadow cursor-pointer"
          >
            Run Audit
          </button>
        </div>

        {/* Right Preset Handles Pills */}
        <div className="flex items-center flex-wrap gap-1 md:justify-end">
          <span className="text-[9px] text-zinc-500 font-mono font-bold mr-1 block uppercase">Bookmarks:</span>
          {trendingHandles.map((handle) => (
            <button
               key={handle}
              onClick={() => {
                setSearchHandle(handle);
                setSelectedInfluencer(mockInfluencers[handle]);
              }}
              className={`rounded px-2.5 py-1 text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                selectedInfluencer.handle === handle
                  ? 'bg-violet-950/40 text-violet-300 border border-violet-800'
                  : 'bg-zinc-950 border border-zinc-800/80 hover:bg-zinc-800/50 text-zinc-400 hover:text-white'
              }`}
            >
              {handle.replace('@', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Creator Analytical Workspace Grid */}
      <div className="grid gap-6 lg:grid-cols-3" id="influencer-workspace-panel">
        {/* Profile Card & Demographics */}
        <div className="space-y-5">
          {/* Main Visual Profile */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-violet-600/5 blur-2xl" />
            <div className="flex items-center gap-4">
              <img
                src={selectedInfluencer.avatar}
                alt={selectedInfluencer.name}
                className="h-14 w-14 rounded-xl object-cover ring-2 ring-zinc-805 ring-zinc-800"
              />
              <div>
                <h4 className="text-sm font-extrabold text-white">{selectedInfluencer.name}</h4>
                <p className="text-xs font-mono text-violet-400 mt-0.5">{selectedInfluencer.handle}</p>
                <span className="inline-block mt-1.5 rounded bg-zinc-950 border border-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                  {selectedInfluencer.category}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-800/80 pt-4.5 text-center">
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-bold block">Audited Follows</span>
                <span className="text-base font-mono font-bold text-white mt-0.5 block">{selectedInfluencer.followers}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-zinc-500 font-bold block">Community Engagement</span>
                <span className="text-base font-mono font-bold text-cyan-400 mt-0.5 block">{selectedInfluencer.engagementScore}%</span>
              </div>
            </div>
          </div>

          {/* Audience Demographics segment breakdown */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-2.5">
              <Users className="h-4 w-4 text-cyan-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Audience Demographics</h4>
            </div>
            <div className="space-y-3">
              {selectedInfluencer.demographics.map((demo) => (
                <div key={demo.segment} className="text-xs">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-zinc-400">{demo.segment}</span>
                    <span className="font-mono text-cyan-400 font-bold">{demo.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/40">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${demo.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Audit highlight metrics cards (5 of them) & Recharts Graph */}
        <div className="lg:col-span-2 space-y-5">
          {/* Key Metrics Audits list card */}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-5" id="audit-cards-grid">
            {/* Metric 1: Authenticity Score */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center flex flex-col justify-between">
              <span className="text-[9px] uppercase text-zinc-500 font-semibold tracking-wider">Authenticity</span>
              <span className="text-xl font-mono font-extrabold text-violet-400 mt-1 block">{selectedInfluencer.authenticityScore}%</span>
              <span className="text-[8px] text-emerald-400 font-semibold font-mono mt-1">Excellent tier</span>
            </div>

            {/* Metric 2: Engagement Score */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center flex flex-col justify-between">
              <span className="text-[9px] uppercase text-zinc-500 font-semibold tracking-wider">Community Index</span>
              <span className="text-xl font-mono font-extrabold text-cyan-400 mt-1 block">{selectedInfluencer.engagementScore}%</span>
              <span className="text-[8px] text-cyan-400 font-mono mt-1">High conversion</span>
            </div>

            {/* Metric 3: Growth potential */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center flex flex-col justify-between">
              <span className="text-[9px] uppercase text-zinc-500 font-semibold tracking-wider">Growth Velocity</span>
              <span className="text-xl font-mono font-extrabold text-[#F59E0B] mt-1 block">+{selectedInfluencer.growthPotential}%</span>
              <span className="text-[8px] text-amber-500 font-mono mt-1">Accelerating</span>
            </div>

            {/* Metric 4: Audience Quality */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center flex flex-col justify-between">
              <span className="text-[9px] uppercase text-zinc-500 font-semibold tracking-wider">Audience Quality</span>
              <span className="text-xl font-mono font-extrabold text-[#10B981] mt-1 block">{selectedInfluencer.audienceQuality}%</span>
              <span className="text-[8px] text-emerald-500 font-mono mt-1">Verified organic</span>
            </div>

            {/* Metric 5: Consistency index */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-center flex flex-col justify-between col-span-full sm:col-span-1">
              <span className="text-[9px] uppercase text-zinc-500 font-semibold tracking-wider">Consistency</span>
              <span className="text-xl font-mono font-extrabold text-white mt-1 block">{selectedInfluencer.consistencyScore}%</span>
              <span className="text-[8px] text-slate-400 font-mono mt-1">Sustained</span>
            </div>
          </div>

          {/* Historical Growth Trajectory Chart */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl">
            <div className="mb-4 flex items-center gap-2">
              <BarChart2 className="h-4.5 w-4.5 text-violet-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white leading-none">Audited Growth Velocity History (5 Months)</h4>
            </div>

            <div className="h-64 w-full" id="influencer-historical-chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={selectedInfluencer.growthStats}>
                  <defs>
                    <linearGradient id="followerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="date" stroke="#71717a" fontSize={10} tickLine={false} />
                  <YAxis stroke="#71717a" fontSize={10} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '12px' }}
                    labelStyle={{ color: '#a1a1aa', fontSize: '10px' }}
                    itemStyle={{ fontSize: '11px', color: '#f4f4f5' }}
                  />
                  <Area type="monotone" dataKey="followers" stroke="#7C3AED" strokeWidth={2.5} fillOpacity={1} fill="url(#followerGradient)" name="Verified Followers" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function setSearchTermAndSync(text: string) {
    setSearchHandle(text);
  }
}
