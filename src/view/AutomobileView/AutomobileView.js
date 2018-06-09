import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../actions";

import PaperSheet from "../../components/PaperSheet/PaperSheet";



class AutomobileView extends Component {

    componentDidMount() {
        const {actions} = this.props;
        debugger;
        actions.requestGetAutomobile(this.props.vin);
    }

    render() {
        const {vin} = this.props;
        return (
            <PaperSheet>
                <div>{vin}</div>
            </PaperSheet>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {"actions": bindActionCreators(appActions.actions, dispatch)};
}

export default connect(
    null,
    mapDispatchToProps
)(AutomobileView)

