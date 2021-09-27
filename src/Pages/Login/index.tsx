import React from 'react';
import { Container, ImageBackground, Form, Title, ForgetPass, Subtitle, InputText, WrapperForm, WrapperLoginType, WrapperCheckBox, CheckBox, CheckboxLabel, NewUser, NewUserRed } from './styles';
import { Button, MarvelLogo } from '../../Components';
import AllHeros from '../../Assets/AllHeros.svg'
import { themes } from '../../Styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

  return (
    <Container>
      <MarvelLogo />

      <Form >
        <WrapperForm>
          <Title>Bem-vindo(a) de volta!</Title>
          <Subtitle>Acesse sua conta:</Subtitle>
          <InputText placeholder="Usuario" />
          <InputText placeholder="Senha" color={themes.gray} />

          <WrapperLoginType>

            <WrapperCheckBox>
              <CheckBox type="checkbox" />
              <CheckboxLabel>Salvar login</CheckboxLabel>
            </WrapperCheckBox>
            <ForgetPass>Esqueceu a senha</ForgetPass>
          </WrapperLoginType>

          <Link to='/home'>
            <Button text='Entrar' />
          </Link>

          <NewUser>Ainda não tem o login?<NewUserRed> Cadastre-se</NewUserRed></NewUser>
        </WrapperForm>
      </Form>

      <ImageBackground src={AllHeros} />
    </Container>
  );
}

export default Login;