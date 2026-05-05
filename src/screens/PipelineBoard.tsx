// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import type { Task } from "../types/domain";
import { useAppContext } from "../hooks/useAppState";

interface PipelineBoardProps {
  onCreateLead?: () => void;
  onOpenProfile?: () => void;
}

export function PipelineBoard(props: PipelineBoardProps) {
  const { state, actions } = useAppContext();
  const { onCreateLead, onOpenProfile } = props;
  const [search, setSearch] = useState(state.searchQuery);
  const [valueFilter, setValueFilter] = useState(false);

  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    actions.navigate(page as any);
  };

  const page = state.currentPage;

  const filteredTasks = useMemo(() => {
    let tasks = state.tasks;
    if (search.trim()) {
      const q = search.toLowerCase();
      tasks = tasks.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.company.toLowerCase().includes(q) ||
        t.contactName.toLowerCase().includes(q) ||
        t.equipment.toLowerCase().includes(q)
      );
    }
    if (valueFilter) {
      tasks = tasks.filter(t => t.value > 50000);
    }
    return tasks;
  }, [state.tasks, search, valueFilter]);

  const columns = useMemo(() => {
    const statuses = ['new', 'contacted', 'proposal', 'negotiating', 'closed'] as const;
    return statuses.map(status => ({
      status,
      tasks: filteredTasks.filter(t => t.status === status),
    }));
  }, [filteredTasks]);

  const totalValue = useMemo(() =>
    filteredTasks.reduce((sum, t) => sum + t.value, 0),
  [filteredTasks]);

  const advanceStatus = (taskId: string, currentStatus: string) => {
    const order = ['new', 'contacted', 'proposal', 'negotiating', 'closed'];
    const idx = order.indexOf(currentStatus);
    const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : currentStatus;
    actions.updateTask(taskId, { status: next as Task['status'] });
  };

  const sourceIcon = (source: string) => {
    const map: Record<string, string> = {
      'Website': 'language',
      'Referral': 'person_add',
      'Cold Call': 'call',
      'LinkedIn': 'share',
      'Conference': 'groups',
      'Direct': 'directions_run',
      'Inbound': 'input',
    };
    return map[source] || 'language';
  };

  const sourceTitle = (source: string) => `Lead Source: ${source}`;

  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 dark:bg-slate-950 font-[var(--font-body-sm)] text-xs tracking-tight fixed left-0 top-0 h-full border-r border-slate-700 dark:border-slate-800 w-64 flex flex-col z-40">
      <div className="p-4 border-b border-slate-700 dark:border-slate-800 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center text-blue-500">
      <span className="material-symbols-outlined icon-fill">data_usage</span>
      </div>
      <div>
      <h2 className="text-blue-500 font-black uppercase tracking-widest leading-tight">Maintenance Console</h2>
      <span className="text-slate-500 text-[10px]">v2.4.0 High-Density</span>
      </div>
      </div>
      <div className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'leads' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('leads')}>
      <span className={`material-symbols-outlined mr-3 text-[18px] ${page === 'leads' ? 'icon-fill' : ''}`} data-icon="leaderboard">leaderboard</span>
      <span className={page === 'leads' ? 'font-semibold' : ''}>Leads</span>
      </button>
      {/* Pipeline (ACTIVE) */}
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'pipeline' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('pipeline')}>
      <span className={`material-symbols-outlined mr-3 text-[18px] ${page === 'pipeline' ? 'icon-fill' : ''}`} data-icon="view_kanban">view_kanban</span>
      <span className={page === 'pipeline' ? 'font-semibold' : ''}>Pipeline</span>
      </button>
      {/* Insights */}
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'insights' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('insights')}>
      <span className={`material-symbols-outlined mr-3 text-[18px] ${page === 'insights' ? 'icon-fill' : ''}`} data-icon="analytics">analytics</span>
      <span className={page === 'insights' ? 'font-semibold' : ''}>Insights</span>
      </button>
      {/* Settings */}
      <button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 mt-auto ${page === 'settings' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('settings')}>
      <span className={`material-symbols-outlined mr-3 text-[18px] ${page === 'settings' ? 'icon-fill' : ''}`} data-icon="settings">settings</span>
      <span className={page === 'settings' ? 'font-semibold' : ''}>Settings</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col h-full bg-background relative">
      {/* TopNavBar */}
      <header className="bg-slate-900 dark:bg-slate-950 font-[var(--font-body-md)] text-sm antialiased border-b border-slate-700 dark:border-slate-800 w-full flex justify-between items-center px-4 h-11 shrink-0 z-30">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold text-slate-100 tracking-tight">Greenhouse Ops</span>
      <div className="relative flex items-center ml-4">
      <span className="material-symbols-outlined absolute left-2 text-slate-400 text-[18px]">search</span>
      <input className="bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 rounded pl-8 pr-3 py-1 text-xs focus:outline-none focus:border-blue-500 transition-colors w-64 h-7" placeholder="Search data..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      </div>
      <div className="flex items-center gap-1">
      <button aria-label="Notifications" aria-disabled="true" className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
      </button>
      <button aria-label="Help" aria-disabled="true" className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
      </button>
      <button aria-label="Account" onClick={onOpenProfile} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80 ml-2">
      <span className="material-symbols-outlined text-[24px]" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas: Pipeline Board */}
      <main className="flex-1 overflow-hidden flex flex-col p-margin">
      {/* Board Header */}
      <div className="flex justify-between items-end mb-margin shrink-0">
      <div>
      <h1 className="font-display text-display text-on-background">Pipeline</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Total Pipeline Value: <span className="font-mono-data text-primary ml-1">${(totalValue / 1000).toFixed(0)}K</span> ({filteredTasks.length} Active Leads{valueFilter ? ' — High Value' : ''})</p>
      </div>
      <div className="flex gap-md">
      <button onClick={() => setValueFilter(v => !v)} className={`h-touch_target px-lg border border-outline-variant rounded-DEFAULT text-on-surface font-label-md text-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors ${valueFilter ? 'bg-primary-container/10 border-primary text-primary' : ''}`}>
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                              {valueFilter ? 'Show All' : 'Filter'}
                          </button>
      <button onClick={onCreateLead} className="h-touch_target px-lg bg-primary-container text-on-primary-container rounded-DEFAULT font-label-md text-label-md flex items-center gap-xs hover:brightness-110 transition-opacity">
      <span className="material-symbols-outlined text-[18px]">add</span>
                              New Lead
                          </button>
      </div>
      </div>
      {/* Kanban Columns Container */}
      <div className="flex flex-1 gap-lg overflow-x-auto pb-sm">
      {columns.map(col => {
        const colValue = col.tasks.reduce((s, t) => s + t.value, 0);
        const dotColor: Record<string, string> = {
          new: 'bg-primary',
          contacted: 'bg-secondary-fixed',
          proposal: 'bg-tertiary',
          negotiating: 'bg-error',
          closed: 'bg-slate-500',
        };
        const valueColor: Record<string, string> = {
          new: 'text-primary',
          contacted: 'text-secondary-fixed-dim',
          proposal: 'text-tertiary-fixed-dim',
          negotiating: 'text-error',
          closed: 'text-slate-400',
        };
        return (
      <div key={col.status} className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30">
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-highest rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <div className={`w-2 h-2 rounded-full ${dotColor[col.status] || 'bg-primary'}`}></div>
      <h3 className="font-h2 text-h2 text-on-surface">{col.status.charAt(0).toUpperCase() + col.status.slice(1)}</h3>
      <span className="font-mono-data text-label-sm text-on-surface-variant ml-1 bg-surface-variant px-2 py-0.5 rounded">{col.tasks.length}</span>
      </div>
      <span className={`font-mono-data text-mono-data ${valueColor[col.status] || 'text-primary'}`}>${(colValue / 1000).toFixed(0)}K</span>
      </div>
      <div className="flex-1 p-md flex flex-col gap-sm overflow-y-auto">
      {col.tasks.map(task => (
      <div key={task.id} onClick={() => advanceStatus(task.id, task.status)} className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-pointer hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">{task.title}</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">{task.daysAgo}d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">${task.value.toLocaleString()}</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">{task.equipment === 'Automated Irrigation' ? 'factory' : task.equipment === 'HVAC Control Grid' ? 'sensors' : task.equipment === 'Zone Monitors' ? 'thermostat' : task.equipment === 'Hydro-pump Array' ? 'water_drop' : task.equipment === 'Climate Facility' ? 'warehouse' : task.equipment === 'Power Redundancy' ? 'bolt' : task.equipment === 'Filtration System V2' ? 'air' : 'factory'}</span>
      <span className="font-body-sm text-label-sm truncate">{task.equipment}</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-outline" title={sourceTitle(task.source)}>{sourceIcon(task.source)}</span></div>
      </div>
      </div>
      ))}
      {col.tasks.length === 0 && (
        <div className="text-center py-8 text-on-surface-variant font-body-sm">No leads</div>
      )}
      </div>
      </div>
        );
      })}
      {/* Empty Column State / Add Column */}
      <div onClick={onCreateLead} className="flex flex-col w-[320px] shrink-0 border border-dashed border-outline-variant/50 rounded-lg bg-surface-container-lowest/50 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-center justify-center group">
      <span className="material-symbols-outlined text-[32px] text-outline group-hover:text-primary transition-colors">add_circle</span>
      <span className="font-label-md text-label-md text-outline mt-2 group-hover:text-primary transition-colors">Add Stage</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
