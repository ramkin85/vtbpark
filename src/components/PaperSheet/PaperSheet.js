import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/es/Grid/Grid";

const styles = theme => ({
    paperSheet: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        maxWidth:500
    }),
});

function PaperSheet(props) {
    const { classes, children } = props;
    return (

        <Grid container className={classes.root}>
            <Grid container className={classes.demo} justify="center">
                <Paper className={classes.paperSheet}>
                    {children}
                </Paper>
            </Grid>
        </Grid>


    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);