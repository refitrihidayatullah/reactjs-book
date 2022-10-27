import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
const Post = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorAge, setAuthorAge] = useState("");
  const [genre, setGenre] = useState("");

  function saveBook() {
    // e.preventDefault();
    console.warn({ bookName, authorName, authorAge, genre });
    let data = { bookName, authorName, authorAge, genre };
    fetch("https://app-rest-api-books.herokuapp.com/api/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
    });
  }

  return (
    <div>
      <Container>
        <h1> input </h1>
        <Card>
          <Card.Header>Add Book</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  value={bookName}
                  onChange={(e) => {
                    setBookName(e.target.value);
                  }}
                  name="bookName"
                  placeholder="Enter Book.."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                  type="text"
                  value={authorName}
                  onChange={(e) => {
                    setAuthorName(e.target.value);
                  }}
                  name="authorName"
                  placeholder="Author Name.."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author Age</Form.Label>
                <Form.Control
                  type="number"
                  value={authorAge}
                  onChange={(e) => {
                    setAuthorAge(e.target.value);
                  }}
                  name="author"
                  placeholder="Author age.."
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  value={genre}
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                  name="genre"
                  placeholder="Enter Genre.."
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={saveBook}>
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Post;
