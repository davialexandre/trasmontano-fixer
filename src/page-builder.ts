import {LoginPage} from "./LoginPage";
import {Page} from "./Page";

export function createPage(page: Window): Page | null {
    if (isLoginPage(window)) {
        return new LoginPage(page.document);
    }

    return null;
}

function isLoginPage(page: Window): boolean {
    return isPublicWebsite(page.location) && page.location.pathname === '/auth';
}

function isPublicWebsite(location: Location): boolean {
    return /^(www\.)?trasmontano\.com\.br$/.test(location.hostname);
}

