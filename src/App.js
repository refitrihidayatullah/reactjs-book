// import './App.css';
import { Table, Container } from "react-bootstrap";
import Post from "./Component/Post";
import React, { useState, useEffect } from "react";

function App() {
  const [getDataBooks, setDataBooks] = useState();
  useEffect(() => {
    dataApi();
  }, []);

  const dataApi = async (req, res) => {
    await fetch("https://app-rest-api-books.herokuapp.com/api/books").then(
      (result) => {
        result.json().then((response) => {
          setDataBooks(response);
        });
      }
    );
  };

  return (
    <div>
      <Container className="mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Author Age</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {getDataBooks &&
              getDataBooks.map((book, index) => {
                return (
                  <>
                    <tr>
                      <td key={book._id}>{index + 1}</td>
                      <td>{book.name}</td>
                      <td>{book.author.name}</td>
                      <td>{book.author.age}</td>
                      <td>{book.genre}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </Container>
      <Post />
    </div>
  );
}

export default App;
