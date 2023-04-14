import React, { useContext, useState } from "react";
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
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { goToHomePage } from "../../routes/coordinator";

const SignupPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signUp = async () => {
    try {
      let body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}/users/signup`, body);
      window.localStorage.setItem("labeddit-token", response.data.token);
      goToHomePage(navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      <DivTexto>
        <H1Editado>Olá, boas vindas ao LabEddit 😉</H1Editado>
      </DivTexto>
      <DivFlexSignup>
        <DivInput>
          <StylizedInput value={form.name} name="name" onChange={onChangeForm} placeholder="Apelido" required/>
          <StylizedInput value={form.email} type="email" name="email" onChange={onChangeForm} placeholder="Email" required/>
          <StylizedInput value={form.password} type="password" name="password" onChange={onChangeForm} placeholder="Senha" required/>
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
      <StylizedButton onClick={() => signUp()}>Cadastrar</StylizedButton>
      <DivImg>
        <img src={lowBar} />
      </DivImg>
    </DivMainLogin>
  );
};

export default SignupPage;
