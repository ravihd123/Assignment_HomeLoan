import React from 'react';
import { Button, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Input, Grid } from '@material-ui/core';
import { dropdownValues } from "./Property.constant";
import { browserHistory } from 'react-router'



export class PropertyDetails extends React.Component {
    state = {
        propertvalue: '',
        downpayment: '',
        percentage: "",
        purp: '',
        type: '',
        nameError: false,
        valueError: false,
        percantageerror: false,
        purperror: false,
        typeerror: false
    };
    constructor(props) {
        super(props)
        this.propertyValue = this.propertyValue.bind(this);
        this.downpaymentvalue = this.downpaymentvalue.bind(this);
        this.downpaymentPerc = this.downpaymentPerc.bind(this);
        this.purpose = this.purpose.bind(this);
        this.propertytype = this.propertytype.bind(this)
    }


    propertyValue = (e) => {
        this.setState({ propertvalue: e.target.value });
        this.setState({ nameError: false })
    }

    downpaymentvalue = (e) => {
        this.setState({ downpayment: e.target.value });
        this.setState({ valueError: false })
    }

    downpaymentPerc = (e) => {
        this.setState({ percentage: e.target.value });
        this.setState({ percantageerror: false })
    }

    purpose = (e) => {
        this.setState({ purp: e.target.value })
        this.setState({ purperror: false })
    }

    propertytype = (e) => {
        this.setState({ type: e.target.value });
        this.setState({ typeerror: false })

    }
    submit = async () => {
        if ((parseInt(this.state.propertvalue) < parseInt(this.state.downpayment)) || parseInt(this.state.downpayment) < 0) {
            await this.setState({ valueError: true });
        } else if (parseInt(this.state.percentage) < 100 && parseInt(this.state.percentage) >= 0) {
            await this.setState({ valueError: false });
            this.setState({ percantageerror: false })
        } else {
            await this.setState({ valueError: false });
            await this.setState({ percantageerror: true });
        }
        if (this.state.propertvalue.length == 0) {
            await this.setState({ nameError: true })
        }
        if (this.state.downpayment.length == 0) {
            await this.setState({ valueError: true })
        }

        if (this.state.purp.length == 0) {
            await this.setState({ purperror: true })
        }
        if (this.state.type.length == 0) {
            await this.setState({ typeerror: true })
        }


        if (!this.state.nameError && !this.state.percantageerror && !this.state.valueError && !this.state.purperror && !this.state.typeerror) {
            let data = {
                propertyname: this.state.propertvalue,
                downpayment: this.state.downpayment,
                downpaymentPerc: this.state.percentage,
                propuse: this.state.purp,
                type: this.state.type
            }
            browserHistory.push('/financialdetails')
            window.location.reload();

            // call  API to save data 

            console.log(data)
        }

    }

    render() {
        return (
            <>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl >
                                <InputLabel htmlFor="demo-customized-textbox">Property value</InputLabel>
                                <Input type="number" error={this.state.nameError} onChange={this.propertyValue} id="demo-customized-textbox" />
                                {this.state.nameError && <span className='error'>This field required </span>}
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>

                            <FormControl >
                                <InputLabel htmlFor="demo-customized-textbox">Downpayment in $</InputLabel>
                                <Input type="number" error={this.state.valueError} onChange={this.downpaymentvalue} id="demo-customized-textbox" />
                                {this.state.valueError && <span className='error'>should less than property value</span>}
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="demo-customized-textbox">Downpayment in %</InputLabel>
                                <Input type="number" error={this.state.percantageerror} onChange={this.downpaymentPerc} id="demo-customized-textbox" />
                                {this.state.percantageerror && <span className='error'>should less than 100</span>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Purpose</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={this.purpose}
                                    label="Purpose"
                                    error={this.state.purperror}
                                >
                                    <MenuItem value={dropdownValues.purpose}>{dropdownValues.purpose}</MenuItem>

                                </Select>
                                {this.state.purperror && <span className='error'>This field required </span>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Type of property</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Type of property"
                                    error={this.state.typeerror}
                                    onChange={this.propertytype}
                                >
                                    <MenuItem value={dropdownValues.house_single}>{dropdownValues.house_single}</MenuItem>
                                    <MenuItem value={dropdownValues.house_multi}>{dropdownValues.house_multi}</MenuItem>
                                    <MenuItem value={dropdownValues.House_condominium}>{dropdownValues.House_condominium}</MenuItem>
                                </Select>
                                {this.state.typeerror && <span className='error'>This field required </span>}
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>

                <Button className="buttoncls" onClick={this.submit} variant="primary" type="submit" >Continue</Button>

            </>

        );
    }
}
export default PropertyDetails