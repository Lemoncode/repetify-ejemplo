import * as apiModel from './api';
import * as vmModel from './dashboard.vm';

export const mapperDeckFromApiModelToVmModel = (decks: apiModel.Deck[]): vmModel.Deck[] => {
  return decks.map(deck => ({
    id: deck.id,
    name: deck.name,
  }))
}
