import React from 'react';
import { useParams } from '@tanstack/react-router';
import { CardComponent, AnswerComponent } from './components';
import { getCard, countCard } from './api';
import { Card, createEmptyCard } from './card-vm';
import { mapCardFromApiModelToVmModel } from './card-mappers';

export const CardPod: React.FC = () => {
  const { deckId } = useParams({ strict: false });
  const [card, setCard] = React.useState<Card>(createEmptyCard());
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [isNotAnswer, setIsNotAnswer] = React.useState<boolean>(true);

  React.useEffect(() => {
    load();
  }, [])

  const load = async () => {
    if (deckId) {
      const totalCards = await countCard(deckId);
      setTotalPage(totalCards);

      Promise.all([getCard(deckId, page, totalCards)]).then(([cardApi]) => {
        const card = mapCardFromApiModelToVmModel(cardApi);
        setCard(card);
      });
    }
  }

  const handleShowAnswer = () => {
    setIsNotAnswer(false);
  }

  const handleAccept = async () => {
    if (deckId) {
      setIsNotAnswer(true);
      const nextPage = page + 1;
      const card = await getCard(deckId, nextPage, totalPage);
      const cardVm = mapCardFromApiModelToVmModel(card);
      setCard(cardVm);
      setPage(nextPage);
    }
  }

  const handleFail = () => {
    setIsNotAnswer(true);
  }

  return (
    <div>
      {isNotAnswer === true ? <CardComponent totalPage={totalPage} page={page} card={card} onShowAnswer={handleShowAnswer} /> : <AnswerComponent totalPage={totalPage} page={page} card={card} onAccept={handleAccept} onFail={handleFail} />
      }
    </div>
  )
};
