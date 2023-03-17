import React from "react";
import Header from "../../components/Header/Header";
import { DivButton, DivMainLogin, Line } from "../LoginPage/styles";
import lowBar from "../../assets/lowBar.svg";
import { ButtonPost, DivPost, InputPost } from "./styles";
import GrayHeader from "../../components/SecondHeader/GrayHeader";
import Cards from "../../components/Cards/Cards";

const HomePage = () => {
  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      <DivPost>
        <InputPost type='text' placeholder="Escreva seu post..." />
      </DivPost>
      <DivButton>
        <ButtonPost>Postar</ButtonPost>
        <Line />
      </DivButton>
      <Cards />
    </DivMainLogin>
  );
};

export default HomePage;
