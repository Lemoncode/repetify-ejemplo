export interface Card {
  id: string;
  deckId: string;
  originalWord: string;
  translateWord: string;
};

export const createEmptyCard = (): Card => ({
  id: '',
  deckId: '',
  originalWord: '',
  translateWord: '',
})
