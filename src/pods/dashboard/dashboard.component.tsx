import React from 'react';
import { Deck } from './dashboard.vm';
import * as classes from './dashboard.component.style';
import { NavigationButton } from '#common/components/index.ts';

interface Props {
  decks: Deck[];
}

const colorStylePalettes = [
  { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  { bg: '#fdf2f8', border: '#fbcfe8', text: '#be185d' },
  { bg: '#ecfdf5', border: '#a7f3d0', text: '#065f46' },
];

export const DashboardListComponent: React.FC<Props> = ({ decks }) => {
  return (
    <div className={classes.content}>
      <h1 className={classes.title}>Elige tu mazo</h1>
      <p className={classes.subtitle}>Selecciona una categoría para comenzar a responder preguntas:</p>
      <div className={classes.cards}>
        {decks.map((deck, index) => {
          const colorStyle = colorStylePalettes[index % colorStylePalettes.length];
          return (
            <NavigationButton
              key={deck.id}
              path="/card/$deckId"
              params={{ deckId: deck.id }}
              sx={classes.navigationButtonSx(colorStyle)}
              aria-label={`Seleccionar mazo ${deck.name}`}
            >
              <span className={classes.cardText(colorStyle)}>{deck.name}</span>
            </NavigationButton>
          );
        })}
      </div>
    </div>
  );
};
