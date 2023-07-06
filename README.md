# Olá, bem-vindo ao Reciflex 2

## Sumário

* [🍍 Problemática](#🍍-problemática)
* [📋 Requisistos](#📋-requisistos)
* [👨‍💻 Tecnologias Utilizadas](#👨‍💻-tecnologias-utilizadas)
* [💿 Como Instalar e Usar](#💿-como-instalar-e-usar)

## 🍍 Problemática

A grafica que trabalho imprimia e usava blocos de recibo personalizados que eram preenchidos a punho e que ocasionava os seguintes problemas:

1. Fila de clientes no atendimento que esperavam apenas pelos recibos serem preenchidos pelo operador do caixa e assinados a mão pelo gerente.

2. Custo de tempo ao financeiro pois nesse setor os recibos eram preenchidos, assinados pelo gerente e posteriormente escaneados para serem enviados via e-mail junto das notas fiscais.

3. Custo de mão de obra, ja que nós produziamos os recibos e que muitas vezes acabava virando um stress entre setores por conta da espera da confecção dos blocos.

4. Custo financeiro visto que qualquer erro levava ao descarte da via e reinicio do processo.

## 📋 Requisistos

Requisitos Funcionais|
|:----|
O Sistema deve gerar o numero por extenso automaticamente para evitar erros ortograficos
Deve ter a possibilidade de gerar um arquivo de imagem para enviar via e-mail ou mensageiros
Deve ter a possibilidade de imprimir
Deve adicionar a data de forma facilitada
Deve incluir assinatura automaticamente e se possivel incluir mais de uma
Deve ter a possibilidade de incluir ou não o CNPJ do emissor 

Requisitos NÃO Funcionais|
|:----|
O Sistema deve gerar recibos de forma mais facil e rapida se comparada com preenchimento a punho|
Deve ser otimizado para ser usado de qualquer computador mesmo os mais fracos
Deve ser intuitivo e direto

## 👨‍💻 Tecnologias Utilizadas

🚧 Em Construção 🚧
<!---
Javascript
NodeJS
ReactJS
Material UI
dotenv
react-to-print
html2canvas
JsFromHell
--->


## 💿 Como Instalar e Usar

🚧 Em Construção 🚧
<!---

Para configura-lo com dados da sua empresa e implementa-lo siga  os passos a seguir: 


1. Inserir os Dados da sua empresa:
    - Localize o arquivo `.env-sample` na raiz do projeto;
    - Abra-o com um editor de texto _(pode ser com o bloco de notas do windows)_;
    - Preencha os campos entre aspas com os respectivos dados referentes a sua empresa seguindo a estrutura proposta;

    ```dosini
    REACT_APP_COMPANY_NAME="Nome da Empresa aqui"
    REACT_APP_APP_CNPJ="00.000.000/0000-00"

    REACT_APP_CONTACT_1="(00) 0 0000.0000"
    REACT_APP_CONTACT_2="email@company.com.br ou (00) 0 0000.0000"

    REACT_APP_STREET="Rua da Goiabeira"
    REACT_APP_NUMBER="123"
    REACT_APP_COMPLEMENT="loja 1"
    REACT_APP_DISTRICT="Bairro das Arvores"
    REACT_APP_CITY="Fortaleza"
    REACT_APP_STATE_ACRONYM="CE"

    REACT_APP_SIGNATURE_1_OWNER="Tobey Maguire"
    REACT_APP_SIGNATURE_2_OWNER="Andrew Garfield"
    REACT_APP_SIGNATURE_3_OWNER="Tom Holland"
    REACT_APP_SIGNATURE_4_OWNER="Stan Lee"
    ```
    - Save como um novo arquivo chamado de `.env` na mesma pasta;

    --->