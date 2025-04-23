import * as apiModel from './api';
import * as vmMomdel from './card-vm';

export const mapCardFromApiModelToVmModel = (card: apiModel.Card): vmMomdel.Card => ({
  id: card.id,
  deckId: card.deckId,
  originalWord: card.originalWord,
  translateWord: card.translateWord,
})
