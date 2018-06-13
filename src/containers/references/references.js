import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PaperSheet from "../../components/PaperSheet/PaperSheet";

const References = props => (

    <PaperSheet>
        References TODO
    </PaperSheet>
);


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(References)