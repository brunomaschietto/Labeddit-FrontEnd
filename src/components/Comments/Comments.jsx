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
} from "../Cards/styles";
import upVector from "../../assets/upVector.svg";
import downVector from "../../assets/downVector.svg";

const Comments = (props) => {
  const { comment, findComments } = props;
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
  return (
    <CardsStyle>
      <DivFP>
        <FP>Enviado por: {comment.creator.name}</FP>
      </DivFP>
      <DivSP>
        <SP>{comment.content}</SP>
      </DivSP>
      <DivVectors>
        <ImgVector src={upVector} />
        <PLikes>{comment.like}</PLikes>
        <ImgVector src={downVector} />
        <PLikes>{comment.like}</PLikes>
      </DivVectors>
    </CardsStyle>
  );
};

export default Comments;
