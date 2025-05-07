import axios from 'axios';
import { Deck } from './dashboard-api.model';
import { ENV } from '#core/constants/env.constants.ts';

export const getDecks = (): Promise<Deck[]> => {
  return axios
    .get(`${ENV.API_BASE_URL}/Deck/user-decks`, {
      withCredentials: true,
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching decks:', error);
      return [];
    });
};
