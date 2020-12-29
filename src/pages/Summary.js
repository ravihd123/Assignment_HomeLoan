import React from 'react';

import { Button } from "react-bootstrap";
import { browserHistory } from 'react-router';


export class Summary extends React.Component {

    saveData = () => {

        browserHistory.push('/personldetails')
        window.location.reload();

        // call  API to save data 
        alert('Data Saved')

    }
    render() {
        return (
            <>
                <h3>
                    Here is summary
                </h3>
                <Button className="buttoncls" onClick={this.saveData} variant="primary" type="submit" >Save</Button>
            </>

        );
    }
}
export default Summary