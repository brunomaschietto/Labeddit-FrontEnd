import React from "react";
import { CardsStyle, DivFP, DivSP, DivVectors, FP, ImgVector, PLikes, SP } from "../Cards/styles";
import upVector from "../../assets/upVector.svg";
import downVector from "../../assets/downVector.svg";
import comments from "../../assets/comments.svg";

const Comments = () => {
  return (
    <CardsStyle>
      <DivFP>
        <FP>Enviado por: brunomaschietto</FP>
      </DivFP>
      <DivSP>
        <SP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus
          debitis eligendi ratione sapiente sint et in
        </SP>
      </DivSP>
      <DivVectors>
        <ImgVector src={upVector} />
        <PLikes>150</PLikes>
        <ImgVector src={downVector} />
        <PLikes>2</PLikes>
        <ImgVector src={comments} />
        <PLikes>4</PLikes>
      </DivVectors>
    </CardsStyle>
  );
};

export default Comments;
