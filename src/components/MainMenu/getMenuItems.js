import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import HelpIcon from '@material-ui/icons/Help';
import UserIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import * as link from "../../constants/links";
import * as roles from "../../constants/roles";

export function getMenuItems(currentRoles = [], changePage) {
    let menuItems = [
        <ListItem key={"cars"} button onClick={() => changePage(link.AUTOMOBILES_LINK)}>
            <ListItemIcon>
                <DriveEtaIcon/>
            </ListItemIcon>
            <ListItemText primary="Автомобили"/>
        </ListItem>
    ];

    if (currentRoles.indexOf(roles.CHIEF) > -1 || currentRoles.indexOf(roles.ADMINISTRATOR) > -1) {
        menuItems = [
            ...menuItems,
            <ListItem key={"employees"} button onClick={() => changePage(link.EMPLOYEES_LINK)}>
                <ListItemIcon>
                    <UserIcon/>
                </ListItemIcon>
                <ListItemText primary="Сотрудники"/>
            </ListItem>,
            <ListItem key={"applications"} button onClick={() => changePage(link.APPLICATIONS_LINK)}>
                <ListItemIcon>
                    <StarIcon/>
                </ListItemIcon>
                <ListItemText primary="Заявки"/>
            </ListItem>
        ];
    }

    if (currentRoles.indexOf(roles.ADMINISTRATOR) > -1) {
        menuItems = [
            ...menuItems,
            <ListItem key={"references"} button onClick={() => changePage(link.REFERENCES_LINK)}>
                <ListItemIcon>
                    <HelpIcon/>
                </ListItemIcon>
                <ListItemText primary="Справочники"/>
            </ListItem>
        ];
    }

    return menuItems;
}