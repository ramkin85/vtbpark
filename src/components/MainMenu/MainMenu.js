import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import * as roles from "../../constants/roles";
import {getMenuItems} from "./getMenuItems";

class MainMenu extends React.Component {

    render() {
        const {changePage, currentUser} = this.props;
        console.log("currentUser", currentUser); // ToDo: Получить роли у текущего узера
        let roles = (currentUser && currentUser.data && currentUser.data.roles) ? currentUser.data.roles : [];
        return (
            getMenuItems(roles, changePage)
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu)

