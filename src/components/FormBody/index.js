import React from "react";
import CustomCheckbox from "../CustomCheckbox";

class FormBody extends React.Component {
    render() {
        return (
            <div>
                <CustomCheckbox checked={this.props.ecoChecked} onChange={(_ecoChecked) => { this.props.ecoCheck(_ecoChecked) }} label={'Sanden Freight - ECO'} type={'plan'} value={this.props.ecoValue} changePlanValue={(value)=>{this.props.setEcoValue(value)}}/>
                <CustomCheckbox checked={this.props.extraChecked} onChange={(_extraChecked) => { this.props.extraCheck(_extraChecked) }} label={'Sanden Plumbing Extra'} type={'plan'} value={this.props.extraValue} changePlanValue={(value)=>{this.props.setExtraValue(value)}}/>
                <CustomCheckbox checked={this.props.travelChecked} onChange={(_travelChecked) => { this.props.travelCheck(_travelChecked) }} label={'Travel'} type={'shipping'} setTravelValue={(value)=>{this.props.setTravelValue(value)}}/>
            </div>
        )
    }
}

export default FormBody;