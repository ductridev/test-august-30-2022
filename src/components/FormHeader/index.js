import React from 'react';
import ButtonStack from "../ButtonStack";

class FormHeader extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', position: 'relative', lineHeight: '5px' }}>
                <ButtonStack checkAll={()=>{this.props.checkAll()}} unCheckAll={()=>{this.props.unCheckAll()}} />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p style={{ marginLeft: '100px', fontWeight: 'bold' }}> Total: </p>
                    <p style={{ marginLeft: '40px', fontWeight: 'bold' }}>$ {this.props.total}</p>
                </div>
            </div>
        );
    }
}

export default FormHeader