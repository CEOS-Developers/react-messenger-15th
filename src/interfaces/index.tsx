import React from 'react';

export interface ITodoList {
  contents: string;
  id: number;
  isDone: boolean;
}
export interface IYetListProps {
  list: [];
  yetNum: number;
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IInputFormProps {
  handleFormSubmit: (e: React.SyntheticEvent) => void;
  handleContentsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contents: string;
}

export interface IDoneList {
  list: [];
  onToggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
  doneNum: number;
}
// styled-component에 들어가는 property 에 대한 정의
export interface IListBtn {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// 클릭 : MouseEvent
// 입력 : ChangeEvent
// 제출 : SyntheticEvent
