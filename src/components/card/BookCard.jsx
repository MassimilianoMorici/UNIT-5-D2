import React, { Component } from "react";
import { Card } from "react-bootstrap";

class BookCard extends Component {



    render() {
        return (

            < Card style={{ width: '18rem' }}>
                <Card.Img Variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Text>{this.props.title}</Card.Text>
                    <Card.Text>{this.props.category}</Card.Text>
                </Card.Body>
            </Card>
        )

    }
}

export default BookCard;