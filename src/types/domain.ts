export type Page = 'leads' | 'pipeline' | 'insights' | 'settings' | 'error';

export interface AppSettings {
  density: 'compact' | 'relaxed';
  currency: 'usd' | 'eur';
  emailAlerts: boolean;
}

export interface Task {
  id: string;
  title: string;
  company: string;
  source: string;
  value: number;
  status: 'new' | 'contacted' | 'proposal' | 'negotiating' | 'closed';
  equipment: string;
  daysAgo: number;
  contactName: string;
  contactEmail: string;
  lastAction: string;
}

export interface AppState {
  currentPage: Page;
  settings: AppSettings;
  tasks: Task[];
  searchQuery: string;
  storageError: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  density: 'compact',
  currency: 'usd',
  emailAlerts: true,
};

export const DEFAULT_TASKS: Task[] = [
  {
    id: '1',
    title: 'Alpha Systems',
    company: 'Alpha Systems',
    source: 'Website',
    value: 50000,
    status: 'new',
    equipment: 'Automated Irrigation',
    daysAgo: 2,
    contactName: 'Sarah Jenkins',
    contactEmail: 's.jenkins@agritech.com',
    lastAction: '2 hours ago',
  },
  {
    id: '2',
    title: 'Omega Corp',
    company: 'Omega Corp',
    source: 'Referral',
    value: 75000,
    status: 'new',
    equipment: 'HVAC Control Grid',
    daysAgo: 1,
    contactName: 'Marcus Vance',
    contactEmail: 'mvance@hydro-corp.net',
    lastAction: 'Yesterday',
  },
  {
    id: '3',
    title: 'Zeta Tech',
    company: 'Zeta Tech',
    source: 'Cold Call',
    value: 20000,
    status: 'new',
    equipment: 'Zone Monitors',
    daysAgo: 3,
    contactName: 'Elena Rostova',
    contactEmail: 'elena.r@biofarms.io',
    lastAction: 'Oct 12, 2023',
  },
  {
    id: '4',
    title: 'Delta Heavy',
    company: 'Delta Heavy',
    source: 'LinkedIn',
    value: 120000,
    status: 'contacted',
    equipment: 'Hydro-pump Array',
    daysAgo: 5,
    contactName: 'David Chen',
    contactEmail: 'd.chen@verdant.co',
    lastAction: 'Oct 10, 2023',
  },
  {
    id: '5',
    title: 'Epsilon Grid',
    company: 'Epsilon Grid',
    source: 'LinkedIn',
    value: 90000,
    status: 'contacted',
    equipment: 'Hydro-pump Array',
    daysAgo: 7,
    contactName: 'Lisa Park',
    contactEmail: 'lpark@epsilongrid.com',
    lastAction: '3 days ago',
  },
  {
    id: '6',
    title: 'Gamma Logistics',
    company: 'Gamma Logistics',
    source: 'Conference',
    value: 250000,
    status: 'proposal',
    equipment: 'Climate Facility',
    daysAgo: 12,
    contactName: 'James Miller',
    contactEmail: 'jmiller@gammalog.com',
    lastAction: '1 week ago',
  },
  {
    id: '7',
    title: 'Sigma Energy',
    company: 'Sigma Energy',
    source: 'Direct',
    value: 130000,
    status: 'proposal',
    equipment: 'Power Redundancy',
    daysAgo: 10,
    contactName: 'Anna Kovacs',
    contactEmail: 'ak@sigmaenergy.hu',
    lastAction: '4 days ago',
  },
  {
    id: '8',
    title: 'Titan Aerospace',
    company: 'Titan Aerospace',
    source: 'Inbound',
    value: 450000,
    status: 'negotiating',
    equipment: 'Filtration System V2',
    daysAgo: 18,
    contactName: 'Robert Ford',
    contactEmail: 'r.ford@titanaero.com',
    lastAction: '2 days ago',
  },
];

export const DEFAULT_STATE: AppState = {
  currentPage: 'leads',
  settings: DEFAULT_SETTINGS,
  tasks: DEFAULT_TASKS,
  searchQuery: '',
  storageError: false,
};
