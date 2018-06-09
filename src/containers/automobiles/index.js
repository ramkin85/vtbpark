import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AutomobileGrid from "../../components/AutomobileGrid/AutomobileGrid";

const Automobiles = props => (
    <div>
        <AutomobileGrid/>
    </div>
);


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Automobiles)