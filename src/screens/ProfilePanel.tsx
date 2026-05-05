// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Profile Panel
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ProfilePanelProps {}

export function ProfilePanel(props: ProfilePanelProps) {
  return (
    <>
      {/* Main Content Area (Background) */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
      {/* TopNavBar (Simulated Background) */}
      <header className="bg-slate-900 dark:bg-slate-950 font-inter text-sm antialiased docked full-width top-0 border-b border-slate-700 dark:border-slate-800 flat no shadows flex justify-between items-center w-full px-4 h-11 z-10 hidden md:flex">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold text-slate-100">Greenhouse Ops</span>
      </div>
      <div className="flex items-center gap-4">
      <div className="relative flex items-center h-full">
      <span className="material-symbols-outlined text-slate-400 absolute left-2 text-[18px]">search</span>
      <input className="bg-slate-800 border-none text-slate-200 placeholder-slate-400 pl-8 pr-3 py-1 rounded h-7 text-xs focus:ring-1 focus:ring-blue-500 outline-none w-48" placeholder="Search..." type="text" />
      </div>
      <div className="flex items-center gap-3 text-slate-400">
      <span className="material-symbols-outlined hover:text-slate-200 cursor-pointer text-[20px]">notifications</span>
      <span className="material-symbols-outlined hover:text-slate-200 cursor-pointer text-[20px]">help_outline</span>
      <span className="material-symbols-outlined text-blue-500 cursor-pointer text-[20px]">account_circle</span>
      </div>
      </div>
      </header>
      {/* Simulated Canvas Content to show overlay effect */}
      <main className="flex-1 p-margin opacity-30 pointer-events-none">
      <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="font-display text-display text-on-surface">Dashboard</h1>
      <div className="grid grid-cols-3 gap-gutter">
      <div className="bg-surface-container rounded h-32 border border-outline-variant"></div>
      <div className="bg-surface-container rounded h-32 border border-outline-variant"></div>
      <div className="bg-surface-container rounded h-32 border border-outline-variant"></div>
      </div>
      </div>
      </main>
      </div>
      {/* Overlay Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 transition-opacity"></div>
      {/* Profile Panel Slide-out Drawer */}
      <aside className="fixed right-0 top-0 bottom-0 w-80 bg-surface-container shadow-[-4px_0_24px_rgba(0,0,0,0.5)] z-50 flex flex-col border-l border-outline-variant transform transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-lg border-b border-outline-variant shrink-0">
      <h2 className="font-h2 text-h2 text-on-surface">Profile</h2>
      <button className="h-touch_target w-touch_target flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded transition-colors -mr-2">
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-margin space-y-xl">
      {/* User Identity */}
      <div className="flex flex-col items-center text-center space-y-md">
      <div className="relative">
      <img alt="User Avatar" className="w-24 h-24 rounded-full border-2 border-outline-variant object-cover" data-alt="A close up professional headshot of a serious operations manager in a high-tech greenhouse setting. The lighting is moody and cinematic, highlighting their focused expression. Deep shadows and cool blue technical lighting reflect in the background, matching the dark mode, highly precise and reliable industrial automation brand aesthetic. The color palette is dominated by deep blacks, slate grays, and subtle vibrant blue accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2CHPtPe_ps3NP8xTE1rMRztu_P5stc-j_NzbRniPetbqtMY_Gr-NhQJaocvxznq9-V27cWNZVL_CU1H3-LvdojhwGU2Uxld6RGFxnSlaviLPrZSpMQ9zkcCVMRaQgXLFWmfzZcuxzfk5brpt6kUVqj4-wPn9nzG8otb5C68byA9pcP3YGTuL-3etM2dBjjP5iZAB_TryulOq0kP4LCVXweaR-5N65oPIcpdBIfBu8ju2KiCLKew5Ra5gLeJNb1D9z-eteS3H0OSOK" />
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary-container border-2 border-surface-container rounded-full"></div>
      </div>
      <div>
      <h3 className="font-h1 text-h1 text-on-surface">Operations Manager</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">alex.morgan@greenhouseops.net</p>
      </div>
      <div className="inline-flex items-center gap-sm bg-surface-variant px-3 py-1 rounded text-on-surface font-mono-data text-mono-data">
      <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                          UTC-5 (EST)
                      </div>
      </div>
      {/* Settings Section */}
      <div className="space-y-md">
      <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-xs">Notifications</h4>
      <div className="space-y-sm">
      {/* Push Toggle */}
      <label className="flex items-center justify-between min-h-touch_target p-sm hover:bg-surface-variant rounded cursor-pointer transition-colors -mx-sm">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">notifications_active</span>
      <span className="font-body-md text-body-md text-on-surface">Push Alerts</span>
      </div>
      <div className="relative inline-flex items-center h-6 rounded-full w-11 bg-primary-container">
      <span className="translate-x-6 inline-block w-4 h-4 transform bg-on-primary-container rounded-full transition shadow"></span>
      </div>
      </label>
      {/* Email Toggle */}
      <label className="flex items-center justify-between min-h-touch_target p-sm hover:bg-surface-variant rounded cursor-pointer transition-colors -mx-sm">
      <div className="flex items-center gap-md">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">mail</span>
      <span className="font-body-md text-body-md text-on-surface">Email Summaries</span>
      </div>
      <div className="relative inline-flex items-center h-6 rounded-full w-11 bg-surface-variant border border-outline-variant">
      <span className="translate-x-1 inline-block w-4 h-4 transform bg-outline rounded-full transition shadow"></span>
      </div>
      </label>
      </div>
      </div>
      <div className="space-y-md">
      <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest border-b border-outline-variant pb-xs">Account</h4>
      <button className="w-full flex items-center gap-md min-h-touch_target p-sm hover:bg-surface-variant rounded cursor-pointer transition-colors text-on-surface -mx-sm text-left">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">manage_accounts</span>
      <span className="font-body-md text-body-md">Manage Profile</span>
      </button>
      <button className="w-full flex items-center gap-md min-h-touch_target p-sm hover:bg-surface-variant rounded cursor-pointer transition-colors text-on-surface -mx-sm text-left">
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">security</span>
      <span className="font-body-md text-body-md">Security &amp; Permissions</span>
      </button>
      </div>
      </div>
      {/* Footer Actions */}
      <div className="p-lg border-t border-outline-variant bg-surface-container shrink-0">
      <button className="w-full h-touch_target flex items-center justify-center gap-sm bg-transparent border border-outline-variant hover:border-error hover:text-error text-on-surface font-label-md text-label-md rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container">
      <span className="material-symbols-outlined text-[18px]">logout</span>
                      Sign Out
                  </button>
      </div>
      </aside>
    </>
  );
}
