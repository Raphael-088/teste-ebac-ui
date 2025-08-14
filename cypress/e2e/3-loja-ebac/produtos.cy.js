/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.post-2622 > .product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
           


    });
});