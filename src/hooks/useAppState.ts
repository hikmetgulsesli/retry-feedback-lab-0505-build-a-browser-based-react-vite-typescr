import { useState, useCallback, useEffect, createContext, useContext } from 'react';
import type { AppState, Page, AppSettings, Task } from '../types/domain';
import { DEFAULT_STATE } from '../types/domain';
import { loadState, saveState, clearState, StorageError } from '../utils/storage';

export interface AppActions {
  navigate: (page: Page) => void;
  setSearchQuery: (query: string) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  resetLocalData: () => void;
  dismissStorageError: () => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, partial: Partial<Task>) => void;
  deleteTask: (id: string) => void;
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

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    setState((prev) => {
      const newTask: Task = { ...task, id: crypto.randomUUID() };
      const next = { ...prev, tasks: [...prev.tasks, newTask] };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
  }, []);

  const updateTask = useCallback((id: string, partial: Partial<Task>) => {
    setState((prev) => {
      const next = {
        ...prev,
        tasks: prev.tasks.map((t) => (t.id === id ? { ...t, ...partial } : t)),
      };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
  }, []);

  const deleteTask = useCallback((id: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        tasks: prev.tasks.filter((t) => t.id !== id),
      };
      try {
        saveState(next);
      } catch {
        next.storageError = true;
      }
      return next;
    });
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
    addTask,
    updateTask,
    deleteTask,
  };

  return [state, actions];
}
