import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
    fireEvent.click(pipelineLinks[0].closest('a') || pipelineLinks[0]);
    expect(screen.getByRole('heading', { name: /Pipeline/i })).toBeInTheDocument();
  });

  it('navigates to insights when insights link is clicked', () => {
    render(<App />);
    const insightsLinks = screen.getAllByText((content, element) => {
      return content === 'Insights' && element?.tagName.toLowerCase() === 'span';
    });
    expect(insightsLinks.length).toBeGreaterThan(0);
    fireEvent.click(insightsLinks[0].closest('a') || insightsLinks[0]);
    expect(screen.getByRole('heading', { name: /Analytics Overview/i })).toBeInTheDocument();
  });

  it('navigates to settings when settings link is clicked', () => {
    render(<App />);
    const settingsLinks = screen.getAllByText((content, element) => {
      return content === 'Settings' && element?.tagName.toLowerCase() === 'span';
    });
    expect(settingsLinks.length).toBeGreaterThan(0);
    fireEvent.click(settingsLinks[0].closest('a') || settingsLinks[0]);
    expect(screen.getByRole('heading', { name: /System Configuration/i })).toBeInTheDocument();
  });
});
