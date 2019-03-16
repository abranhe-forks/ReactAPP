import React, { Component, Fragment } from 'react';
import './GarageInfo.css';
import {Row,Card, CardText, CardBody,
  CardTitle, Col } from 'reactstrap';

class App extends Component 
{
  constructor(props)
  {
    super();
  }
  render() 
  {
    return (
      <Fragment>
        <div className="GarageInfo">
          <Row>
            <Col>
              <Card>
                <CardBody>
                <CardTitle>{this.props.garageName}</CardTitle>
                <CardText>
                    <ul>
                      <li>Student Spots Open: {this.props.spotsAvailableForStudents}</li>
                      <li>Student Parking Spots Taken: {this.props.percentFullStudents}</li>
                      <li>Employee Spots Open: {this.props.spotsAvailableForEmployees}</li>
                      <li>Employee Parking Spots Taken: {this.props.percentFullEmployees}</li>
                  </ul>
                  </CardText>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default App;
