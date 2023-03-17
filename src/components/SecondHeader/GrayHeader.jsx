import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import miniIcon from "../../assets/miniIcon.svg";
import { goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { ImgMiniIcon, ImgX, MiniDiv, PEntrar } from "./styles";
import vectorX from "../../assets/vectorX.svg"

const GrayHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <MiniDiv>
      {location.pathname === "/postpage" ? <ImgX src={vectorX} onClick={() => goToHomePage(navigate)}/> : ''}
      <ImgMiniIcon src={miniIcon} />
      {location.pathname === "/signup" ? (
        <PEntrar onClick={() => goToLoginPage(navigate)}>Entrar</PEntrar>
      ) : (
        <PEntrar onClick={() => goToLoginPage(navigate)}>Logout</PEntrar>
      )}
    </MiniDiv>
  );
};

export default GrayHeader;
