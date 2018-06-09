import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import withStyles from "@material-ui/core/styles/withStyles";
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

import classNames from 'classnames';
import * as appActions from "../../actions";


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
});


class Notificator extends React.Component {

    onClose(){
        const {actions} = this.props;
        actions.hideNotification();
    }



    render() {
        const {notification,classes,className, ...other} = this.props;
        let variant = notification.type || 'info';
        const Icon = variantIcon[variant]||InfoIcon;



        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                // open={this.state.notification.open}
                open={notification.open}
                autoHideDuration={6000}
                onClose={(event)=>{this.onClose(event)}}
            >
                <SnackbarContent
                    className={classNames(classes[variant], className)}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                            {(notification || {}).message}
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={(event)=>{this.onClose(event)}}
                        >
                            <CloseIcon className={classes.icon}/>
                        </IconButton>,
                    ]}
                    {...other}
                />
            </Snackbar>
        )
    }
}

const mapStateToProps = state => ({
    notification: state.notification
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(appActions.actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Notificator))




