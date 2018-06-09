import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LoginForm from "../../forms/LoginForm/LoginForm";



function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    dialogIcon:{
        fontSize: 26,
        paddingRight: 10,
        float: 'left'
    }
});

class LoginDialog extends React.Component {

    render() {
        const {onHideLogin, classes, ...other } = this.props;

        return (
            <Dialog
                maxWidth='xs'
                onClose={onHideLogin}
                {...other}
                TransitionComponent={Transition}
            >
                <DialogTitle><AccountCircle className={classes.dialogIcon} />Login Form</DialogTitle>
                <LoginForm onClose={onHideLogin}/>
            </Dialog>
        );
    }
}

export default withStyles(styles)(LoginDialog);

