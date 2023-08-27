import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Container } from './styles';

type ButtonNewTabBarProps = {
  color: string;
  size: number;
}

export default function ButtonNewTabBar({ color, size }: ButtonNewTabBarProps) {
  return (
    <Container>
      <Entypo name="plus" color={color} size={size} />
    </Container>
  )
}