import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PaperSheet from "../../components/PaperSheet/PaperSheet";

const Employees = props => (

    <PaperSheet>
        Employees TODO
    </PaperSheet>
);


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employees)