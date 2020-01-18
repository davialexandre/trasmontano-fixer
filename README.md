# Trasmontano Fixer
Esssa é uma simples extensão para o Firefox, DESENVOLVIDA PARA USO PESSOAL, que corrige algumas falhas de usabilidade no site da Trasmontano (https://trasmontano.com.br).

Se você também é cliente da Trasmontano, essa extensão pode ser útil, mas utilize por sua própria conta e risco.

## Problemas corrigidos

### Limite do campo de senha no formulário de login
O sistema permite o cadastro de senhas grandes, mas o formulário de login limita a senha em 20 caracteres, impossibilitando o login de usuários com senhas maiores do que isso. A extensão remove esse limite.

### Impossibilidade de alterar campos de pesquisa no Agendamento de Consulta
Ao procurar horários disponíveis para consulta é necessário selecionar uma série de campos. Após enviar a pesquisa, todos os campos são desabilitados impedindo qualquer alteração. Por esse motivo, a única maneira de alterar algo na pesquisa é iniciando uma nova consulta e selecionar todos os campos novamente. A extensão automaticamente habilita os campos no momento da pesquisa, assim é possível alterar qualquer que seja necessário.

## Utilização

A extensão pode ser baixada na pagina de [releases](https://github.com/davialexandre/trasmontano-fixer/releases).

## Desenvolvimento

Inicializando o projeto:

1. Clone o repositório
2. Instale as dependências: `npm i`

Enquanto estiver em desenvolvimento, utlize `npm run watch` para atualizar os arquivos automaticamente. Para testar no navegador, utilize `npx web-ext --config=web-ext.config.js run`.

> Antes de testar a extensão, verifique se as variáveis de ambiente `WEB_EXT_API_KEY` e `WEB_EXT_API_SECRET` não estão setadas. No nomento, o comando `web-ext run` falha quando elas estão configuradas.

Ao terminar o desenvolvimento, é hora em empacotar a extensão. Utilizando o comando `npm run package`, um arquivo zip será criado e este pode ser adicionado ao Firefox. Contudo, esse pacote não é assinado e, para que sejá possível instala-lo no seu navegador a opção `xpinstall.signatures.required` deverá ser alterada para `false`.

Caso não queira alterar a configuração do navegador, a única opção é criar um pacote assinado. Para isso, primeiramente, você precisará criar uma conta de densevolvedor na Mozilla. Feito isso, será necessário criar chaves de API [aqui](https://addons.mozilla.org/developers/addon/api/key/). Na sequência, essas chaves devem ser configuradas nas variáveis de ambiente `WEB_EXT_API_KEY` e `WEB_EXT_API_SECRET`. Finalmente, execute o comando `npm run package-sign` e aguarde. Ao final, se tudo ocorrer certo, o pacote será criado em `web-ext-artifacts` e poderá ser instalado no navegador.
