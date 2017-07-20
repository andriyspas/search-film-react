import React, { Component } from 'react';
import { Row, Col } from  'react-bootstrap';
import Film from './Film';

class FilmList extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm={4}>View result:</Col>
                </Row>

                <Row>
                    {
                        this.props.films.map((item, index) => (
                            <Col sm={6} md={4} lg={3} key={ index }>
                                <Film film={ item }/>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default FilmList;