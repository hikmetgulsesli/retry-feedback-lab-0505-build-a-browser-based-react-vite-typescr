// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PipelineBoardProps {}

export function PipelineBoard(props: PipelineBoardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-slate-900 dark:bg-slate-950 font-inter text-xs tracking-tight fixed left-0 top-0 h-full border-r border-slate-700 dark:border-slate-800 w-64 flex flex-col z-40">
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
      {/* Leads */}
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-3 text-[18px]" data-icon="leaderboard">leaderboard</span>
      <span>Leads</span>
      </a>
      {/* Pipeline (ACTIVE) */}
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-600 flex items-center px-4 py-2 hover:bg-slate-800 dark:hover:bg-slate-800/50 transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined icon-fill mr-3 text-[18px]" data-icon="view_kanban">view_kanban</span>
      <span className="font-semibold">Pipeline</span>
      </a>
      {/* Insights */}
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-3 text-[18px]" data-icon="analytics">analytics</span>
      <span>Insights</span>
      </a>
      {/* Settings */}
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 transition-all duration-150 ease-in-out cursor-pointer active:opacity-80 mt-auto" href="#">
      <span className="material-symbols-outlined mr-3 text-[18px]" data-icon="settings">settings</span>
      <span>Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col h-full bg-background relative">
      {/* TopNavBar */}
      <header className="bg-slate-900 dark:bg-slate-950 font-inter text-sm antialiased border-b border-slate-700 dark:border-slate-800 w-full flex justify-between items-center px-4 h-11 shrink-0 z-30">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold text-slate-100 tracking-tight">Greenhouse Ops</span>
      <div className="relative flex items-center ml-4">
      <span className="material-symbols-outlined absolute left-2 text-slate-400 text-[18px]">search</span>
      <input className="bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 rounded pl-8 pr-3 py-1 text-xs focus:outline-none focus:border-blue-500 transition-colors w-64 h-7" placeholder="Search data..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-1">
      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80">
      <span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-200 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors rounded cursor-pointer active:opacity-80 ml-2">
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
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Total Pipeline Value: <span className="font-mono-data text-primary ml-1">$1,185,000</span> (8 Active Leads)</p>
      </div>
      <div className="flex gap-md">
      <button className="h-touch_target px-lg border border-outline-variant rounded-DEFAULT text-on-surface font-label-md text-label-md flex items-center gap-xs hover:border-primary hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[18px]">filter_list</span>
                              Filter
                          </button>
      <button className="h-touch_target px-lg bg-primary-container text-on-primary-container rounded-DEFAULT font-label-md text-label-md flex items-center gap-xs hover:brightness-110 transition-all">
      <span className="material-symbols-outlined text-[18px]">add</span>
                              New Lead
                          </button>
      </div>
      </div>
      {/* Kanban Columns Container */}
      <div className="flex flex-1 gap-lg overflow-x-auto pb-sm">
      {/* Column: New */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30">
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-highest rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <h3 className="font-h2 text-h2 text-on-surface">New</h3>
      <span className="font-mono-data text-label-sm text-on-surface-variant ml-1 bg-surface-variant px-2 py-0.5 rounded">3</span>
      </div>
      <span className="font-mono-data text-mono-data text-primary">$145K</span>
      </div>
      <div className="flex-1 p-md flex flex-col gap-sm overflow-y-auto">
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Alpha Systems</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">2d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$50,000</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">factory</span>
      <span className="font-body-sm text-label-sm truncate">Automated Irrigation</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Website">language</span></div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Omega Corp</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">1d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$75,000</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">sensors</span>
      <span className="font-body-sm text-label-sm truncate">HVAC Control Grid</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Referral">person_add</span></div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Zeta Tech</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">3d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$20,000</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">thermostat</span>
      <span className="font-body-sm text-label-sm truncate">Zone Monitors</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Cold Call">call</span></div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Contacted */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30">
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-highest rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-secondary-fixed"></div>
      <h3 className="font-h2 text-h2 text-on-surface">Contacted</h3>
      <span className="font-mono-data text-label-sm text-on-surface-variant ml-1 bg-surface-variant px-2 py-0.5 rounded">2</span>
      </div>
      <span className="font-mono-data text-mono-data text-secondary-fixed-dim">$210K</span>
      </div>
      <div className="flex-1 p-md flex flex-col gap-sm overflow-y-auto">
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Delta Heavy</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">5d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$120,000</div>
      <div className="mt-3 flex items-center justify-between">
      <div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">water_drop</span>
      <span className="font-body-sm text-label-sm truncate">Hydro-pump Array</span>
      </div>
      <span className="w-6 h-6 rounded bg-surface-variant border border-outline-variant flex items-center justify-center text-[10px] text-on-surface-variant font-bold" title="Meeting Scheduled">ME</span>
      </div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Epsilon Grid</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">7d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$90,000</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">water_drop</span>
      <span className="font-body-sm text-label-sm truncate">Hydro-pump Array</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: LinkedIn">share</span>
      <span className="w-6 h-6 rounded bg-surface-variant border border-outline-variant flex items-center justify-center text-[10px] text-on-surface-variant font-bold" title="Meeting Scheduled">ME</span>
      </div></div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Proposal */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30">
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-highest rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
      <h3 className="font-h2 text-h2 text-on-surface">Proposal</h3>
      <span className="font-mono-data text-label-sm text-on-surface-variant ml-1 bg-surface-variant px-2 py-0.5 rounded">2</span>
      </div>
      <span className="font-mono-data text-mono-data text-tertiary-fixed-dim">$380K</span>
      </div>
      <div className="flex-1 p-md flex flex-col gap-sm overflow-y-auto">
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Gamma Logistics</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">12d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$250,000</div>
      <div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">warehouse</span>
      <span className="font-body-sm text-label-sm truncate">Climate Facility</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Conference">groups</span>
      <span className="material-symbols-outlined text-[16px] text-tertiary" title="Awaiting Client">hourglass_empty</span>
      </div></div>
      </div>
      </div>
      {/* Card */}
      <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Sigma Energy</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-variant text-on-surface-variant shrink-0 border border-outline-variant/50">10d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$130,000</div>
      <div className="mt-3 flex items-center gap-1 text-on-surface-variant justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">bolt</span>
      <span className="font-body-sm text-label-sm truncate">Power Redundancy</span>
      </div>
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Direct">directions_run</span></div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Negotiating */}
      <div className="flex flex-col w-[320px] shrink-0 bg-surface-container-low rounded-lg border border-outline-variant/30">
      <div className="p-md border-b border-outline-variant/50 flex justify-between items-center bg-surface-container-highest rounded-t-lg shrink-0">
      <div className="flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <h3 className="font-h2 text-h2 text-on-surface">Negotiating</h3>
      <span className="font-mono-data text-label-sm text-on-surface-variant ml-1 bg-surface-variant px-2 py-0.5 rounded">1</span>
      </div>
      <span className="font-mono-data text-mono-data text-error">$450K</span>
      </div>
      <div className="flex-1 p-md flex flex-col gap-sm overflow-y-auto">
      {/* Card */}
      <div className="bg-surface-container border border-primary/50 rounded-DEFAULT p-md cursor-grab hover:border-primary-container hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-all group relative">
      <div className="absolute left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="material-symbols-outlined text-outline text-[16px]">drag_indicator</span>
      </div>
      <div className="pl-3">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-body-md text-body-md text-on-surface font-medium truncate pr-2">Titan Aerospace</span>
      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error-container text-on-error-container shrink-0 border border-error/50 font-bold">18d</span>
      </div>
      <div className="font-mono-data text-mono-data text-primary-fixed-dim font-bold">$450,000</div>
      <div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-1 text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">air</span>
      <span className="font-body-sm text-label-sm truncate">Filtration System V2</span>
      </div>
      <div className="flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px] text-outline" title="Lead Source: Inbound">input</span>
      <div className="flex -space-x-1">
      <div className="w-5 h-5 rounded-full bg-surface-variant border border-outline flex items-center justify-center text-[8px] text-on-surface">JD</div>
      <div className="w-5 h-5 rounded-full bg-secondary-container border border-outline flex items-center justify-center text-[8px] text-on-surface">SM</div>
      </div>
      </div></div>
      </div>
      </div>
      </div>
      </div>
      {/* Empty Column State / Add Column */}
      <div className="flex flex-col w-[320px] shrink-0 border border-dashed border-outline-variant/50 rounded-lg bg-surface-container-lowest/50 hover:bg-surface-container-lowest transition-colors cursor-pointer flex items-center justify-center group">
      <span className="material-symbols-outlined text-[32px] text-outline group-hover:text-primary transition-colors">add_circle</span>
      <span className="font-label-md text-label-md text-outline mt-2 group-hover:text-primary transition-colors">Add Stage</span>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
