import React from "react";
import { Stack } from "@mui/system";
import CustomButton from "../Button";

class ButtonStack extends React.Component {
    checkAll(){
        this.props.checkAll();
    }

    UnCheckAll(){
        this.props.unCheckAll();
    }

    render() {
        return (
            <Stack spacing={3} direction="row">
                <CustomButton onClick={()=>{this.checkAll()}} label={'Check All'} color={'white'} backgroundColor={'#0777aa'} border={'2px'} variant={'contained'}/>
                <CustomButton onClick={()=>{this.UnCheckAll()}} label={'Un-Check All'} color={'white'} backgroundColor={'#0777aa'} border={'2px'} variant={'contained'}/>
            </Stack>
        )
    }
}

export default ButtonStack