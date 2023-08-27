import React from 'react';
import { 
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { StyledContainer } from './styles';

type KeyboardAvoidingWrapperProps = {
  children: React.ReactNode;
}

export function KeyboardAvoidingWrapper({ children }: KeyboardAvoidingWrapperProps) {
  return (
    <StyledContainer behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </StyledContainer>
  );
}
