import {LoginPage} from "./LoginPage";
import {Page} from "./Page";

export function createPage(page: Window): Page | null {
    if (isLoginPage(window)) {
        return new LoginPage(page.document);
    }

    return null;
}

function isLoginPage(page: Window): boolean {
    return page.location.hostname === 'trasmontano.com.br' &&
        page.location.pathname === '/auth';
}

