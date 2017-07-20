import React from 'react';
import {Row, Col } from 'react-bootstrap'

const Header = () =>
    <header>
        <a href="/" >
            <img src="images/logo.png" />
        </a>
      <Row>
        <Col>
          <h2>Lorem ipsum</h2>
          <h2>is simply dummy text of the printing and typesetting industry</h2>
        </Col>
      </Row>
    </header>

export default Header;
