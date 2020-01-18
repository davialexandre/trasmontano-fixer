import {Page} from "./Page";
import until from "until-promise";

export class AppointmentSchedulingPage implements Page {
    constructor(private document: Document) {
    }

    fix(): void {
        const form: HTMLFormElement | null = this.document.querySelector('form[action="AgendamentoConsulta.aspx"');
        form?.addEventListener('submit', () => {
            this.waitUntilSubmitButtonGetsDisabled().then(() => this.enableAllElementsInForm(form));
        })
    }

    private async waitUntilSubmitButtonGetsDisabled() {
        return until(
            () => this.document.getElementById('ctl00_ContentPlaceHolder1_btnFiltrar'),
            (field: HTMLInputElement) => field.disabled,
            {
                wait: 1000,
                duration: 10000
            }
        );
    }

    private enableAllElementsInForm(form: HTMLFormElement) {
        form.querySelectorAll<HTMLFormElement>('[disabled="disabled"]').forEach(field => {
            field.disabled = false
        });
    }
}
