import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../actions";


class AutomobileCard extends Component {

    componentDidMount() {
        const {actions} = this.props;
        debugger;
        actions.requestGetAutomobile();
    }

    render() {
        const {vin} = this.props;
        return (
            <div>{vin}</div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {"actions": bindActionCreators(appActions.actions, dispatch)};
}

export default connect(
    null,
    mapDispatchToProps
)(AutomobileCard)

