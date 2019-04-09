import React, { Component } from 'react'
import Header from '../components/header'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import MeetupSummaryPanel from '../meetups/meetup_summary_panel'
import MeetupDetails from './meetup_detials'
import QuestionsList from './questions_list'
import './style.css'

class Meetup extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row>
                    <Col sm={3}></Col>

                    <Col sm={6} className="middle-panel">
                        {/* <MeetupSummaryPanel /> */}
                        <MeetupDetails />
                        <QuestionsList/>
                    </Col>

                    <Col sm={3}></Col>
                </Row>
            </div>

        );
    }
}

export default Meetup;
