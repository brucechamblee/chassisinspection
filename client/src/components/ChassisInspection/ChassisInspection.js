import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';

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
              <h3 className='ServiceDate'>
                {moment(iepList.chassis.date).format('MM-DD-YYYY')}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={6} />
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ChassisInspection;
