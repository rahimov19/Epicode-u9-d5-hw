import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function News() {
  const [article, setArticle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getArticle();
  }, []);

  async function getArticle() {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/`
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
        <Container fluid>
          <Row>
            {article.slice(0, 6).map((art) => (
              <Col xs={2}>
                <Card className="cardart">
                  <Card.Img variant="top" src={art.imageUrl} />
                  <Card.Body className="textcard">
                    <Card.Title>{art.title}</Card.Title>
                    {/* <Card.Text>{art.summary}</Card.Text> */}
                    <Button
                      variant="info"
                      onClick={() => navigate(`/details/${art.id}`)}
                    >
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  );
}
