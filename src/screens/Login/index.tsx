import React, { useState, useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../Providers/CredentialsContext';
import { api } from '../../services/api';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { Line } from '../../components/Line';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { MsgBoxError } from '../../components/MsgBoxError';
import { Input } from '../../components/Input';
import { InnerContainer, Title, SubTitle, StyledFormArea, StyledButtonLoading } from './styles';

export function Login() {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  const { setStoredCredentials } = useContext(CredentialsContext);

  const handleLogin = async (user, setSubmitting) => {
    handleMessage('');
    const url = '/authenticate';

    await api.post(url, user)
      .then((r) => {
        const result = r.data;
        console.log(result);
        const { status, response } = result;
        
        if(status) {
          persistLogin(response);
        }

        setSubmitting(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
        handleMessage('Credenciais inválidas, tente novamente.');
      })
  }

  const handleMessage = (message: string) => {
    setMessage(message);
  }

  const persistLogin = (credentials) => {
    AsyncStorage.setItem('quotesCredentials', JSON.stringify(credentials))
      .then(() => {
        setStoredCredentials(credentials);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <InnerContainer>
        <FontAwesome name='quote-left' size={150} color='#6b6b6b' />
        <Title>Quotes</Title>
        <SubTitle>Login da conta</SubTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if(values.email == '' || values.password == '') {
              handleMessage('Por favor, preencha todos os campos.');
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <StyledFormArea>
              <Input
                label='Email'
                icon='mail'
                placeholder='nome@email.com'
                placeholderTextColor='#6d6d6d'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />
              <Input
                label='Senha'
                icon='lock'
                placeholder='* * * * * * * *'
                placeholderTextColor='#6d6d6d'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBoxError message={message} />
              {!isSubmitting && <Button onPress={handleSubmit} title='Login' />}
              {isSubmitting && (
                <StyledButtonLoading disable={true}>
                  <ActivityIndicator size='large' color='#FFFFFFF' />
                </StyledButtonLoading>
              )}
              <Line />
              <TextWithLink
                text='Ainda não tem uma conta? '
                textLink='Criar'
                onPress={() => navigation.navigate('Signup')}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </KeyboardAvoidingWrapper>
  );
}
