import React from 'react';
import { Button } from "react-bootstrap";
import { browserHistory } from 'react-router';


export class PersonalDetails extends React.Component {
    moveNext() {
        browserHistory.push('/propertydetails')
        window.location.reload();

           // call  API to save data 
    }
    render() {
        return (
            <>
                <h3>
                    These are Personal details
                </h3>
                <Button className="buttoncls" onClick={this.moveNext} variant="primary" type="submit" >Continue</Button>
            </>

        );
    }
}
export default PersonalDetails