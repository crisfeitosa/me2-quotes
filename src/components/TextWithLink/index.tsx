import React from 'react';
import { TextWithLinkContainer, Text, TextLink, TextLinkContent } from './styles';

type TextWithLinkProps = {
  text: string;
  textLink: string;
  onPress: () => void;
};

export function TextWithLink({ text, textLink, onPress }: TextWithLinkProps) {
  return (
    <TextWithLinkContainer>
      <Text>{text}</Text>
      <TextLink onPress={onPress}>
        <TextLinkContent>{textLink}</TextLinkContent>
      </TextLink>
    </TextWithLinkContainer> 
  );
};
