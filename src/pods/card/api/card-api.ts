import { cards } from './card-mock';
import { Card } from './card-api-model';

export const countCard = (deckId: string): Promise<number> => Promise.resolve(cards.filter(card => card.deckId === deckId).length);

export const getCard = (deckId: string, page: number, pageSize: number): Promise<Card> => {
  const totalPageSize = pageSize - 1
  const startIndex = page - 1;
  if (page > totalPageSize) {
    return Promise.resolve(cards.filter(card => card.deckId === deckId)[totalPageSize]);
  }
  return Promise.resolve(cards.filter(card => card.deckId === deckId)[startIndex]);
}

export const reviewCard = (deckId: string, cardId: string, isCorrect: boolean): Promise<boolean> => {
  const reviewCard = cards.find(card => card.id === cardId && card.deckId === deckId);

  if (!reviewCard) {
    return Promise.resolve(false);
  } else {
    return Promise.resolve(isCorrect);
  }
}
