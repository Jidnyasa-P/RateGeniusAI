import { useState } from 'react';
import { Settings, Shield, Bell, LayoutGrid, Key, Eye, EyeOff, Save, Check, Activity } from 'lucide-react';
import { UserProfile } from '../types';

interface SettingsProps {
  user: UserProfile;
  onChangeUser: (updates: Partial<UserProfile>) => void;
  appName: string;
}

export default function SettingsView({ user, onChangeUser, appName }: SettingsProps) {
  // Bio/Profile states
  const [name, setName] = useState(user.name);
  const [handle, setHandle] = useState(user.handle);
  const [role, setRole] = useState(user.role);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // API Key visual states
  const [apiKey, setApiKey] = useState('rg_live_9a0082f718bc32a9e88dce904712fed');
  const [showApiKey, setShowApiKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const handleSaveProfile = () => {
    onChangeUser({ name, handle, role });
    setSaveSuccess(true);
    setSaveStatus('Creator metadata settings updated successfully.');
    setTimeout(() => {
      setSaveSuccess(false);
      setSaveStatus(null);
    }, 3500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopiedKey(true);
    setSaveStatus('API Key copied to clipboard!');
    setTimeout(() => {
      setCopiedKey(false);
      setSaveStatus(null);
    }, 3000);
  };

  const regenerateKey = () => {
    const chars = '0123456789abcdef';
    let brandNew = 'rg_live_';
    for (let i = 0; i < 31; i++) {
      brandNew += chars[Math.floor(Math.random() * 16)];
    }
    setApiKey(brandNew);
    setSaveStatus('New sandbox API secret key successfully generated.');
    setTimeout(() => {
      setSaveStatus(null);
    }, 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans relative" id="settings-view">
      {/* Transient Save Status Banner */}
      {saveStatus && (
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-zinc-900 border border-emerald-500/30 px-3.5 py-2.5 text-xs text-[#10B981] shadow-2xl animate-slide-in">
          <Activity className="h-4 w-4 animate-pulse text-emerald-400" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Settings className="h-4.5 w-4.5 text-violet-400" />
            <span className="text-xs font-bold font-mono tracking-widest text-violet-400 uppercase">Interactive System Settings</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mt-1">Platform Settings & Keys</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Configure developer credentials, customize your metadata parameters, and manage notification thresholds.
          </p>
        </div>
      </div>

      {/* Settings Grid Panel */}
      <div className="grid gap-6 lg:grid-cols-5" id="settings-layout">
        {/* Left Form: Profile Metadata Settings (3cols) */}
        <div className="lg:col-span-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl space-y-5">
          <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
            <LayoutGrid className="h-4.5 w-4.5 text-violet-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Creator Meta Identity</h3>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5 text-xs">
                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Creator Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-zinc-805 border-zinc-800 bg-zinc-950/40 py-2.5 px-3.5 text-zinc-100 placeholder-zinc-650 outline-none focus:border-violet-600 focus:bg-zinc-900"
                />
              </div>

              {/* Creator Handle */}
              <div className="flex flex-col gap-1.5 text-xs">
                <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Social Handle Name</label>
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="rounded-lg border border-zinc-805 border-zinc-800 bg-zinc-950/40 py-2.5 px-3.5 text-zinc-100 placeholder-zinc-650 outline-none focus:border-violet-600 focus:bg-zinc-900 font-mono"
                />
              </div>
            </div>

            {/* Platform Role Title */}
            <div className="flex flex-col gap-1.5 text-xs">
              <label className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider font-mono">Platform Role Title</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="rounded-lg border border-zinc-805 border-zinc-800 bg-zinc-950/40 py-2.5 px-3.5 text-zinc-100 placeholder-zinc-650 outline-none focus:border-violet-600 focus:bg-zinc-900/60"
              />
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="border-t border-zinc-800 pt-4 flex items-center justify-between">
            <p className="text-[10px] text-zinc-500 font-mono select-none">Updates are persisted within active session storage arrays.</p>
            <button
              onClick={handleSaveProfile}
              className="rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-md active:scale-95 flex items-center gap-1.5 glow-purple cursor-pointer"
            >
              {saveSuccess ? (
                <>
                  <Check className="h-4 w-4 text-emerald-350" /> Persisted Successfully!
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" /> Save Metadata Changes
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Form: Developer Sandbox Keys & Threshold notifications (2cols) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Developer Credentials section */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-805 border-b-zinc-800/80 pb-3">
              <Key className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">System Sandbox Access Keys</h3>
            </div>

            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Use this key to authorize API metrics integration into external static Figma plug-ins or headless static websites.
            </p>

            <div className="relative rounded-lg border border-zinc-800 bg-zinc-950/30 p-2.5 flex items-center justify-between gap-2 overflow-hidden">
              <span className="font-mono text-xs text-zinc-300 overflow-hidden text-ellipsis whitespace-nowrap block flex-1">
                {showApiKey ? apiKey : '••••••••••••••••••••••••••••••••••••••••'}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="p-1 px-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  {showApiKey ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-1 px-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedKey ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : 'Copy'}
                </button>
              </div>
            </div>

            <button
               onClick={regenerateKey}
              className="w-full rounded-lg border border-zinc-800 hover:bg-zinc-800/55 py-2 text-[11px] font-bold text-zinc-350 transition-colors cursor-pointer"
            >
              Generate New Developer Key
            </button>
          </div>

          {/* Notification Threshold Toggles */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-805 border-b-zinc-800/80 pb-3">
              <Bell className="h-4.5 w-4.5 text-amber-500" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">Interactive Threshold Notifications</h3>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 font-medium">Spike Velocity Alerts</span>
                <input type="checkbox" defaultChecked className="rounded border-zinc-800 text-violet-600 bg-zinc-950 h-4 w-4 pointer-events-auto cursor-pointer focus:ring-0 text-violet-600 accent-violet-600" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400 font-medium">Brand Pitch Matches</span>
                <input type="checkbox" defaultChecked className="rounded border-zinc-800 text-violet-600 bg-zinc-950 h-4 w-4 pointer-events-auto cursor-pointer focus:ring-0 text-violet-600 accent-violet-600" />
              </div>

              <div className="flex items-center justify-between text-zinc-500">
                <span className="font-medium">Daily Summary Digest</span>
                <input type="checkbox" className="rounded border-zinc-800 text-violet-600 bg-zinc-950 h-4 w-4 pointer-events-auto cursor-pointer focus:ring-0 text-violet-600 accent-violet-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
