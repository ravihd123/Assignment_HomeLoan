import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import { history } from 'react-router';
import { browserHistory } from 'react-router'

export class Demographics extends React.Component {
    moveNext() {
        browserHistory.push('/summary')
        window.location.reload();

        // call  API to save data 
    }
    render() {
        return (
            <>
                <h3>
                    These are Demographics details
                </h3>
                <Button className="buttoncls" onClick={this.moveNext} variant="primary" type="submit" >Continue</Button>
            </>

        );
    }
}
export default Demographics
