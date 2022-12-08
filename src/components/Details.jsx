import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();
  console.log(params);
  const [article, setArticle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticle(data);
      } else {
        console.log("Error while getting data");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {article ? (
        <Container id="details">
          <h1>{article.title}</h1>
          <p>{article.newsSite}</p>
          <img src={article.imageUrl} alt="aaa" />
          <p>{article.summary}</p>
          <Button variant="info" onClick={() => navigate("/main")}>
            To Main{" "}
          </Button>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}
