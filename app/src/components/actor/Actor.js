import React from 'react';
import { Row, Col, Panel, FormGroup, Thumbnail } from  'react-bootstrap';
import Film from '../film/Film'

const Actor = ({actor}) =>
    <Col xs={12}>
        <Panel>
            <Row>
                <Col sm={6} md={4} lg={3}>
                    <Thumbnail src={ actor.photo } />
                </Col>
                <Col sm={6} md={8} lg={9}>
                    <FormGroup>
                        { actor.name }
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                {
                    actor.filmList.map((item, index) => (
                        <Col sm={6} md={4} lg={3}>
                            <Film
                                film={ item }
                                key={ index }
                            />
                        </Col>
                    ))
                }
            </Row>
        </Panel>
    </Col>;

export default Actor;
