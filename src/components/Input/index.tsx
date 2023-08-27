import React from 'react';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import { LeftIcon, StyledInputLabel, StyledTextInput, RightIcon } from './styles';

export function Input({ label, icon, isPassword, hidePassword, setHidePassword, ...props }: any) {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color='#6D28D9' />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color='#6d6d6d' />
        </RightIcon>
      )}
    </View>
  )
};
