import React from 'react';
import { Deck } from './dashboard.vm';
import { getDecks } from './api';
import { DashboardListComponent } from './components';
import { mapperDeckFromApiModelToVmModel } from './dashboard.mappers';

export const DashboardPod: React.FC = () => {
  const [decks, setDecks] = React.useState<Deck[]>([]);

  React.useEffect(() => {
    loadDeck();
  }, []);

  const loadDeck = async () => {
    const apiDecks = await getDecks();
    const vmDecks = mapperDeckFromApiModelToVmModel(apiDecks);
    setDecks(vmDecks);
  }

  return <DashboardListComponent decks={decks} />;
};
