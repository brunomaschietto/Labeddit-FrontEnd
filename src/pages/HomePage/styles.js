import styled from "styled-components";

export const DivPost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 12px;
`;

export const InputPost = styled.input`
  height: 131px;
  width: 364px;
  background-color: #ededed;
  border-radius: 12px;
  border: none;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  justify-content: start;
  align-items: start;

  color: #6f6f6f;
`;

export const ButtonPost = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 145px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border-radius: 12px;
  border: none;
  color: white;
  font-family: 'IBM Plex Sans';
  font-weight: 700;
  font-size: 18px;
  line-height: 23.4px;
  cursor: pointer;
`;
