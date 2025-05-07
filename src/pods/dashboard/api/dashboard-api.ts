import axios from 'axios';
import { Deck } from './dashboard-api.model';
import { ENV } from '#core/constants/env.constants.ts';

export const getDecks = async (): Promise<Deck[]> => {
  try {
    const response = await axios.get(`${ENV.API_BASE_URL}/Deck/user-decks`);
    const decks: Deck[] = response.data;
    return decks;
  } catch (error) {
    console.error('Error fetching decks:', error);
    return [];
  }
};
