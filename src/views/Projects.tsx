import { useState } from 'react';
import { FolderDot, Plus, Search, Filter, Globe, ChevronRight, Activity, Trash, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  projects: ProjectItem[];
  onDeleteProject: (id: string) => void;
  onSelectProjectWorkspace: (project: ProjectItem) => void;
}

export default function Projects({
  projects,
  onDeleteProject,
  onSelectProjectWorkspace,
}: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Report' | 'Content' | 'Analysis'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleFreshSandbox = () => {
    setSaveStatus('Initializing fresh virtual sandbox environment...');
    setTimeout(() => {
      setSaveStatus(null);
    }, 4000);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesFilter = selectedFilter === 'All' || p.type === selectedFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in font-sans relative" id="projects-view">
      {/* Transient Save Status Banner */}
      {saveStatus && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-zinc-900 border border-violet-500/30 px-3.5 py-2.5 text-xs text-violet-300 shadow-2xl animate-slide-in">
          <Sparkles className="h-4 w-4 animate-spin text-violet-400" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <FolderDot className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold font-mono tracking-widest text-violet-400 uppercase">Interactive Workspace Registry</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Creator Workspace Projects</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Browse and retrieve previous AI script drafts, performance scores, trend breakdowns, and target campaign parameters.
          </p>
        </div>
        <button
          onClick={handleFreshSandbox}
          className="rounded-xl bg-violet-600 hover:bg-violet-500 px-4 py-2 text-xs font-bold text-white transition-all hover:scale-[1.01] active:scale-95 flex items-center gap-1.5 self-start cursor-pointer"
        >
          <Plus className="h-4 w-4" /> Fresh Sandbox
        </button>
      </div>

      {/* Workspace Action Filter Panel */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between bg-zinc-900 p-4 rounded-xl border border-zinc-800">
        {/* Search bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute top-2.5 left-3.5 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search workspaces (e.g. 'Stripe', 'MKBHD')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950/40 py-2 pr-4 pl-10 text-xs text-zinc-100 placeholder-zinc-600 outline-none transition focus:border-violet-600 focus:bg-zinc-900"
          />
        </div>

        {/* Filter Selection Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 animate-fade-in">
          {(['All', 'Report', 'Content', 'Analysis'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-violet-600 text-white shadow-xl'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {filter === 'All' ? 'All Areas' : filter}s
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Workspaces */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" id="projects-grid">
        {filteredProjects.map((p) => {
          const typeColor =
            p.type === 'Report'
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : p.type === 'Content'
              ? 'bg-violet-500/10 text-violet-400 border-violet-500/20'
              : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';

          return (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-800/10 shadow-lg flex flex-col justify-between"
              id={`workspace-card-${p.id}`}
            >
              {/* Card Meta Row */}
              <div>
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-2.5 py-0.5 text-[9px] font-mono uppercase font-bold tracking-wide ${typeColor}`}>
                    {p.type}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono select-none">{p.updatedAt}</span>
                </div>

                {/* Title and summary */}
                <h4 className="mt-4 text-sm font-bold text-white group-hover:text-violet-300 transition-colors tracking-tight leading-snug">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-[11px] text-zinc-400 leading-relaxed">
                  {p.summary}
                </p>
              </div>

              {/* Footer Section */}
              <div className="mt-4.5 border-t border-zinc-800 pt-3.5 flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-mono font-bold flex items-center gap-1 select-none">
                  <Activity className="h-3 w-3 text-emerald-400" />
                  {p.stats}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onDeleteProject(p.id)}
                    className="rounded bg-zinc-950/80 p-1.5 text-zinc-600 hover:bg-rose-950/20 hover:text-rose-450 hover:text-rose-400 transition-colors border border-zinc-800/60 cursor-pointer"
                    title="Delete Draft"
                  >
                    <Trash className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => onSelectProjectWorkspace(p)}
                    className="rounded bg-violet-950/30 text-violet-400 hover:text-white hover:bg-violet-600 transition-all px-2.5 py-1 text-[11px] font-bold border border-violet-900/40 flex items-center gap-0.5 cursor-pointer"
                  >
                    Open <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-12 rounded-xl border border-dashed border-zinc-800 bg-zinc-900/35" id="empty-projects">
            <span className="text-zinc-500 text-xs block">No saved project workspaces found under chosen parameters.</span>
          </div>
        )}
      </div>
    </div>
  );
}
