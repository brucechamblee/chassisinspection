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
import AccordionToggle from 'react-bootstrap/AccordionToggle';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';
import axios from 'axios';

class InspectionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      selectedFiles: null,
      loading: false,
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
      },
      brakePic: '',
      airSysPic: '',
      suspensionPic: '',
      couplingPic: '',
      electricalPic: '',
      framePic: '',
      wheelPic: '',
      lubricationPic: '',
      documentationPic: '',
      tiresPic: ''
    };
  }

  handleHeaderInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value.toUpperCase()
    });
  };

  handleChassisInputChange = event => {
    const { chassis } = { ...this.state };
    const currentState = chassis;
    const { name, value } = event.target;
    currentState[name] = value.toUpperCase();
    this.setState({ chassis: currentState });
  };

  handleInspectionInputChange = event => {
    const { inspection } = { ...this.state };
    const currentState = inspection;
    const { name, value } = event.target;
    currentState[name] = value;
    this.setState({ inspection: currentState });
  };

  singleFileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  singleFileUploadHandler = (event, stateItem) => {
    event.preventDefault();
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append(
        'chassisImage',
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      axios
        .post('/upload', data, {
          headers: {
            accept: 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`
          }
        })
        .then(response => {
          if (200 === response.status) {
            // If file size is larger than expected.
            if (response.data.error) {
              if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                this.ocShowAlert('Max size: 2MB', 'red');
              } else {
                console.log(response.data);
                // If not the given file type
                this.ocShowAlert(response.data.error, 'red');
              }
            } else {
              // Success
              let fileName = response.data;
              console.log('fileName', fileName);
              this.setState({
                [stateItem]: fileName.location
              });
              this.ocShowAlert('File Uploaded', '#3089cf');
            }
          }
        })
        .catch(error => {
          // If another error
          this.ocShowAlert(error, 'red');
        });
    } else {
      // if file not selected throw error
      this.ocShowAlert('Please upload file', 'red');
    }
  };

  // ShowAlert Function
  ocShowAlert = (message, background = '#3089cf') => {
    let alertContainer = document.querySelector('#oc-alert-container'),
      alertEl = document.createElement('div'),
      textNode = document.createTextNode(message);
    alertEl.setAttribute('class', 'oc-alert-pop-up');
    // $(alertEl).css('background', background);
    alertEl.appendChild(textNode);
    alertContainer.appendChild(alertEl);
    setTimeout(function() {
      // $(alertEl).fadeOut('slow');
      // $(alertEl).remove();
    }, 3000);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.saveForm(this.state).then(() => {
      this.setState({
        selectedFile: null,
        selectedFiles: null,
        loading: false,
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
        },
        brakePic: '',
        airSysPic: '',
        suspensionPic: '',
        couplingPic: '',
        electricalPic: '',
        framePic: '',
        wheelPic: '',
        lubricationPic: '',
        documentationPic: '',
        tiresPic: ''
      });
    });
  };

  render() {
    const { loading } = this.state.loading;
    return (
      <Container>
        <div id='oc-alert-container' />
        <Row>
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
                <Form
                  onSubmit={e => this.handleSubmit(e)}
                  disabled={loading}
                  encType='multipart/form-data'
                >
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
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>
                          <strong>Owner Address</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter Owner/IEP Address including City, State and Zip'
                          required
                          name='IEPaddressField'
                          onChange={this.handleHeaderInputChange}
                          value={this.state.IEPaddressField}
                        />
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
                          required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.unitNumber}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group>
                        <Form.Label>
                          <strong>License Plate</strong>
                        </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Enter License'
                          name='license'
                          required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.license}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={2}>
                      <Form.Group>
                        <Form.Label>
                          <strong>State</strong>
                        </Form.Label>
                        <Form.Control
                          as='select'
                          placeholder='Enter State'
                          name='licensestate'
                          // required
                          onChange={this.handleChassisInputChange}
                          value={this.state.chassis.licensestate}
                        >
                          <option />
                          <option>AL</option>
                          <option>AK</option>
                          <option>AZ</option>
                          <option>AR</option>
                          <option>CA</option>
                          <option>CO</option>
                          <option>CT</option>
                          <option>DE</option>
                          <option>FL</option>
                          <option>GA</option>
                          <option>HI</option>
                          <option>ID</option>
                          <option>IL</option>
                          <option>IN</option>
                          <option>IA</option>
                          <option>KS</option>
                          <option>KY</option>
                          <option>LA</option>
                          <option>ME</option>
                          <option>MD</option>
                          <option>MA</option>
                          <option>MI</option>
                          <option>MN</option>
                          <option>MS</option>
                          <option>MO</option>
                          <option>MT</option>
                          <option>NE</option>
                          <option>NV</option>
                          <option>NH</option>
                          <option>NJ</option>
                          <option>NM</option>
                          <option>NY</option>
                          <option>NC</option>
                          <option>ND</option>
                          <option>OH</option>
                          <option>OK</option>
                          <option>OR</option>
                          <option>PA</option>
                          <option>RI</option>
                          <option>SC</option>
                          <option>SD</option>
                          <option>TN</option>
                          <option>TX</option>
                          <option>UT</option>
                          <option>VT</option>
                          <option>VA</option>
                          <option>WA</option>
                          <option>WV</option>
                          <option>WI</option>
                          <option>WY</option>
                        </Form.Control>
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
                          value={this.state.chassis.licenseExp}
                        />
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
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.brakesCheckGood = checked;
                            this.setState(stateSnapShot);
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
                            <Form.Control
                              type='file'
                              name='brakePic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(event, 'brakePic')
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.airSysCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='airSysPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(event, 'airSysPic')
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.suspensionCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='suspensionPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(
                                  event,
                                  'suspensionPic'
                                )
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.couplingCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='couplingPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(
                                  event,
                                  'couplingPic'
                                )
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.electricalCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='electricalPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(
                                  event,
                                  'electricalPic'
                                )
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.frameCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='framePic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(event, 'framePic')
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.wheelsCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='wheelPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(event, 'wheelPic')
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.lubricationCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='lubricationPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(
                                  event,
                                  'lubricationPic'
                                )
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.documentationCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='documentationPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(
                                  event,
                                  'documentationPic'
                                )
                              }
                            >
                              Upload
                            </button>
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
                          onChange={checked => {
                            const stateSnapShot = this.state.inspection;
                            stateSnapShot.tiresCheckGood = checked;
                            this.setState(stateSnapShot);
                          }}
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
                            <Form.Control
                              type='file'
                              name='tiresPic'
                              onChange={this.singleFileChangedHandler}
                            />
                            <button
                              className='btn btn-info'
                              onClick={event =>
                                this.singleFileUploadHandler(event, 'tiresPic')
                              }
                            >
                              Upload
                            </button>
                          </Form.Group>
                        </Col>
                      ) : (
                        ''
                      )}
                    </Form.Row>
                  </Container>
                  <br />
                  <div className='d-flex justify-content-end'>
                    {loading && <i className='fa fa-refresh fa-spin' />}
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
