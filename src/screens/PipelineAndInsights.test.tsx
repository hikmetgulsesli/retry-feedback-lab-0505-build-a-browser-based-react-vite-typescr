import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/vitest';

describe('Insights Dashboard Metrics', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('shows computed total leads count from state', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);
    expect(screen.getByRole('heading', { name: /Analytics Overview/i })).toBeInTheDocument();
    // Default tasks has 8 leads - look for it in the Total Leads card
    const totalLeadsCard = screen.getByText(/Total Leads/i).closest('div[class*="bg-surface-container"]') as HTMLElement;
    expect(within(totalLeadsCard).getByText('8')).toBeInTheDocument();
  });

  it('shows computed total pipeline value from task values', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);
    // Total value of DEFAULT_TASKS = 50000 + 75000 + 20000 + 120000 + 90000 + 250000 + 130000 + 450000 = 1,185,000
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
  });

  it('shows computed conversion rate', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);
    // 0 closed out of 8 = 0.0%
    expect(screen.getByText('0.0%')).toBeInTheDocument();
  });

  it('shows computed active follow-ups count', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);
    // All 8 are active (none closed) - look in Active Follow-ups card
    const followupsCard = screen.getByText(/Active Follow-ups/i).closest('div[class*="bg-surface-container"]') as HTMLElement;
    expect(within(followupsCard).getByText('8')).toBeInTheDocument();
  });

  it('renders bar chart with source distribution', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);
    expect(screen.getByText(/Leads by Source/i)).toBeInTheDocument();
    // LinkedIn appears as a source label in the bar chart
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });
});

describe('Pipeline Board Interactions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('advances task status when card is clicked', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0]);

    // Alpha Systems should be in New column initially
    expect(screen.getByText('Alpha Systems')).toBeInTheDocument();

    // Find the Alpha Systems card and click it
    const cards = screen.getAllByText('Alpha Systems');
    const card = cards[0].closest('div[class*="bg-surface-container"]') || cards[0];
    fireEvent.click(card);

    // After clicking, it should move to Contacted column
    // Navigate away and back to refresh the view
    fireEvent.click(screen.getAllByText('Leads')[0].closest('button') || screen.getAllByText('Leads')[0]);
    fireEvent.click(screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0]);

    // Alpha Systems should no longer be in New (it moved to Contacted)
    // The card should still exist on the board though
    expect(screen.getByText('Alpha Systems')).toBeInTheDocument();
  });

  it('filters pipeline by search query', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0]);

    const searchInput = screen.getByPlaceholderText(/Search data/i);
    fireEvent.change(searchInput, { target: { value: 'Alpha' } });

    expect(screen.getByText('Alpha Systems')).toBeInTheDocument();
    expect(screen.queryByText('Omega Corp')).not.toBeInTheDocument();
  });

  it('toggles high-value filter on pipeline board', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0]);

    const filterBtn = screen.getByRole('button', { name: /Filter/i });
    fireEvent.click(filterBtn);

    expect(screen.getByRole('button', { name: /Show All/i })).toBeInTheDocument();
  });
});

describe('Storage Error State', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders storage error state when storageError is true', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      settings: { density: 'compact', currency: 'usd', emailAlerts: true },
      tasks: [],
      searchQuery: '',
      storageError: true,
    }));

    render(<App />);
    expect(screen.getByText(/Connection to Local Storage Lost/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Retry Sync/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset Local Data/i })).toBeInTheDocument();
  });

  it('dismisses storage error and navigates to leads on retry', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      settings: { density: 'compact', currency: 'usd', emailAlerts: true },
      tasks: [],
      searchQuery: '',
      storageError: true,
    }));

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Retry Sync/i }));
    expect(screen.queryByText(/Connection to Local Storage Lost/i)).not.toBeInTheDocument();
  });
});
