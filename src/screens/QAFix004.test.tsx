import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/vitest';

describe('QA-FIX-004 Runtime Failure Verification', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders without crashing when localStorage contains corrupted state', () => {
    localStorage.setItem('greenhouse-ops-state-v1', 'not-valid-json');
    expect(() => render(<App />)).not.toThrow();
    expect(screen.getByText(/Connection to Local Storage Lost/i)).toBeInTheDocument();
  });

  it('recovers gracefully when localStorage state has missing fields', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      // missing settings, tasks, searchQuery, storageError
    }));
    expect(() => render(<App />)).not.toThrow();
    expect(screen.getByText(/Alpha Systems/i)).toBeInTheDocument();
  });

  it('recovers gracefully when tasks array is null', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      searchQuery: '',
      settings: { density: 'compact', currency: 'usd', pushAlerts: true, emailAlerts: false },
      tasks: null,
      storageError: false,
    }));
    expect(() => render(<App />)).not.toThrow();
    expect(screen.getByText(/Alpha Systems/i)).toBeInTheDocument();
  });

  it('does not crash when clicking disabled Notifications button', () => {
    render(<App />);
    const notifications = screen.getAllByLabelText('Notifications');
    for (const btn of notifications) {
      expect(() => fireEvent.click(btn)).not.toThrow();
    }
  });

  it('does not crash when clicking disabled Help button', () => {
    render(<App />);
    const helpButtons = screen.getAllByLabelText('Help');
    for (const btn of helpButtons) {
      expect(() => fireEvent.click(btn)).not.toThrow();
    }
  });

  it('opens and closes profile modal without leaving stale DOM', async () => {
    render(<App />);
    const accountBtn = screen.getByLabelText('Account');
    fireEvent.click(accountBtn);
    expect(screen.getByRole('heading', { name: /Profile/i })).toBeInTheDocument();

    const closeBtn = screen.getByLabelText('Close profile panel');
    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /Profile/i })).not.toBeInTheDocument();
    });
  });

  it('navigates through all pages without runtime errors', () => {
    render(<App />);
    const pages = ['Pipeline', 'Insights', 'Settings'];
    for (const page of pages) {
      const btn = screen.getAllByText(page)[0].closest('button') || screen.getAllByText(page)[0];
      expect(() => fireEvent.click(btn)).not.toThrow();
    }
  });

  it('handles rapid search input changes without crashing', () => {
    render(<App />);
    const searchBox = screen.getByPlaceholderText(/Search operations/i);
    expect(() => {
      fireEvent.change(searchBox, { target: { value: 'a' } });
      fireEvent.change(searchBox, { target: { value: 'ab' } });
      fireEvent.change(searchBox, { target: { value: 'abc' } });
      fireEvent.change(searchBox, { target: { value: '' } });
    }).not.toThrow();
  });

  it('does not crash when storage error state is true', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'error',
      searchQuery: '',
      settings: { density: 'compact', currency: 'usd', pushAlerts: true, emailAlerts: false },
      tasks: [],
      storageError: true,
    }));
    expect(() => render(<App />)).not.toThrow();
    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument();
  });

  it('preserves existing task data when navigating between pages', () => {
    localStorage.setItem('greenhouse-ops-state-v1', JSON.stringify({
      currentPage: 'leads',
      searchQuery: '',
      settings: { density: 'compact', currency: 'usd', pushAlerts: true, emailAlerts: false },
      tasks: [
        { id: 'task-1', title: 'Custom Lead', company: 'Custom Lead', source: 'web', value: 500, status: 'new', equipment: 'Test', daysAgo: 2, contactName: 'Test', contactEmail: 'test@test.com', lastAction: 'now' },
      ],
      storageError: false,
    }));
    render(<App />);
    expect(screen.getByText(/Custom Lead/i)).toBeInTheDocument();

    const pipelineBtn = screen.getAllByText('Pipeline')[0].closest('button') || screen.getAllByText('Pipeline')[0];
    fireEvent.click(pipelineBtn);
    expect(screen.getByText(/Custom Lead/i)).toBeInTheDocument();
  });
});
