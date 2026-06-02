import {
  LayoutDashboard,
  Radio,
  Video,
  Activity,
  UserSearch,
  Handshake,
  FolderDot,
  Settings,
  X,
  Sparkles,
  Zap
} from 'lucide-react';
import { ViewType, UserProfile } from '../types';

interface SidebarProps {
  user: UserProfile;
  activeView: ViewType;
  onSetView: (view: ViewType) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  user,
  activeView,
  onSetView,
  isOpen,
  onClose,
}: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, badge: '' },
    { id: 'trend-radar', label: 'Trend Radar', icon: Radio, badge: 'Viral' },
    { id: 'content-studio', label: 'Content Studio', icon: Video, badge: 'AI' },
    { id: 'virality-lab', label: 'Virality Lab', icon: Activity, badge: 'Predict' },
    { id: 'influencer-intel', label: 'Influencer Intel', icon: UserSearch, badge: '' },
    { id: 'brand-match', label: 'Brand Match', icon: Handshake, badge: '98%' },
    { id: 'projects', label: 'Workspace Projects', icon: FolderDot, badge: '' },
    { id: 'settings', label: 'Settings', icon: Settings, badge: '' },
  ] as const;

  const sidebarContent = (
    <div className="flex h-full w-full flex-col justify-between bg-[#0d0d0f] p-4 font-sans text-zinc-300" id="sidebar-wrapper">
      <div>
        {/* Brand Header */}
        <div className="mb-6 flex items-center justify-between px-2 py-1.5" id="sidebar-header">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 font-mono text-sm font-black text-white glow-purple">
              RG
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight text-white leading-none">
                RateGenius<span className="text-violet-500">AI</span>
              </h1>
              <span className="text-[9px] font-mono tracking-tight text-zinc-500">Growth OS Dashboard</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg text-zinc-500 hover:text-white md:hidden"
            id="mobile-close-sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1" id="sidebar-nav">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSetView(item.id);
                  onClose(); // Close mobile sidebar on select
                }}
                className={`group flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-zinc-800/60 text-white rounded-md border border-zinc-700/50 shadow-lg'
                    : 'text-zinc-400 hover:bg-zinc-800/30 hover:text-zinc-100 border border-transparent'
                }`}
                id={`sidebar-link-${item.id}`}
              >
                <div className="flex items-center gap-3">
                  <IconComponent
                    className={`h-4.5 w-4.5 transition-transform group-hover:scale-105 ${
                      isActive ? 'text-violet-400' : 'text-zinc-500 group-hover:text-zinc-350'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[9px] transition-colors ${
                      item.badge === 'Viral' || item.badge === 'AI' || item.badge === 'Predict'
                        ? 'bg-violet-900/20 text-violet-300 border border-violet-800/30'
                        : 'bg-cyan-950/20 text-cyan-300 border border-cyan-800/30'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Creator Status Card */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-3.5" id="creator-status-panel">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">CREATOR LEVEL</span>
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-400">PRO PLATINUM</span>
        </div>
        
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-zinc-400 hover:text-zinc-300">Adrian Rivera (Score)</span>
          <span className="font-mono text-white font-semibold">{user.creatorScore}/100</span>
        </div>
        
        <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" 
            style={{ width: `${user.creatorScore}%` }}
          />
        </div>
        <p className="mt-2.5 text-[9px] text-zinc-500 leading-relaxed">
          Top 1.2% in competitive SaaS growth vectors this week. Keep publishing to retain tier.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden h-screen w-64 flex-shrink-0 border-r border-zinc-800 bg-[#0d0d0f] md:block" id="desktop-sidebar">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar (Slide-In Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden" id="mobile-sidebar-overlay">
          {/* Backdrop */}
          <div
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />
          {/* Menu Drawer */}
          <div className="relative z-10 flex h-full w-64 animate-slide-in">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
