import React from 'react';
import { Row, Col, Grid } from  'react-bootstrap';

const Footer = () =>
    <footer>
        <Grid fluid>
            <Row>
                <Col pullRight>
                    <a href="https://github.com/staspast">@staspast</a>
                    <br/>
                    <a href="https://github.com/andriyspas">@andriyspas</a>
                </Col>
            </Row>
        </Grid>
    </footer>;

export default Footer;
