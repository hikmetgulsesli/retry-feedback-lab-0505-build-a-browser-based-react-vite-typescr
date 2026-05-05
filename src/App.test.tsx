import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';
import { loadState, saveState, clearState, StorageError } from './utils/storage';
import { DEFAULT_STATE, DEFAULT_SETTINGS } from './types/domain';

import '@testing-library/jest-dom/vitest';


describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('loads default state when localStorage is empty', () => {
    const state = loadState();
    expect(state.currentPage).toBe('leads');
    expect(state.tasks.length).toBeGreaterThan(0);
  });

  it('saves and loads state', () => {
    const state = { ...DEFAULT_STATE, currentPage: 'settings' as const };
    saveState(state);
    const loaded = loadState();
    expect(loaded.currentPage).toBe('settings');
  });

  it('clears state', () => {
    saveState(DEFAULT_STATE);
    clearState();
    const loaded = loadState();
    expect(loaded.currentPage).toBe('leads');
  });

  it('returns storageError on quota exceeded', () => {
    const originalSetItem = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      const err = new DOMException('Quota exceeded', 'QuotaExceededError');
      throw err;
    };
    try {
      expect(() => saveState(DEFAULT_STATE)).toThrow(StorageError);
    } finally {
      Storage.prototype.setItem = originalSetItem;
    }
  });
});

describe('App routing', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders leads dashboard by default', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Leads Dashboard/i })).toBeInTheDocument();
  });

  it('navigates to pipeline when pipeline link is clicked', () => {
    render(<App />);
    const pipelineLinks = screen.getAllByText((content, element) => {
      return content === 'Pipeline' && element?.tagName.toLowerCase() === 'span';
    });
    expect(pipelineLinks.length).toBeGreaterThan(0);
    fireEvent.click(pipelineLinks[0].closest('button') || pipelineLinks[0]);
    expect(screen.getByRole('heading', { name: /Pipeline/i })).toBeInTheDocument();
  });

  it('navigates to insights when insights link is clicked', () => {
    render(<App />);
    const insightsLinks = screen.getAllByText((content, element) => {
      return content === 'Insights' && element?.tagName.toLowerCase() === 'span';
    });
    expect(insightsLinks.length).toBeGreaterThan(0);
    fireEvent.click(insightsLinks[0].closest('button') || insightsLinks[0]);
    expect(screen.getByRole('heading', { name: /Analytics Overview/i })).toBeInTheDocument();
  });

  it('navigates to settings when settings link is clicked', () => {
    render(<App />);
    const settingsLinks = screen.getAllByText((content, element) => {
      return content === 'Settings' && element?.tagName.toLowerCase() === 'span';
    });
    expect(settingsLinks.length).toBeGreaterThan(0);
    fireEvent.click(settingsLinks[0].closest('button') || settingsLinks[0]);
    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();
  });
});

describe('Primary workflow screens', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('opens lead form modal and creates a new lead', () => {
    render(<App />);
    const newLeadBtn = screen.getByRole('button', { name: /New Lead/i });
    fireEvent.click(newLeadBtn);

    expect(screen.getByRole('heading', { name: /New Lead Profile/i })).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(nameInput, { target: { value: 'Test Contact' } });

    const companyInput = screen.getByLabelText(/Company Name/i);
    fireEvent.change(companyInput, { target: { value: 'TestCorp' } });

    const valueInput = screen.getByLabelText(/Estimated Value/i);
    fireEvent.change(valueInput, { target: { value: '50000' } });

    const saveBtn = screen.getByRole('button', { name: /Save Lead/i });
    fireEvent.click(saveBtn);

    expect(screen.queryByRole('heading', { name: /New Lead Profile/i })).not.toBeInTheDocument();
    expect(screen.getByText('Test Contact')).toBeInTheDocument();
  });

  it('cancels lead form without creating a lead', () => {
    render(<App />);
    const initialCount = screen.getAllByText(/Sarah Jenkins|Marcus Vance|Elena Rostova/).length;

    fireEvent.click(screen.getByRole('button', { name: /New Lead/i }));
    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));

    expect(screen.queryByRole('heading', { name: /New Lead Profile/i })).not.toBeInTheDocument();
  });

  it('opens and closes profile panel', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/account_circle/i)[0];
    fireEvent.click(profileBtn);

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
  });

  it('filters leads by status', () => {
    render(<App />);
    const allButtons = screen.getAllByRole('button');
    const newFilter = allButtons.find(b => b.textContent?.trim().startsWith('New') && !b.textContent?.includes('Lead'));
    expect(newFilter).toBeTruthy();
    fireEvent.click(newFilter!);

    expect(screen.getByText('Alpha Systems')).toBeInTheDocument();
    expect(screen.queryByText('Delta Heavy')).not.toBeInTheDocument();
  });

  it('filters leads by search query', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Filter leads/i);
    fireEvent.change(searchInput, { target: { value: 'Alpha' } });

    expect(screen.getByText('Alpha Systems')).toBeInTheDocument();
    expect(screen.queryByText('Omega Corp')).not.toBeInTheDocument();
  });

  it('pipeline board shows columns for each status', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0]);

    expect(screen.getByRole('heading', { name: /Pipeline/i })).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByText('Contacted')).toBeInTheDocument();
    expect(screen.getByText('Proposal')).toBeInTheDocument();
    expect(screen.getByText('Negotiating')).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('settings page updates density preference', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();

    const relaxedRadio = screen.getByLabelText(/Relaxed/i);
    fireEvent.click(relaxedRadio);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.density).toBe('relaxed');
  });

  it('settings page toggles email alerts', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.emailAlerts).toBe(false);
  });

  it('shows empty state when all leads are removed', () => {
    localStorage.clear();
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({ currentPage: 'leads', settings: DEFAULT_SETTINGS, tasks: [], searchQuery: '', storageError: false }));
    render(<App />);

    expect(screen.getByText(/No maintenance leads yet/i)).toBeInTheDocument();
    const createLeadButtons = screen.getAllByRole('button', { name: /Create Lead/i });
    expect(createLeadButtons.length).toBeGreaterThan(0);
  });

  it('insights dashboard renders analytics overview', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);

    expect(screen.getByRole('heading', { name: /Analytics Overview/i })).toBeInTheDocument();
    expect(screen.getByText(/Total Leads/i)).toBeInTheDocument();
    expect(screen.getByText(/Conversion Rate/i)).toBeInTheDocument();
  });
});
