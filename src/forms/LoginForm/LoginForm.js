import React from 'react';
import {Field, reduxForm} from 'redux-form'

import {TextField} from 'redux-form-material-ui'
import {Grid, Button, withStyles} from "@material-ui/core"

const styles = theme => ({
    wrapper: {
        padding: '0 20px 20px 20px'
    },
    button: {
        marginLeft: theme.spacing.unit,
    },
});


class Login extends React.Component {

    render() {
        const {classes,onClose, handleSubmit, pristine, submitting} = this.props;

        return (

            <form onSubmit={handleSubmit} className={classes.wrapper}>

               <Grid container spacing={16}>
                    <Grid item xs={12} >
                        <Field name="login"
                               required
                               component={TextField}
                               label="Логин"
                               fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="password"
                            type="password"
                            required
                            component={TextField}
                            label="Пароль"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} align="right">
                        <Button className={classes.button} type="button" onClick={onClose} disabled={submitting}>
                            Закрыть
                        </Button>
                        <Button className={classes.button} variant="contained" type="submit" color="primary" disabled={pristine || submitting}>
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}


export default reduxForm({
    form: 'loginForm'//, // a unique identifier for this form
    //validate,
    //asyncValidate
})(withStyles(styles)(Login))
