import React from 'react';
import { Deck } from './dashboard.vm';
import { getDecks } from './api';
import { DashboardListComponent } from './dashboard-list.component';
import { mapperDeckFromApiModelToVmModel } from './dashboard.mappers';

export const DashboardPod: React.FC = () => {
  const [decks, setDecks] = React.useState<Deck[]>([]);

  React.useEffect(() => {
    loadDeck();
  }, []);

  const loadDeck = async () => {
    const apiDecks = await getDecks();
    console.log(apiDecks);
    const vmDecks = mapperDeckFromApiModelToVmModel(apiDecks);
    setDecks(vmDecks);
  }

  return <DashboardListComponent decks={decks} />;
};
