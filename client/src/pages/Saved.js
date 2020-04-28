import React, { useEffect, useState } from 'react'
import Nav from "../components/Nav/index";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Col, Row, Container } from "../components/Grid"

export default function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);

    function loadSavedBooks() {
        API.getBooks().then(res => setSavedBooks(res.data));
    }

    function handleBookDelete(id) {
        API.deleteBook(id);
    }

    useEffect(() => {
        loadSavedBooks();
    }, [handleBookDelete]);

    return (
        <Container fluid>
            <Nav page={"saved"} />
            <Row>
                <Col size="md-12">
                    <List>
                        {savedBooks.length ? savedBooks.map(book =>
                            <ListItem key={book.bookId}>
                                {console.log(savedBooks)}
                                <img src={
                                    book.image === undefined
                                        ? ""
                                        : book.image
                                }></img>
                                <h3>{book.title}</h3>
                                <h5>{book.authors.join(", ")}</h5>
                                <p>{book.description}</p>
                                <a href={book.link} target="_blank" className="btn btn-primary active">View in store</a>
                                <button
                                    className="btn btn-primary float-right"
                                    onClick={()=> handleBookDelete(book._id)}
                                    >
                                    Remove from list
                                </button>
                            </ListItem>
                        ) : <h1>No results</h1>
                        }
                    </List>
                </Col>
            </Row>
        </Container >
    )
}
