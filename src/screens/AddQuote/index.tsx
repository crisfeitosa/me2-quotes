import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator, View } from 'react-native';
import { CredentialsContext } from '../../Providers/CredentialsContext';
import { Input } from '../../components/Input';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { MsgBoxError } from '../../components/MsgBoxError';
import { api } from '../../services/api';
import { InnerContainer, SubTitle, StyledFormArea, StyledButtonLoading } from './styles';

export function AddQuote() {
  const [message, setMessage] = useState('');
  const { storedCredentials } = useContext(CredentialsContext);
  const { id, api_token } = storedCredentials;
  const initialValues = { text: '', author: '' };

  const handleCreateQuote = async (quote, setSubmitting, resetForm) => {
    handleMessage('');
    const url = '/quotes';

    const config = {
      headers: {
        'user-id': id,
        'api-token': api_token
      }
    };

    await api.post(url, quote, config)
      .then((r) => {
        const result = r.data;
        console.log(result);
        const { status } = result;
        
        if(status) {
          resetForm({values: initialValues});
        }

        setSubmitting(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
        handleMessage('Ocorreu algo errado, tente novamente.');
      })
  }

  const handleMessage = (message: string) => {
    setMessage(message);
  }

  return (
    <KeyboardAvoidingWrapper>
      <InnerContainer>
        <Header />
        <SubTitle>Criar uma citação</SubTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            if (values.text == '' || values.author == '') {
              handleMessage('Por favor, preencha todos os campos.');
              setSubmitting(false);
            } else {
              handleCreateQuote(values, setSubmitting, resetForm);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <StyledFormArea>
              <Input
                label='Citação'
                icon='pencil'
                placeholder='Digite a citação'
                placeholderTextColor='#6d6d6d'
                multiline={true}
                numberOfLines={4}
                onChangeText={handleChange('text')}
                onBlur={handleBlur('text')}
                value={values.text}
              />
              <Input
                label='Autor'
                icon='person'
                placeholder='Digite nome do autor'
                placeholderTextColor='#6d6d6d'
                onChangeText={handleChange('author')}
                onBlur={handleBlur('author')}
                value={values.author}
              />
              <MsgBoxError message={message} />
              {!isSubmitting && <Button onPress={handleSubmit} title='Criar citação' />}
              {isSubmitting && (
                <StyledButtonLoading disable={true}>
                  <ActivityIndicator size='large' color='#FFFFFFF' />
                </StyledButtonLoading>
              )}
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </KeyboardAvoidingWrapper>
  );
}
