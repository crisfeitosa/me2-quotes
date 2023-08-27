import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HeaderContainer, TitleHeader } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <FontAwesome name='quote-left' size={32} color='#6b6b6b' />
      <TitleHeader> Quotes</TitleHeader>
    </HeaderContainer> 
  );
}