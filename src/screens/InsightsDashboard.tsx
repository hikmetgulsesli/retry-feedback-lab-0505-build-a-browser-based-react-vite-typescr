// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import { useAppContext } from "../hooks/useAppState";

interface InsightsDashboardProps {
  onOpenProfile?: () => void;
}

export function InsightsDashboard(props: InsightsDashboardProps) {
  const { state, actions } = useAppContext();
  const { onOpenProfile } = props;
  const [search, setSearch] = useState(state.searchQuery);

  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    actions.navigate(page as any);
  };

  const page = state.currentPage;

  // Computed metrics from actual task data
  const totalLeads = state.tasks.length;
  const totalPipeline = useMemo(() => state.tasks.reduce((sum, t) => sum + t.value, 0), [state.tasks]);
  const closedTasks = useMemo(() => state.tasks.filter(t => t.status === 'closed').length, [state.tasks]);
  const conversionRate = totalLeads > 0 ? ((closedTasks / totalLeads) * 100).toFixed(1) : '0.0';
  const activeFollowups = useMemo(() => state.tasks.filter(t => t.status !== 'closed').length, [state.tasks]);

  // Source distribution for bar chart
  const sourceDistribution = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const t of state.tasks) {
      counts[t.source] = (counts[t.source] || 0) + 1;
    }
    // Normalize to known sources, fill missing with 0
    const sources = ['Website', 'Referral', 'Cold Call', 'LinkedIn', 'Conference', 'Direct', 'Inbound'];
    const result: { source: string; count: number }[] = [];
    for (const s of sources) {
      if ((counts[s] || 0) > 0 || result.length < 4) {
        result.push({ source: s, count: counts[s] || 0 });
      }
    }
    // Trim to top 4 by count for the chart
    result.sort((a, b) => b.count - a.count);
    return result.slice(0, 4);
  }, [state.tasks]);

  const maxSourceCount = Math.max(...sourceDistribution.map(s => s.count), 1);

  const formatCurrency = (val: number) => {
    if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(1)}M`;
    if (val >= 1_000) return `$${(val / 1_000).toFixed(0)}K`;
    return `$${val}`;
  };

  return (
    <>
      {/* SideNavBar (Web Only) */}
      <nav className="hidden md:flex bg-slate-900 dark:bg-slate-950 text-blue-600 dark:text-blue-500 font-[var(--font-body-sm)] text-xs tracking-tight docked h-screen border-r border-slate-700 dark:border-slate-800 w-64 flat no shadows fixed left-0 top-0 flex-col z-40 transition-colors duration-150 ease-in-out">
      <div className="px-4 py-6 border-b border-slate-700 dark:border-slate-800 mb-4">
      <div className="text-blue-500 font-black uppercase tracking-widest text-lg mb-1 flex items-center gap-2">
      <img alt="System Logo" className="rounded" data-alt="A small, stylized, high-tech logo suitable for an industrial software interface. It should use clean geometric lines and vibrant blue and emerald tones against a dark slate background, suggesting precision and control." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_3a3WxPSB19AK-0KfdBqaKttJ09udQBYyg7t-4qjf0H1fMrHHBkmYaltmrDSypToja3JlDQiiZJwVSM4FBRqT32s0636oCFmElCcWd9ULsqivRHO5XYxGPvpQj4X6TMVkpifCCIFxuKF1iTJVKIBKHa2VNkjtlbbPjxnzW1lis51KQavUWgbn99AfigtLF2oINsivZpAnjlVMvv0Od3t7tS-YP-eeUoj0I4IBgf4IZNLW_3vcm0i2V5V49maUk8hddviDb9lIuJUB" />
                      Greenhouse Ops
                  </div>
      <div className="text-slate-400 font-label-sm">Maintenance Console</div>
      <div className="text-slate-500 font-label-sm">v2.4.0 High-Density</div>
      </div>
      <ul className="flex flex-col gap-1 w-full">
      <li>
      <button className={`flex items-center px-4 py-2 h-[44px] ${page === 'leads' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('leads')}>
      <span className="material-symbols-outlined mr-3 text-lg">leaderboard</span>
      <span className="font-label-md">Leads</span>
      </button>
      </li>
      <li>
      <button className={`flex items-center px-4 py-2 h-[44px] ${page === 'pipeline' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('pipeline')}>
      <span className="material-symbols-outlined mr-3 text-lg">view_kanban</span>
      <span className="font-label-md">Pipeline</span>
      </button>
      </li>
      <li>
      <button className={`flex items-center px-4 py-2 h-[44px] ${page === 'insights' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('insights')}>
      <span className="material-symbols-outlined mr-3 text-lg">analytics</span>
      <span className="font-label-md">Insights</span>
      </button>
      </li>
      <li>
      <button className={`flex items-center px-4 py-2 h-[44px] ${page === 'settings' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('settings')}>
      <span className="material-symbols-outlined mr-3 text-lg">settings</span>
      <span className="font-label-md">Settings</span>
      </button>
      </li>
      </ul>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col md:ml-64 w-full h-full overflow-hidden bg-background">
      {/* TopNavBar */}
      <header className="bg-slate-900 dark:bg-slate-950 text-blue-600 dark:text-blue-500 font-[var(--font-body-md)] text-sm antialiased docked full-width top-0 border-b border-slate-700 dark:border-slate-800 flat no shadows flex justify-between items-center w-full px-4 h-11 shrink-0 z-30 cursor-pointer active:opacity-80 transition-colors duration-150 ease-in-out">
      <div className="flex items-center gap-4">
      <div className="md:hidden text-lg font-bold text-slate-100 uppercase tracking-widest">Greenhouse Ops</div>
      <div className="hidden md:flex relative h-[32px] w-64 items-center">
      <span className="material-symbols-outlined absolute left-2 text-slate-400 text-sm">search</span>
      <input className="w-full h-full bg-surface-container-high border border-outline-variant rounded pl-8 pr-2 text-on-surface font-body-sm focus:border-primary-container focus:ring-1 focus:ring-primary-container focus:outline-none placeholder-slate-500" placeholder="Search..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      </div>
      <div className="flex items-center gap-2">
      <button aria-label="Notifications" className="h-[32px] w-[32px] flex items-center justify-center text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded">
      <span className="material-symbols-outlined text-lg">notifications</span>
      </button>
      <button aria-label="Help" className="h-[32px] w-[32px] flex items-center justify-center text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded">
      <span className="material-symbols-outlined text-lg">help_outline</span>
      </button>
      <button aria-label="Account" onClick={onOpenProfile} className="h-[32px] w-[32px] flex items-center justify-center text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded overflow-hidden">
      <img alt="User profile" className="w-full h-full object-cover" data-alt="A highly detailed close-up portrait photo of an industrial control room operator. The lighting is cinematic, characterized by cool blue and soft green glows reflecting off unseen monitors, enhancing the technical, dark-mode aesthetic of the application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvdNvLq1gkeq5WfwH820tkEgkYGN9jR9-RxJLZlTV73WFZWcFYBZOZm48LC9iPPfTYFjUCY_Kr7fe7Uc5K0YyN5UKo9TCaqreDXNMyBj3f71HCcPTd8vlO52CAzH8gTPgWjS5R1OID3PnbXKaAfSWZkgerlRn8EmOnYUytN047zUSo2EOUDFxSLAg_VMbOT2Pcev_rF8blJGGjE--GMY12h8VDi8RJm7ma9p2vsPTrNyL-YNcrGMSIyKh-kIIQGlymXSbTXBIhY6Z" />
      </button>
      </div>
      </header>
      {/* Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 w-full flex flex-col gap-6">
      <div className="flex items-center justify-between shrink-0 mb-2">
      <h1 className="font-h1 text-on-surface">Analytics Overview</h1>
      <div className="flex gap-2">
      <button className="h-[40px] px-4 border border-outline-variant rounded text-on-surface font-label-md hover:border-primary-container transition-colors flex items-center gap-2 bg-surface-container">
      <span className="material-symbols-outlined text-sm">calendar_today</span>
                              Last 30 Days
                          </button>
      <button className="h-[40px] px-4 bg-primary-container text-white font-label-md rounded hover:opacity-90 transition-opacity flex items-center gap-2">
      <span className="material-symbols-outlined text-sm">download</span>
                              Export
                          </button>
      </div>
      </div>
      {/* Bento Grid: Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
      {/* Card 1 */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col gap-2 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between">
      <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest">Total Leads</h3>
      <span className="material-symbols-outlined text-primary-container">groups</span>
      </div>
      <div className="font-display text-on-surface mt-2 text-[32px]">{totalLeads.toLocaleString()}</div>
      <div className="flex items-center gap-1 text-tertiary font-label-sm mt-1">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span>+{Math.max(0, totalLeads - 1000)} vs baseline</span>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col gap-2 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between">
      <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest">Conversion Rate</h3>
      <span className="material-symbols-outlined text-tertiary">percent</span>
      </div>
      <div className="font-display text-on-surface mt-2 text-[32px]">{conversionRate}%</div>
      <div className="flex items-center gap-1 text-tertiary font-label-sm mt-1">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span>{closedTasks} closed of {totalLeads}</span>
      </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col gap-2 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary-container/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between">
      <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest">Total Pipeline</h3>
      <span className="material-symbols-outlined text-primary-container">attach_money</span>
      </div>
      <div className="font-display text-on-surface mt-2 text-[32px]">{formatCurrency(totalPipeline)}</div>
      <div className="flex items-center gap-1 text-tertiary font-label-sm mt-1">
      <span className="material-symbols-outlined text-[14px]">trending_up</span>
      <span>{state.tasks.length} active leads</span>
      </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-4 flex flex-col gap-2 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-error/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
      <div className="flex items-center justify-between">
      <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest">Active Follow-ups</h3>
      <span className="material-symbols-outlined text-error">assignment_late</span>
      </div>
      <div className="font-display text-on-surface mt-2 text-[32px]">{activeFollowups}</div>
      <div className="flex items-center gap-1 text-error font-label-sm mt-1">
      <span className="material-symbols-outlined text-[14px]">trending_down</span>
      <span>{totalLeads - activeFollowups} completed</span>
      </div>
      </div>
      </div>
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 min-h-[400px]">
      {/* Bar Chart: Leads by Source */}
      <div className="bg-surface-container rounded-xl border border-outline-variant flex flex-col p-4 md:p-6 h-full bg-[radial-gradient(var(--color-outline-variant)_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant">
      <div>
      <h2 className="font-h2 text-on-surface">Leads by Source</h2>
      <p className="font-body-sm text-on-surface-variant mt-1">Distribution across primary channels</p>
      </div>
      <button className="h-[32px] w-[32px] flex items-center justify-center text-on-surface-variant hover:text-on-surface rounded">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </div>
      <div className="flex-1 flex items-end gap-2 relative pt-6">
      {/* Y-Axis Labels */}
      <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-on-surface-variant font-mono-data text-[10px] items-end pr-2 border-r border-outline-variant">
      <span>{maxSourceCount}</span>
      <span>{Math.round(maxSourceCount * 0.75)}</span>
      <span>{Math.round(maxSourceCount * 0.5)}</span>
      <span>{Math.round(maxSourceCount * 0.25)}</span>
      <span>0</span>
      </div>
      {/* Grid Lines */}
      <div className="absolute left-8 right-0 top-0 bottom-8 flex flex-col justify-between">
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      </div>
      {/* Bars Container */}
      <div className="flex-1 flex items-end justify-around pl-8 h-[calc(100%-32px)] z-10">
      {sourceDistribution.map((item, idx) => {
        const pct = Math.max((item.count / maxSourceCount) * 100, 5);
        const barColor = idx === 0 ? 'bg-primary-container' : idx === 1 ? 'bg-tertiary' : idx === 2 ? 'bg-secondary-container' : 'bg-outline';
        const shadowColor = idx === 0 ? 'shadow-primary-container/20' : idx === 1 ? 'shadow-tertiary/20' : idx === 2 ? 'shadow-secondary-container/20' : 'shadow-outline/20';
        return (
      <div key={item.source} className="flex flex-col items-center w-full group">
      <div className={`w-10 md:w-14 ${barColor} rounded-t relative transition-colors duration-300 group-hover:brightness-125 shadow-lg ${shadowColor}`} style={{ height: `${pct}%` }}>
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-surface-bright text-on-surface font-bold font-mono-data text-[12px] py-1 px-2 rounded pointer-events-none transition-opacity border border-outline-variant">{item.count}</div>
      </div>
      <div className="font-bold text-on-surface mt-4 text-[12px] uppercase tracking-wider">{item.source}</div>
      </div>
        );
      })}
      {sourceDistribution.length === 0 && (
        <div className="flex-1 flex items-center justify-center text-on-surface-variant font-body-sm">No data available</div>
      )}
      </div>
      </div>
      </div>
      {/* Line Chart: Won vs Lost Trend */}
      <div className="bg-surface-container rounded-xl border border-outline-variant flex flex-col p-4 md:p-6 h-full relative overflow-hidden bg-[radial-gradient(var(--color-outline-variant)_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-outline-variant z-10 relative">
      <div>
      <h2 className="font-h2 text-on-surface">Won vs Lost</h2>
      <p className="font-body-sm text-on-surface-variant mt-1">Weekly outcome trajectory</p>
      </div>
      <div className="flex gap-4"><div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-tertiary"></div>
      <span className="font-label-sm text-on-surface uppercase">Won</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
      <span className="font-label-sm text-on-surface uppercase">Lost</span>
      </div></div>
      </div>
      {/* SVG Line Chart Mockup */}
      <div className="flex-1 w-full h-full min-h-[250px] relative z-10 pl-8 pb-8">{/* Y-Axis Labels */}
      <div className="absolute left-0 top-0 bottom-8 w-8 flex flex-col justify-between text-on-surface-variant font-mono-data text-[10px] items-end pr-2 border-r border-outline-variant">
      <span>100</span>
      <span>75</span>
      <span>50</span>
      <span>25</span>
      <span>0</span>
      </div>
      {/* Grid Lines */}
      <div className="absolute left-8 right-0 top-0 bottom-8 flex flex-col justify-between">
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      <div className="w-full border-t border-outline-variant/30"></div>
      </div>
      {/* Lines */}
      <svg className="w-full h-full absolute inset-0 left-8 pr-4" preserveAspectRatio="none" viewBox="0 0 100 100">
      <defs>
      <linearGradient id="wonGradient" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="var(--color-tertiary)"></stop>
      <stop offset="100%" stopColor="#34D399"></stop>
      </linearGradient>
      <linearGradient id="lostGradient" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stopColor="#2563eb"></stop>
      <stop offset="100%" stopColor="#60a5fa"></stop>
      </linearGradient>
      </defs>
      {/* Won Line (Emerald Gradient) */}
      <path d="M0,80 Q20,70 40,50 T80,30 T100,10" fill="none" stroke="url(#wonGradient)" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
      {/* Lost Line (Blue Gradient - Replaces Red per 'vibrant blue' request) */}
      <path d="M0,40 Q20,60 40,65 T80,55 T100,70" fill="none" stroke="url(#lostGradient)" strokeDasharray="4" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
      {/* Data Points */}
      <circle cx="0" cy="80" fill="var(--color-tertiary)" r="3" vectorEffect="non-scaling-stroke"></circle>
      <circle cx="40" cy="50" fill="var(--color-tertiary)" r="3" vectorEffect="non-scaling-stroke"></circle>
      <circle cx="80" cy="30" fill="var(--color-tertiary)" r="3" vectorEffect="non-scaling-stroke"></circle>
      <circle cx="100" cy="10" fill="var(--color-tertiary)" r="3" vectorEffect="non-scaling-stroke"></circle>
      </svg>
      {/* X-Axis Labels */}
      <div className="absolute bottom-0 left-8 right-0 flex justify-between text-on-surface font-semibold font-mono-data text-[11px] pt-3 pr-4">
      <span>W1</span>
      <span>W2</span>
      <span>W3</span>
      <span>W4</span>
      </div></div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
