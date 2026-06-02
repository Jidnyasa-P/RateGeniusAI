import { useState } from 'react';
import { ViewType, UserProfile, OpportunityItem, TrendTopic, ProjectItem } from './types';
import { mockUser, mockOpportunities, mockTrends, mockProjects } from './data/mockData';

// Layout & Navigation Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Drawer from './components/Drawer';

// Analytical Views
import DashboardHome from './views/DashboardHome';
import TrendRadar from './views/TrendRadar';
import ContentStudio from './views/ContentStudio';
import ViralityLab from './views/ViralityLab';
import InfluencerIntelligence from './views/InfluencerIntelligence';
import BrandMatch from './views/BrandMatch';
import Projects from './views/Projects';
import SettingsView from './views/Settings';
import AuthPage from './views/AuthPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [user, setUser] = useState<UserProfile>(mockUser);
  const [themeStyle, setThemeStyle] = useState<'violet' | 'cyan' | 'black'>('violet');

  // Interactive dynamic states / mock databases
  const [opportunities, setOpportunities] = useState<OpportunityItem[]>(mockOpportunities);
  const [trends, setTrends] = useState<TrendTopic[]>(mockTrends);
  const [projects, setProjects] = useState<ProjectItem[]>(mockProjects);
  const [selectedStudioTopic, setSelectedStudioTopic] = useState('');

  // Selected trend drawer controls
  const [selectedTrend, setSelectedTrend] = useState<TrendTopic | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Mobile layout state controls
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Dynamic user detail update propagation
  const handleChangeUser = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  // Triggering studio templates from radar opportunities
  const handleExecuteOpportunity = (item: OpportunityItem) => {
    setSelectedStudioTopic(item.topic);
    setActiveView('content-studio');
  };

  // Adding dynamic synthesized documents into workspace reports
  const handleSaveProject = (newProject: { title: string; type: 'Content'; summary: string; stats: string }) => {
    const created: ProjectItem = {
      id: `p-dyn-${Date.now()}`,
      title: newProject.title,
      type: newProject.type,
      updatedAt: 'Just now',
      summary: newProject.summary,
      stats: newProject.stats,
    };
    setProjects((prev) => [created, ...prev]);
  };

  // Deleting reports
  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSelectProjectWorkspace = (project: ProjectItem) => {
    if (project.type === 'Content') {
      setSelectedStudioTopic(project.title.replace('Studio: ', ''));
      setActiveView('content-studio');
    } else if (project.type === 'Report') {
      setActiveView('trend-radar');
    } else {
      setActiveView('influencer-intel');
    }
  };

  // Interactive drawer visual handler
  const handleSelectTrend = (trend: TrendTopic) => {
    setSelectedTrend(trend);
    setIsDrawerOpen(true);
  };

  // Render Credentials page if log out clicked
  if (!isAuthenticated) {
    return <AuthPage onSuccessLogin={() => setIsAuthenticated(true)} />;
  }

  // Define glow colors depending on active style preferences
  const themeGlowClass = 
    themeStyle === 'violet' 
      ? 'shadow-violet-950/20 glow-purple border-zinc-800' 
      : themeStyle === 'cyan' 
      ? 'shadow-cyan-950/20 glow-cyan border-zinc-800' 
      : 'shadow-black border-zinc-800';

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#09090b] font-sans text-zinc-100" id="main-application-frame">
      {/* Background glowing gradients */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-0 left-1/4 h-80 w-80 bg-violet-600/5 blur-3xl rounded-full" />
        <div className="absolute bottom-12 right-12 h-96 w-96 bg-cyan-400/5 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Global Sidebar Integration */}
      <Sidebar
        user={user}
        activeView={activeView}
        onSetView={(view) => {
          setActiveView(view);
          if (view !== 'content-studio') {
            setSelectedStudioTopic(''); // Reset temporary topic payload
          }
        }}
        isOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Primary Workspace Panel */}
      <div className="flex flex-1 flex-col overflow-hidden relative z-10">
        {/* Top Header Controls bar */}
        <Header
          user={user}
          title={activeView}
          onOpenSidebar={() => setMobileSidebarOpen(true)}
          onSetView={setActiveView}
          themeStyle={themeStyle}
          setThemeStyle={setThemeStyle}
        />

        {/* View Layout Container */}
        <main className={`flex-1 overflow-y-auto px-4 py-6 md:px-8 max-w-7xl w-full mx-auto pb-12 transition-all ${themeGlowClass}`} id="workspace-scroller">
          {activeView === 'dashboard' && (
            <DashboardHome
              user={user}
              opportunities={opportunities}
              onExecuteOpportunity={handleExecuteOpportunity}
              onSetView={setActiveView}
            />
          )}

          {activeView === 'trend-radar' && (
            <TrendRadar
              trends={trends}
              onSelectTrend={handleSelectTrend}
            />
          )}

          {activeView === 'content-studio' && (
            <ContentStudio
              initialTopic={selectedStudioTopic}
              onSaveProject={handleSaveProject}
            />
          )}

          {activeView === 'virality-lab' && <ViralityLab />}

          {activeView === 'influencer-intel' && <InfluencerIntelligence />}

          {activeView === 'brand-match' && (
            <BrandMatch user={user} />
          )}

          {activeView === 'projects' && (
            <Projects
              projects={projects}
              onDeleteProject={handleDeleteProject}
              onSelectProjectWorkspace={handleSelectProjectWorkspace}
            />
          )}

          {activeView === 'settings' && (
            <SettingsView
              user={user}
              onChangeUser={handleChangeUser}
              appName="RateGenius AI"
            />
          )}
        </main>
      </div>

      {/* Detailed Insights Overlay Drawer */}
      <Drawer
        topic={selectedTrend}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onStartTemplate={(topicName) => {
          setSelectedStudioTopic(topicName);
          setActiveView('content-studio');
          setIsDrawerOpen(false);
        }}
      />
    </div>
  );
}
