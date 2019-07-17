import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Switch from "react-ios-switch";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";
import API from "../utils/API";
import Header from "../components/Header/Header";
import AccordionToggle from "react-bootstrap/AccordionToggle";
import AccordionCollapse from "react-bootstrap/AccordionCollapse";
// import ChassisInspection from "../components/ChassisInspection/ChassisInspection";

class InspectionPage extends Component {
  constructor(props) {
    super(props);

    this.handleHeaderInputChange = this.handleHeaderInputChange.bind(this);

    this.state = {
      pageTag: "Chassis Inspection Form",
      IEPname: "",
      IEPaddressField: "",
      chassis: {
        unitNumber: "",
        license: "",
        licensestate: "",
        licenseExp: "",
        unitType: "",
        serialNumber: "",
        brakesGood: true,
        brakeComment: ""
      }
    };
  }

  handleHeaderInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleChassisInputChange = event => {
    const { chassis } = { ...this.state };
    const currentState = chassis;
    const { name, value } = event.target;
    currentState[name] = value;
    this.setState({ chassis: currentState });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      IEPname: "",
      IEPaddressField: "",
      chassis: {
        unitNumber: "",
        license: "",
        licensestate: "",
        licenseExp: "",
        unitType: "",
        serialNumber: "",
        brakesGood: true,
        brakeComment: ""
      }
    });
    API.saveForm(this.state);
  };

  render() {
    const { checked } = this.state;
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
                <Form onSubmit={e => this.handleSubmit(e)}>
                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group controlId="IEPname">
                        <Form.Label>
                          <strong>Owner / IEP</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Owner / IEP Name"
                          name="IEPname"
                          required
                          onChange={this.handleHeaderInputChange}
                          value={this.state.IEPname}
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
                          onChange={this.handleHeaderInputChange}
                          value={this.state.IEPaddressField}
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
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.unitNumber}
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
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.license}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <Form.Group controlId="licensestate">
                        <Form.Label>
                          <strong>State</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter State"
                          name="licensestate"
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.licensestate}
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
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.licenseExp}
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
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.unitType}
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
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.serialNumber}
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
                  <br />
                  <Container className="checkList">
                    <Form.Row>
                      <Col sm={6}>
                        <Accordion defaultActiveKey="0">
                          <AccordionToggle
                            as={Card.Header}
                            eventKey="0"
                            style={{ backgroundColor: "white", border: "none" }}
                          >
                            <h5>
                              BRAKE{" "}
                              <Badge pill variant="secondary">
                                Details
                              </Badge>
                            </h5>
                          </AccordionToggle>
                          <AccordionCollapse eventKey="0">
                            <ul>
                              <li>
                                Service Brakes - No absence of Braking action
                              </li>
                              <li>
                                Inspect for Craked, Broken, Missing, Loose,
                                Deformed, Brake Components
                              </li>
                              <li>
                                Inspect Brake Drums for external cracking or
                                missing pieces
                              </li>
                              <li>
                                Check and Adjust travel on Brake Chamber -
                                Maximum Travel = 2" Measure Travel -{" "}
                                <strong>Record</strong>
                              </li>
                              <li>
                                Measure Brake Lining Thickness - Minimum
                                Thickness - 1/4" Measure Thickness at Center
                              </li>
                              <li>
                                Lining firmly attached to the shoe, not
                                saturated with oil or grease
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className="checklist" sm={1} id="checkboxBrake">
                        <Switch
                          checked={checked}
                          name="brakesGood"
                          onChange={checked => this.setState({ checked })}
                          offColor="red"
                        />
                      </Col>
                      <Col className="checklistComment" sm={5} id="commentBox">
                        <Form.Group controlId="brakeComment">
                          <Form.Control as="textarea" rows="" />
                        </Form.Group>
                      </Col>
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className="checkList">
                    <Form.Row>
                      <Col sm={6}>
                        <Accordion defaultActiveKey="0">
                          <AccordionToggle
                            as={Card.Header}
                            eventKey="0"
                            style={{ backgroundColor: "white", border: "none" }}
                          >
                            <h5>
                              AIR SYSTEMS/LINES/HOSES{" "}
                              <Badge pill variant="secondary">
                                Details
                              </Badge>
                            </h5>
                          </AccordionToggle>
                          <AccordionCollapse eventKey="0">
                            <ul>
                              <li>No Audible air leaks; Drain Air Tanks</li>
                              <li>
                                Inspect Brake hoses, tubing, air lines,
                                couplings, fittings , glad-hands and glad hand
                                seals - No kinks, or Blockages,nor bulged or
                                swollen air lines. No worn, frayed, loose or
                                rubbing hoses or lines. No hoses in contact with
                                moving parts.
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className="checklist" sm={1} id="checkboxAirSys">
                        <Switch
                          checked={checked}
                          name="airSysGood"
                          onChange={checked => this.setState({ checked })}
                          offColor="red"
                        />
                      </Col>
                      <Col className="checklistComment" sm={5} id="commentBox">
                        <Form.Group controlId="airSysComment">
                          <Form.Control as="textarea" rows="" />
                        </Form.Group>
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
