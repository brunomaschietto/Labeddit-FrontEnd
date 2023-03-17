import React from "react";
import Cards from "../../components/Cards/Cards";
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import GrayHeader from "../../components/SecondHeader/GrayHeader";
import { ButtonPost, DivPost, InputPost } from "../HomePage/styles";
import { DivButton, DivMainLogin, Line } from "../LoginPage/styles";

const PostPage = () => {
  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      <Cards />
      <DivPost>
        <InputPost type="text" placeholder="Adicionar comentário" />
      </DivPost>
      <DivButton>
        <ButtonPost>Responder</ButtonPost>
        <Line />
      </DivButton>
      <Comments />
    </DivMainLogin>
  );
};

export default PostPage;
