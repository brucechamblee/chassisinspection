import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function ChassisInspection(props) {
  return (
    <ListGroup as='ul'>
      {props.iepList.map(iepList => (
        <ListGroup.Item as='li' key={iepList._id}>
          <Row className='IEPheader'>
            <Col md={4}>
              <h3 className='IEPName'>{iepList.IEPname}</h3>
            </Col>
            <Col md={4}>
              <h3 className='IEPUnitNumber'>{iepList.chassis.unitNumber}</h3>
            </Col>
            <Col md={4}>
              <h3 className='ServiceDate'>{iepList.chassis.date}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              {/* <p className='book-list__authors'>Written by</p> */}
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ChassisInspection;
