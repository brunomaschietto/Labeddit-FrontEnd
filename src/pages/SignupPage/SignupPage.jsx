import React from "react";
import Header from "../../components/Header/Header";
import {
  DivInput,
  DivMainLogin,
  StylizedButton,
  StylizedInput,
} from "../LoginPage/styles";
import {
  AEditada,
  DivCheckbox,
  DivFlexSignup,
  DivImg,
  DivTexto,
  DivTextoPol,
  H1Editado,
  InputCheckbox,
  PEditado,
  SpanEditado,
} from "./styles";

import lowBar from "../../assets/lowBar.svg";
import { useNavigate } from "react-router-dom";
import GrayHeader from "../../components/SecondHeader/GrayHeader";

const SignupPage = () => {
  const navigate = useNavigate()
  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      <DivTexto>
        <H1Editado>Olá, boas vindas ao LabEddit 😉</H1Editado>
      </DivTexto>
      <DivFlexSignup>
        <DivInput>
          <StylizedInput placeholder="Apelido" />
          <StylizedInput placeholder="Email" />
          <StylizedInput placeholder="Senha" />
        </DivInput>
      </DivFlexSignup>
      <DivTextoPol>
        <PEditado>
          Ao continuar, você concorda com o nosso
          <AEditada>Contrato de usuário</AEditada> e nossa
          <AEditada>Política de Privacidade</AEditada>
        </PEditado>
        <DivCheckbox>
          <InputCheckbox type="checkbox" />
          <SpanEditado>
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </SpanEditado>
        </DivCheckbox>
      </DivTextoPol>
      <StylizedButton>Cadastrar</StylizedButton>
      <DivImg>
        <img src={lowBar}/>
      </DivImg>
    </DivMainLogin>
  );
};

export default SignupPage;
