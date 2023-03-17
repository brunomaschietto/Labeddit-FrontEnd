import React from "react";
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
  StylizedInput,
  StylizedP,
} from "./styles";
import labedditIcon from "../../assets/labedditIcon.svg";
import lowBar from "../../assets/lowBar.svg";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <DivMainLogin>
      <Header />
      <InsideDiv>
        <ImgLabeddit src={labedditIcon} />
        <StylizedP>O projeto de rede social da Labenu</StylizedP>
      </InsideDiv>
      <DivFlexItems>
        <DivInput>
          <StylizedInput placeholder="E-mail" />
          <StylizedInput placeholder="Senha" />
        </DivInput>
        <DivButton>
            <StylizedButton onClick={() => goToHomePage(navigate)}>Continuar</StylizedButton>
            <Line />
            <StylizedButton onClick={() => goToSignupPage(navigate)}>Crie uma conta!</StylizedButton>
        </DivButton>
      </DivFlexItems>
      <LowBarDiv>
        <img src={lowBar}/>
      </LowBarDiv>
    </DivMainLogin>
  );
};

export default LoginPage;
