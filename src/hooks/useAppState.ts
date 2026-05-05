import { useState, useCallback, useEffect, createContext, useContext } from 'react';
import type { AppState, Page, AppSettings } from '../types/domain';
import { DEFAULT_STATE } from '../types/domain';
import { loadState, saveState, clearState, StorageError } from '../utils/storage';

export interface AppActions {
  navigate: (page: Page) => void;
  setSearchQuery: (query: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetLocalData: () => void;
  dismissStorageError: () => void;
}

export const AppContext = createContext<{ state: AppState; actions: AppActions } | null>(null);

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContext.Provider');
  return ctx;
}

export function useAppState(): [AppState, AppActions] {
  const [state, setState] = useState<AppState>(() => loadState());

  const persist = useCallback((next: AppState) => {
    try {
      saveState(next);
      setState(next);
    } catch (e) {
      if (e instanceof StorageError) {
        setState((prev) => ({ ...prev, storageError: true }));
      }
    }
  }, []);

  const navigate = useCallback((page: Page) => {
    setState((prev) => {
      const next = { ...prev, currentPage: page };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => {
      const next = { ...prev, searchQuery: query };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
  }, []);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    setState((prev) => {
      const next = {
        ...prev,
        settings: { ...prev.settings, ...partial },
      };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
  }, []);

  const resetLocalData = useCallback(() => {
    clearState();
    setState(DEFAULT_STATE);
  }, []);

  const dismissStorageError = useCallback(() => {
    setState((prev) => ({ ...prev, storageError: false }));
  }, []);

  // Persist on mount if state loaded with defaults
  useEffect(() => {
    try {
      saveState(state);
    } catch {
      setState((prev) => ({ ...prev, storageError: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actions: AppActions = {
    navigate,
    setSearchQuery,
    updateSettings,
    resetLocalData,
    dismissStorageError,
  };

  return [state, actions];
}
