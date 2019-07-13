import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Switch from 'react-ios-switch';
import Button from "react-bootstrap/Button";
import API from "../utils/API";
import Header from "../components/Header/Header";
// import ChassisInspection from "../components/ChassisInspection/ChassisInspection";

class InspectionPage extends Component {
  constructor(props) {
    super(props);

    this.searchBooks = this.searchBooks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBookAction = this.handleBookAction.bind(this);

    this.state = {
      validated: false,
      pageTag: "Chassis Inspection Form",
      action: "save",
      books: [],
      headerQuery: "",
      checked: true,
    };
  }

  searchBooks(headerQuery) {
    console.log(headerQuery);
    API.searchBooks(headerQuery)
      .then(res => {
        console.log(res);
        const bookList = res.data.map(b => {
          return {
            googleId: b.id,
            title: b.volumeInfo.title,
            authors: b.volumeInfo.authors,
            description: b.volumeInfo.description,
            image: b.volumeInfo.imageLinks.thumbnail,
            link: b.volumeInfo.infoLink
          };
        });
        this.setState({ books: bookList });
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
      this.searchBooks(this.state.query);
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBookAction(book) {
    API.saveBook(book)
      .then(() => this.searchBooks(this.state.query))
      .catch(error => console.log(error));
  }



  render() {
    const { validated, checked } = this.state;
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <Header pageTag={this.state.pageTag} />
          </Col>
          <Col sm={12}>
            <Card className="mt-4 shadow">
              <Card.Header className="border-bottom-0 bg-secondary text-white">
                <h3>
                  <strong>FMCSA INTERMODAL CHASSIS INSPECTION FORM</strong>
                </h3>
                <p>
                  Performed in accordance with U.S. FMCSA Intermodal Chassis
                  Inspection Requirements of CFR 49 Part 396 and Appendix G,
                  subpart B.
                </p>
              </Card.Header>
              <Card.Body>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={e => this.handleSubmit(e)}
                >
                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group controlId="IEPfield">
                        <Form.Label>
                          <strong>Owner / IEP</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Owner / IEP Name"
                          name="IEPfield"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="IEPaddressField">
                        <Form.Label>
                          <strong>Owner Address</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Owner / IEP Address"
                          name="IEPaddressField"
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group controlId="unitNumber">
                        <Form.Label>
                          <strong>Unit Number</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Unit Number"
                          name="unitNumber"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group controlId="license">
                        <Form.Label>
                          <strong>License</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter License"
                          name="license"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <Form.Group controlId="licenseState">
                        <Form.Label>
                          <strong>State</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter State"
                          name="licenseState"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group controlId="licenseExp">
                        <Form.Label>
                          <strong>License Expiration Date</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter License Expiration Date"
                          name="licenseExp"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col sm={6}>
                      <Form.Group controlId="unitType">
                        <Form.Label>
                          <strong>Unit Type / Configuration</strong>
                        </Form.Label>
                        <Form.Control
                          as="select"
                          placeholder="Select Configuration Below"
                          name="unitType"
                          required
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        >
                          <option />
                          <option>20' GEN</option>
                          <option>20' SLD</option>
                          <option>20' STD</option>
                          <option>20' TRI GEN</option>
                          <option>20' TRI SLD</option>
                          <option>20' TRI STD</option>
                          <option>40' EX5</option>
                          <option>40' EX8</option>
                          <option>40' GEN</option>
                          <option>40' SLD</option>
                          <option>40' STD</option>
                          <option>40' TRI EX5</option>
                          <option>40' TRI EX8</option>
                          <option>40' TRI GEN</option>
                          <option>40' TRI SLD</option>
                          <option>40' TRI STD</option>
                          <option>45' GEN</option>
                          <option>45' STD</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group controlId="serialNumber">
                        <Form.Label>
                          <strong>Serial Number / VIN</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Serial Number / VIN"
                          name="serialNumber"
                          onChange={this.handleInputChange}
                          value={this.state.query}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col />
                  </Form.Row>

                  <Form.Row>
                   
                    <Card.Header className="border-bottom-0 bg-secondary text-white">
                      <h4>
                        <strong>Component Checklist</strong>
                      </h4>
                    </Card.Header>
                  </Form.Row>
                  <br></br>
                  <Container className="checkList">
                  <Form.Row>
                    <Col sm={6}>
                      <h5>BRAKE</h5>
                        <ul>
                          <li>Service Brakes - No absence of Braking action</li>
                          <li>Inspect for Craked, Broken, Missing, Loose, Deformed, Brake Components</li>
                          <li>Inspect Brake Drums for external cracking or missing pieces</li>
                          <li>Check and Adjust travel on Brake Chamber - Maximum Travel = 2" Measure Travel - <strong>Record</strong></li>
                          <li>Measure Brake Lining Thickness - Minimum Thickness - 1/4" Measure Thickness at Center</li>
                          <li>Lining firmly attached to the shoe, not saturated with oil or grease</li>
                        </ul>

                    </Col>
                    <Col className="checkbox" sm={2}>
                      <h5>Yes</h5>
                      <Switch
                      checked={checked}
                      onChange={checked => this.setState({ checked })}
                      offColor="red"
                      />
                      <h5>No</h5>
                    </Col>

                  </Form.Row>
                    </Container>

                  <div className="d-flex justify-content-end">
                    <Button
                      varient="danger"
                      type="submit"
                      size="lg"
                      className="shadow"
                      >
                      Submit
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default InspectionPage;
