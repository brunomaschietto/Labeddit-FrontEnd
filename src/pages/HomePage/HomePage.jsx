import React, { useContext, useEffect } from "react";
import Header from "../../components/Header/Header";
import { DivButton, DivMainLogin, Line } from "../LoginPage/styles";
import lowBar from "../../assets/lowBar.svg";
import { ButtonPost, DivPost, InputPost } from "./styles";
import GrayHeader from "../../components/SecondHeader/GrayHeader";
import Cards from "../../components/Cards/Cards";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

const HomePage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { posts, setPosts } = context;
  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (!token) {
      goToLoginPage(navigate);
    }
  });

  const findPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token")
        }
      })
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      <DivPost>
        <InputPost type="text" placeholder="Escreva seu post..." />
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
