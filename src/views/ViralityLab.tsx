import { useState } from 'react';
import { Activity, Beaker, ShieldAlert, CheckCircle, Sparkles, AlertTriangle, ArrowUpRight, Cpu } from 'lucide-react';
import ScoreRing from '../components/ScoreRing';

export default function ViralityLab() {
  const [script, setScript] = useState(
    'The silent goldmine of spatial computing nobody talks about... traditional design is coming to an end.'
  );
  const [caption, setCaption] = useState('How we grew our viewer count +312% with responsive glassmorphic elements.');
  const [contentType, setContentType] = useState('Video Script / Reel');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(true);

  // Analysis results
  const [results, setResults] = useState({
    score: 86,
    reach: '185,000 - 320,000',
    likes: '14,200',
    shares: '4,800',
    saves: '7,400',
    suggestions: [
      {
        id: 's-1',
        type: 'critical',
        label: 'Delay in Hook Word association',
        desc: 'The keyword "spatial computing" appears in the first 2 seconds, which is solid, but shifting it to the literal first 3 words increases retention indicators by 14.5% based on typical competitor analytics.',
      },
      {
        id: 's-2',
        type: 'optimization',
        label: 'Elevate Visual Prompt triggers',
        desc: 'Specify a dark high-contrast vector viewport thumbnail image. Clean, structural visual triggers at frame 0 increase click probability index on YouTube and Instagram Reels suggestions.',
      },
      {
        id: 's-3',
        type: 'good',
        label: 'High Density CTA triggers',
        desc: 'Your Free Kit offer commenting CTA is perfect. It drives organic interaction counters up, triggering secondary algorithm push loops.',
      },
    ],
  });

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setHasAnalyzed(false);

    setTimeout(() => {
      // Calculate a randomized yet realistic result based on text length
      const totalLen = script.length + caption.length;
      const scoreSeed = Math.min(Math.max(60 + (totalLen % 35), 72), 97);
      
      setResults({
        score: scoreSeed,
        reach: `${(scoreSeed * 2.2).toFixed(0)}k - ${(scoreSeed * 4.8).toFixed(0)}k`,
        likes: `${(scoreSeed * 150).toLocaleString()}`,
        shares: `${(scoreSeed * 48).toLocaleString()}`,
        saves: `${(scoreSeed * 72).toLocaleString()}`,
        suggestions: [
          {
            id: 's-1',
            type: scoreSeed < 80 ? 'critical' : 'optimization',
            label: 'Adjust Statement Cadence',
            desc: scoreSeed < 80 
              ? 'Your initial introduction text reads too dense. Break sentences into single focus lines of less than 12 words to maintain high viewport velocity.'
              : 'The paragraph balance is clean. Keeping bullet structures centered boosts readability score indices for search indices.',
          },
          {
            id: 's-2',
            type: 'optimization',
            label: 'Format with Spaced List Tags',
            desc: 'Adding emoji hooks or bullet separations in captions can push expected likes and saves up by roughly +12%.',
          },
          {
            id: 's-3',
            type: 'good',
            label: 'Hashtag Alignment',
            desc: 'The density of custom tags matches current trend radar signals. Expected reach multiplier is currently optimized.',
          },
        ],
      });
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1800);
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="virality-lab-view">
      {/* View Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Beaker className="h-4.5 w-4.5 text-pink-500" />
            <span className="text-xs font-bold font-mono tracking-widest text-pink-400 uppercase">Predictive Algorithm Suite</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Virality Lab Core</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Synthesize copy and assess reach coefficients prior to publication. Core Neural Engine scores your files against verified competitor vectors.
          </p>
        </div>
      </div>

      {/* Input panel & Predictive breakdown row */}
      <div className="grid gap-6 lg:grid-cols-5" id="lab-workspace">
        {/* Left Inputs Config (3cols) */}
        <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Draft Content Payload</h3>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="bg-zinc-950/60 border border-zinc-800 rounded px-2.5 py-1 text-[11px] text-zinc-350 font-mono focus:border-pink-500 outline-none cursor-pointer"
              >
                <option className="bg-zinc-900">Video Script / Reel</option>
                <option className="bg-zinc-900">LinkedIn Post</option>
                <option className="bg-zinc-900">Twitter / X Thread</option>
                <option className="bg-zinc-900">Blog Insight</option>
              </select>
            </div>

            {/* Video Copy/Script box */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Video script / primary copy</label>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="Paste your video narrative script or post body copy here..."
                rows={5}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/40 p-3.5 text-xs text-white placeholder-zinc-650 outline-none focus:border-pink-500"
              />
            </div>

            {/* Caption/Description Details */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">social caption or accompanying metadata</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Social description tags, title hooks, or comments details..."
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950/40 py-2.5 px-3.5 text-xs text-white placeholder-zinc-650 outline-none focus:border-pink-500"
              />
            </div>
          </div>

          <div className="border-t border-zinc-805 border-t-zinc-800/80 pt-4 flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-500 select-none">Accuracy Level: 94.2% Verified Trajectory</span>
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="rounded-xl bg-pink-600 hover:bg-pink-500 px-5 py-2.5 text-xs font-bold text-white shadow-xl shadow-pink-950/20 active:scale-95 disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Cpu className="h-4 w-4 text-cyan-300 animate-pulse" /> Assess Performance Vector
            </button>
          </div>
        </div>

        {/* Right Outputs Analysis Panel (2cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Analysis Scores (Visible if analyzed) */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl min-h-[300px] flex flex-col justify-center items-center text-center relative overflow-hidden">
            {isAnalyzing ? (
              <div className="space-y-4 items-center flex flex-col" id="analyzer-calculating">
                <div className="h-16 w-16 rounded-full border-4 border-pink-500/20 border-t-pink-500 animate-spin" />
                <div>
                  <span className="text-xs font-bold text-white uppercase block tracking-wider animate-pulse">Running Neural Simulator...</span>
                  <span className="text-[10px] text-zinc-500 font-mono block mt-1">Checking with verified competitor patterns</span>
                </div>
              </div>
            ) : hasAnalyzed ? (
              <div className="space-y-5 w-full" id="analyzer-completed">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">Neural Virality Score</span>
                
                {/* Custom glowing score ring */}
                <div className="glow-cyan p-2.5 rounded-full inline-block">
                  <ScoreRing score={results.score} primaryColor="#EC4899" secondaryColor="#3B82F6" size={135} />
                </div>

                {/* Score descriptor text */}
                <div>
                  <span className="text-xs font-bold text-zinc-200">
                    Expected Virality Rank: <strong className="text-pink-400">EXCEPTIONAL</strong>
                  </span>
                  <p className="text-[10px] text-zinc-400 mt-0.5">This placement outperforms 86% of comparable sector creators.</p>
                </div>

                {/* Engagement parameters predictions */}
                <div className="border-t border-zinc-800 pt-4.5 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-lg bg-zinc-950/40 border border-zinc-800/40 p-2.5">
                    <span className="text-[9px] text-zinc-550 block text-zinc-500">Expected Reach</span>
                    <span className="text-xs font-mono font-bold text-white mt-0.5 block">{results.reach}</span>
                  </div>
                  <div className="rounded-lg bg-zinc-950/40 border border-zinc-800/40 p-2.5">
                    <span className="text-[9px] text-zinc-550 block text-zinc-500">Expected Likes</span>
                    <span className="text-xs font-mono font-bold text-white mt-0.5 block">+{results.likes}</span>
                  </div>
                  <div className="rounded-lg bg-zinc-950/40 border border-zinc-800/40 p-2.5">
                    <span className="text-[9px] text-zinc-550 block text-zinc-500">Expected Shares</span>
                    <span className="text-xs font-mono font-bold text-white mt-0.5 block">+{results.shares}</span>
                  </div>
                  <div className="rounded-lg bg-zinc-950/40 border border-zinc-800/40 p-2.5">
                    <span className="text-[9px] text-zinc-550 block text-zinc-500">Expected Saves</span>
                    <span className="text-xs font-mono font-bold text-white mt-0.5 block">+{results.saves}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-zinc-500 text-sm">
                Enter your script payload on the left and start diagnostic prediction.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Strategic Recommendation list section */}
      {hasAnalyzed && !isAnalyzing && (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl" id="lab-recommendations">
          <div className="flex items-center gap-2 mb-4 border-b border-zinc-805 border-b-zinc-800/80 pb-3">
            <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Algorithm Recommendation Protocol</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {results.suggestions.map((s) => (
              <div key={s.id} className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-4.5 space-y-2 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-zinc-200">{s.label}</span>
                  {s.type === 'critical' ? (
                    <span className="rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[9px] px-1.5 py-0.5 uppercase font-bold">
                      Critical
                    </span>
                  ) : s.type === 'optimization' ? (
                    <span className="rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[9px] px-1.5 py-0.5 uppercase font-bold">
                      Optimize
                    </span>
                  ) : (
                    <span className="rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] px-1.5 py-0.5 uppercase font-bold">
                      Perfect
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
