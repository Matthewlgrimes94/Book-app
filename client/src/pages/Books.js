import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import Nav from "../components/Nav/index";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchState, setSearchState] = useState("")

  // Loads all books and sets them to books
  function handleBookSearch(event) {
    event.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchState)
      .then(res =>
        setBooks(res.data.items)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    setSearchState(event.target.value);
  }

  function handleBookSave() {
  }


  return (
    <Container fluid>
      <Nav page={"books"} />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Search for a book</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="Search"
              placeholder="Search for a book"
            />
            <FormBtn
              onClick={handleBookSearch}
            >
              Search google books
              </FormBtn>
          </form>
        </Col>
      </Row>
      <List>
        {books.length ?
          books.map(book =>
            <ListItem key={book.id}>
              <img src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }></img>
              <h3>{book.volumeInfo.title}</h3>
              <h5>{book.volumeInfo.authors.join(", ")}</h5>
              <h6>{book.volumeInfo.publishedDate}</h6>
              <p>{book.volumeInfo.description}</p>
              <button className="btn btn-primary" onClick={() => handleBookSave(
                book.volumeInfo.title,
                book.volumeInfo.authors,
                book.volumeInfo.description,
                book.volumeInfo.previewLink,
                book.volumeInfo.infoLink
              )}>Save book</button>
              <a href={book.volumeInfo.infoLink} target="_blank" className="btn btn-primary">View</a>
            </ListItem>)
          : <div>No results</div>
        }
      </List>
    </Container>
  );
}


export default Books;
