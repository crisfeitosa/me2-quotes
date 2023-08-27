import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { QuoteCard, Text, Author } from './styles';

export type QuoteProps = {
  text: string;
  author: string;
}

export default function Quote({ text, author }: QuoteProps) {
  return (
    <QuoteCard>
      <FontAwesome name='quote-left' size={24} color='#9CA3AF' />
      <Text>{text}</Text>
      <Author>{author}</Author>
    </QuoteCard>
  )
}