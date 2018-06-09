import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const Employees = props => (

    <div>
    </div>
);


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Employees)