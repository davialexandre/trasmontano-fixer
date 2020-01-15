import {Page} from "./Page";

export class LoginPage implements Page {

    constructor(private document: Document) {}

    fix() {
        this.fixPasswordMaxLength();
    }

    /**
     * O campo de senha do formulário de login tem um limite de 20 caracteres, mas
     * o sistema da trasmontano permite o cadastro de senhas com mais caracteres
     * do que isso.
     *
     * Essa correção altera o valor da propriedade para um número bem alto, de forma
     * a permitir praticamente qualquer tamanho de senha.
     */
    private fixPasswordMaxLength() {
        const passwordField = this.getPasswordField();

        if (passwordField === null) {
            console.debug('Não foi possível encontrar o campo de senha no formulário de login');
            return;
        }

        passwordField.maxLength = 1000;
    }

    private getPasswordField(): HTMLInputElement | null {
        return this.document.querySelector('#form-login > #Senha');
    }
}
