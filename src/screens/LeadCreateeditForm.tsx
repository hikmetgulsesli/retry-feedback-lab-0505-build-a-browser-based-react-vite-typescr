// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Lead Create/Edit Form
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { Task } from "../types/domain";

interface LeadCreateeditFormProps {
  onClose: () => void;
  onSave: (task: Omit<Task, 'id'>) => void;
}

export function LeadCreateeditForm(props: LeadCreateeditFormProps) {
  const { onClose, onSave } = props;
  const [form, setForm] = useState({
    contactName: '',
    company: '',
    source: '',
    value: '',
    status: 'new' as Task['status'],
    nextActionDate: '',
    title: '',
    equipment: 'Automated Irrigation',
    daysAgo: 0,
    contactEmail: '',
    lastAction: 'Just now',
  });

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.contactName.trim()) return;
    onSave({
      title: form.title || form.contactName,
      company: form.company || 'Unknown',
      source: form.source || 'Website',
      value: Number(form.value) || 0,
      status: form.status,
      equipment: form.equipment,
      daysAgo: 0,
      contactName: form.contactName,
      contactEmail: form.contactEmail || '',
      lastAction: form.lastAction,
    });
    onClose();
  };

  return (
    <>
      {/* Modal Container */}
      <div className="bg-surface-container w-full max-w-2xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.5)] border border-outline-variant flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between bg-surface-container-high">
      <div>
      <h2 className="font-h1 text-h1 text-on-surface">New Lead Profile</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Enter prospect details for pipeline tracking.</p>
      </div>
      <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container rounded-DEFAULT p-1" type="button">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>close</span>
      </button>
      </div>
      {/* Form Body */}
      <div className="p-xl flex-1 overflow-y-auto">
      <form id="leadForm" onSubmit={handleSubmit} className="space-y-xl">
      {/* Section: Primary Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* Full Name */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="fullName">Full Name <span className="text-error">*</span></label>
      <input className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target px-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="fullName" name="fullName" placeholder="Jane Doe" required={true} type="text" value={form.contactName} onChange={(e) => handleChange('contactName', e.target.value)} />
      </div>
      {/* Company Name */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="companyName">Company Name</label>
      <input className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target px-md font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors" id="companyName" name="companyName" placeholder="Acme Corp" type="text" value={form.company} onChange={(e) => handleChange('company', e.target.value)} />
      </div>
      </div>
      {/* Section: Qualification */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {/* Lead Source */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="leadSource">Lead Source</label>
      <div className="relative">
      <select className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target pl-md pr-10 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors appearance-none cursor-pointer" id="leadSource" name="leadSource" value={form.source} onChange={(e) => handleChange('source', e.target.value)}>
      <option disabled={true} value="">Select Source</option>
      <option value="Website">Website Inquiry</option>
      <option value="Referral">Referral</option>
      <option value="Cold Call">Cold Call</option>
      <option value="LinkedIn">LinkedIn</option>
      <option value="Conference">Conference</option>
      <option value="Direct">Direct</option>
      <option value="Inbound">Inbound</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      {/* Estimated Value */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="estimatedValue">Estimated Value ($)</label>
      <div className="relative">
      <span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant font-mono-data text-mono-data">$</span>
      <input className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target pl-8 pr-md font-mono-data text-mono-data text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors text-right" id="estimatedValue" name="estimatedValue" placeholder="0.00" type="number" value={form.value} onChange={(e) => handleChange('value', e.target.value)} />
      </div>
      </div>
      {/* Status */}
      <div className="space-y-sm">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="status">Status</label>
      <div className="relative">
      <select className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target pl-md pr-10 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors appearance-none cursor-pointer" id="status" name="status" value={form.status} onChange={(e) => handleChange('status', e.target.value)}>
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="proposal">Proposal Sent</option>
      <option value="negotiating">Negotiating</option>
      <option value="closed">Closed</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
      </div>
      </div>
      </div>
      {/* Section: Timeline */}
      <div className="space-y-sm w-full md:w-1/2">
      <label className="block font-label-md text-label-md text-on-surface" htmlFor="nextActionDate">Next Action Date</label>
      <div className="relative">
      <input className="w-full bg-surface-variant border border-outline-variant rounded-DEFAULT h-touch_target pl-md pr-10 font-body-md text-body-md text-on-surface focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors appearance-none cursor-pointer [color-scheme:dark]" id="nextActionDate" name="nextActionDate" type="date" value={form.nextActionDate} onChange={(e) => handleChange('nextActionDate', e.target.value)} />
      </div>
      </div>
      </form>
      </div>
      {/* Footer Actions */}
      <div className="px-xl py-lg border-t border-outline-variant bg-surface-container-low flex justify-end gap-md">
      <button onClick={onClose} className="h-touch_target px-lg border border-outline-variant text-on-surface font-label-md text-label-md rounded-DEFAULT hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-low flex items-center justify-center" type="button">
                      Cancel
                  </button>
      <button form="leadForm" className="h-touch_target px-lg bg-primary-container text-on-primary-container font-label-md text-label-md rounded-DEFAULT hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-surface-container-low flex items-center justify-center gap-sm" type="submit">
      <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>save</span>
                      Save Lead
                  </button>
      </div>
      </div>
    </>
  );
}
