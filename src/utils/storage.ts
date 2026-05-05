import type { AppState } from '../types/domain';
import { DEFAULT_STATE } from '../types/domain';

const STORAGE_KEY = 'greenhouse-ops-state-v1';

export class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StorageError';
  }
}

export function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      settings: { ...DEFAULT_STATE.settings, ...parsed.settings },
      tasks: Array.isArray(parsed.tasks) ? parsed.tasks : DEFAULT_STATE.tasks,
    };
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
    return { ...DEFAULT_STATE, storageError: true };
  }
}

export function saveState(state: AppState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_QUOTA_EXCEEDED_ERR')) {
      throw new StorageError('Local storage quota exceeded');
    }
    throw new StorageError('Failed to save state: ' + (e instanceof Error ? e.message : String(e)));
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    throw new StorageError('Failed to clear state: ' + (e instanceof Error ? e.message : String(e)));
  }
}
