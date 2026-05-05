// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Empty State Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../hooks/useAppState";

interface EmptyStateDashboardProps {
  onCreateLead?: () => void;
}

export function EmptyStateDashboard(props: EmptyStateDashboardProps) {
  const { state, actions } = useAppContext();
  const { onCreateLead } = props;
  const [search, setSearch] = useState(state.searchQuery);

  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    actions.navigate(page as any);
  };

  const page = state.currentPage;

  return (
    <>
      {/* TopNavBar (Web) */}
      <header className="hidden md:flex justify-between items-center w-full px-4 h-11 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800 font-[var(--font-body-md)] text-sm antialiased sticky top-0 z-50">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold text-slate-100">Greenhouse Ops</span>
      </div>
      <div className="flex items-center">
      {/* Search on left of trailing actions */}
      <div className="relative mr-4 hidden lg:block">
      <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">search</span>
      <input className="bg-slate-800 border-none rounded text-sm text-slate-100 pl-8 pr-3 py-1 focus:ring-1 focus:ring-blue-500 placeholder-slate-500 w-64 h-7" placeholder="Search operations..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="Notifications" className="p-1.5 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 rounded">
      <span className="material-symbols-outlined text-[20px]">notifications</span>
      </button>
      <button aria-label="Help" className="p-1.5 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 rounded">
      <span className="material-symbols-outlined text-[20px]">help_outline</span>
      </button>
      <button aria-label="Account" className="p-1.5 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 rounded">
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* TopAppBar (Mobile) */}
      <header className="flex md:hidden justify-between items-center w-full px-4 h-14 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800 sticky top-0 z-50">
      <span className="text-lg font-bold text-slate-100">Greenhouse Ops</span>
      <button aria-label="account_circle" className="p-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 rounded">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col z-40 bg-slate-900 dark:bg-slate-950 border-r border-slate-700 dark:border-slate-800 w-64 font-[var(--font-body-sm)] text-xs tracking-tight h-[calc(100vh-44px)] sticky top-[44px]">
      <div className="p-4 border-b border-slate-800 mb-2">
      <h2 className="text-slate-100 font-semibold text-sm">Maintenance Console</h2>
      <p className="text-slate-500 text-[10px] mt-0.5 uppercase tracking-wider">v2.4.0 High-Density</p>
      </div>
      <div className="flex flex-col gap-1 px-2">
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out ${page === 'leads' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 rounded-sm'}`} onClick={nav('leads')}>
      <span className="material-symbols-outlined mr-3 text-[18px]">leaderboard</span>
      <span className={`font-medium text-[13px] ${page === 'leads' ? '' : ''}`}>Leads</span>
      </button>
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out ${page === 'pipeline' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 rounded-sm'}`} onClick={nav('pipeline')}>
      <span className="material-symbols-outlined mr-3 text-[18px]">view_kanban</span>
      <span className="font-medium text-[13px]">Pipeline</span>
      </button>
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out ${page === 'insights' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 rounded-sm'}`} onClick={nav('insights')}>
      <span className="material-symbols-outlined mr-3 text-[18px]">analytics</span>
      <span className="font-medium text-[13px]">Insights</span>
      </button>
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out ${page === 'settings' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 rounded-sm'}`} onClick={nav('settings')}>
      <span className="material-symbols-outlined mr-3 text-[18px]">settings</span>
      <span className="font-medium text-[13px]">Settings</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-background p-4 md:p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8 border-b border-surface-container-high pb-4">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface">Lead Management</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Review and manage incoming maintenance requests.</p>
      </div>
      <button onClick={onCreateLead} className="hidden md:flex h-touch_target px-6 bg-primary-container text-on-primary-container rounded font-label-md text-label-md items-center justify-center hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined mr-2 text-[18px]">add</span>
                          Create Lead
                      </button>
      </div>
      {/* Empty State Container */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-[500px]">
      <div className="bg-surface-container w-full max-w-2xl rounded-lg border border-outline-variant p-12 flex flex-col items-center text-center shadow-sm">
      {/* Illustration Placeholder (Using an image for the empty greenhouse) */}
      <div className="w-64 h-48 mb-8 rounded bg-surface-container-high border border-outline-variant overflow-hidden relative opacity-80">
      <img alt="Empty greenhouse illustration" className="w-full h-full object-cover grayscale mix-blend-luminosity" data-alt="A highly detailed illustration of an empty, modern industrial greenhouse interior. The scene is devoid of plants, featuring clean structural lines, automated watering tracks, and bare metallic tables stretching into the distance. The lighting is dim and moody, reflecting a dark-mode industrial aesthetic with cool slate and deep blue tones, subtly illuminated by overhead utilitarian LED lights. The overall feel is sterile, precise, and awaiting configuration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4GxVJ_HCaEKPX7qAJK9ylCdXEDMCI6btqhPXjO0LYdwg0ieDr8WjkejWUASvVErQqtaQtKO87ZrjMc-Kw6ALsGwuz06tEVSv9cUcaJIbSWeS1Zg6aA1USi9YemY4luLa_cclYoathxGXIqdf0kh1JRKIX9nuYCz39C-mUmVJxtptbDa1V2iDM57vJIgaI9BwWwRjh9sjuqPHdmde2jIUJnzsuXjnK5dw8DhPcqWn9UZg1YAQMea7WmPGawlxiX0CPi4pZwZ8V2npf" />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] flex items-center justify-center">
      <span className="material-symbols-outlined text-outline text-[64px] font-light opacity-50">yard</span>
      </div>
      </div>
      {/* Text Content */}
      <h2 className="font-h1 text-h1 text-on-surface mb-2">No maintenance leads yet.</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
                              Start tracking your greenhouse operations by adding your first lead.
                          </p>
      {/* CTA */}
      <button onClick={onCreateLead} className="h-touch_target px-8 bg-primary-container text-on-primary-container rounded font-label-md text-label-md flex items-center justify-center hover:bg-primary-container/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined mr-2 text-[18px]">add</span>
                              Create Lead
                          </button>
      </div>
      </div>
      </main>
      </div>
      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-slate-900 dark:bg-slate-950 border-t border-slate-700 dark:border-slate-800 flex justify-around items-center h-[60px] z-50 px-2 pb-safe">
      <button className={`flex flex-col items-center justify-center w-full h-full ${page === 'leads' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-300'}`} onClick={nav('leads')}>
      <div className={`px-4 py-1 rounded-full mb-1 ${page === 'leads' ? 'bg-blue-600/10' : ''}`}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: page === 'leads' ? "'FILL' 1" : "'FILL' 0"}}>leaderboard</span>
      </div>
      <span className="font-[var(--font-body-sm)] text-[10px] font-medium">Leads</span>
      </button>
      <button className={`flex flex-col items-center justify-center w-full h-full ${page === 'pipeline' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-300'}`} onClick={nav('pipeline')}>
      <div className={`px-4 py-1 rounded-full mb-1 ${page === 'pipeline' ? 'bg-blue-600/10' : ''}`}>
      <span className="material-symbols-outlined text-[20px]">view_kanban</span>
      </div>
      <span className="font-[var(--font-body-sm)] text-[10px] font-medium">Pipeline</span>
      </button>
      <button className={`flex flex-col items-center justify-center w-full h-full ${page === 'insights' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-300'}`} onClick={nav('insights')}>
      <div className={`px-4 py-1 rounded-full mb-1 ${page === 'insights' ? 'bg-blue-600/10' : ''}`}>
      <span className="material-symbols-outlined text-[20px]">analytics</span>
      </div>
      <span className="font-[var(--font-body-sm)] text-[10px] font-medium">Insights</span>
      </button>
      <button className={`flex flex-col items-center justify-center w-full h-full ${page === 'settings' ? 'text-blue-500' : 'text-slate-400 hover:text-slate-300'}`} onClick={nav('settings')}>
      <div className={`px-4 py-1 rounded-full mb-1 ${page === 'settings' ? 'bg-blue-600/10' : ''}`}>
      <span className="material-symbols-outlined text-[20px]">settings</span>
      </div>
      <span className="font-[var(--font-body-sm)] text-[10px] font-medium">Settings</span>
      </button>
      </nav>
    </>
  );
}
