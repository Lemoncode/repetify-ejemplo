import axios from 'axios';
import { Deck } from './dashboard-api.model';

export const getDecks = (): Promise<Deck[]> => {
  return axios
    .get(`/api/Deck/user-decks`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching decks:', error);
      return [];
    });
};
