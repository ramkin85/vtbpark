import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CarGrid from "../../components/CarGrid/CarGrid";

const Cars = props => (

    <div>
        <div>
            <CarGrid/>
        </div>
    </div>
);


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cars)