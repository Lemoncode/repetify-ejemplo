import React from 'react';

interface Props {
  title: string;
  page: number;
  totalPage: number;
}

export const HeaderComponent: React.FC<Props> = (props: Props) => {
  const { title, page, totalPage } = props;

  return (
    <>
      <h1>{page}/{totalPage}</h1>
      <h2>{title}</h2>
    </>
  )
}
