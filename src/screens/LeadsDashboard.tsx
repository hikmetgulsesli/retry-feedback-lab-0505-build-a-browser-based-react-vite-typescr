// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Leads Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface LeadsDashboardProps {}

export function LeadsDashboard(props: LeadsDashboardProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex bg-slate-900 dark:bg-slate-950 docked h-screen border-r border-slate-700 dark:border-slate-800 w-64 fixed left-0 top-0 flex-col z-40">
      <div className="p-lg border-b border-slate-700 dark:border-slate-800 flex items-center gap-md">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container font-h2 h2">
                      MC
                  </div>
      <div>
      <div className="text-blue-500 font-black uppercase tracking-widest font-label-sm text-label-sm">Maintenance Console</div>
      <div className="text-slate-400 font-label-sm text-label-sm">v2.4.0 High-Density</div>
      </div>
      </div>
      <div className="flex-1 py-md flex flex-col gap-xs overflow-y-auto">
      <a className="bg-blue-600/10 text-blue-500 border-r-2 border-blue-600 flex items-center px-4 py-2 font-inter text-xs tracking-tight transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-md">leaderboard</span>
      <span className="font-label-md text-label-md">Leads</span>
      </a>
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 font-inter text-xs tracking-tight transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-md">view_kanban</span>
      <span className="font-label-md text-label-md">Pipeline</span>
      </a>
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 font-inter text-xs tracking-tight transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-md">analytics</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center px-4 py-2 text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50 font-inter text-xs tracking-tight transition-all duration-150 ease-in-out cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined mr-md">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 w-full h-full overflow-hidden">
      {/* TopNavBar */}
      <header className="bg-slate-900 dark:bg-slate-950 font-inter text-sm antialiased docked full-width top-0 border-b border-slate-700 dark:border-slate-800 flat no shadows flex justify-between items-center w-full px-4 h-11 shrink-0 z-30">
      <div className="flex items-center">
      {/* Search bar on left logic per JSON, but leaving space for potential brand logo if mobile */}
      <div className="md:hidden text-lg font-bold text-slate-100 mr-4">Greenhouse Ops</div>
      <div className="hidden md:flex relative text-slate-400">
      <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-sm">search</span>
      <input className="bg-surface-container-high border-none rounded pl-8 pr-4 py-1 text-sm text-on-surface focus:ring-1 focus:ring-primary-container h-8 w-64" placeholder="Search operations..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-xs">
      <button className="text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 p-1 rounded flex items-center justify-center w-8 h-8">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 p-1 rounded flex items-center justify-center w-8 h-8">
      <span className="material-symbols-outlined">help_outline</span>
      </button>
      <button className="text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors cursor-pointer active:opacity-80 p-1 rounded flex items-center justify-center w-8 h-8 ml-2">
      <span className="material-symbols-outlined text-xl">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-margin bg-background">
      {/* Page Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
      <div>
      <h1 className="font-h1 text-h1 text-on-background mb-xs">Leads Dashboard</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage and track incoming maintenance requests.</p>
      </div>
      <div className="flex items-center gap-md">
      <div className="relative w-full md:w-auto">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
      <input className="w-full md:w-64 h-[40px] bg-surface-container border border-outline-variant rounded pl-10 pr-4 font-body-sm text-body-sm text-on-surface focus:border-primary-container focus:ring-0 transition-colors" placeholder="Filter leads..." type="text" />
      </div>
      <button className="h-[40px] px-lg bg-primary-container text-on-primary-container rounded font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-xs shrink-0">
      <span className="material-symbols-outlined text-sm">add</span>
                              New Lead
                          </button>
      </div>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-sm mb-lg">
      <button className="h-[32px] px-md rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-label-sm text-label-sm flex items-center gap-xs hover:border-primary-container transition-colors">
                          Status: All
                          <span className="material-symbols-outlined text-xs">arrow_drop_down</span>
      </button>
      <div className="h-4 w-px bg-outline-variant mx-xs"></div>
      <button className="h-[32px] px-md rounded-full bg-primary-container/10 border border-primary-container text-primary-container font-label-sm text-label-sm flex items-center">
                          New <span className="ml-xs bg-primary-container text-on-primary-container rounded-full px-2 py-0.5 text-[9px] leading-none">12</span>
      </button>
      <button className="h-[32px] px-md rounded-full bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors flex items-center">
                          Contacted
                      </button>
      <button className="h-[32px] px-md rounded-full bg-surface-container-high border border-outline-variant text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors flex items-center">
                          In Progress
                      </button>
      </div>
      {/* Data Table Card */}
      <div className="bg-surface rounded-xl border border-outline-variant overflow-hidden">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface-container-low">
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-1/4">Name / Contact</th>
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-1/5">Company</th>
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-1/6">Source</th>
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right w-1/6">Est. Value</th>
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-1/6">Status</th>
      <th className="p-md font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Last Action</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-high transition-colors group">
      <td className="p-md">
      <div className="font-label-md text-label-md text-on-surface mb-xs">Sarah Jenkins</div>
      <div className="text-on-surface-variant text-xs">s.jenkins@agritech.com</div>
      </td>
      <td className="p-md text-on-surface">AgriTech Systems</td>
      <td className="p-md text-on-surface-variant">Inbound Form</td>
      <td className="p-md font-mono-data text-mono-data text-right text-on-surface">$12,500</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-xs"></span>
                                              New
                                          </span>
      </td>
      <td className="p-md text-right text-on-surface-variant whitespace-nowrap">2 hours ago</td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-high transition-colors group">
      <td className="p-md">
      <div className="font-label-md text-label-md text-on-surface mb-xs">Marcus Vance</div>
      <div className="text-on-surface-variant text-xs">mvance@hydro-corp.net</div>
      </td>
      <td className="p-md text-on-surface">HydroCorp</td>
      <td className="p-md text-on-surface-variant">Referral</td>
      <td className="p-md font-mono-data text-mono-data text-right text-on-surface">$8,200</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-amber-500/10 text-amber-400 font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-xs"></span>
                                              Contacted
                                          </span>
      </td>
      <td className="p-md text-right text-on-surface-variant whitespace-nowrap">Yesterday</td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-high transition-colors group">
      <td className="p-md">
      <div className="font-label-md text-label-md text-on-surface mb-xs">Elena Rostova</div>
      <div className="text-on-surface-variant text-xs">elena.r@biofarms.io</div>
      </td>
      <td className="p-md text-on-surface">BioFarms Regional</td>
      <td className="p-md text-on-surface-variant">Trade Show</td>
      <td className="p-md font-mono-data text-mono-data text-right text-on-surface">$45,000</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-xs"></span>
                                              In Progress
                                          </span>
      </td>
      <td className="p-md text-right text-on-surface-variant whitespace-nowrap">Oct 12, 2023</td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-high transition-colors group">
      <td className="p-md">
      <div className="font-label-md text-label-md text-on-surface mb-xs">David Chen</div>
      <div className="text-on-surface-variant text-xs">d.chen@verdant.co</div>
      </td>
      <td className="p-md text-on-surface">Verdant Solutions</td>
      <td className="p-md text-on-surface-variant">Direct Email</td>
      <td className="p-md font-mono-data text-mono-data text-right text-on-surface">$3,150</td>
      <td className="p-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-blue-500/10 text-blue-400 font-label-sm text-label-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-xs"></span>
                                              New
                                          </span>
      </td>
      <td className="p-md text-right text-on-surface-variant whitespace-nowrap">Oct 10, 2023</td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination Footer */}
      <div className="p-md border-t border-outline-variant bg-surface-container-low flex items-center justify-between">
      <span className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-4 of 24 leads</span>
      <div className="flex gap-xs">
      <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled={true}>
      <span className="material-symbols-outlined text-sm">chevron_left</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
