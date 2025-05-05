import { Deck } from './dashboard-api.model';
import { decks } from './dashboard.mock-data';

export const getDecks = async (): Promise<Deck[]> => {
  return Promise.resolve(decks);
}
