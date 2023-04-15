import React, { useContext, useState } from "react";
import Cards from "../../components/Cards/Cards";
import Comments from "../../components/Comments/Comments";
import Header from "../../components/Header/Header";
import GrayHeader from "../../components/SecondHeader/GrayHeader";
import { ButtonPost, DivPost, InputPost } from "../HomePage/styles";
import { DivButton, DivMainLogin, Line } from "../LoginPage/styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const CommentPage = () => {
  const context = useContext(GlobalContext);
  const [post, setPost] = useState({});
  const [commentContent, setCommentContent] = useState("");
  const { comments, setComments } = context;

  const findPost = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const findComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/comments/${post.id}`, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async () => {
    try {
      let body = {
        commentContent,
      };
      await axios.post(`${BASE_URL}/posts/comments/${post.id}`, body, {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      });
      findPosts();
      setCommentContent("");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <DivMainLogin>
      <Header />
      <GrayHeader />
      {/* <Cards /> */}
      <DivPost>
        <InputPost value={commentContent} onChange={(e) => setCommentContent(e.target.value)} type="text" placeholder="Adicionar comentário" />
      </DivPost>
      <DivButton>
        <ButtonPost onClick={() => createComment()}>Responder</ButtonPost>
        <Line />
      </DivButton>
      {comments.map((comment) => {
        return (
          <Comments
            key={comment.id}
            comment={comment}
            findComments={findComments}
          />
        );
      })}
    </DivMainLogin>
  );
};

export default CommentPage;
