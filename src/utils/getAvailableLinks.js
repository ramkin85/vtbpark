import * as _links from "../constants/links";
import * as roles from "../constants/roles";

export function getAvailableLinks(currentRoles = []) {
    let links = [_links.AUTOMOBILES_LINK];

    if (currentRoles.indexOf(roles.CHIEF) > -1 || currentRoles.indexOf(roles.ADMINISTRATOR) > -1) {
        links =
            [
                ...links,
                _links.EMPLOYEES_LINK,
                _links.APPLICATIONS_LINK
            ];
    }

    if (currentRoles.indexOf(roles.ADMINISTRATOR) > -1) {
        links =
            [
                ...links,
                _links.ABOUT_LINK
            ];
    }
    return links;
}