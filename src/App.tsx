import { useAppState } from './hooks/useAppState';
import { AppContext } from './hooks/useAppState';
import { PipelineBoard } from './screens/PipelineBoard';
import { InsightsDashboard } from './screens/InsightsDashboard';
import { EmptyStateDashboard } from './screens/EmptyStateDashboard';
import { StorageErrorState } from './screens/StorageErrorState';
import { Settings } from './screens/Settings';
import { LeadsDashboard } from './screens/LeadsDashboard';
import { LeadCreateeditForm } from './screens/LeadCreateeditForm';
import { ProfilePanel } from './screens/ProfilePanel';
import { useState } from 'react';

export type ModalView = 'none' | 'leadForm' | 'profile';

export default function App() {
  const [state, actions] = useAppState();
  const [modal, setModal] = useState<ModalView>('none');

  const openLeadForm = () => setModal('leadForm');
  const openProfile = () => setModal('profile');
  const closeModal = () => setModal('none');

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
      <div className="relative h-screen w-screen overflow-hidden bg-background">
        {page === 'leads' && state.tasks?.length === 0 && (
          <EmptyStateDashboard onCreateLead={openLeadForm} onOpenProfile={openProfile} />
        )}
        {page === 'leads' && state.tasks?.length > 0 && (
          <LeadsDashboard onCreateLead={openLeadForm} onOpenProfile={openProfile} />
        )}
        {page === 'pipeline' && (
          <PipelineBoard onCreateLead={openLeadForm} onOpenProfile={openProfile} />
        )}
        {page === 'insights' && (
          <InsightsDashboard onOpenProfile={openProfile} />
        )}
        {page === 'settings' && (
          <Settings onOpenProfile={openProfile} />
        )}
        {page === 'error' && <StorageErrorState />}

        {modal === 'leadForm' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <LeadCreateeditForm onClose={closeModal} onSave={actions.addTask} />
          </div>
        )}

        {modal === 'profile' && (
          <ProfilePanel onClose={closeModal} />
        )}
      </div>
    </AppContext.Provider>
  );
}
