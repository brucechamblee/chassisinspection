import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header/Header';

class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTag: 'Welcome to the Elite Chassis App'
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header pageTag={this.state.pageTag} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WelcomePage;
