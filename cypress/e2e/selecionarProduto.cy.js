import 'cypress-xpath'
describe('Selecionar Produtos', () => {
    // atributos

    const massa = require('../fixtures/massa')  // importa a massa

    beforeEach(() => {
        cy.visit('/')           // abre o browser na url informada em cypress.config.js
    }) //termina before

    it('Selecionar Sauce Labs Backpack', () => {

        cy.title()              // verifica se o título da página é Swag Labs
            .should('eq', 'Swag Labs')

        // realizar o login
        cy.get('input[data-test="username"]')
            .type('standard_user')             // preenche o usuário

        cy.get('#password')
            .type('secret_sauce')               // preenche a senha

        cy.get('input[name="login-button"]')
            .click()                            // clica no bot~~ao login

        cy.get('span.title')
            .should('have.text', 'Products')     // verifica se o elemento contém Products

        cy.get('img[alt="Sauce Labs Backpack"]')
            .click()                            // clica na imagem do produto mochila

        // carregare a pagina de item de inventário
        // apenas para demonstrar como fariamos um Xpath Absoluto
        // verifica se no elemento via Xpath contém o texto Back to products
        cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
            .should('have.text', 'Back to products')

        cy.get('div.inventory_details_name.large_size') // verifica título
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('div.inventory_details_price')   // verifica preço
            .should('have.text', '$29.99')

        cy.get('#add-to-cart')
            .click()      // clica no botão Adicionar no Carrinho    

        cy.get('a.shopping_cart_link')
            .should('have.text', '1')   // verica se no carrinho exibe o nº 1
            .click()                    // Clica para ir para o carrinho

        cy.get('span.title')
            .should('have.text', 'Your Cart')        // título da sessão

        cy.get('div.inventory_item_name')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('div.inventory_item_price')
            .should('have.text', '$29.99')

        cy.get('div.cart_quantity')
            .should('have.text', '1')           // verifica a quantidade

    }) // termina o it

    massa.array.forEach(({ username, productName, productPrice }) => {
        it(`Selecionar ${productName} - Usuario: ${username}`, () => {

            cy.title()              // verifica se o título da página é Swag Labs
                .should('eq', 'Swag Labs')

            // realizar o login
            cy.get('input[data-test="username"]')
                .type(username)             // preenche o usuário

            cy.get('#password')
                .type('secret_sauce')               // preenche a senha

            cy.get('input[name="login-button"]')
                .click()                            // clica no bot~~ao login

            cy.get('span.title')
                .should('have.text', 'Products')     // verifica se o elemento contém Products

            cy.get(`img[alt="${productName}"]`)
                .click()                            // clica na imagem do produto mochila

            // carregare a pagina de item de inventário
            // apenas para demonstrar como fariamos um Xpath Absoluto
            // verifica se no elemento via Xpath contém o texto Back to products
            cy.xpath('/html/body/div/div/div/div[1]/div[2]/div/button')
                .should('have.text', 'Back to products')

            cy.get('div.inventory_details_name.large_size') // verifica título
                .should('have.text', productName)

            cy.get('div.inventory_details_price')   // verifica preço
                .should('have.text', productPrice)

            cy.get('#add-to-cart')
                .click()      // clica no botão Adicionar no Carrinho    

            cy.get('a.shopping_cart_link')
                .should('have.text', '1')   // verica se no carrinho exibe o nº 1
                .click()                    // Clica para ir para o carrinho

            cy.get('span.title')
                .should('have.text', 'Your Cart')        // título da sessão

            cy.get('div.inventory_item_name')
                .should('have.text', productName)

            cy.get('div.inventory_item_price')
                .should('have.text', productPrice)

            cy.get('div.cart_quantity')
                .should('have.text', '1')           // verifica a quantidade

        }) // termina o it
    }) // termina massa forEatch

/*
    afterEach(() => {
        cy.get('#remove-sauce-labs-backpack')   // remove o produto do carrinho
            .click()

        cy.get('#react-burger-menu-btn')
            .click()                            // clica no icone 3 traços

        cy.get('#logout_sidebar_link', { timeout: 10000 })
            .should('be.visible')   // esperar até que o elemento seja visivel
            //  .should('not.be.disabled') // esperar até que ele seja clicável
            .click()                            // clica na opção logout

        cy.get('#login-button')
            .should('be.visible')   // verificar se está novamente na tela de login

    }) // termina o afterEach 
*/

}) // termina describe