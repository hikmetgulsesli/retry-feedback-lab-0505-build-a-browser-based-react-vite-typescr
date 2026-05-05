// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import { useAppContext } from "../hooks/useAppState";

interface SettingsProps {
  onOpenProfile?: () => void;
}

export function Settings(props: SettingsProps) {
  const { state, actions } = useAppContext();
  const { onOpenProfile } = props;
  const [density, setDensity] = useState(state.settings.density);
  const [currency, setCurrency] = useState(state.settings.currency);
  const [emailAlerts, setEmailAlerts] = useState(state.settings.emailAlerts);
  const [search, setSearch] = useState(state.searchQuery);

  const nav = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    actions.navigate(page as any);
  };

  const page = state.currentPage;

  const handleDensityChange = (val: 'compact' | 'relaxed') => {
    setDensity(val);
    actions.updateSettings({ density: val });
  };

  const handleCurrencyChange = (val: 'usd' | 'eur') => {
    setCurrency(val);
    actions.updateSettings({ currency: val });
  };

  const handleEmailToggle = () => {
    const next = !emailAlerts;
    setEmailAlerts(next);
    actions.updateSettings({ emailAlerts: next });
  };

  const handleReset = () => {
    actions.resetLocalData();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    actions.setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full flex flex-col z-40 bg-slate-900 dark:bg-slate-950 border-r border-slate-700 dark:border-slate-800 w-64 font-[var(--font-body-sm)] text-xs tracking-tight">
      <div className="p-4 border-b border-slate-700 dark:border-slate-800 mb-4">
      <h2 className="text-blue-500 font-black uppercase tracking-widest text-xs mb-1">Maintenance Console</h2>
      <p className="text-slate-400 text-[10px]">v2.4.0 High-Density</p>
      </div>
      <ul className="flex-1 flex flex-col gap-1">
      <li><button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'leads' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('leads')}><span className="material-symbols-outlined mr-3 text-lg" data-icon="leaderboard">leaderboard</span> Leads</button></li>
      <li><button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'pipeline' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('pipeline')}><span className="material-symbols-outlined mr-3 text-lg" data-icon="view_kanban">view_kanban</span> Pipeline</button></li>
      <li><button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'insights' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('insights')}><span className="material-symbols-outlined mr-3 text-lg" data-icon="analytics">analytics</span> Insights</button></li>
      <li><button className={`flex items-center px-4 py-2 transition-colors duration-150 ease-in-out cursor-pointer active:opacity-80 ${page === 'settings' ? 'bg-blue-600/10 text-blue-500 border-r-2 border-blue-600' : 'text-slate-400 hover:bg-slate-800 dark:hover:bg-slate-800/50'}`} onClick={nav('settings')}><span className="material-symbols-outlined mr-3 text-lg" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span> Settings</button></li>
      </ul>
      </nav>
      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-[calc(100%-16rem)] flex justify-between items-center px-4 h-11 z-30 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 dark:border-slate-800 font-[var(--font-body-md)] text-sm antialiased text-blue-600 dark:text-blue-500">
      <div className="flex items-center gap-4">
      <span className="text-lg font-bold text-slate-100">Greenhouse Ops</span>
      <div className="relative flex items-center ml-8">
      <span className="material-symbols-outlined absolute left-2 text-slate-400 text-sm">search</span>
      <input className="bg-surface-container-high border border-outline-variant rounded text-on-surface pl-8 pr-3 py-1 h-8 text-xs w-64 focus:border-primary-container focus:ring-0" placeholder="Search..." type="text" value={search} onChange={handleSearchChange} />
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button aria-label="Notifications" aria-disabled="true" className="text-slate-400 hover:text-slate-100 transition-colors"><span className="material-symbols-outlined text-xl" data-icon="notifications">notifications</span></button>
      <button aria-label="Help" aria-disabled="true" className="text-slate-400 hover:text-slate-100 transition-colors"><span className="material-symbols-outlined text-xl" data-icon="help_outline">help_outline</span></button>
      <button onClick={onOpenProfile} className="text-slate-400 hover:text-slate-100 transition-colors"><img alt="User profile" className="rounded-full w-6 h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0IjFL17DsVn9cTzvmPEd4WmoT288BZ9BybkziBe_bkJka318z_tnH4iBgPjhw00Xy3sdOAt1gIUZCIpAZDc0ODwnpR0UtilxhCYh7eY7lrNAYzhb7l_6f5gkP2RG8IN88RiEadMHW7ESh6uuD0bNIGk6R7rJHEcy5Dd5rllqeFpoXYyaSRX7_y9mMads7kHY8re50kHkzPBzqwJxQtPOUV_J8KhdKjcA6GzYD22FIZx6lZpnVi9AAMrUOLmwXwBmck2Gf5AKMELIO" /></button>
      </div>
      </header>
      {/* Settings Content */}
      <main className="mt-11 p-xl flex-1 max-w-4xl w-full mx-auto">
      <div className="mb-8">
      <h1 className="font-h1 text-h1 text-on-background mb-2">System Configuration</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage global preferences and localized data settings.</p>
      </div>
      <div className="grid grid-cols-1 gap-lg">
      {/* Display Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg">
      <div className="mb-md pb-md border-b border-outline-variant">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">monitor</span> Display</h2>
      </div>
      <div className="flex flex-col gap-md">
      <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Density Configuration</label>
      <div className="flex gap-4">
      <label className="flex-1 relative border border-outline-variant rounded-lg p-md cursor-pointer hover:border-primary-fixed-dim transition-colors flex items-center gap-3 bg-surface-container-low has-[:checked]:border-primary-container has-[:checked]:bg-primary-container/10">
      <input checked={density === 'compact'} onChange={() => handleDensityChange('compact')} className="sr-only" name="density" type="radio" value="compact" />
      <span className="material-symbols-outlined text-on-surface-variant">grid_view</span>
      <div>
      <span className="block font-label-md text-label-md text-on-surface">Compact</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant">Maximized data density for widescreen.</span>
      </div>
      </label>
      <label className="flex-1 relative border border-outline-variant rounded-lg p-md cursor-pointer hover:border-primary-fixed-dim transition-colors flex items-center gap-3 bg-surface-container-low has-[:checked]:border-primary-container has-[:checked]:bg-primary-container/10">
      <input checked={density === 'relaxed'} onChange={() => handleDensityChange('relaxed')} className="sr-only" name="density" type="radio" value="relaxed" />
      <span className="material-symbols-outlined text-on-surface-variant">view_stream</span>
      <div>
      <span className="block font-label-md text-label-md text-on-surface">Relaxed</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant">Increased padding for touch interfaces.</span>
      </div>
      </label>
      </div>
      </div>
      </section>
      {/* Localization Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg">
      <div className="mb-md pb-md border-b border-outline-variant">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">language</span> Localization</h2>
      </div>
      <div className="flex flex-col gap-md max-w-sm">
      <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Currency Format</label>
      <select className="bg-surface-container-low border border-outline-variant rounded-lg text-on-surface px-3 h-[44px] focus:border-primary-container focus:ring-0 font-body-md text-body-md w-full appearance-none" value={currency} onChange={(e) => handleCurrencyChange(e.target.value as 'usd' | 'eur')}>
      <option value="usd">USD ($) - United States Dollar</option>
      <option value="eur">EUR (€) - Euro</option>
      </select>
      </div>
      </section>
      {/* Notifications Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg">
      <div className="mb-md pb-md border-b border-outline-variant">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">mail</span> Notifications</h2>
      </div>
      <div className="flex items-center justify-between h-[44px]">
      <div>
      <span className="block font-label-md text-label-md text-on-surface">Critical Email Reminders</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant">Receive alerts for system failures and threshold breaches.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={emailAlerts} onChange={handleEmailToggle} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-on-primary-container after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:bg-primary-container border border-outline-variant"></div>
      </label>
      </div>
      </section>
      {/* Data Management Section */}
      <section className="bg-surface-container border border-outline-variant rounded-xl p-lg">
      <div className="mb-md pb-md border-b border-outline-variant">
      <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2 text-error"><span className="material-symbols-outlined text-[18px]">database</span> Data Management</h2>
      </div>
      <div className="flex items-center justify-between">
      <div>
      <span className="block font-label-md text-label-md text-on-surface">Local Storage</span>
      <span className="block font-body-sm text-body-sm text-on-surface-variant">Clear cached sensor data and temporary UI states.</span>
      </div>
      <button onClick={handleReset} className="h-[40px] px-4 border border-outline-variant text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-high transition-colors">
                                  Reset Local Storage
                              </button>
      </div>
      </section>
      </div>
      </main>
      </div>
    </>
  );
}
