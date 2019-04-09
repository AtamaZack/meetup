import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'


class QuestionList extends Component {
    render() {
        return (
            <div>
                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >

                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">Question 1</div>
                            <div>17th March 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Meeting to plan and budget for upcoming bootcamp 17</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">4 Comments</div>
                            <div className="p-2">17 Up votes</div>
                            <div className="p-2">17 Down votes</div>
                        </div>
                    </Col>
                </Row>

                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >
                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">Sprint Planning Meeting</div>
                            <div>4th June 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Team dojo sprint planning meeting</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">3 Comments</div>
                            <div className="p-2">6 Up votes</div>
                            <div className="p-2">0 Down votes</div>                            
                        </div>
                    </Col>
                </Row>

                <Row className="shadow p-3 mb-1 mt-4 bg-white rounded " >
                    <Col xl={10}>
                        <div className="d-flex">
                            <div className="mr-auto text-primary font-weight-bold">D1 Ring Ceremony Planning</div>
                            <div>24th June 2020</div>
                        </div>
                        <div className="d-flex">
                            <div>Cohort 17 D1 graduation planning meeting</div>
                        </div>
                        <div className="d-flex">
                            <div className="p-2">1 Comments</div>
                            <div className="p-2">0 Up votes</div>
                            <div className="p-2">5 Down votes</div>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default QuestionList;