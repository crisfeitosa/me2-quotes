import React, { useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { KeyboardAvoidingWrapper } from '../../components/KeyboardAvoidingWrapper';
import { Line } from '../../components/Line';
import { Button } from '../../components/Button';
import { TextWithLink } from '../../components/TextWithLink';
import { Header } from '../../components/Header';
import { MsgBoxError } from '../../components/MsgBoxError';
import { Input } from '../../components/Input';
import { InnerContainer, SubTitle, StyledFormArea, StyledButtonLoading } from './styles';

export function Signup() {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleSignup = async (credentials, setSubmitting) => {
    handleMessage('');
    const url = '/users';

    await api.post(url, credentials)
      .then((r) => {
        const result = r.data;
        console.log(result);
        const { status } = result;
        
        if(status) {
          navigation.navigate('Login');
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
        <SubTitle>Cadastro de conta</SubTitle>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.name == '' ||
              values.email == '' ||
              values.password == ''||
              values.confirmPassword == ''
            ) {
              handleMessage('Por favor, preencha todos os campos.');
              setSubmitting(false);
            } else if (values.password !== values.confirmPassword) {
              handleMessage('As senhas não coincidem.');
              setSubmitting(false);
            } else {
              const { name, email, password } = values;
              const credentials = { name, email: email.toLowerCase(), password};
              handleSignup(credentials, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <StyledFormArea>
              <Input
                label='Nome completo'
                icon='person'
                placeholder='Nome e sobrenome'
                placeholderTextColor='#6d6d6d'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
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
              <Input
                label='Confirmar senha'
                icon='lock'
                placeholder='* * * * * * * *'
                placeholderTextColor='#6d6d6d'
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBoxError message={message} />
              {!isSubmitting && <Button onPress={handleSubmit} title='Criar conta' />}
              {isSubmitting && (
                <StyledButtonLoading disable={true}>
                  <ActivityIndicator size='large' color='#FFFFFFF' />
                </StyledButtonLoading>
              )}
              <Line />
              <TextWithLink
                text='Já tem uma conta? '
                textLink='Login'
                onPress={() => navigation.navigate('Login')}
              />
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </KeyboardAvoidingWrapper>
  );
}
