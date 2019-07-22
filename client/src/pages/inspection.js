import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Switch from 'react-ios-switch';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import API from '../utils/API';
// import Header from '../components/Header/Header';
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
// import ChassisInspection from "../components/ChassisInspection/ChassisInspection";

class InspectionPage extends Component {
  constructor(props) {
    super(props);

    this.handleHeaderInputChange = this.handleHeaderInputChange.bind(this);

    this.state = {
      pageTag: 'Chassis Inspection Form',
      IEPname: '',
      IEPaddressField: '',
      chassis: {
        unitNumber: '',
        license: '',
        licensestate: '',
        licenseExp: '',
        unitType: '',
        serialNumber: ''
      },
      inspection: {
        brakeComment: '',
        airSysComment: '',
        suspensionComment: '',
        couplingComment: '',
        electricalComment: '',
        frameComment: '',
        wheelsComment: '',
        lubricationComment: '',
        documentationComment: '',
        tiresComment: '',
        brakesCheckGood: true,
        airSysCheckGood: true,
        suspensionCheckGood: true,
        couplingCheckGood: true,
        electricalCheckGood: true,
        frameCheckGood: true,
        wheelsCheckGood: true,
        lubricationCheckGood: true,
        documentationCheckGood: true,
        tiresCheckGood: true
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

  handleInspectionInputChange = event => {
    const { inspection } = { ...this.state };
    const currentState = inspection;
    const { name, value } = event.target;
    currentState[name] = value;
    this.setState({ inspection: currentState });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveForm(this.state);
    this.setState({
      IEPname: '',
      IEPaddressField: '',
      chassis: {
        unitNumber: '',
        license: '',
        licensestate: '',
        licenseExp: '',
        unitType: '',
        serialNumber: ''
      },
      inspection: {
        brakeComment: '',
        airSysComment: '',
        suspensionComment: '',
        couplingComment: '',
        electricalComment: '',
        frameComment: '',
        wheelsComment: '',
        lubricationComment: '',
        documentationComment: '',
        tiresComment: '',
        brakesCheckGood: true,
        airSysCheckGood: true,
        suspensionCheckGood: true,
        couplingCheckGood: true,
        electricalCheckGood: true,
        frameCheckGood: true,
        wheelsCheckGood: true,
        lubricationCheckGood: true,
        documentationCheckGood: true,
        tiresCheckGood: true
      }
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>{/* <Header pageTag={this.state.pageTag} /> */}</Col>
          <Col sm={12}>
            <Card className='mt-4 shadow'>
              <Card.Header className='border-bottom-0 bg-secondary text-white'>
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
                      <Form.Group>
                        <Form.Label>
                          <strong>Owner / IEP</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Owner / IEP Name'
                          name='IEPname'
                          required
                          onChange={this.handleHeaderInputChange}
                          value={this.state.IEPname}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Owner Address</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Owner / IEP Address'
                          name='IEPaddressField'
                          onChange={this.handleHeaderInputChange}
                          value={this.state.IEPaddressField}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Unit Number</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Unit Number'
                          name='unitNumber'
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.unitNumber}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group>
                        <Form.Label>
                          <strong>License</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter License'
                          name='license'
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.license}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <Form.Group>
                        <Form.Label>
                          <strong>State</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter State'
                          name='licensestate'
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.licensestate}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>
                          <strong>License Expiration Date</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter License Expiration Date'
                          name='licenseExp'
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.licenseExp}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Unit Type / Configuration</strong>
                        </Form.Label>
                        <Form.Control
                          as='select'
                          placeholder='Select Configuration Below'
                          name='unitType'
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
                      <Form.Group>
                        <Form.Label>
                          <strong>Serial Number / VIN</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Serial Number / VIN'
                          name='serialNumber'
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.serialNumber}
                        />
                        <Form.Control.Feedback type='invalid'>
                          Please provide a valid information.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Row>

                  <Form.Row>
                    <Col />
                  </Form.Row>

                  <Form.Row>
                    <Card.Header className='border-bottom-0 bg-secondary text-white'>
                      <h4>
                        <strong>Component Checklist</strong>
                      </h4>
                    </Card.Header>
                  </Form.Row>
                  <br />
                  <Container className='checkList' id='brakes'>
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
                            <h4>BRAKE</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
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
                                Maximum Travel = 2" Measure Travel -{' '}
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
                      <Col className='checklist' sm={2} id='brakeCheck'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.brakesCheckGood}
                          onChange={checked => {
                            this.setState({
                              inspection: {
                                brakesCheckGood: checked
                              }
                            });
                          }}
                          name='brakesChecked'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.brakesCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='brakeComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.brakeComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='airSys'>
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
                            <h4>AIR SYSTEMS / LINES / HOSES</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
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
                      <Col className='checklist' sm={2} id='airsysCheck'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.airSysCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { airSysCheckGood: checked }
                            })
                          }
                          name='airSysChecked'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.airSysCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='airSysComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.airSysComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='suspension'>
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
                            <h4>SUSPENSION / AXLES</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Inspect Ubolts; spring hangers; spring
                                assemblies; leaves; torque radius or tacking
                                components, axles or other axle positioning
                                parts.
                              </li>
                              <li>
                                No cracked, broken, loose or missing parts.
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className='checklist' sm={2} id='suspensionSysCheck'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.suspensionCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { suspensionCheckGood: checked }
                            })
                          }
                          name='suspensionSysCheck'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.suspensionCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='suspensionComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.suspensionComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='coupling'>
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
                            <h4>COUPLING / SECUREMENT DEVICES</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Inspect Fifth wheel Kingpin, upper coupler
                                plate, slider, stops and locks, pintie hood,
                                locking pins, twist locks and safety latches
                              </li>
                              <li>
                                frame member providing support/attachment to
                                pintle hood; fasteners;
                              </li>
                              <li>
                                No broken or cracked components . No cracked
                                welds. No excessive wear or chipping of kingpin
                                lip
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className='checklist' sm={2} id='couplingCheckGood'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.couplingCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { couplingCheckGood: checked }
                            })
                          }
                          name='couplingCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.couplingCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='couplingComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.couplingComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='electrical'>
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
                            <h4>ELECTRCIAL / LIGHTING/ CONSPICUITY DEVICES</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Inspect seven way, wiring harness, lighting
                                devices and reflectors.
                              </li>
                              <li>
                                No broke, inoperative missing or lose Parts.
                                Ensure proper Conspicuity installation.
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col
                        className='checklist'
                        sm={2}
                        id='electricalCheckGood'
                      >
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.electricalCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { electricalCheckGood: checked }
                            })
                          }
                          name='electricalCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.electricalCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='electricalComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.electricalComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='frames'>
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
                            <h4>FRAMES / SUBFRAME / SLIDER ASSY.</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Inspec t main rails, bolsters, crossmembers, ICC
                                Bumper, Light boxes, mudflap hangers.
                              </li>
                              <li>
                                No cracked welds; No broken, missing loose,
                                sagging parts, no parts bent to affect mating of
                                container to chassis
                              </li>
                              <li>
                                Frame members, adjustable axles assemb lies
                                (sliding subframes) with locking pins, fasteners
                                attaching any components, all landing gear
                                compone nts, mud flaps
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className='checklist' sm={2} id='frameCheckGood'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.frameCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { frameCheckGood: checked }
                            })
                          }
                          name='frameCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.frameCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rinspection
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='frameComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.frameComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='wheels'>
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
                            <h4>WHEELS / RIMS</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Inspect all wheels, rims, spacers and fasteners,
                                No missing parts (clamps, nuts, studs, etc.),
                              </li>
                              <li>
                                No bent, broken, cracked, improperly seated
                                sprung or mismatched parts. No elongated bolt
                                holes or st ripped parts
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className='checklist' sm={2} id='wheelsCheckGood'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.wheelsCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { wheelsCheckGood: checked }
                            })
                          }
                          name='wheelsCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.wheelsCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='wheelsComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.wheelsComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='lubrication'>
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
                            <h4>LUBRICATION</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Lube all fittings on landing gears, gear boxes,
                                slack adjusters, brake cams, twist locks,
                                pushpins, slider mechanisms and sub-frame, add
                                oil to wheel hubs (if equipped with oil bath
                                bearings)
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col
                        className='checklist'
                        sm={2}
                        id='lubricationCheckGood'
                      >
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.lubricationCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { lubricationCheckGood: checked }
                            })
                          }
                          name='lubricationCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.lubricationCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='lubricationComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.lubricationComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <Container className='checkList' id='documentation'>
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
                            <h4>DOCUMENTATION / DECALS</h4>
                            <Badge pill variant='secondary'>
                              click for details
                            </Badge>
                          </AccordionToggle>
                          <AccordionCollapse eventKey='0'>
                            <ul>
                              <li>
                                Ensure license plate is current, and that
                                license plate, registration and chassis are
                                properly matched.
                              </li>
                              <li>
                                Ensure that current registration and copy of
                                most current FMSCA inspection is in document
                                holder.
                              </li>
                              <li>
                                Update decal on inspection plate and any
                                inspection markings on unit. Ensure unit number
                                is clearly marked and are correct. Ensure that
                                mud flaps are int act and secured to chassis.
                              </li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col
                        className='checklist'
                        sm={2}
                        id='documentationCheckGood'
                      >
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.documentationCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { documentationCheckGood: checked }
                            })
                          }
                          name='documentationCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.documentationCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='documentationComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.documentationComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
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
                                Inspect all tires for noticeable leaks, proper
                                mating, separations, cuts to ply or fabric;
                              </li>
                              <li>
                                No spot on tire with tread depth 2/32" or below
                                when measured in major tread groove
                              </li>
                              <li>Air tires to recommen d air pressure.</li>
                            </ul>
                          </AccordionCollapse>
                        </Accordion>
                      </Col>
                      <Col className='checklist' sm={2} id='tiresCheckGood'>
                        <sub>Pass/Fail</sub>
                        <Switch
                          checked={this.state.inspection.tiresCheckGood}
                          onChange={checked =>
                            this.setState({
                              inspection: { tiresCheckGood: checked }
                            })
                          }
                          name='tiresCheckGood'
                          offColor='red'
                        />
                      </Col>
                      {!this.state.inspection.tiresCheckGood ? (
                        <Col
                          className='checklistComment'
                          sm={4}
                          id='commentBox'
                        >
                          <Form.Group>
                            <Form.Control
                              as='textarea'
                              rows='3'
                              type='text'
                              placeholder='Enter Failure Detail'
                              name='tiresComment'
                              onChange={this.handleInspectionInputChange}
                              value={this.state.inspection.tiresComment}
                            />
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <div className='d-flex justify-content-end'>
                    <Button
                      varient='danger'
                      type='submit'
                      size='lg'
                      className='shadow'
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
