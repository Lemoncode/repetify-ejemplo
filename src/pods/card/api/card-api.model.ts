export interface Card {
  id: string;
  deckId: string;
  originalWord?: string;
  translatedWord?: string;
  correctReviewStreak?: number;
  nextReviewDate?: string;
  previousCorrectReview?: string;
}
