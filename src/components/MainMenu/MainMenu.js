import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';


const styles = theme => ({

});

class MainMenu extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Автомобили" />

                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Заявки" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Сотрудники" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Справка" />
                </ListItem>
            </div>
        );
    }
}

export default withStyles(styles)(MainMenu);