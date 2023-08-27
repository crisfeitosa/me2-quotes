import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { CredentialsContext } from '../../Providers/CredentialsContext';
import Quote from '../../components/Quote';
import { Header } from '../../components/Header';
import { Line } from '../../components/Line';
import { StyledContainer, InnerContainer, ContainerListQuotes, ListQuotes } from './styles';
import { api } from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

export type ItemProps = {
  id: string;
  text: string;
  author: string;
}

export function Home() {
  const [quotes, setQuotes] = useState();
  const { storedCredentials } = useContext(CredentialsContext);
  const navigation = useNavigation();
  const { id, api_token } = storedCredentials;

  console.log(quotes)

  const loadQuotes = async () => {
    const config = {
      headers: {
        'user-id': id,
        'api-token': api_token
      }
    };

    return await api
      .get('/quotes', config)
      .then((resp) => {
        const quotesList = resp.data.response.data;
        setQuotes(quotesList);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      loadQuotes();
    })
  }, []);


  return (
    <StyledContainer>
      <InnerContainer>
        <Header />
        <Line />
        <ContainerListQuotes>
          <ListQuotes
            data={quotes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Quote
              text={item.text}
              author={item.author}
            />}
          />
        </ContainerListQuotes>
      </InnerContainer>
    </StyledContainer>
  );
}
