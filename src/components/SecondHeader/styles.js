import styled from "styled-components";

export const MiniDiv = styled.div`
  width: 428px;
  height: 50px;
  background-color: #ededed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

export const ImgX = styled.img`
  height: 24px;
  width: 25.6px;
  cursor: pointer;
`

export const ImgMiniIcon = styled.img`
  width: 28px;
  height: 28.64px;
  grid-column-start: 2;
`;

export const PEntrar = styled.p`
  width: 55px;
  height: 25px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #4088cb;
  cursor: pointer;
  display: grid;
  justify-items: end;
`;