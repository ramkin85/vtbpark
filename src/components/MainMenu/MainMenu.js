import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {push} from "react-router-redux";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import StarIcon from '@material-ui/icons/Star';
import HelpIcon from '@material-ui/icons/Help';
import UserIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';



class MainMenu extends React.Component {

    render() {
        const { changePage } = this.props;

        return (
            <div>
                <ListItem button onClick={() => changePage("/automobiles")}>
                    <ListItemIcon>
                        <DriveEtaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Автомобили" />
                </ListItem>
                <ListItem button onClick={() => changePage("/apps")}>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Заявки" />
                </ListItem>
                <ListItem button  onClick={() => changePage("/employees")}>
                    <ListItemIcon>
                        <UserIcon />
                    </ListItemIcon>
                    <ListItemText primary="Сотрудники" />
                </ListItem>
                <ListItem button  onClick={() => changePage("/about-us")}>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Справка" />
                </ListItem>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page)
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu)

