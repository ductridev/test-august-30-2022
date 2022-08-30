import React from "react";
import { Button } from "@mui/material";

class CustomButton extends React.Component {
    render() {
        return (
            <>
                {this.props.disabled
                    ? <Button variant={this.props.variant} style={this.props.style} disabled>{this.props.label}</Button>
                    : <Button onClick={this.props.onClick} variant={this.props.variant} style={this.props.style}>{this.props.label}</Button>
                }
            </>
        )
    }
}
export default CustomButton;