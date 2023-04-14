import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import {
  DivButton,
  DivFlexItems,
  DivInput,
  DivMainLogin,
  ImgLabeddit,
  InsideDiv,
  Line,
  LowBarDiv,
  StylizedButton,
  StylizedButtonSignup,
  StylizedInput,
  StylizedP,
} from "./styles";
import labedditIcon from "../../assets/labedditIcon.svg";
import lowBar from "../../assets/lowBar.svg";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const LoginPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (context.isAuth) {
      goToHomePage(navigate);
    }
  });

  const login = async () => {
    try {
      const body = {
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}/users/login`, body);
      window.localStorage.setItem("labeddit-token", response.data.token);
      goToHomePage(navigate);
      context.setIsAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DivMainLogin>
      <Header />
      <InsideDiv>
        <ImgLabeddit src={labedditIcon} />
        <StylizedP>O projeto de rede social da Labenu</StylizedP>
      </InsideDiv>
      <DivFlexItems>
        <DivInput>
          <StylizedInput
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={onChangeForm}
            autoComplete="off"
          />
          <StylizedInput
            placeholder="Senha"
            type="password"
            name="password"
            onChange={onChangeForm}
          />
        </DivInput>
        <DivButton>
          <StylizedButton onClick={login}>
            Continuar
          </StylizedButton>
          <Line />
          <StylizedButtonSignup onClick={() => goToSignupPage(navigate)}>
            Crie uma conta!
          </StylizedButtonSignup>
        </DivButton>
      </DivFlexItems>
      <LowBarDiv>
        <img src={lowBar} />
      </LowBarDiv>
    </DivMainLogin>
  );
};

export default LoginPage;
