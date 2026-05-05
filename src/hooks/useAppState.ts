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

  const navigate = useCallback((page: Page) => {
    setState((prev) => ({ ...prev, currentPage: page }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const resetLocalData = useCallback(() => {
    clearState();
    setState(DEFAULT_STATE);
  }, []);

  const dismissStorageError = useCallback(() => {
    setState((prev) => ({ ...prev, storageError: false }));
  }, []);

  const addTask = useCallback((task: Omit<Task, 'id'>) => {
    const newId = typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const newTask: Task = { ...task, id: newId };
    setState((prev) => ({ ...prev, tasks: [...prev.tasks, newTask] }));
  }, []);

  const updateTask = useCallback((id: string, partial: Partial<Task>) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((t) => (t.id === id ? { ...t, ...partial } : t)),
    }));
  }, []);

  const deleteTask = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((t) => t.id !== id),
    }));
  }, []);

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    if (state.storageError) return;
    try {
      saveState(state);
    } catch (e) {
      if (e instanceof StorageError) {
        setState((prev) => ({ ...prev, storageError: true }));
      }
    }
  }, [state]);

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
