import { useAppState } from './hooks/useAppState';
import { AppContext } from './hooks/useAppState';
import { PipelineBoard } from './screens/PipelineBoard';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { EmptyStateDashboard } from './screens/EmptyStateDashboard';
import { StorageErrorState } from './screens/StorageErrorState';
import { Settings } from './screens/Settings';
import { LeadsDashboard } from './screens/LeadsDashboard';

export default function App() {
  const [state, actions] = useAppState();

  if (state.storageError) {
    return (
      <AppContext.Provider value={{ state, actions }}>
        <StorageErrorState />
      </AppContext.Provider>
    );
  }

  const page = state.currentPage;

  return (
    <AppContext.Provider value={{ state, actions }}>
      {page === 'leads' && state.tasks.length === 0 && <EmptyStateDashboard />}
      {page === 'leads' && state.tasks.length > 0 && <LeadsDashboard />}
      {page === 'pipeline' && <PipelineBoard />}
      {page === 'insights' && <InsightsDashboard />}
      {page === 'settings' && <Settings />}
      {page === 'error' && <StorageErrorState />}
    </AppContext.Provider>
  );
}
