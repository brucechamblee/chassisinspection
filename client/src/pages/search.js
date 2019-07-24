import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import API from '../utils/API';
import Header from '../components/Header/Header';
import ChassisInspection from '../components/ChassisInspection/ChassisInspection';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.searchIEP = this.searchIEP.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      allowNew: false,
      isLoading: false,
      multiple: false,
      options: [],
      validated: false,
      pageTag: 'This is the Search Page',
      action: 'save',
      ieps: [],
      query: ''
    };
  }

  searchIEP(query) {
    console.log(query);
    API.getSavedIEPName(query)
      .then(res => {
        console.log(res);
        const iepList = res.data;
        this.setState({ ieps: iepList });
      })
      .catch(error => console.log(error));
  }

  handleSubmit(event) {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      this.setState({ validated: true });
      this.searchIEP(this.state.query);
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBookAction(ieps) {
    API.saveBook(ieps)
      .then(() => this.searchIEP(this.state.query))
      .catch(error => console.log(error));
  }

  render() {
    const { validated } = this.state;
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Header pageTag={this.state.pageTag} />
          </Col>
          <Col md={12}>
            <Card className='mt-4 shadow'>
              <Card.Header className='border-bottom-0 bg-secondary text-white'>
                <h3>
                  <strong>
                    {/* <FontAwesomeIcon icon='search' />  */}
                    IEP Search
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <Form.Group controlId='query'>
                    <Form.Label>
                      <strong>Search</strong>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter a IEP Name'
                      name='query'
                      required
                      onChange={this.handleInputChange}
                      value={this.state.query}
                    />
                    <Form.Control.Feedback type='invalid'>
                      Please provide a valid search phrase.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className='d-flex justify-content-end'>
                    <Button
                      varient='danger'
                      type='submit'
                      size='lg'
                      className='shadow'
                    >
                      Search
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card className='mt-4 shadow'>
              <Card.Header className='border-bottom-0 bg-secondary text-white'>
                <h3>
                  <strong>
                    <FontAwesomeIcon icon='list-alt' /> Results
                  </strong>
                </h3>
              </Card.Header>
              <Card.Body>
                {!this.state.ieps.length ? (
                  <h2 className='text-center'>Search for a IEP to Begin!</h2>
                ) : (
                  <ChassisInspection
                    iepList={this.state.ieps}
                    handleBookAction={this.handleBookAction}
                    action={this.state.action}
                  />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPage;
