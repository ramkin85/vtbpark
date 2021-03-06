import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AutomobileView from "../../view/AutomobileView/AutomobileView";

const Automobile = props =>{
    const {match} = props;
    return (
        <div>
            <AutomobileView
                vin={match.params.VIN}
            ></AutomobileView>
        </div>
    )
};


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Automobile)