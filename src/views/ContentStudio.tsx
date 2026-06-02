import { useState } from 'react';
import { Video, Copy, RotateCw, Check, Sparkles, Send, FileText, Share2, Clipboard, Cpu } from 'lucide-react';

interface ContentStudioProps {
  initialTopic?: string;
  onSaveProject?: (project: { title: string; type: 'Content'; summary: string; stats: string }) => void;
}

export default function ContentStudio({ initialTopic = '', onSaveProject }: ContentStudioProps) {
  const [topic, setTopic] = useState(initialTopic);
  const [platform, setPlatform] = useState('TikTok / Reels');
  const [audience, setAudience] = useState('Tech Founders & Solopreneurs');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState(false);

  // Editable outputs states
  const [outputs, setOutputs] = useState({
    hook: 'The silent goldmine of spatial computing nobody talks about...',
    script: '👉 [0:00 - 0:03]: (Hook) "The spatial design software market is growing +312% right now, but there’s a massive catch..."\n\n👉 [0:03 - 0:15]: (Visual - screen capture of glassmorphic Figma layout custom code) "This is not standard design workflow anymore. Traditional vector elements are dead. Creators are switching to spatial widgets that adapt dynamically. Here’s why..."\n\n👉 [0:15 - 0:28]: (Insight) "Unlike flat screen apps, depth layer design requires real-time physics and ambient shadows. And because there are so few creators showing how to build them – competition is practically zero."\n\n👉 [0:28 - 0:40]: (Demonstration) "You don’t even need deep WebGL coding skills. Just stack a transparent canvas, set custom z-buffers, and let the shadow casting engine do the heavy lifting."',
    cta: '💥 Comment "SPATIAL" and I’ll send you my private glassmorphic component layout kit for free.',
    linkedin: 'Static layouts are officially a relic of the past.\n\nOver the last 72 hours, Spatial Design has surged +312% in early developer queries. Flat vector Figma pages are rapidly giving way to deep glassmorphic layers.\n\nBut here’s the developer’s secret: You don’t need to be a WebGL or Three.js wizard to capitalize on this.\n\nBy leveraging standard React state and simple z-index shadow offsets, you can craft responsive spatial widgets this afternoon.\n\nI’ve spent the week reverse-engineering the cleanest spatial layers on the web.\n\nWant to see exactly how to build them? Drop a comment below and I will send the boilerplate straight to your inbox.',
    instagram: 'The internet is officially going three-dimensional. Spatial Design and UI glassmorphism are growing +312% this week. Here is exactly why you need to start building spatial widgets before the market saturates. Learn depth hierarchies, parallax physics, and standard shadow layering. Save this guide for your next build sprint! #SpatialUI #Glassmorphism #IndieHackers',
    hashtags: '#SpatialComputing #FramerMotion #UIdesign #WebDev #Solopreneurs #SaaSDesign',
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation loop
    setTimeout(() => {
      // Create some dynamic outputs based on topic input to feel high fidelity
      const cleanTopic = topic || 'Modern Web Engineering';
      setOutputs({
        hook: `How to master ${cleanTopic} before everyone else discovers it...`,
        script: `🎥 [0:00 - 0:05] (Hook): "Everyone is trying standard ${cleanTopic} strategies, but 99% are missing the main loophole that triggers virality..."\n\n🎥 [0:05 - 0:20] (Visual / Action): "This week, interest index surged. Here is the exact setup. Look at how easy it is to spin up a server-side state in under five lines..."\n\n🎥 [0:20 - 0:35] (Breakdown): "Instead of standard API triggers, we hook direct real-time streams. This saves 80% database overhead and feels instant to the user."\n\n🎥 [0:35 - 0:50] (CTA): "This boilerplate is completely open source."`,
        cta: `👉 Save this script now and comment "${cleanTopic.slice(0, 5).toUpperCase()}" to get the complete repository immediately.`,
        linkedin: `The landscape of ${cleanTopic} has completely shifted.\n\nWe’ve seen custom indicators spike significantly, highlighting massive user frustration with standard platforms.\n\nEarlier today, we booted a secure stream engine to bypass these limitations entirely.\n\nHere’s what we discovered:\n1. Server-side signals decrease latencies by 4x.\n2. User retention scores jump by 24%.\n\nDo not build another legacy wrapper. Move to fluid real-time states.\n\nHave you started restructuring yet?`,
        instagram: `Static frameworks are dead. Learn the new setup for ${cleanTopic} now. Realtime streams reduce database costs by 80% while keeping content performance highly viral. Save this post for your upcoming sprints! #${cleanTopic.replace(/\s+/g, '')} #SaaSBuilder`,
        hashtags: `#${cleanTopic.replace(/\s+/g, '')} #CreatorGrowth #SaaSMarketing #DeveloperTools #ReactVite #IndieDevelopers`,
      });
      setIsGenerating(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 1800);
  };

  const handleSaveToProjects = () => {
    if (!onSaveProject) return;
    onSaveProject({
      title: topic ? `Studio: ${topic}` : 'Studio: Spatial Computations Guide',
      type: 'Content',
      summary: `Generated content strategy assets targeting ${audience} on ${platform}.`,
      stats: 'Virality Expected: 91%',
    });
    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 3050);
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans" id="content-studio-view">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold font-mono tracking-widest text-[#818CF8] uppercase">Creative Workspace Suite</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Autonomous Content Studio</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Formulate high-conversion video hooks, structured scripts, and social postings customized for your exact viewer circles.
          </p>
        </div>
      </div>

      {/* Input Configuration Panel */}
      <div className="rounded-xl border border-zinc-805 border-zinc-800 bg-zinc-900 p-5 shadow-xl" id="studio-controls">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">Input Parameters</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Topic Entry */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Core Theme / Trend</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., No-Code Spatial Computing, Solopreneur Sprints"
              className="rounded-lg border border-zinc-800 bg-zinc-950/40 py-2.5 px-3.5 text-xs text-white placeholder-zinc-650 outline-none focus:border-violet-600"
            />
          </div>

          {/* Platform Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Target Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 py-2.5 px-3 mb-0 text-xs text-white outline-none focus:border-violet-600 appearance-none cursor-pointer"
            >
              <option className="bg-zinc-900">TikTok / Reels</option>
              <option className="bg-zinc-900">YouTube Shorts</option>
              <option className="bg-zinc-900">LinkedIn Pulse</option>
              <option className="bg-zinc-900">Twitter / X Thread</option>
              <option className="bg-zinc-900">Full Multi-Channel Suite</option>
            </select>
          </div>

          {/* Audience Selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">Audience Profile</label>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="rounded-lg border border-zinc-800 bg-zinc-900/60 py-2.5 px-3 text-xs text-white outline-none focus:border-violet-600 appearance-none cursor-pointer"
            >
              <option className="bg-zinc-900">Tech Founders & Solopreneurs</option>
              <option className="bg-zinc-900">Figma Designers & Engineers</option>
              <option className="bg-zinc-900">Aspiring Creators & Influencers</option>
              <option className="bg-zinc-900">SaaS Buyers & Executives</option>
              <option className="bg-zinc-900">General Public Consumers</option>
            </select>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-4 relative">
          <p className="text-[10px] text-zinc-500 font-mono">Outputs are optimized based on highest-performing mental hooks.</p>
          <div className="flex gap-2 items-center">
            {saveStatus && (
              <span className="text-xs font-semibold text-emerald-400 font-mono animate-fade-in absolute right-64">
                ✓ Campaign Draft Saved!
              </span>
            )}
            {onSaveProject && (
              <button
                onClick={handleSaveToProjects}
                className="rounded-lg border border-zinc-800 bg-zinc-950/20 hover:bg-zinc-850 px-4 py-2 text-xs font-semibold text-zinc-350 hover:text-white transition-colors cursor-pointer"
                disabled={isGenerating}
              >
                Save Draft
              </button>
            )}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-5 py-2.5 text-xs font-bold text-white transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 flex items-center gap-2 glow-purple cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="h-4 w-4 animate-spin" /> Composing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 text-cyan-300" /> Synthesize Campaign
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Output Creative Cards Layout */}
      {isGenerating ? (
        /* Loading Skeletons */
        <div className="grid gap-6 md:grid-cols-2" id="studio-skeleton-load">
          {[1, 2, 4].map((i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-4 animate-pulse">
              <div className="h-4 w-32 bg-zinc-800 rounded" />
              <div className="h-2 w-full bg-zinc-800 rounded" />
              <div className="h-16 w-full bg-zinc-800/50 rounded" />
              <div className="h-2 w-3/4 bg-zinc-800 rounded" />
            </div>
          ))}
        </div>
      ) : (
        /* Actual Beautiful Output Cards */
        <div className="grid gap-5 md:grid-cols-2" id="studio-outputs">
          {/* Card 1: Main Audio / Video Hook */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-3 relative group shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Target Video Hook</h4>
              </div>
              <button
                onClick={() => copyToClipboard(outputs.hook, 'hook')}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy Hook"
              >
                {copiedField === 'hook' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <textarea
              value={outputs.hook}
              onChange={(e) => setOutputs({ ...outputs, hook: e.target.value })}
              className="w-full bg-transparent text-xs text-amber-100 font-bold border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[50px] pt-1"
            />
          </div>

          {/* Card 2: Call To Action CTA */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-3 relative group shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Call To Action (CTA)</h4>
              </div>
              <button
                onClick={() => copyToClipboard(outputs.cta, 'cta')}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy CTA"
              >
                {copiedField === 'cta' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <textarea
              value={outputs.cta}
              onChange={(e) => setOutputs({ ...outputs, cta: e.target.value })}
              className="w-full bg-transparent text-xs text-cyan-200 font-semibold border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[50px] pt-1"
            />
          </div>

          {/* Card 3: Deep Video Script Breakdown (Span 2 for detail) */}
          <div className="col-span-full rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-violet-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">A-Roll & B-Roll Video Script (Platform Optimized)</h4>
              </div>
              <button
                onClick={() => copyToClipboard(outputs.script, 'script')}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy Script"
              >
                {copiedField === 'script' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <textarea
              value={outputs.script}
              onChange={(e) => setOutputs({ ...outputs, script: e.target.value })}
              className="w-full bg-transparent text-xs text-zinc-300 font-mono border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[140px] pt-1"
              rows={8}
            />
          </div>

          {/* Card 4: LinkedIn Structured Post */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-emerald-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">LinkedIn Growth Post</h4>
              </div>
              <button
                onClick={() => copyToClipboard(outputs.linkedin, 'linkedin')}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy Post"
              >
                {copiedField === 'linkedin' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <textarea
              value={outputs.linkedin}
              onChange={(e) => setOutputs({ ...outputs, linkedin: e.target.value })}
              className="w-full bg-transparent text-xs text-zinc-300 border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[130px] pt-1"
              rows={7}
            />
          </div>

          {/* Card 5: Instagram Caption & Tags */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 space-y-3 shadow-lg">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2">
                <Share2 className="h-4 w-4 text-indigo-400" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">Instagram Accent Caption</h4>
              </div>
              <button
                onClick={() => copyToClipboard(outputs.instagram + '\n' + outputs.hashtags, 'instagram')}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                title="Copy Caption"
              >
                {copiedField === 'instagram' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <textarea
              value={outputs.instagram}
              onChange={(e) => setOutputs({ ...outputs, instagram: e.target.value })}
              className="w-full bg-transparent text-xs text-zinc-300 border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[80px] pt-1"
              rows={4}
            />
            <div className="border-t border-zinc-800/60 pt-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Hashtags</span>
              <textarea
                value={outputs.hashtags}
                onChange={(e) => setOutputs({ ...outputs, hashtags: e.target.value })}
                className="w-full bg-transparent text-[11px] text-[#A78BFA] font-mono border-none outline-none resize-none focus:ring-0 leading-relaxed min-h-[40px]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
