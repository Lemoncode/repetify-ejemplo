import axios from 'axios';
import { Card } from './card-api.model';

export const getCards = (deckId: string): Promise<Card[]> => {
  return axios
    .get(`/api/Deck/${deckId}/cards`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching cards:', error);
      return [];
    });
};
