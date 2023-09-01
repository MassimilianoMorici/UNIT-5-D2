import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import fantasyBooks from "../../data/fantasy.json"
import BookCard from '../card/BookCard';

class MyMain extends Component {



    render() {
        return (
            <Container>
                <Row>
                    <Col className='d-flex flex-wrap gap-4'>
                        {fantasyBooks.map((book) => (
                            <BookCard
                                img={book.img}
                                title={book.title}
                                category={book.category}
                            />
                        ))}
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default MyMain;
