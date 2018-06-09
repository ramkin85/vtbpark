
import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from "@material-ui/core/Divider/Divider";
import MainMenu from "../MainMenu/MainMenu";


const drawerWidth = 240;
const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
        docked:{
            position:'static'
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    }
});



class MainDrawer extends React.Component {

    render() {
        const { classes, onDrawerToggle,drawerOpen} = this.props;

        return (

            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={onDrawerToggle}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider/>
                <MainMenu/>
            </Drawer>
        );
    }
}

export default withStyles(styles)(MainDrawer);