import React, { useContext } from 'react';
import { Userpic } from 'react-native-userpic';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../Providers/CredentialsContext';
import { Button } from '../../components/Button';
import { Line } from '../../components/Line';
import { StyledContainer, InnerContainer, Title, ProfileImage, ProfileContainer, SubTitle } from './styles';

export function Profile() {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { name, email } = storedCredentials;

  const handleLogout = () => {
    AsyncStorage
      .removeItem('@quotesCredentials')
      .then(() => {
        setStoredCredentials();
      })
      .catch(error => console.log(error));
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <ProfileImage resize='cover' source={require('../../../assets/background.png')} />
        <ProfileContainer>
          <Userpic size={72} name={name} />
          <Title>{name}</Title>
          <SubTitle>{email}</SubTitle>
          <Line />
          <Button onPress={handleLogout} title='Sair' />
        </ProfileContainer>
      </InnerContainer>
    </StyledContainer>
  );
}
