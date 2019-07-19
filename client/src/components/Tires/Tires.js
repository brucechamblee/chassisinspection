import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Switch from 'react-ios-switch';
// import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
// import API from '../utils/API';
// import Header from '../components/Header/Header';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';

function Tires(props) {
  return (
    <Container className='checkList' id='tires'>
      <Form.Row>
        <Col sm={6}>
          <Accordion defaultActiveKey='0'>
            <AccordionToggle
              as={Card.Header}
              eventKey='0'
              style={{
                backgroundColor: 'white',
                border: 'none'
              }}
            >
              <h4>TIRES</h4>
              <Badge pill variant='secondary'>
                click for details
              </Badge>
            </AccordionToggle>
            <AccordionCollapse eventKey='0'>
              <ul>
                <li>
                  Inspect all tires for noticeable leaks, proper mating,
                  separations, cuts to ply or fabric;
                </li>
                <li>
                  No spot on tire with tread depth 2/32" or below when measured
                  in major tread groove
                </li>
                <li>Air tires to recommen d air pressure.</li>
              </ul>
            </AccordionCollapse>
          </Accordion>
        </Col>
        <Col className='checklist' sm={2} id='tiresCheckGood'>
          <sub>Pass/Fail</sub>
          <Switch
            checked={props.isChecked}
            isChanged={checked =>
              this.setState({
                chassis: { tiresCheckGood: checked }
              })
            }
            name='tiresCheckGood'
            offColor='red'
          />
        </Col>
        {!this.state.chassis.tiresCheckGood ? (
          <Col className='checklistComment' sm={4} id='commentBox'>
            <Form.Group>
              <Form.Control
                as='textarea'
                rows='3'
                type='text'
                placeholder='Enter Failure Detail'
                name='tiresComment'
                onChange={this.handleChassisInputChange}
                value={this.state.chassis.tiresComment}
              />
            </Form.Group>
          </Col>
        ) : (
          ''
        )}
      </Form.Row>
    </Container>
  );
}
export default Tires;
