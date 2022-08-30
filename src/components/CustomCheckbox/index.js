import React from "react";
import { Checkbox, TextField, Typography, Grid } from "@mui/material";
import CustomButton from "../Button";

class CustomCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || 0,
            distance: 0,
            editEnable: false
        }
    }

    distance2val(distance) {
        if (distance - 40 <= 0) {
            this.setState({ value: 0 });
            this.props.setTravelValue(0);
        }
        else if (distance - 40 > 0 && distance - 100 <= 0) {
            this.setState({ value: (1.2 * (2 * (distance - 40))).toFixed(2) });
            this.props.setTravelValue(1.2 * (2 * (distance - 40)));
        }
        else if (distance - 100 > 0) {
            this.setState({ value: (1.2 * (3 * (distance - 100) + 2 * 60)).toFixed(2) });
            this.props.setTravelValue(1.2 * (3 * (distance - 100) + 2 * 60));
        }
    }

    handleEdit() {
        this.setState({ editEnable: !this.state.editEnable });
    }

    render() {
        return (
            <div style={{marginTop: '25px', lineHeight: '10px'}}>
                {this.props.type === 'plan'
                    ?
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Checkbox onChange={(event) => { this.props.onChange(event.target.checked); }} />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography >{this.props.label}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField type={'number'} InputProps={{ inputProps: { min: 0, max: 999999 } }} value={this.state.value} disabled={!this.state.editEnable} onChange={(event) => { if (Number.isNaN(parseFloat(event.target.value))) { event.target.value = 0 }; this.setState({ value: event.target.value }); this.props.changePlanValue(event.target.value) }} />
                        </Grid>
                        <Grid item xs={2}>
                            <CustomButton label={!this.state.editEnable ? 'Edit' : 'Done'} color={'white'} backgroundColor={'#0777aa'} border={'2px'} variant={'contained'} disabled={!this.props.checked} onClick={() => { this.handleEdit() }} />
                        </Grid>
                    </Grid>
                    : null
                }
                {this.props.type === 'shipping'
                    ?
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Checkbox onChange={(event) => { this.props.onChange(event.target.checked) }} />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography >{this.props.label}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField label={''} value={this.state.value} disabled />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField type={'number'} InputProps={{ inputProps: { min: 0, max: 999999 } }} label={'km'} value={this.state.distance} onChange={(event) => { if (Number.isNaN(parseFloat(event.target.value))) { event.target.value = 0 }; this.setState({ distance: event.target.value }); this.distance2val(event.target.value) }} disabled={!this.props.checked} />
                        </Grid>
                    </Grid>
                    : null
                }
            </div>
        );
    }
}

export default CustomCheckbox;