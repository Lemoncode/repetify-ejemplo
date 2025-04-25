export interface Card {
  id: string;
  deckId: string;
  originalWord: string;
  translateWord: string;
  correctReviewStreak: number;
  nextReviewDate: Date;
  previousCorrectReview: Date;
};
