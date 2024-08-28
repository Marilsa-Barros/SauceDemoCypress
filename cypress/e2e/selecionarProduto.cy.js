
describe('Selecionar Produtos', () => {
  // atributos

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
        .should('hav.text', 'Products')     // verifica se o elemento contém Products
     
    cy.get('img[alt="Sauce-Labs-Backpack"]')             
        .click()                            // clica na imagem do produto mochila

     // carregare a pagina de item de inventário
    // apenas para demonstrar como fariamos um Xpath Absoluto
    // verifica se no elemento via Xpath contém o texto Back to products
    cy.xpath('/html/body/div/div/div/div[2]/div[2]/div/button')
        .should('have.text', 'Back to products')

    cy.get('div.inventory_details_name.large_size') // verifica título
        .should('have.text', 'Sauce Labs Backpack')
    
    cy.get('div.inventory_details_price')   // verifica preço
        .should('have.text', '$29.99')

    cy.get('#add-to-cart')
        .click()      // clica no botão Adicionar no Carrinho    

    cy.get('a.shopping_cart_link')
        .should('have.text', '1')   // verica se no carrinho exibe o nº 1

  })

}) // termina describe