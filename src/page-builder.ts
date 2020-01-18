import {LoginPage} from "./LoginPage";
import {Page} from "./Page";
import {AppointmentSchedulingPage} from "./AppointmentSchedulingPage";

export function createPage(page: Window): Page | null {
    if (isLoginPage(window)) {
        return new LoginPage(page.document);
    }

    if (isAppointmentSchedulingPage(window)) {
        return new AppointmentSchedulingPage(page.document);
    }

    return null;
}

function isLoginPage(page: Window): boolean {
    return isPublicWebsite(page.location) && page.location.pathname === '/auth';
}

function isPublicWebsite(location: Location): boolean {
    return /^(www\.)?trasmontano\.com\.br$/.test(location.hostname);
}

function isInternalSystemPage(location: Location): boolean {
    return location.hostname === 'interno.trasmontano.com.br';
}

function isAppointmentSchedulingPage(page: Window): boolean {
    return isInternalSystemPage(page.location) && page.location.pathname === '/account/associado/AgendamentoConsulta.aspx';
}

