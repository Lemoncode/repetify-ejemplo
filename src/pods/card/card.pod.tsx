import React from 'react';
import { useParams } from '@tanstack/react-router';
import { getCards } from './api';
import { Card } from './card.vm';
import { mapperCardsFromApiModelToVmModel } from './card.mappers';
import { CardComponent } from './card.component';
import { CardSummaryComponent, EmptyDeck } from './components/';

export const CardPod: React.FC = () => {
  const [cards, setCards] = React.useState<Card[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [correctCount, setCorrectCount] = React.useState(0);
  const { deckId } = useParams({ strict: false });

  React.useEffect(() => {
    loadCards();
  }, [deckId]);

  const loadCards = async () => {
    if (!deckId) return;
    const apiCards = await getCards(deckId);
    setCards(mapperCardsFromApiModelToVmModel(apiCards));
  };

  const handleReveal = () => setShowAnswer(true);

  const handleNext = (wasCorrect: boolean) => {
    if (wasCorrect) {
      setCorrectCount(count => count + 1);
    }
    setShowAnswer(false);
    setCurrentIndex(index => index + 1);
  };

  if (cards.length == 0) {
    return <EmptyDeck />;
  }

  if (currentIndex >= cards.length) {
    return <CardSummaryComponent correctCount={correctCount} total={cards.length} />;
  }

  return (
    <CardComponent
      card={cards[currentIndex]}
      currentIndex={currentIndex}
      total={cards.length}
      showAnswer={showAnswer}
      onReveal={handleReveal}
      onNext={handleNext}
    />
  );
};
