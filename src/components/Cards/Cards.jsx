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
import { goToPostPage } from "../../routes/coordinator";

const Cards = (props) => {
  const navigate = useNavigate();
  const { post } = props;
  // console.log(post)
  return (
    <CardsStyle>
      <DivFP>
        <FP>{post.creator.name}</FP>
      </DivFP>
      <DivSP>
        <SP>
          {post.content}
        </SP>
      </DivSP>
      <DivVectors>
        <ImgVector src={upVector} />
        <PLikes>{post.likes}</PLikes>
        <ImgVector src={downVector} />
        <PLikes>{post.dislikes}</PLikes>
        <ImgVector onClick={() => goToPostPage(navigate)} src={comments} />
        <PLikes>{post.comments}</PLikes>
      </DivVectors>
    </CardsStyle>
  );
};

export default Cards;
