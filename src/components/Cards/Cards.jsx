import React from "react";
import {
  CardsStyle,
  DivFP,
  DivSP,
  DivVectors,
  FP,
  ImgVector,
  PLikes,
  SP,
} from "./styles";
import upVector from "../../assets/upVector.svg";
import downVector from "../../assets/downVector.svg";
import comments from "../../assets/comments.svg";
import { useNavigate } from "react-router-dom";
import { goToCommentPage } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const Cards = (props) => {
  const navigate = useNavigate();
  const { post, findPosts } = props;
  const like = async (postId) => {
    try {
      let body = {
        like: 1,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
    } catch (error) {
      console.log(error);
    }
  };
  const dislike = async (postId) => {
    try {
      let body = {
        like: 0,
      };
      await axios.put(`${BASE_URL}/posts/${postId}/like`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(post)
  return (
    <CardsStyle>
      <DivFP>
        <FP>Enviado por: {post.creator.name}</FP>
      </DivFP>
      <DivSP>
        <SP>{post.content}</SP>
      </DivSP>
      <DivVectors>
        <ImgVector onClick={() => like(post.id)} src={upVector} />
        <PLikes>{post.likes}</PLikes>
        <ImgVector onClick={() => dislike(post.id)} src={downVector} />
        <PLikes>{post.dislikes}</PLikes>
        <ImgVector onClick={() => goToCommentPage(navigate, post.id)} src={comments} />
        <PLikes>{post.comments}</PLikes>
      </DivVectors>
    </CardsStyle>
  );
};

export default Cards;
