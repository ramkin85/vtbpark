import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AutomobileCard from "../../components/AutomobileCard/AutomobileCard";

const Automobile = props =>{
    const {match} = props;
    return (
        <div>
            <AutomobileCard
                vin={match.params.VIN}
            ></AutomobileCard>
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