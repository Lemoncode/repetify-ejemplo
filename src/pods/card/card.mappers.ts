import * as apiModel from './api';
import * as vmModel from './card.vm';

export const mapperCardsFromApiModelToVmModel = (cards: apiModel.Card[]): vmModel.Card[] => {
  return cards.map(card => ({
    id: card.id,
    originalWord: card.originalWord,
    translatedWord: card.translatedWord,
  }));
};
