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

const Cards = () => {
  const navigate = useNavigate();
  return (
    <CardsStyle>
      <DivFP>
        <FP>Enviado por: brunomaschietto</FP>
      </DivFP>
      <DivSP>
        <SP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus
          debitis eligendi ratione sapiente sint et in Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Ratione vel non sint, odit, ipsum
          minus dolorem alias facilis eligendi suscipit voluptates fugit! Est
          quae veniam alias blanditiis voluptas, doloribus a!
        </SP>
      </DivSP>
      <DivVectors>
        <ImgVector src={upVector} />
        <PLikes>150</PLikes>
        <ImgVector src={downVector} />
        <PLikes>2</PLikes>
        <ImgVector onClick={() => goToPostPage(navigate)} src={comments} />
        <PLikes>4</PLikes>
      </DivVectors>
    </CardsStyle>
  );
};

export default Cards;
