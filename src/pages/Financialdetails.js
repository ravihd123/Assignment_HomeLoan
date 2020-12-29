import React from 'react';
import { Button } from "react-bootstrap";
import { browserHistory } from 'react-router'

export class FinancialDetails extends React.Component {
    moveNext() {
        browserHistory.push('/demographics')
        window.location.reload();
    }
    render() {
        return (
            <>
                <h3>
                    These are Financial details
                </h3>
                <Button className="buttoncls" onClick={this.moveNext} variant="primary" type="submit" >Continue</Button>

            </>

        );
    }
}
export default FinancialDetails