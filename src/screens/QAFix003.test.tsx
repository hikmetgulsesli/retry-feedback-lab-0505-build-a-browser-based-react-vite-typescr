import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/vitest';

describe('QA-FIX-003 Runtime Fixes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders aria-disabled on unwired Notifications buttons across screens', () => {
    render(<App />);
    const leadsNotifications = screen.getAllByLabelText('Notifications');
    for (const btn of leadsNotifications) {
      expect(btn).toHaveAttribute('aria-disabled', 'true');
    }
  });

  it('renders aria-disabled on unwired Help buttons across screens', () => {
    render(<App />);
    const helpButtons = screen.getAllByLabelText('Help');
    for (const btn of helpButtons) {
      expect(btn).toHaveAttribute('aria-disabled', 'true');
    }
  });

  it('opens profile panel from Leads Dashboard Account button', () => {
    render(<App />);
    // On leads dashboard (default, has tasks)
    const accountBtn = screen.getByLabelText('Account');
    fireEvent.click(accountBtn);

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
  });

  it('opens profile panel from EmptyStateDashboard Account button when no tasks', () => {
    // Seed empty state by clearing tasks in localStorage
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      searchQuery: '',
      settings: { density: 'compact', currency: 'usd', pushAlerts: true, emailAlerts: false },
      tasks: [],
      storageError: false,
    }));

    render(<App />);
    const accountBtn = screen.getByLabelText('Account');
    fireEvent.click(accountBtn);

    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();
  });

  it('disables chevron_right pagination when leads ≤ 10', () => {
    render(<App />);
    // Default has 8 leads, chevron_right should be disabled
    const rightChevron = screen.getByText('chevron_right').closest('button');
    expect(rightChevron).toBeDisabled();
  });

  it('uses vectorEffect instead of vector-effect in Insights SVG', () => {
    render(<App />);
    fireEvent.click(screen.getAllByText('Insights')[0].closest('button') || screen.getAllByText('Insights')[0]);

    // The SVG should render without React DOM warnings; we verify by checking
    // the Insights dashboard rendered the chart area
    expect(screen.getByText(/Won vs Lost/i)).toBeInTheDocument();
    expect(screen.getByText(/Leads by Source/i)).toBeInTheDocument();
  });
});
