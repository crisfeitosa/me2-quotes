import React from 'react';
import { MsgBox } from './styles';

type MsgBoxErrorProps = {
  message: string;
};

export function MsgBoxError({ message }: MsgBoxErrorProps) {
  return (
    <MsgBox>{message}</MsgBox>   
  );
}

