import { useState } from 'react';
import { Search, Bell, Menu, User, Settings, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  user: UserProfile;
  title: string;
  onOpenSidebar: () => void;
  onSetView: (view: any) => void;
  themeStyle: 'violet' | 'cyan' | 'black';
  setThemeStyle: (style: 'violet' | 'cyan' | 'black') => void;
}

export default function Header({
  user,
  title,
  onOpenSidebar,
  onSetView,
  themeStyle,
  setThemeStyle,
}: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New Trend Spotted',
      desc: '"No-Code Spatial Widgets" has surged +312% in the last 48 hrs.',
      time: '12m ago',
      unread: true,
      type: 'trend',
    },
    {
      id: 2,
      title: 'High Audience Alignment Match',
      desc: 'Stripe matched with 98% compatibility with @adriansterling.',
      time: '1h ago',
      unread: true,
      type: 'brand',
    },
    {
      id: 3,
      title: 'Virality Check Success',
      desc: 'Your spatial computing script scored 91% expected virality index.',
      time: '5h ago',
      unread: false,
      type: 'script',
    },
  ];

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-zinc-800 bg-[#09090b]/80 px-4 md:px-8 backdrop-blur-md" id="app-header">
      {/* Mobile Menu Trigger & Page Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={onOpenSidebar}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:text-white md:hidden"
          id="mobile-sidebar-toggle"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-extrabold text-white md:text-base capitalize tracking-tight" id="header-page-title">
            {title.replace('-', ' ')}
          </h2>
          <span className="hidden rounded-full bg-indigo-500/10 px-2 py-0.5 text-[9px] font-mono tracking-wider text-indigo-400 border border-indigo-500/20 sm:block uppercase">
            Beta Engine v1.4
          </span>
        </div>
      </div>

      {/* Global search & Action icons */}
      <div className="flex items-center gap-4">
        {/* Quick Search */}
        <div className="relative hidden w-64 lg:block">
          <Search className="absolute top-2.5 left-3.5 h-3.5 w-3.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search trend radar or creators..."
            className="w-full rounded-full border border-zinc-800 bg-zinc-900/60 py-1.5 pr-3 pl-9 text-xs text-white placeholder-zinc-500 outline-none transition-colors focus:border-zinc-700 focus:bg-zinc-900"
          />
        </div>

        {/* Theme customization palette icon */}
        <div className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 p-1">
          <button
            onClick={() => setThemeStyle('violet')}
            className={`h-4.5 w-4.5 rounded-full bg-violet-600 transition-transform hover:scale-110 ${themeStyle === 'violet' ? 'ring-2 ring-white scale-105' : 'opacity-60'}`}
            title="Aura Theme"
          />
          <button
            onClick={() => setThemeStyle('cyan')}
            className={`h-4.5 w-4.5 rounded-full bg-cyan-500 transition-transform hover:scale-110 ${themeStyle === 'cyan' ? 'ring-2 ring-white scale-105' : 'opacity-60'}`}
            title="Neon Cyan"
          />
          <button
            onClick={() => setThemeStyle('black')}
            className={`h-4.5 w-4.5 rounded-full bg-zinc-800 transition-transform hover:scale-110 ${themeStyle === 'black' ? 'ring-2 ring-white scale-105' : 'opacity-60'}`}
            title="Elegant Charcoal"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/20 text-zinc-450 transition-colors hover:border-zinc-700 hover:text-white"
            id="notification-bell-btn"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-violet-500 ring-1 ring-zinc-950" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl border border-zinc-800 bg-[#0d0d0f] p-4 shadow-2xl glow-purple animate-fade-in" id="notifications-panel">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Creator Signals</h4>
                <span className="text-[10px] text-violet-400 font-mono">2 UNREAD</span>
              </div>
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`rounded-lg p-2.5 transition-colors ${notif.unread ? 'bg-zinc-900/50 border-l-2 border-violet-500' : 'bg-zinc-900/10'}`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <p className="text-xs font-semibold text-zinc-200">{notif.title}</p>
                      <span className="text-[9px] text-zinc-500 whitespace-nowrap">{notif.time}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-400 leading-relaxed">{notif.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 rounded-lg border border-zinc-800 p-1 pr-2.5 transition-all hover:bg-zinc-900/20"
            id="user-profile-menu-btn"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="h-7 w-7 rounded-md object-cover ring-1 ring-zinc-800"
            />
            <div className="hidden text-left md:block">
              <p className="text-xs font-semibold text-white leading-none">{user.name}</p>
              <p className="text-[9px] text-zinc-500">{user.role}</p>
            </div>
          </button>

          {/* Profile Dropdown Context */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-zinc-800 bg-[#0d0d0f] p-2 shadow-2xl glow-cyan animate-fade-in" id="profile-dropdown-panel">
              <div className="border-b border-zinc-800 px-3 py-2 text-left">
                <span className="text-xs font-bold text-white block">{user.name}</span>
                <span className="text-[10px] text-zinc-500 block font-mono">{user.handle}</span>
              </div>
              <div className="mt-1 space-y-0.5">
                <button
                  onClick={() => { onSetView('settings'); setShowProfileMenu(false); }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                  <Settings className="h-3.5 w-3.5 text-zinc-400" />
                  Account Settings
                </button>
                <div className="border-t border-zinc-800 my-1" />
                <button
                  onClick={() => { window.location.reload(); }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-rose-450 transition-colors hover:bg-rose-950/20 hover:text-rose-300"
                >
                  Sign Out of Platform
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
