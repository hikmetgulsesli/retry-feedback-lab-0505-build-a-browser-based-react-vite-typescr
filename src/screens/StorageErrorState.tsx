// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Storage Error State
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface StorageErrorStateProps {}

export function StorageErrorState(props: StorageErrorStateProps) {
  return (
    <>
      {/* TopNavBar (Hidden due to Semantic Shell Mandate for transactional/error states) */}
      {/* SideNavBar (Hidden due to Semantic Shell Mandate for transactional/error states) */}
      <main className="relative w-full max-w-lg mx-auto p-margin flex flex-col items-center text-center">
      {/* Error Icon Container */}
      <div className="mb-8 relative flex items-center justify-center w-24 h-24 rounded-full bg-error-container/20 border border-error/30">
      <div className="absolute inset-0 bg-error/10 blur-xl rounded-full"></div>
      <span className="material-symbols-outlined text-[48px] text-error" data-icon="cloud_off" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>cloud_off</span>
      </div>
      {/* Typography Context */}
      <h1 className="font-display text-display text-on-surface mb-xs">
                  Connection to Local Storage Lost
              </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mb-xl max-w-sm mx-auto">
                  We were unable to save your recent changes. Please ensure your device has sufficient storage space and check your browser settings.
              </p>
      {/* Technical Details Card (Bento Style) */}
      <div className="w-full bg-surface-container rounded-xl border border-outline-variant p-md mb-xl text-left">
      <div className="flex items-center gap-sm mb-xs border-b border-outline-variant pb-xs">
      <span className="material-symbols-outlined text-[16px] text-on-surface-variant" data-icon="info">info</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Diagnostic Info</span>
      </div>
      <div className="grid grid-cols-2 gap-sm pt-xs">
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Error Code</div>
      <div className="font-mono-data text-mono-data text-on-surface">ERR_QUOTA_EXCEEDED</div>
      </div>
      <div>
      <div className="font-label-sm text-label-sm text-on-surface-variant">Timestamp</div>
      <div className="font-mono-data text-mono-data text-on-surface">2023-10-27T14:32:01Z</div>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-sm w-full justify-center">
      <button className="h-[44px] px-lg rounded-DEFAULT bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center gap-xs hover:opacity-90 transition-opacity min-w-[140px] border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]" data-icon="sync">sync</span>
                      Retry Sync
                  </button>
      <button className="h-[44px] px-lg rounded-DEFAULT bg-transparent text-error border border-error font-label-md text-label-md flex items-center justify-center gap-xs hover:bg-error/10 transition-colors min-w-[140px] focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-[18px]" data-icon="delete_forever">delete_forever</span>
                      Reset Local Data
                  </button>
      </div>
      </main>
    </>
  );
}
