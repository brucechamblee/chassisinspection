import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import API from '../utils/API';
// import Header from '../components/Header/Header';
import ChassisInspection from '../components/ChassisInspection/ChassisInspection';

class SearchIEPPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTag: 'Chassis Inspection Form',
      IEP: []
    };
  }

  componentDidMount() {
    this.IEP();
  }

  IEP() {
    API.getSavedIEP()
      .then(res => {
        const iepList = res.data;

        this.setState({ IEP: iepList });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Card className='mt-4 shadow'>
              <Card.Header className='border-bottom-0 bg-primary text-white'>
                <h3>
                  <strong>Results</strong>
                </h3>
              </Card.Header>
              <Card.Body>
                {!this.state.IEP.length ? (
                  <h2 className='text-center'> No Results </h2>
                ) : (
                  <ChassisInspection iepList={this.state.IEP} />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchIEPPage;
