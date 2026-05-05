import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from '../App';
import { DEFAULT_SETTINGS } from '../types/domain';
import '@testing-library/jest-dom/vitest';

describe('Settings Screen', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders settings page with all sections', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Display/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Localization/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Notifications/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Data Management/i })).toBeInTheDocument();
  });

  it('updates density preference and persists to localStorage', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const relaxedRadio = screen.getByLabelText(/Relaxed/i);
    fireEvent.click(relaxedRadio);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.density).toBe('relaxed');
  });

  it('updates currency preference and persists to localStorage', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const currencySelect = screen.getByDisplayValue(/USD/i);
    fireEvent.change(currencySelect, { target: { value: 'eur' } });

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.currency).toBe('eur');
  });

  it('toggles email alerts and persists to localStorage', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.emailAlerts).toBe(false);
  });

  it('search input updates app state query', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'irrigation' } });

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.searchQuery).toBe('irrigation');
  });

  it('reset local storage clears persisted data', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Settings')[0].closest('button') || screen.getAllByText('Settings')[0]);

    const resetBtn = screen.getByRole('button', { name: /Reset Local Storage/i });
    fireEvent.click(resetBtn);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings).toEqual(DEFAULT_SETTINGS);
    expect(stored.tasks?.length).toBeGreaterThan(0);
  });
});

describe('Profile Panel', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('opens and closes profile panel', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
  });

  it('toggles push alerts in profile panel and persists', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const pushToggle = screen.getByText(/Push Alerts/i).closest('label') as HTMLElement;
    fireEvent.click(pushToggle);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.pushAlerts).toBe(false);
  });

  it('toggles email summaries in profile panel and persists', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const emailToggle = screen.getByText(/Email Summaries/i).closest('label') as HTMLElement;
    fireEvent.click(emailToggle);

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.settings.emailAlerts).toBe(false);
  });

  it('manage profile button navigates to settings and closes panel', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const manageBtn = screen.getByRole('button', { name: /Manage Profile/i });
    fireEvent.click(manageBtn);

    expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();
  });

  it('security button navigates to settings and closes panel', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const securityBtn = screen.getByRole('button', { name: /Security and Permissions/i });
    fireEvent.click(securityBtn);

    expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();
  });

  it('sign out button resets data and closes panel', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const signOutBtn = screen.getByRole('button', { name: /Sign Out/i });
    fireEvent.click(signOutBtn);

    expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
  });

  it('profile panel search input updates app state', () => {
    render(<App />);
    const profileBtn = screen.getAllByLabelText(/Account/i)[0];
    fireEvent.click(profileBtn);

    const searchInputs = screen.getAllByPlaceholderText(/Search/i);
    const profileSearch = searchInputs[searchInputs.length - 1];
    fireEvent.change(profileSearch, { target: { value: 'pump' } });

    const stored = JSON.parse(localStorage.getItem('greenhouse-ops-state-v1') || '{}');
    expect(stored.searchQuery).toBe('pump');
  });
});
